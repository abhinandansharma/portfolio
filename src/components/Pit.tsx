import React, { useEffect, useRef } from 'react';

interface Body { x: number; y: number; vx: number; vy: number; r: number; label: string; kind: 0 | 1 | 2; }
interface Colors { bg: string; fg: string; red: string; onRed: string; line: string; }

const G = 2400;
const REST = 0.34;

/**
 * A 2D physics pit: every skill is a ball with a cartoon outline. Custom integrator with
 * circle collisions, cursor repulsion, dragging and throwing. Sleeps when nothing moves.
 */
export default function Pit({ items, colors }: { items: string[]; colors: Colors }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let W = el.clientWidth;
    let H = el.clientHeight;
    const size = () => {
      W = el.clientWidth;
      H = el.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.floor(W * dpr);
      cv.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    const scale = Math.max(0.8, Math.min(1.25, W / 1100));
    const radius = (label: string) => Math.max(30, 16 + label.length * 5) * scale;
    const kindOf = (i: number) => (i % 4 === 0 ? 1 : i % 3 === 0 ? 2 : 0) as 0 | 1 | 2;
    const bodies: Body[] = items.map((label, i) => ({
      x: 60 + Math.random() * Math.max(1, W - 120),
      y: -60 - i * 50 - Math.random() * 40,
      vx: (Math.random() - 0.5) * 160,
      vy: 0,
      r: radius(label),
      label,
      kind: kindOf(i),
    }));

    let awake = true;
    let visible = true;
    let raf = 0;
    let last = performance.now();
    let sleepFrames = 0;
    let drag: { b: Body; px: number; py: number; t: number } | null = null;
    const mouse = { x: -1e4, y: -1e4, active: false };

    const step = (dt: number) => {
      for (const b of bodies) {
        if (drag && drag.b === b) continue;
        b.vy += G * dt;
        if (mouse.active) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const d = Math.hypot(dx, dy);
          const reach = b.r + 70;
          if (d < reach && d > 0.001) {
            const f = ((reach - d) / reach) * 2600;
            b.vx += (dx / d) * f * dt;
            b.vy += (dy / d) * f * dt;
          }
        }
        b.vx *= 0.995;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        if (b.y + b.r > H) { b.y = H - b.r; b.vy = -b.vy * REST; b.vx *= 0.94; }
        if (b.x - b.r < 0) { b.x = b.r; b.vx = -b.vx * REST; }
        if (b.x + b.r > W) { b.x = W - b.r; b.vx = -b.vx * REST; }
        if (b.y - b.r < -800) { b.y = -800 + b.r; b.vy = 0; }
      }
      for (let pass = 0; pass < 3; pass++) {
        for (let i = 0; i < bodies.length; i++) {
          for (let j = i + 1; j < bodies.length; j++) {
            const a = bodies[i];
            const b = bodies[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const d = Math.hypot(dx, dy) || 0.001;
            const min = a.r + b.r;
            if (d >= min) continue;
            const nx = dx / d;
            const ny = dy / d;
            const overlap = (min - d) / 2;
            const aFixed = drag && drag.b === a;
            const bFixed = drag && drag.b === b;
            if (!aFixed) { a.x -= nx * overlap * (bFixed ? 2 : 1); a.y -= ny * overlap * (bFixed ? 2 : 1); }
            if (!bFixed) { b.x += nx * overlap * (aFixed ? 2 : 1); b.y += ny * overlap * (aFixed ? 2 : 1); }
            const vn = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
            if (vn > 0) continue;
            const imp = (-(1 + 0.3) * vn) / 2;
            if (!aFixed) { a.vx -= imp * nx; a.vy -= imp * ny; }
            if (!bFixed) { b.vx += imp * nx; b.vy += imp * ny; }
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = `600 ${Math.round(13 * scale)}px Satoshi, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 2;
      for (const b of bodies) {
        // soft contact shadow
        const lift = Math.max(0, Math.min(1, (H - (b.y + b.r)) / 120));
        ctx.beginPath();
        ctx.ellipse(b.x, H - 4, b.r * (0.9 - lift * 0.4), 5 - lift * 3, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${0.18 - lift * 0.14})`;
        ctx.fill();
        // ball
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.kind === 1 ? colors.red : b.kind === 2 ? colors.fg : colors.bg;
        ctx.fill();
        ctx.strokeStyle = colors.fg;
        ctx.stroke();
        // highlight
        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.35, b.y - b.r * 0.38, b.r * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = b.kind === 2 ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.55)';
        ctx.fill();
        ctx.fillStyle = b.kind === 1 ? colors.onRed : b.kind === 2 ? colors.bg : colors.fg;
        ctx.fillText(b.label, b.x, b.y + 1);
      }
    };

    const energy = () => bodies.reduce((s, b) => s + Math.abs(b.vx) + Math.abs(b.vy), 0);
    const frame = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      for (let s = 0; s < 2; s++) step(dt / 2);
      draw();
      sleepFrames = !drag && !mouse.active && energy() < bodies.length * 5 ? sleepFrames + 1 : 0;
      if (sleepFrames > 60 || !visible) { awake = false; return; }
      raf = requestAnimationFrame(frame);
    };
    const wake = () => {
      if (awake) return;
      awake = true;
      sleepFrames = 0;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const pos = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const hit = (p: { x: number; y: number }) => [...bodies].reverse().find((o) => Math.hypot(o.x - p.x, o.y - p.y) <= o.r);
    let downAt: { x: number; y: number; t: number } | null = null;
    const onDown = (e: PointerEvent) => {
      const p = pos(e);
      downAt = { ...p, t: performance.now() };
      const b = hit(p);
      if (!b) return;
      drag = { b, px: p.x, py: p.y, t: performance.now() };
      b.vx = 0; b.vy = 0;
      cv.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
      wake();
    };
    const onMove = (e: PointerEvent) => {
      const p = pos(e);
      mouse.x = p.x; mouse.y = p.y; mouse.active = true;
      wake();
      if (!drag) return;
      const now = performance.now();
      const dt = Math.max(0.008, (now - drag.t) / 1000);
      drag.b.vx = (p.x - drag.px) / dt;
      drag.b.vy = (p.y - drag.py) / dt;
      drag.b.x = p.x; drag.b.y = p.y;
      drag.px = p.x; drag.py = p.y; drag.t = now;
    };
    const onUp = (e: PointerEvent) => {
      const p = pos(e);
      if (drag) {
        const b = drag.b;
        b.vx = Math.max(-2600, Math.min(2600, b.vx));
        b.vy = Math.max(-2600, Math.min(2600, b.vy));
        drag = null;
        el.style.cursor = 'grab';
        try { cv.releasePointerCapture(e.pointerId); } catch {}
      } else if (downAt && performance.now() - downAt.t < 300 && Math.hypot(p.x - downAt.x, p.y - downAt.y) < 6 && bodies.length < 48) {
        // Tap on empty space: drop a new ball from the top.
        const label = items[bodies.length % items.length];
        bodies.push({ x: p.x, y: -40, vx: 0, vy: 0, r: radius(label), label, kind: kindOf(bodies.length) });
      }
      downAt = null;
      wake();
    };
    const onLeave = () => { mouse.active = false; mouse.x = -1e4; mouse.y = -1e4; };
    cv.addEventListener('pointerdown', onDown);
    cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerup', onUp);
    cv.addEventListener('pointercancel', onUp);
    cv.addEventListener('pointerleave', onLeave);

    const ro = new ResizeObserver(() => { size(); wake(); });
    ro.observe(el);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) wake(); }, { threshold: 0.1 });
    io.observe(el);

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      cv.removeEventListener('pointerdown', onDown);
      cv.removeEventListener('pointermove', onMove);
      cv.removeEventListener('pointerup', onUp);
      cv.removeEventListener('pointercancel', onUp);
      cv.removeEventListener('pointerleave', onLeave);
    };
  }, [items, colors]);

  return (
    <div ref={wrap} className="pit">
      <span className="pit-mark jp" aria-hidden="true">技術</span>
      <canvas ref={canvas} aria-label="Skills as draggable balls" role="img" />
      <span className="pit-hint paren">drag, throw, click to add</span>
    </div>
  );
}

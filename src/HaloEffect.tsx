import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

const HaloEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cancelled = false;

    // Defer one frame so data-theme attribute is applied before we read CSS vars
    const startId = requestAnimationFrame(() => {
      if (cancelled) return;

      // Read CSS custom properties
      const cs = getComputedStyle(document.documentElement);
      const v = (name: string) => parseInt(cs.getPropertyValue(name).trim(), 10);
      const vf = (name: string) => parseFloat(cs.getPropertyValue(name).trim());

      const bgR = v('--canvas-bg-r'), bgG = v('--canvas-bg-g'), bgB = v('--canvas-bg-b');
      const acR = v('--canvas-accent-r'), acG = v('--canvas-accent-g'), acB = v('--canvas-accent-b');
      const ac2R = v('--canvas-accent2-r'), ac2G = v('--canvas-accent2-g'), ac2B = v('--canvas-accent2-b');
      const starR = v('--canvas-star-r'), starG = v('--canvas-star-g'), starB = v('--canvas-star-b');
      const orbMidR = v('--canvas-orb-mid-r'), orbMidG = v('--canvas-orb-mid-g'), orbMidB = v('--canvas-orb-mid-b');
      const orbEdgeR = v('--canvas-orb-edge-r'), orbEdgeG = v('--canvas-orb-edge-g'), orbEdgeB = v('--canvas-orb-edge-b');
      const vigR = v('--canvas-vignette-r'), vigG = v('--canvas-vignette-g'), vigB = v('--canvas-vignette-b');
      const orbOpacity = vf('--canvas-orb-opacity');
      const orbPulse = vf('--canvas-orb-pulse');
      const ribbonOpacityBase = vf('--canvas-ribbon-opacity-base');
      const starOpacity = vf('--canvas-star-opacity');

      let w = 0;
      let h = 0;

      const resizeCanvas = () => {
        const dpr = window.devicePixelRatio || 1;
        w = canvas.offsetWidth;
        h = canvas.offsetHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Aurora-like ribbons
      const ribbons = Array.from({ length: 4 }, (_, i) => ({
        yBase: 0.2 + i * 0.15,
        amplitude: 30 + Math.random() * 40,
        frequency: 0.003 + Math.random() * 0.002,
        speed: 0.4 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        thickness: 80 + Math.random() * 100,
        opacity: ribbonOpacityBase + Math.random() * 0.04,
        hueShift: i * 15,
      }));

      // Floating orbs
      const orbs = Array.from({ length: 3 }, () => ({
        x: 0.2 + Math.random() * 0.6,
        y: 0.3 + Math.random() * 0.4,
        radius: 150 + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.0002,
        vy: (Math.random() - 0.5) * 0.00015,
        phase: Math.random() * Math.PI * 2,
      }));

      // Star field
      const stars = Array.from({ length: 60 }, () => ({
        x: Math.random(),
        y: Math.random(),
        size: 0.5 + Math.random() * 1.2,
        twinkleSpeed: 0.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      }));

      let time = 0;

      const animate = () => {
        if (cancelled) return;

        // Clear with the background color
        ctx.fillStyle = `rgb(${bgR}, ${bgG}, ${bgB})`;
        ctx.fillRect(0, 0, w, h);

        // Draw large soft orbs (ambient glow)
        orbs.forEach((orb) => {
          orb.x += orb.vx;
          orb.y += orb.vy;
          if (orb.x < 0.05 || orb.x > 0.95) orb.vx *= -1;
          if (orb.y < 0.15 || orb.y > 0.85) orb.vy *= -1;

          const cx = orb.x * w;
          const cy = orb.y * h;
          const breathe = Math.sin(time * 0.3 + orb.phase) * 20;
          const r = orb.radius + breathe;

          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
          const pulse = 0.5 + 0.5 * Math.sin(time * 0.5 + orb.phase);
          const a = orbOpacity + pulse * orbPulse;
          grad.addColorStop(0, `rgba(${acR}, ${acG}, ${acB}, ${a})`);
          grad.addColorStop(0.5, `rgba(${orbMidR}, ${orbMidG}, ${orbMidB}, ${a * 0.4})`);
          grad.addColorStop(1, `rgba(${orbEdgeR}, ${orbEdgeG}, ${orbEdgeB}, 0)`);

          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        });

        // Draw aurora ribbons
        ribbons.forEach((ribbon) => {
          ctx.beginPath();

          const points: [number, number][] = [];
          for (let x = -20; x <= w + 20; x += 4) {
            const wave1 = Math.sin(x * ribbon.frequency + time * ribbon.speed + ribbon.phase) * ribbon.amplitude;
            const wave2 = Math.sin(x * ribbon.frequency * 1.5 + time * ribbon.speed * 0.7) * ribbon.amplitude * 0.5;
            const y = ribbon.yBase * h + wave1 + wave2;
            points.push([x, y]);
          }

          // Draw ribbon with gradient fill
          const gradient = ctx.createLinearGradient(0, 0, w, 0);
          gradient.addColorStop(0, `rgba(${acR}, ${acG}, ${acB}, 0)`);
          gradient.addColorStop(0.2, `rgba(${acR}, ${acG}, ${acB}, ${ribbon.opacity})`);
          gradient.addColorStop(0.5, `rgba(${ac2R}, ${ac2G}, ${ac2B}, ${ribbon.opacity * 1.5})`);
          gradient.addColorStop(0.8, `rgba(${acR}, ${acG}, ${acB}, ${ribbon.opacity})`);
          gradient.addColorStop(1, `rgba(${acR}, ${acG}, ${acB}, 0)`);

          // Top edge
          ctx.moveTo(points[0][0], points[0][1]);
          for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i][0], points[i][1]);
          }
          // Bottom edge (offset down by thickness)
          for (let i = points.length - 1; i >= 0; i--) {
            ctx.lineTo(points[i][0], points[i][1] + ribbon.thickness);
          }
          ctx.closePath();
          ctx.fillStyle = gradient;
          ctx.fill();
        });

        // Draw stars
        stars.forEach((star) => {
          const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(time * star.twinkleSpeed + star.phase));
          ctx.beginPath();
          ctx.arc(star.x * w, star.y * h, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${starR}, ${starG}, ${starB}, ${twinkle * starOpacity})`;
          ctx.fill();
        });

        // Vignette overlay for depth
        const vignette = ctx.createRadialGradient(w / 2, h / 2, h * 0.2, w / 2, h / 2, h * 0.9);
        vignette.addColorStop(0, `rgba(${vigR}, ${vigG}, ${vigB}, 0)`);
        vignette.addColorStop(1, `rgba(${vigR}, ${vigG}, ${vigB}, 0.4)`);
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, w, h);

        time += 0.016;
        animationId = requestAnimationFrame(animate);
      };

      animate();
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(startId);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      data-no-theme-transition
    />
  );
};

export default HaloEffect;

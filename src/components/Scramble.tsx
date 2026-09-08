import React, { useEffect, useRef } from 'react';

const KANA = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

/** Decodes text through katakana on mount. Same character count throughout, so no layout shift. */
export default function Scramble({ text, delay = 300, active = true }: { text: string; delay?: number; active?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !active || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let raf = 0;
    const total = 28;
    const start = () => {
      const tick = () => {
        frame++;
        const revealed = Math.floor((frame / total) * text.length);
        let out = '';
        for (let i = 0; i < text.length; i++) {
          const c = text[i];
          out += c === ' ' ? ' ' : i < revealed ? c : KANA[(Math.random() * KANA.length) | 0];
        }
        el.textContent = out;
        if (frame < total) raf = requestAnimationFrame(tick);
        else el.textContent = text;
      };
      raf = requestAnimationFrame(tick);
    };
    const t = window.setTimeout(start, delay);
    return () => { window.clearTimeout(t); cancelAnimationFrame(raf); el.textContent = text; };
  }, [text, delay, active]);
  return <span ref={ref} className="scramble" aria-label={text}>{text}</span>;
}

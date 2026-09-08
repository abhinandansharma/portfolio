import React, { useEffect, useMemo, useRef, useState } from 'react';

const N = 36;

function placeholder(letter: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#e0202a'/><stop offset='0.6' stop-color='#b5161f'/><stop offset='1' stop-color='#2a0a0c'/></linearGradient></defs><rect width='640' height='360' fill='url(#g)'/><text x='36' y='330' font-family='Helvetica Neue, Helvetica, Arial, sans-serif' font-weight='700' font-size='230' fill='#ffffff' fill-opacity='0.92'>${letter}</text></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

/** Reeded-glass treatment: the image is sliced into strips with alternating refraction offsets. Loads when scrolled near. */
export default function Fluted({ src, alt, fallback }: { src?: string; alt: string; fallback: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    if (!src || !ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: '300px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [src]);
  const img = useMemo(() => (src ? (near ? `url("${src}")` : 'none') : placeholder(fallback)), [src, near, fallback]);

  return (
    <div ref={ref} className="fluted" role="img" aria-label={alt} style={{ ['--n' as string]: N, ['--img' as string]: img }}>
      {Array.from({ length: N }, (_, i) => <span key={i} />)}
    </div>
  );
}

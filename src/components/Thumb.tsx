import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../ThemeContext';

export type Art = 'wave' | 'shield' | 'list' | 'posters' | 'circles' | 'checks' | 'grid' | 'chain' | 'plate';

function Motif({ art, R, B }: { art: Art; R: string; B: string }) {
  switch (art) {
    case 'wave':
      return (
        <g className="m-wave">
          {Array.from({ length: 28 }, (_, i) => {
            const h = 24 + 120 * Math.abs(Math.sin(i * 0.55)) * (0.5 + 0.5 * Math.sin(i * 0.21 + 1));
            return <rect key={i} x={96 + i * 16} y={180 - h / 2} width={8} height={h} rx={4} fill={i % 7 === 3 ? B : R} style={{ ['--d' as string]: `${(i % 9) * 60}ms` }} />;
          })}
        </g>
      );
    case 'shield':
      return (
        <g className="m-shield">
          <path d="M320 92 L448 268 L192 268 Z" fill="none" stroke={R} strokeWidth={14} strokeLinejoin="round" />
          <path d="M392 168 L232 168 M300 208 L360 208" stroke={B} strokeWidth={10} strokeLinecap="round" />
          <line className="slash" x1={180} y1={300} x2={460} y2={70} stroke={B} strokeWidth={12} strokeLinecap="round" />
        </g>
      );
    case 'list':
      return (
        <g className="m-list">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className="row" style={{ ['--d' as string]: `${i * 70}ms` }}>
              <circle cx={140} cy={96 + i * 46} r={7} fill={i === 0 ? B : R} />
              <rect x={168} y={89 + i * 46} width={[300, 220, 260, 180, 240][i]} height={14} rx={7} fill={i === 0 ? B : R} opacity={i === 0 ? 1 : 0.9 - i * 0.12} />
            </g>
          ))}
        </g>
      );
    case 'posters':
      return (
        <g className="m-posters">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} className="poster" x={76 + i * 86} y={i === 2 ? 96 : 116} width={70} height={i === 2 ? 168 : 128} rx={6} fill={i === 2 ? B : R} opacity={i === 2 ? 1 : 0.85} style={{ ['--d' as string]: `${i * 50}ms` }} />
          ))}
          <rect x={76} y={282} width={488} height={4} rx={2} fill={R} opacity={0.5} />
        </g>
      );
    case 'circles':
      return (
        <g className="m-circles">
          {[[190, 150, 72, R], [330, 210, 96, R], [470, 130, 54, B], [420, 260, 30, B], [250, 270, 26, R], [120, 260, 18, B]].map(([x, y, r, c], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={c as string} style={{ ['--d' as string]: `${i * 90}ms`, transformOrigin: `${x}px ${y}px` }} />
          ))}
        </g>
      );
    case 'checks':
      return (
        <g className="m-checks">
          {[0, 1, 2].map((i) => (
            <g key={i} style={{ ['--d' as string]: `${i * 120}ms` }}>
              <rect x={150} y={92 + i * 64} width={36} height={36} rx={8} fill="none" stroke={R} strokeWidth={6} />
              <path className="tick" d={`M158 ${110 + i * 64} l9 9 l17 -18`} fill="none" stroke={B} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" pathLength={1} style={{ opacity: i === 0 ? 1 : undefined }} />
              <rect x={210} y={104 + i * 64} width={[260, 200, 230][i]} height={12} rx={6} fill={R} opacity={0.9} />
            </g>
          ))}
        </g>
      );
    case 'grid':
      return (
        <g className="m-grid">
          {Array.from({ length: 9 }, (_, i) => (
            <rect key={i} className="cell" x={200 + (i % 3) * 84} y={70 + Math.floor(i / 3) * 76} width={72} height={64} rx={10} fill={i === 4 ? B : R} opacity={i === 4 ? 1 : [0.95, 0.7, 0.85, 0.6, 1, 0.75, 0.9, 0.65, 0.8][i]} style={{ ['--d' as string]: `${i * 40}ms` }} />
          ))}
        </g>
      );
    case 'chain':
      return (
        <g className="m-chain">
          {[0, 1, 2].map((i) => (
            <g key={i} className="block" style={{ ['--d' as string]: `${i * 110}ms` }}>
              <rect x={126 + i * 150} y={120} width={112} height={112} rx={12} fill="none" stroke={R} strokeWidth={10} />
              <rect x={150 + i * 150} y={144} width={64} height={12} rx={6} fill={i === 2 ? B : R} />
              <rect x={150 + i * 150} y={168} width={44} height={12} rx={6} fill={R} opacity={0.8} />
              {i < 2 && <path className="link" d={`M${238 + i * 150} 176 h38`} stroke={B} strokeWidth={10} strokeLinecap="round" />}
            </g>
          ))}
        </g>
      );
    case 'plate':
      return (
        <g className="m-plate">
          <rect x={150} y={130} width={340} height={104} rx={12} fill="none" stroke={R} strokeWidth={10} />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x={182 + i * 42} y={158} width={26} height={48} rx={5} fill={i === 3 ? B : R} opacity={i === 3 ? 1 : 0.85} />
          ))}
          <rect className="scan" x={150} y={128} width={340} height={4} fill={B} />
        </g>
      );
  }
}

const JP: Record<Art, string> = { wave: '音', shield: '盾', list: '記事', posters: '映画', circles: '鼓動', checks: '予定', grid: '色', chain: '鎖', plate: '車' };

const N = 36;
const INK = { red: '#e0202a', fg: '#f1ede4', bg: '#0b0b0b', onRed: '#ffffff' };
const PAPER = { red: '#c8202a', fg: '#0b0b0b', bg: '#efece4', onRed: '#ffffff' };

/**
 * Project poster tile behind fluted glass. By default the tile is vector (motif in theme colours); pass `image`
 * (1280x720 artwork) to show real art instead, refracted by the same glass.
 * After mount the SVG is serialised into a data URI and sliced into refracted strips, the original glass
 * effect. On hover the strips align, the glass fades and the live tile (with its animations) shows through.
 * `figure` accepts a transparent character cut-out that stands on the right edge.
 */
export default function Thumb({ art, index, red, image, figure }: { art: Art; index: number; red?: boolean; image?: string; figure?: string }) {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState('none');
  const [near, setNear] = useState(false);

  // Only fetch artwork once the card is close to the viewport.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setNear(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const R = red ? 'var(--bg)' : 'var(--red)';
  const B = red ? 'var(--on-red)' : 'var(--fg)';
  const tileBg = red ? 'var(--red)' : 'var(--bg)';

  useEffect(() => {
    if (image) {
      if (near) setImg(`url("${image}")`);
      return;
    }
    const svg = svgRef.current;
    if (!svg) return;
    const c = theme === 'paper' ? PAPER : INK;
    const markup = svg.outerHTML
      .replace(/var\(--red\)/g, c.red).replace(/var\(--fg\)/g, c.fg).replace(/var\(--bg\)/g, c.bg).replace(/var\(--on-red\)/g, c.onRed)
      .replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    setImg(`url("data:image/svg+xml,${encodeURIComponent(markup)}")`);
  }, [theme, art, red, image, near]);

  return (
    <div ref={wrapRef} className={`thumb ${red ? 'thumb-red' : ''}`} aria-hidden="true" style={{ ['--n' as string]: N, ['--img' as string]: img }}>
      <div className="thumb-strips">
        {Array.from({ length: N }, (_, i) => <span key={i} className="strip" />)}
      </div>
      {image && near && <img className="thumb-live" src={image} alt="" loading="lazy" decoding="async" />}
      <svg ref={svgRef} className="thumb-live" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" style={image ? { display: 'none' } : undefined}>
        <rect width="640" height="360" fill={tileBg} />
        <g transform="translate(-60 0) scale(0.92)" style={{ transformOrigin: '320px 180px' }}>
          <Motif art={art} R={R} B={B} />
        </g>
      </svg>
      {figure && <img className="thumb-figure" src={figure} alt="" loading="lazy" decoding="async" />}
      <span className="thumb-num paren">{String(index + 1).padStart(2, '0')}</span>
      <span className="thumb-jp jp">{JP[art]}</span>
    </div>
  );
}

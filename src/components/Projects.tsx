import React, { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import ProjectDetail from './ProjectDetail';
import SectionHeader from './SectionHeader';
import Thumb from './Thumb';
import { projects } from '../data';
import { ArrowUpRight, GitHub } from './Icons';

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  /** Swap state inside a view transition when the browser has one, so cards morph instead of jumping. */
  const transition = (update: () => void) => {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => void };
    if (doc.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      doc.startViewTransition(() => flushSync(update));
    } else update();
  };
  const close = useCallback(() => transition(() => setOpen(null)), []);
  const openCard = (i: number) => (e: React.MouseEvent | React.KeyboardEvent) => {
    if ((e.target as HTMLElement).closest('a')) return;
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    if (open === i) return; // the expanded card closes from its own button or Escape
    e.preventDefault();
    transition(() => setOpen(i));
  };
  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <SectionHeader
          label="Projects"
          jp="制作"
          title={<>Things built <span className="serif red">for fun</span></>}
          side={<p className="fg-2 text-sm max-w-xs md:ml-auto">Evenings and weekends. Each one exists to learn something or fix an annoyance.</p>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 cards-grid">
          {projects.map((p, i) => (
            <article key={p.title} className={`card card-click reveal ${open === i ? 'card-x' : 'flex flex-col'}`} style={{ ['--i' as string]: i % 3, ['viewTransitionName' as string]: `card-${i}` }} role={open === i ? undefined : 'button'} tabIndex={open === i ? undefined : 0} aria-expanded={open === i} aria-label={open === i ? undefined : `${p.title}, details`} onClick={openCard(i)} onKeyDown={openCard(i)}>
              {open === i ? <ProjectDetail project={p} index={i} onClose={close} /> : <>
              <Thumb art={p.art} index={i} red={p.red} image={p.image} figure={p.figure} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="display text-[1.15rem] font-semibold">{p.title}</h3>
                  <span className="paren">{p.year}</span>
                </div>
                <p className="fg-2 text-sm mt-2 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-1" style={{ marginTop: 'auto' }}>
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="flex items-center gap-5 mt-5">
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="arrow">Live <ArrowUpRight /></a>}
                  {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" className="arrow muted"><GitHub /> Source</a>}
                  {p.post && <a href={p.post} target="_blank" rel="noopener noreferrer" className="arrow muted">Write-up <ArrowUpRight /></a>}
                  <span className="card-more">Details</span>
                </div>
              </div>
              </>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

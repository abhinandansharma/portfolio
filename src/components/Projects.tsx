import React, { useCallback, useState } from 'react';
import ProjectModal from './ProjectModal';
import SectionHeader from './SectionHeader';
import Thumb from './Thumb';
import { projects } from '../data';
import { ArrowUpRight, GitHub } from './Icons';

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const openCard = (i: number) => (e: React.MouseEvent | React.KeyboardEvent) => {
    if ((e.target as HTMLElement).closest('a')) return;
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    setOpen(i);
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
            <div key={p.title} className={`card card-click reveal flex flex-col ${open === i ? 'card-open' : ''}`} style={{ ['--i' as string]: i % 3 }} role="button" tabIndex={0} aria-haspopup="dialog" aria-expanded={open === i} aria-label={`${p.title}, details`} onClick={openCard(i)} onKeyDown={openCard(i)}>
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
            </div>
          ))}
        </div>
      </div>
      {open !== null && <ProjectModal project={projects[open]} index={open} onClose={close} />}
    </section>
  );
}

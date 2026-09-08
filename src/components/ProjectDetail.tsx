import React, { useEffect, useRef } from 'react';
import type { Project } from '../data';
import { ArrowUpRight, GitHub } from './Icons';

/**
 * Contents of an expanded project card. The card itself grows to span the grid row (see Projects.tsx),
 * so this only renders the media, the story, and the actions. Escape closes.
 */
export default function ProjectDetail({ project, index, onClose }: { project: Project; index: number; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const el = ref.current?.parentElement;
    if (el) {
      const r = el.getBoundingClientRect();
      if (r.top < 80 || r.bottom > window.innerHeight) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, project]);

  const num = String(index + 1).padStart(2, '0');

  return (
    <div ref={ref} className="pd-inner" id="project-detail">
      <button className="pd-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close details">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <div className="pd-media">
        {project.image && <img src={project.image} alt="" width={1280} height={720} />}
        <span className="paren pd-num">{num}</span>
      </div>
      <div className="pd-body">
        <div className="flex items-baseline justify-between gap-4 pr-10">
          <h3 className="display pd-title">{project.title}</h3>
          <span className="paren">{project.year}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="pd-about">
          {(project.about ?? [project.desc]).map((para, i) => <p key={i} className="fg-2 leading-relaxed">{para}</p>)}
        </div>
        {project.highlights && (
          <ul className="pd-list">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        )}
        <div className="pd-actions">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-red" data-magnet>Open live site <ArrowUpRight /></a>}
          {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn" data-magnet><GitHub /> Source</a>}
          {project.post && <a href={project.post} target="_blank" rel="noopener noreferrer" className="btn" data-magnet>Read the write-up <ArrowUpRight /></a>}
        </div>
      </div>
    </div>
  );
}

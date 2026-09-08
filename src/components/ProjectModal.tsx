import React, { useEffect, useRef } from 'react';
import type { Project } from '../data';
import { ArrowUpRight, GitHub } from './Icons';

/**
 * Detail view for one project. Rendered only while open, so nothing ships in the prerendered HTML.
 * Closes on Escape, on the backdrop, or on the close button. Never changes page layout or scroll.
 */
export default function ProjectModal({ project, index, onClose }: { project: Project; index: number; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // No body scroll lock: toggling overflow made the page jump. The overlay is its own scroll
    // container and swallows wheel and touch input on the backdrop instead.
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus({ preventScroll: true });
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  const swallow = (e: React.SyntheticEvent) => { e.stopPropagation(); };

  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="pm" role="dialog" aria-modal="true" aria-labelledby="pm-title">
      <div className="pm-backdrop" onClick={onClose} onWheel={swallow} onTouchMove={swallow} />
      <div className="pm-panel">
        <button ref={closeRef} className="pm-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        {project.image && (
          <div className="pm-media">
            <img src={project.image} alt="" width={1280} height={720} />
            <span className="paren pm-num">{num}</span>
          </div>
        )}
        <div className="pm-body">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="pm-title" className="display pm-title">{project.title}</h2>
            <span className="paren">{project.year}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="pm-cols">
            <div className="pm-about">
              {(project.about ?? [project.desc]).map((para, i) => <p key={i} className="fg-2 leading-relaxed">{para}</p>)}
            </div>
            {project.highlights && (
              <ul className="pm-list">
                {project.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            )}
          </div>
          <div className="pm-actions">
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-red" data-magnet>Open live site <ArrowUpRight /></a>}
            {project.code && <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn" data-magnet><GitHub /> Source</a>}
            {project.post && <a href={project.post} target="_blank" rel="noopener noreferrer" className="btn" data-magnet>Read the write-up <ArrowUpRight /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

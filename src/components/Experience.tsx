import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { roles } from '../data';
import { ArrowUpRight } from './Icons';

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <SectionHeader
          label="Experience"
          jp="経歴"
          title={<>Six teams, <span className="serif red">one</span> pattern</>}
          side={<p className="fg-2 text-sm max-w-xs md:ml-auto">Every role has been early: the first frontend hire, the person who set the standards, or the founding engineer.</p>}
        />
        <ol className="list-none m-0 p-0">
          {roles.map((r, i) => {
            const isOpen = open === i;
            return (
              <li key={r.company} className={`row reveal ${isOpen ? 'open-row' : ''}`} style={{ ['--i' as string]: i }}>
                <button type="button" className="row-head" aria-expanded={isOpen} aria-controls={`role-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="paren">{String(i + 1).padStart(2, '0')}</span>
                  <span className="row-title">{r.company}</span>
                  <span className="hidden md:block fg-2 text-sm">{r.title}</span>
                  <span className="flex items-center gap-4">
                    <span className="muted text-sm whitespace-nowrap hidden sm:inline">{r.period}</span>
                    <span className="plus" aria-hidden="true">+</span>
                  </span>
                </button>
                <div id={`role-${i}`} className={`expand ${isOpen ? 'open' : ''}`}>
                  <div>
                    <div className="grid md:grid-cols-12 gap-6 pb-8 md:pl-[3.5rem]">
                      <div className="md:col-span-7">
                        <p className="md:hidden fg-2 text-sm mb-3">{r.title} · {r.period}</p>
                        <p className="fg-2 leading-relaxed">{r.summary}</p>
                        <ul className="mt-4 p-0 list-none space-y-2">
                          {r.bullets.map((b) => (
                            <li key={b} className="fg-2 text-[0.95rem] leading-relaxed flex gap-3">
                              <span className="red mt-[0.15rem]" aria-hidden="true">✱</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:col-span-5 md:pl-6">
                        <p className="label mb-3">{r.place}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {r.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>
                        {r.url && (
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className="arrow mt-5">
                            {r.url.replace(/^https?:\/\/(www\.)?/, '')} <ArrowUpRight />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

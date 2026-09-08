import React from 'react';
import { profile } from '../data';
import { ArrowUpRight } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--red)', color: 'var(--on-red)' }}>
      <div className="wrap">
        <div className="grid md:grid-cols-12 gap-8 items-end reveal">
          <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-1">
            <span className="label" style={{ color: 'inherit', opacity: 0.8 }}>Contact</span>
            <span className="jp label" style={{ color: 'inherit', opacity: 0.8 }}>連絡</span>
          </div>
          <div className="md:col-span-7">
            <h2 className="display h-xl">
              Let's <span className="serif">talk</span>.
            </h2>
            <p className="jp mt-4 text-sm tracking-[0.25em] opacity-85">お気軽にご連絡ください。</p>
            <p className="mt-6 max-w-lg leading-relaxed opacity-90">
              Founders with a first version to build, engineers curious about the tenth, or anyone who wants to argue about
              platform architecture. Email is fastest.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col md:items-end gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-onred">
              {profile.email} <ArrowUpRight />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-onred">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import SectionHeader from './SectionHeader';
import posts from '../data/blogs.json';
import { ArrowUpRight } from './Icons';

interface Post { title: string; url: string; date: string; tags: string[]; summary: string; }
const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });

export default function Writing() {
  const list = posts as Post[];
  return (
    <section id="writing" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <SectionHeader
          label="Writing"
          jp="執筆"
          title={<>Notes from the <span className="serif red">build</span></>}
          side={<a href="https://medium.com/@abhinandan0659" target="_blank" rel="noopener noreferrer" className="arrow">All posts on Medium <ArrowUpRight /></a>}
        />
        <ul className="list-none m-0 p-0">
          {list.map((p, i) => (
            <li key={p.url} className="row reveal" style={{ ['--i' as string]: i }}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="row-head group">
                <span className="paren">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="row-title block">{p.title}</span>
                  {p.summary && <span className="block fg-2 text-sm mt-2 max-w-xl">{p.summary}</span>}
                </span>
                <span className="hidden md:block muted text-sm">{fmt.format(new Date(p.date))}</span>
                <span className="arrow">Read <ArrowUpRight /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

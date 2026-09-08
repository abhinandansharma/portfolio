import React from 'react';
import { profile } from '../data';
import Mark from './Mark';

const cols = [
  { title: 'Site', jp: 'サイト', links: [['Now', '#now'], ['Experience', '#experience'], ['Skills', '#skills'], ['Projects', '#projects'], ['Writing', '#writing']] },
  { title: 'Elsewhere', jp: 'リンク', links: [['GitHub', 'https://github.com/abhinandansharma'], ['LinkedIn', 'https://www.linkedin.com/in/-abhinandan/'], ['X', 'https://x.com/notjustadev'], ['Medium', 'https://medium.com/@abhinandan0659'], ['CodePen', 'https://codepen.io/abhinandansharma']] },
  { title: 'More', jp: 'その他', links: [['Telegram', 'https://t.me/abhinandan0659'], ['Instagram', 'https://instagram.com/_abhinandansharma'], ['Sponsor on GitHub', 'https://github.com/sponsors/abhinandansharma'], ['Resume', profile.resume]] },
];

export default function Footer() {
  return (
    <footer className="py-12" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <Mark size={44} />
          <p className="display text-[1.05rem] mt-3">Abhinandan<span className="red">.</span></p>
          <p className="jp text-[0.7rem] tracking-[0.3em] muted mt-1">アビナンダン・シャルマ</p>
          <p className="muted text-sm mt-4">&copy; {new Date().getFullYear()}. Built with React and Three.js.</p>
          <p className="muted text-sm mt-1">Lighthouse 100 <span aria-hidden="true">✱</span> 100 <span aria-hidden="true">✱</span> 100 <span aria-hidden="true">✱</span> 100, performance to SEO.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="md:col-span-3">
            <p className="label">{c.title} <span className="jp font-normal ml-1">{c.jp}</span></p>
            <ul className="list-none m-0 p-0 mt-3 space-y-1.5">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm fg-2 hover:text-[var(--red)]" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';
import Mark from './Mark';

const links = [
  { en: 'Now', jp: '現在' },
  { en: 'Experience', jp: '経歴' },
  { en: 'Skills', jp: '技術' },
  { en: 'Projects', jp: '制作' },
  { en: 'Writing', jp: '執筆' },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [mini, setMini] = useState(false);
  useEffect(() => {
    const onScroll = () => setMini(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <div className={`mini ${mini ? 'show' : ''}`} aria-hidden={!mini}>
      <div className="wrap mini-inner">
        <a href="#top" className="display text-[0.95rem] leading-none inline-flex items-center gap-2" tabIndex={mini ? 0 : -1}><Mark size={22} />Abhinandan<span className="red">.</span></a>
        <ul className="hidden md:flex items-center gap-5 m-0 p-0 list-none">
          {links.map((l) => (
            <li key={l.en}><a href={`#${l.en.toLowerCase()}`} className="nav-link" tabIndex={mini ? 0 : -1}>{l.en}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-link" tabIndex={mini ? 0 : -1}>Contact <span className="jp muted font-normal ml-1">連絡</span></a>
      </div>
    </div>
    <header className="nav">
      <nav className="wrap py-4 grid grid-cols-2 md:grid-cols-3 items-start" aria-label="Primary">
        <a href="#top" className="display text-[1.05rem] leading-none inline-flex items-start gap-3">
          <Mark size={38} />
          <span>
            Abhinandan<span className="red">.</span>
            <span className="jp block text-[0.6rem] font-normal tracking-[0.3em] mt-1 muted normal-case">アビナンダン</span>
          </span>
        </a>
        <ul className="hidden md:flex flex-col gap-0.5 m-0 p-0 list-none">
          {links.map((l) => (
            <li key={l.en}>
              <a href={`#${l.en.toLowerCase()}`} className="nav-link">
                {l.en} <span className="jp muted font-normal ml-1">{l.jp}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-end gap-1">
          <a href="#contact" className="nav-link">Contact <span className="jp muted font-normal ml-1">連絡</span></a>
          <button type="button" onClick={toggleTheme} className="nav-link bg-transparent border-0 p-0 cursor-pointer" title={`Switch to ${theme === 'ink' ? 'paper' : 'ink'} theme`}>
            {theme === 'ink' ? 'Paper' : 'Ink'} <span className="jp muted font-normal ml-1">{theme === 'ink' ? '紙' : '墨'}</span>
          </button>
        </div>
      </nav>
    </header>
    </>
  );
}

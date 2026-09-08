import React, { Suspense, lazy, useMemo } from 'react';
import SectionHeader from './SectionHeader';
import { useTheme } from '../ThemeContext';
import { useDeferred } from './Hero';
import { skills } from '../data';

const Pit = lazy(() => import('./Pit'));

export default function Skills() {
  const { theme } = useTheme();
  const show = useDeferred(5000);
  const colors = useMemo(
    () =>
      theme === 'paper'
        ? { bg: '#f7f5ef', fg: '#0b0b0b', red: '#c8202a', onRed: '#fff6f2', line: 'rgba(11,11,11,0.34)' }
        : { bg: '#141414', fg: '#f1ede4', red: '#e0202a', onRed: '#fff6f2', line: 'rgba(241,237,228,0.32)' },
    [theme]
  );

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <SectionHeader
          label="Skills"
          jp="技術"
          title={<>Throw them <span className="serif red">around</span></>}
          side={<p className="paren">physics: drag, throw, click to add</p>}
        />
        <div className="reveal">
          {show ? (
            <Suspense fallback={<div className="pit" />}>
              <Pit items={skills} colors={colors} />
            </Suspense>
          ) : (
            <div className="pit">
              <span className="pit-mark jp" aria-hidden="true">技術</span>
              <div className="pit-static">
                {skills.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { profile, marquee } from '../data';
import { ArrowUpRight } from './Icons';
import Scramble from './Scramble';

const Scene = lazy(() => import('./Scene'));

/** Heavy visuals load after the first interaction (or a delay) so the first paint stays light. */
export function useDeferred(delay = 6000) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let fired = false;
    const events = ['pointermove', 'pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll'];
    const go = () => {
      if (fired) return;
      fired = true;
      cleanup();
      setShow(true);
    };
    const timer = window.setTimeout(go, delay);
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, go));
      window.clearTimeout(timer);
    };
    events.forEach((e) => window.addEventListener(e, go, { passive: true }));
    return cleanup;
  }, [delay]);
  return show;
}

export default function Hero() {
  const showScene = useDeferred();
  return (
    <>
      <section id="top" className="hero">
        <div className="redblock" aria-hidden="true" />
        <div className="wrap w-full relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 hero-copy">
            <p className="paren rise" style={{ ['--i' as string]: 0 }}>hello, I'm Abhinandan</p>
            <h1 className="display h-xl hero-title mt-5 rise-solid" style={{ ['--i' as string]: 1 }}>
              <span className="line"><Scramble text="First" active={showScene} delay={0} /> <span className="serif red">engineer</span></span>
              <span className="line"><Scramble text="in the room" active={showScene} delay={200} /><span className="red">.</span></span>
            </h1>
            <p className="jp glitch mt-4 text-sm tracking-[0.25em] fg-2 rise" style={{ ['--i' as string]: 2 }}>ゼロから、イチへ。</p>
            <div className="mt-8 grid sm:grid-cols-[1fr_auto] gap-6 items-end rise" style={{ ['--i' as string]: 3 }}>
              <p className="lede rise-solid" style={{ ['--i' as string]: 1 }}>
                {profile.role} at {profile.company}. I join founders at zero and build the platform that gets them to one:
                architecture, backend, product surface, and the standards a team grows on.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="#contact" className="btn btn-red">Let's discuss <ArrowUpRight /></a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn">Resume</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative rise" style={{ ['--i' as string]: 2 }}>
            <div className="stage">
              <div className="stage-fallback" />
              {showScene && (
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
              )}
            </div>
            <p className="jp vertical display absolute top-0 right-0 text-[clamp(2rem,4vw,3.4rem)] font-bold hidden lg:block" style={{ color: 'var(--on-red)', lineHeight: 1 }} aria-hidden="true">
              零から一へ
            </p>
          </div>
        </div>
        <div className="wrap w-full relative mt-10 lg:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 label">
            <span className="whitespace-nowrap">{profile.location}</span>
            <span aria-hidden="true">✱</span>
            <span className="whitespace-nowrap">Novyte / MASQ / Polymerize / Truebase</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track py-3">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="marquee-item">{m}</span>
          ))}
        </div>
      </div>
    </>
  );
}

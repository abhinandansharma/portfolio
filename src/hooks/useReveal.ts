import { useEffect } from 'react';

/**
 * Marks every `.reveal` element with data-in once it scrolls into view. A data attribute survives React
 * re-renders, a class would not. New `.reveal` nodes (a remount, hot reload, or content that arrives later)
 * are picked up by a MutationObserver so nothing can stay hidden.
 */
export default function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.setAttribute('data-in', ''));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute('data-in', '');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    const watch = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>('.reveal:not([data-in])').forEach((el) => io.observe(el));
    };
    watch(document);
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches('.reveal') && !n.hasAttribute('data-in')) io.observe(n);
          watch(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}

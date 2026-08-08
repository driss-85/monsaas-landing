import { useEffect, useRef } from 'react';

/**
 * Apparition au scroll via IntersectionObserver.
 * Ajoute la classe .is-visible aux enfants portant .reveal, avec un
 * decalage (stagger) de 80ms. Respecte prefers-reduced-motion : dans ce
 * cas tout est visible immediatement (gere aussi en CSS).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(stagger = 80) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));

    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const group = Array.from(
            el.parentElement?.querySelectorAll<HTMLElement>('.reveal') ?? [el],
          );
          const index = group.indexOf(el);
          el.style.setProperty(
            '--reveal-delay',
            `${Math.max(0, index) * stagger}ms`,
          );
          el.classList.add('is-visible');
          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}

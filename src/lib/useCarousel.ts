import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Carrousel a defilement natif (scroll-snap). Le swipe reste 100% natif
 * (fluide sur iPhone), le hook ne fait que suivre la slide active et
 * offrir une navigation programmatique (fleches, points).
 */
export function useCarousel<T extends HTMLElement = HTMLDivElement>(count: number) {
  const trackRef = useRef<T | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;

    const measure = () => {
      const slides = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((s, i) => {
        const c = s.offsetLeft + s.offsetWidth / 2;
        const d = Math.abs(c - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  const scrollTo = useCallback(
    (index: number) => {
      const el = trackRef.current;
      if (!el) return;
      const i = Math.max(0, Math.min(count - 1, index));
      const slide = el.children[i] as HTMLElement | undefined;
      if (!slide) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollTo({
        left: slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2,
        behavior: reduced ? 'auto' : 'smooth',
      });
    },
    [count],
  );

  return { trackRef, active, scrollTo };
}

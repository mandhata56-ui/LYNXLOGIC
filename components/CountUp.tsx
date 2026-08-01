"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
}

/**
 * Count-up number for the proof band — mirrors the design's data-count:
 * eases from `from` to `to` once ~60% of the element is in view. Respects
 * reduced motion by rendering the final value immediately.
 */
export function CountUp({ to, from = 0, duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(to);
      return;
    }

    let raf = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          run();
        }),
      { threshold: 0.6 }
    );
    io.observe(el);

    // Safety net: if the observer never fires (e.g. a non-compositing
    // preview), settle on the final value so no stat is stuck at its start.
    const fallback = window.setTimeout(() => {
      if (!started) setValue(to);
    }, 1600);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
  }, [to, from, duration]);

  return <span ref={ref}>{value}</span>;
}

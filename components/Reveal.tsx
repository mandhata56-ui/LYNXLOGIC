"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type SupportedTag = "div" | "section";

interface RevealProps {
  children: ReactNode;
  as?: SupportedTag;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Scroll-reveal used across the homepage — mirrors the design's data-reveal:
 * the element starts hidden (.lx-reveal) and fades/rises in once it enters the
 * viewport. It is fail-safe: anything already in view reveals immediately, and
 * a fallback timer guarantees content is never left hidden if the
 * IntersectionObserver never fires. Reduced motion is handled in globals.css.
 */
export function Reveal({
  children,
  as = "div",
  id,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("is-in");

    // Already in (or near) the viewport on mount → reveal right away.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      reveal();
      return;
    }

    let revealed = false;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            revealed = true;
            reveal();
            io.disconnect();
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Safety net: if the observer never fires (e.g. a non-compositing
    // preview), reveal anyway so content is never stuck invisible.
    const fallback = window.setTimeout(() => {
      if (!revealed) reveal();
      io.disconnect();
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`lx-reveal ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

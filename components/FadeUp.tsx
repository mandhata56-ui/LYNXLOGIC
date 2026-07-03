import type { CSSProperties, ReactNode } from "react";
import { ScrollFadeUp } from "./ScrollFadeUp";

type SupportedTag = "div" | "h1" | "h2" | "h3" | "p";

interface FadeUpProps {
  children: ReactNode;
  as?: SupportedTag;
  delay?: number;
  duration?: number;
  className?: string;
  /** Animate once on mount instead of when scrolled into view. Use for above-the-fold content like the hero. */
  onMount?: boolean;
}

/**
 * Baseline scroll/mount reveal used across the site for a single, consistent
 * entrance feel. Reduced-motion handling is global: this component uses a
 * plain CSS animation (with its own prefers-reduced-motion override) for
 * onMount content, and the scroll-triggered path defers to Framer Motion's
 * MotionConfig in the root layout.
 *
 * onMount renders as a server component with a CSS-only animation so
 * above-the-fold text paints without waiting on JS hydration — a
 * JS-driven fade delayed LCP by ~3s on throttled mobile.
 */
export function FadeUp({
  children,
  as = "div",
  delay = 0,
  duration = 0.5,
  className,
  onMount = false,
}: FadeUpProps) {
  if (!onMount) {
    return (
      <ScrollFadeUp as={as} delay={delay} duration={duration} className={className}>
        {children}
      </ScrollFadeUp>
    );
  }

  const Tag = as;
  const style: CSSProperties = {
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };

  return (
    <Tag className={`animate-fade-up ${className ?? ""}`} style={style}>
      {children}
    </Tag>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

// Pre-created once at module scope (not per-render) — a lint rule
// (react-hooks/static-components) flags motion.create() calls made during
// render, since each call produces a new component identity.
const motionTags = {
  div: motion.create("div"),
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  h3: motion.create("h3"),
  p: motion.create("p"),
};

type SupportedTag = keyof typeof motionTags;

interface ScrollFadeUpProps {
  children: ReactNode;
  as: SupportedTag;
  delay: number;
  duration: number;
  className?: string;
}

/** Scroll-triggered half of FadeUp — kept as its own client component so
 * the onMount (above-the-fold) path in FadeUp can stay a server component. */
export function ScrollFadeUp({
  children,
  as,
  delay,
  duration,
  className,
}: ScrollFadeUpProps) {
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}

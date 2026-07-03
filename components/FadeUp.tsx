"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

interface FadeUpProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  className?: string;
  /** Animate once on mount instead of when scrolled into view. Use for above-the-fold content like the hero. */
  onMount?: boolean;
}

/**
 * Baseline scroll/mount reveal used across the site for a single, consistent
 * entrance feel. Reduced-motion handling is global via MotionConfig in the
 * root layout, so this component doesn't need its own guard.
 */
export function FadeUp({
  children,
  as = "div",
  delay = 0,
  duration = 0.5,
  className,
  onMount = false,
}: FadeUpProps) {
  const MotionTag = motion.create(as);

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      {...(onMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "-80px" } })}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}

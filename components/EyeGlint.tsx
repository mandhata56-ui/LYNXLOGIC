"use client";

import { motion } from "framer-motion";

interface EyeGlintProps {
  size?: number;
  className?: string;
}

/**
 * The signature brand moment: a single amber point that breathes like an
 * eye catching light in the dark. Used once, in the hero — never repeated
 * as decoration.
 */
export function EyeGlint({ size = 16, className = "" }: EyeGlintProps) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-amber blur-md"
        animate={{ opacity: [0.25, 0.6, 0.25], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute rounded-full bg-amber"
        style={{ inset: "32%" }}
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}

interface LogoMarkProps {
  size?: number;
  className?: string;
  /** Animate the amber dot with a slow eye-blink (nav/footer, not favicons). */
  blink?: boolean;
}

/**
 * Brand mark: a hairline square rotated 45° (an aperture) with the amber
 * signal dot at its center — the "structure + signal" motif, distilled
 * into a mark that works standalone.
 */
export function LogoMark({ size = 30, className = "", blink = false }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="8.5"
        y="8.5"
        width="15"
        height="15"
        transform="rotate(45 16 16)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="16"
        cy="16"
        r="4"
        fill="#F0A93B"
        className={blink ? "lx-logo-dot" : undefined}
      />
    </svg>
  );
}

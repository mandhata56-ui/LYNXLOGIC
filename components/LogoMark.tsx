interface LogoMarkProps {
  size?: number;
  className?: string;
}

/**
 * Portable brand mark: a faceted aperture with the amber glint at its
 * center — the same signature motif as the hero's eye-glint, distilled
 * into a shape that works standalone (favicon, social avatar, nav).
 */
export function LogoMark({ size = 28, className = "" }: LogoMarkProps) {
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
        x="8"
        y="8"
        width="16"
        height="16"
        rx="2"
        transform="rotate(45 16 16)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="16" cy="16" r="3" fill="#D9A441" />
    </svg>
  );
}

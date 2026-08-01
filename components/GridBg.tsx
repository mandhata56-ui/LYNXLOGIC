/**
 * Grid texture behind the Manifesto, Insights feature, and CTA blocks —
 * ported from the design's gridBg(): a 300×300 lattice, slice-scaled to fill.
 */
export function GridBg({ color, opacity }: { color: string; opacity: number }) {
  const lines = [];
  for (let k = 0; k <= 12; k++) {
    lines.push(
      <line key={`v${k}`} x1={k * 25} y1={0} x2={k * 25} y2={300} stroke={color} strokeWidth={1} opacity={opacity} />
    );
    lines.push(
      <line key={`h${k}`} x1={0} y1={k * 25} x2={300} y2={k * 25} stroke={color} strokeWidth={1} opacity={opacity} />
    );
  }
  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      style={{ display: "block" }}
      aria-hidden="true"
    >
      {lines}
    </svg>
  );
}

import type { CSSProperties } from "react";

/**
 * Animated service glyphs — ported from the LynxLogic Home design. Pure SVG
 * driven by the lx-flow / lx-pulse / lx-dash / lx-tw keyframes in globals.css
 * (which also disables them under prefers-reduced-motion via the .lx-g rule).
 */

const AMBER = "#e2a83f";

const anim = (name: string, dur: string, delay = "0s", mode = ""): CSSProperties => ({
  animation: `${name} ${dur} ${delay} infinite ${mode} ease-in-out`.replace(
    /\s+/g,
    " "
  ),
});

/** Signal flowing into a resolving node. */
export function GlyphFlow() {
  return (
    <svg className="lx-g" width={40} height={40} viewBox="0 0 40 40" fill="none">
      <line x1={4} y1={20} x2={36} y2={20} stroke="rgba(226,168,63,.28)" strokeWidth={1} />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={6}
          cy={20}
          r={2.6}
          fill={AMBER}
          style={anim("lx-flow", "2.4s", `${i * 0.55}s`)}
        />
      ))}
      <circle
        cx={34}
        cy={20}
        r={3.4}
        fill="none"
        stroke={AMBER}
        strokeWidth={1.3}
        style={anim("lx-pulse", "2.4s")}
      />
    </svg>
  );
}

/** Disparate sources converging on one system. */
export function GlyphConverge() {
  const src: [number, number][] = [
    [5, 8],
    [5, 20],
    [5, 32],
  ];
  return (
    <svg className="lx-g" width={40} height={40} viewBox="0 0 40 40" fill="none">
      {src.map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y} L30 20`}
          stroke="rgba(226,168,63,.55)"
          strokeWidth={1.2}
          strokeDasharray={34}
          strokeDashoffset={34}
          style={anim("lx-dash", "1.6s", `${i * 0.2}s`, "alternate")}
        />
      ))}
      {src.map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r={2} fill="rgba(200,196,186,.7)" />
      ))}
      <circle cx={32} cy={20} r={3.6} fill={AMBER} style={anim("lx-pulse", "2s")} />
    </svg>
  );
}

/** Noise resolving into an ordered grid. */
export function GlyphResolve() {
  const dots = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const idx = i * 3 + j;
      dots.push(
        <circle
          key={idx}
          cx={8 + i * 12}
          cy={8 + j * 12}
          r={2.2}
          fill={idx % 4 === 0 ? AMBER : "rgba(200,196,186,.75)"}
          style={anim("lx-tw", "2.6s", `${idx * 0.18}s`)}
        />
      );
    }
  }
  return (
    <svg className="lx-g" width={40} height={40} viewBox="0 0 40 40" fill="none">
      {dots}
    </svg>
  );
}

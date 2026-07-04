const noise = [
  [40, 60], [120, 40], [205, 90], [40, 150], [420, 110],
  [60, 230], [150, 270], [440, 60], [400, 300], [30, 350],
  [100, 430], [260, 500], [420, 440], [450, 500], [190, 540],
  [330, 170], [70, 480], [460, 200],
];

const nodes = {
  A: [300, 190], B: [380, 145], C: [345, 265], D: [425, 235],
  E: [300, 330], F: [395, 350], G: [250, 405], H: [435, 390], I: [325, 450],
};

const edges: [keyof typeof nodes, keyof typeof nodes][] = [
  ["A", "B"], ["A", "C"], ["B", "D"], ["C", "D"],
  ["C", "E"], ["D", "F"], ["E", "F"], ["E", "G"],
  ["F", "H"], ["G", "I"], ["F", "I"],
];

/**
 * Static hero graphic: scattered, dim, unconnected points (noise) next to a
 * connected node network (structure) — a literal read of "we find the
 * structure hiding in the noise." No animation — the eye-glint stays the
 * only moving element on the page.
 */
export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
      style={{
        maskImage:
          "radial-gradient(circle at 65% 45%, black 55%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(circle at 65% 45%, black 55%, transparent 85%)",
      }}
    >
      {noise.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.2} className="fill-bone/35" />
      ))}

      {edges.map(([a, b], i) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            className="stroke-steel-text/70"
            strokeWidth={1.5}
          />
        );
      })}

      {Object.entries(nodes).map(([key, [x, y]]) => (
        <circle
          key={key}
          cx={x}
          cy={y}
          r={4.5}
          className="fill-obsidian stroke-steel-text"
          strokeWidth={2}
        />
      ))}
    </svg>
  );
}

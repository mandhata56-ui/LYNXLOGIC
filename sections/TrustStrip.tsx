const industries = [
  "HEALTHCARE",
  "MINING",
  "PUBLIC SECTOR",
  "LOGISTICS",
  "FINANCE",
];

export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center gap-[clamp(18px,3.5vw,52px)] border-t border-bone/[0.08] pb-[clamp(52px,6vw,84px)] pt-[22px] font-mono text-[12.5px] tracking-[0.06em] text-[#7f7b70]">
      <span className="text-[#b8b3a7]">TRUSTED BY OPERATORS IN</span>
      {industries.map((name, i) => (
        <span key={name} className="contents">
          {i > 0 && <span aria-hidden="true">·</span>}
          <span>{name}</span>
        </span>
      ))}
    </div>
  );
}

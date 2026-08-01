import { Reveal } from "@/components/Reveal";
import { GridBg } from "@/components/GridBg";

const posts = [
  {
    cat: "MINING",
    tag3: "MIN",
    tint: "#c9a25e",
    title: "The predictive-maintenance math for a single haul truck.",
    meta: "7 MIN · JUL 2026",
  },
  {
    cat: "SME",
    tag3: "SME",
    tint: "#8fa38b",
    title: 'What "AI-ready" actually means for a 40-person company.',
    meta: "6 MIN · JUN 2026",
  },
  {
    cat: "PUBLIC SECTOR",
    tag3: "GOV",
    tint: "#9aa8c0",
    title: "Cutting a permit-approval queue from weeks to hours.",
    meta: "8 MIN · JUN 2026",
  },
];

// Blog (Insights list + Article) pages are a separate design not yet built —
// links anchor to this section as placeholders until those pages exist.
const ARTICLE_HREF = "/#insights";

export function Insights() {
  return (
    <Reveal
      as="section"
      id="insights"
      className="border-t border-bone/[0.08] py-[clamp(40px,6vw,80px)]"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="font-mono text-[13px] tracking-[0.2em] text-amber">
            INSIGHTS
          </span>
          <h2 className="mb-3 mt-3.5 max-w-[24ch] font-display text-[clamp(28px,4vw,46px)] font-semibold leading-[1.08] tracking-[-0.02em]">
            How real industries are being rebuilt by automation.
          </h2>
          <p className="m-0 max-w-[58ch] text-[17px] text-[#b8b3a7]">
            Field notes from the work — written for operators, indexed for
            search. Updated as we ship.
          </p>
        </div>
        <a
          href={ARTICLE_HREF}
          className="whitespace-nowrap border-b border-[rgba(226,168,63,.4)] pb-[3px] font-mono text-[13px] tracking-[0.06em] text-amber"
        >
          ALL ARTICLES →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-[1.4fr_1fr]">
        <a
          href={ARTICLE_HREF}
          className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[18px] border border-bone/[0.1] bg-[linear-gradient(180deg,rgba(12,14,13,.15),rgba(12,14,13,.85)),#1a1e1a] p-[34px] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-[rgba(226,168,63,.5)] lg:row-span-3"
        >
          <div className="absolute inset-0 opacity-50">
            <GridBg color="#e2a83f" opacity={0.16} />
          </div>
          <div className="relative">
            <span className="rounded-full bg-[rgba(226,168,63,.14)] px-[11px] py-[5px] font-mono text-[11px] tracking-[0.14em] text-amber">
              HEALTHCARE
            </span>
            <h3 className="mb-3 mt-5 max-w-[20ch] font-display text-[clamp(24px,3vw,34px)] font-semibold leading-[1.12] tracking-[-0.02em]">
              Prior-authorization is the AI use case hospitals actually feel.
            </h3>
            <p className="m-0 mb-[18px] max-w-[52ch] text-[15px] leading-[1.6] text-[#c8c4ba]">
              How one regional network cut a 6-day approvals backlog to same-day
              — without replacing a single clinician.
            </p>
            <span className="font-mono text-[12.5px] text-[#8f8b80]">
              9 MIN READ · JUL 2026
            </span>
          </div>
        </a>

        {posts.map((p) => (
          <a
            key={p.tag3}
            href={ARTICLE_HREF}
            className="group flex gap-[18px] rounded-[14px] border border-bone/[0.1] bg-card px-6 py-[22px] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-[rgba(226,168,63,.5)] hover:bg-[#171a17]"
          >
            <div
              className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[11px] font-mono text-[12px] font-medium text-obsidian"
              style={{ background: p.tint }}
            >
              {p.tag3}
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.12em] text-amber">
                {p.cat}
              </span>
              <h3 className="mb-2 mt-[7px] font-display text-[18px] font-semibold leading-[1.2] tracking-[-0.01em]">
                {p.title}
              </h3>
              <span className="font-mono text-[12px] text-[#8f8b80]">
                {p.meta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </Reveal>
  );
}

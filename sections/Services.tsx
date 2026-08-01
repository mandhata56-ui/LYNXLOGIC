import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { GlyphFlow, GlyphConverge, GlyphResolve } from "@/components/ServiceGlyphs";

interface Service {
  no: string;
  slug: string;
  glyph: ReactNode;
  title: string;
  badge?: string;
  tagline: string;
  desc: string;
  points: string[];
  metric: string;
  metricLabel: string;
}

const services: Service[] = [
  {
    no: "01",
    slug: "ai-automation",
    glyph: <GlyphFlow />,
    title: "AI Automation",
    tagline: "Give your team its week back.",
    desc: "The repetitive core of the job — data entry, approvals, handoffs between tools — runs itself, with people kept exactly where judgment matters.",
    points: [
      "Processes that keep running whether or not someone is watching them",
      "Built on the tools your team already uses, not a parallel system",
      "Human checkpoints where accuracy actually matters",
    ],
    metric: "~11 hrs",
    metricLabel: "RETURNED / PERSON / WEEK",
  },
  {
    no: "02",
    slug: "it-consulting",
    glyph: <GlyphConverge />,
    title: "IT Integration & Consulting",
    tagline: "Make your systems stop fighting.",
    desc: "Legacy platforms and patched-together infrastructure consolidated into architecture you can reason about — and scale without a rip-and-replace gamble.",
    points: [
      "Senior architecture — IT that supports growth instead of blocking it",
      "Vendor sprawl consolidated into a system you can reason about",
      "A migration path, not a rewrite",
    ],
    metric: "9 → 1",
    metricLabel: "TOOLS TO ONE SYSTEM OF RECORD",
  },
  {
    no: "03",
    slug: "public-sector",
    glyph: <GlyphResolve />,
    title: "Government & Public Sector",
    badge: "NEW · 2026",
    tagline: "Efficiency the public can see.",
    desc: "Measurable reductions in processing time, fewer points of failure, and service delivery that citizens can trust — with compliance built in from day one.",
    points: [
      "Compliance-grade audit trails from day one",
      "Citizen-facing workflows that cut wait times",
      "Procurement-ready documentation and handover",
    ],
    metric: "Days → hrs",
    metricLabel: "TIME-TO-SERVICE, MEASURED",
  },
];

export function Services() {
  return (
    <Reveal as="section" id="services" className="pb-[clamp(56px,7vw,96px)]">
      <span className="font-mono text-[13px] tracking-[0.2em] text-amber">
        SERVICES
      </span>
      <h2 className="mb-3 mt-3.5 max-w-[20ch] font-display text-[clamp(28px,4vw,46px)] font-semibold leading-[1.08] tracking-[-0.02em]">
        Three ways we bring structure to the noise.
      </h2>
      <p className="m-0 mb-11 max-w-[60ch] text-[17px] text-[#b8b3a7]">
        Most engagements start with the first two. The public-sector practice is
        new for 2026.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
        {services.map((svc) => (
          <Link
            key={svc.no}
            href={`/services/${svc.slug}`}
            className="group flex min-h-[400px] flex-col rounded-[16px] border border-bone/[0.1] bg-card px-7 pb-8 pt-[30px] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-[5px] hover:border-[rgba(226,168,63,.55)] hover:bg-[#171a17] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            <div className="mb-5 h-10">{svc.glyph}</div>
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[13px] text-amber">{svc.no}</span>
              {svc.badge && (
                <span className="rounded-full bg-amber px-[9px] py-1 font-mono text-[11px] tracking-[0.08em] text-obsidian">
                  {svc.badge}
                </span>
              )}
            </div>
            <h3 className="m-0 mb-1.5 font-display text-[23px] font-semibold tracking-[-0.01em]">
              {svc.title}
            </h3>
            <div className="m-0 mb-4 font-display text-[16px] font-medium text-amber">
              {svc.tagline}
            </div>
            <p className="m-0 mb-5 text-[15px] leading-[1.6] text-[#b8b3a7]">
              {svc.desc}
            </p>
            <ul className="m-0 mb-[22px] flex list-none flex-col gap-[11px] p-0">
              {svc.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-2.5 text-[14px] leading-[1.5] text-[#d6d2c8]"
                >
                  <span className="flex-none text-amber">—</span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-baseline gap-2.5 border-t border-bone/[0.1] pt-4">
              <span className="font-display text-[22px] font-semibold text-bone">
                {svc.metric}
              </span>
              <span className="font-mono text-[11px] tracking-[0.06em] text-[#8f8b80]">
                {svc.metricLabel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}

import Link from "next/link";
import { FadeUp } from "@/components/FadeUp";
import { getService } from "@/lib/services";

const cards = [getService("ai-automation")!, getService("it-consulting")!];
const publicSector = getService("public-sector")!;

export function Services() {
  return (
    <section id="services" className="bg-obsidian">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-14">
        {/* Header row */}
        <FadeUp
          as="div"
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-[640px]">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">
              Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-bone sm:text-[44px]">
              Three ways we bring structure to the noise.
            </h2>
          </div>
          <p className="max-w-[300px] text-[15px] leading-relaxed text-bone/55">
            Most engagements start with the first two. The public-sector
            practice is new for 2026.
          </p>
        </FadeUp>

        {/* Two titan cards */}
        <FadeUp as="div" delay={0.1} className="mt-[52px] grid gap-6 sm:grid-cols-2">
          {cards.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-[400px] flex-col border border-bone/10 bg-card px-10 pt-10 pb-9 transition-all duration-200 hover:-translate-y-[3px] hover:border-amber/55 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] text-amber">
                  {service.index}
                </span>
                <span className="flex h-10 w-10 items-center justify-center border border-bone/20 text-[17px] text-bone transition-colors group-hover:border-amber group-hover:text-amber">
                  →
                </span>
              </div>

              <h3 className="mt-16 mb-3.5 font-display text-[30px] font-semibold tracking-[-0.02em] text-bone">
                {service.title}
              </h3>
              <p className="max-w-[440px] text-base leading-[1.55] text-bone/66">
                {service.promise}
              </p>

              <ul className="mt-auto flex flex-col gap-[11px] border-t border-bone/10 pt-5">
                {service.points?.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[14.5px] text-bone/82">
                    <span aria-hidden="true" className="text-amber">
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </FadeUp>

        {/* Public-sector row (de-emphasized) */}
        <FadeUp as="div" delay={0.2} className="mt-6">
          <Link
            href={`/services/${publicSector.slug}`}
            className="group flex flex-col gap-4 border border-dashed border-bone/18 px-10 py-8 transition-colors hover:border-amber/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber sm:flex-row sm:items-center sm:gap-9"
          >
            <span className="font-mono text-[13px] text-bone/40">03</span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-[22px] font-semibold text-bone">
                {publicSector.title}
              </span>
              <span className="border border-amber/40 px-2 py-[3px] font-mono text-[10.5px] uppercase tracking-[0.08em] text-amber">
                New · 2026
              </span>
            </div>
            <span className="text-[14.5px] leading-relaxed text-bone/55 sm:flex-1">
              {publicSector.promise}
            </span>
            <span
              aria-hidden="true"
              className="text-[17px] text-bone/55 transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

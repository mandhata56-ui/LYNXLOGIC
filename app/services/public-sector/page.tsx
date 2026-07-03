import Link from "next/link";
import type { Metadata } from "next";
import { FadeUp } from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Government & Public Sector Efficiency — LynxLogic",
  description:
    "LynxLogic partners with government departments and public agencies to reduce processing times, strengthen accountability, and deliver measurable, auditable results.",
};

const outcomes = [
  {
    label: "Processing Time",
    description:
      "Workflows are re-engineered to remove bottlenecks and reduce the time citizens wait for a decision or a service.",
  },
  {
    label: "Accountability",
    description:
      "Every step of a process is logged, auditable, and traceable to a responsible party.",
  },
  {
    label: "Reliability",
    description:
      "Systems are built to perform predictably under public scrutiny and peak demand, not only in a demonstration.",
  },
  {
    label: "Compliance",
    description:
      "Solutions are designed around your department's existing security, privacy, and procurement requirements.",
  },
];

const focusAreas = [
  "Case and workflow processing",
  "Interagency data integration",
  "Compliance and audit readiness",
  "Citizen-facing service delivery",
  "Legacy system modernization",
];

const principles = [
  {
    label: "Phased delivery",
    description:
      "Rollouts are staged and reversible, with formal sign-off required at each milestone.",
  },
  {
    label: "Independent verification",
    description:
      "Outcomes are measured against agreed benchmarks, not vendor-reported estimates.",
  },
  {
    label: "Long-term support",
    description:
      "A named point of contact remains engaged after go-live, not only during procurement.",
  },
];

export default function PublicSectorPage() {
  return (
    <main className="flex-1">
      {/* Intro */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-40 sm:pb-24 sm:pt-48">
          <Link
            href="/#services"
            className="font-mono text-xs uppercase tracking-[0.15em] text-steel transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            ← Services
          </Link>

          <FadeUp
            as="p"
            delay={0.05}
            className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-steel"
          >
            Government &amp; Public Sector
          </FadeUp>

          <FadeUp
            as="h1"
            delay={0.1}
            className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.15] text-bone sm:text-5xl"
          >
            Public service delivery, modernized with accountability built in.
          </FadeUp>

          <FadeUp
            as="p"
            delay={0.15}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/70"
          >
            LynxLogic works with government departments and public agencies
            to reduce processing times, close gaps in oversight, and deliver
            services the public can rely on, without compromising the
            compliance and audit standards the sector requires.
          </FadeUp>

          <div className="mt-10">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-[4px] border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:outline-none"
            >
              Request a briefing
            </Link>
          </div>
        </div>
      </section>

      {/* Outcome pillars */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
            What departments can expect
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="border-t border-line pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-steel">
                  {outcome.label}
                </p>
                <p className="mt-3 max-w-md text-base leading-relaxed text-bone/70">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-16">
            <div>
              <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
                Where we work
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70">
                Engagements typically fall into one or more of the following
                areas, scoped to a specific department or program rather than
                an organization-wide transformation.
              </p>
            </div>
            <ul className="divide-y divide-line border-t border-line">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="py-4 text-base text-bone/80 first:pt-0"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
            How engagements are governed
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.label}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-steel">
                  {principle.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-bone/70">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
              Confidentiality and data handling are treated as a baseline
              requirement, not an add-on.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-bone/70">
              If your department is evaluating options for process
              modernization, we are glad to discuss scope, security posture,
              and procurement requirements directly.
            </p>
            <div className="mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-[4px] border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:outline-none"
              >
                Request a briefing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

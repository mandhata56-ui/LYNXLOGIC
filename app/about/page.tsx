import Link from "next/link";
import type { Metadata } from "next";
import { FadeUp } from "@/components/FadeUp";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About — LynxLogic",
  description:
    "LynxLogic is an applied AI and IT consulting practice that turns messy operations into systems your team can run on its own.",
  path: "/about",
});

const facts = [
  { label: "Headquarters", value: "New Delhi, India" },
  { label: "Delivery", value: "Australia & the United States" },
  {
    label: "Focus",
    value: "AI Automation, IT Consulting, Public Sector Efficiency",
  },
];

const values = [
  {
    label: "Clarity over complexity",
    description:
      "We'd rather ship something simple that works than something impressive that doesn't.",
  },
  {
    label: "Ownership, not dependency",
    description:
      "We build systems your team can run without us, not dependencies that need us forever.",
  },
  {
    label: "Honesty about scope",
    description:
      "If something can't be automated well, we say so before you pay for it, not after.",
  },
  {
    label: "Accountability by design",
    description:
      "Every system we build is auditable — you can see why it did what it did.",
  },
];

const workingStyle = [
  {
    label: "Small and senior",
    description:
      "The people who scope your engagement are the people who build it. No account layer, no handoffs.",
  },
  {
    label: "Direct communication",
    description:
      "You talk to the person doing the work, not a project manager relaying messages.",
  },
  {
    label: "Scoped, not open-ended",
    description:
      "Engagements have a defined scope and milestones, not an indefinite retainer clock.",
  },
];

const commitments = [
  "Response within one business day",
  "You own everything we build — code, workflows, and documentation",
  "No scope changes without agreement first",
  "Documentation delivered with every engagement, not just a working system",
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Intro */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-40 sm:pb-24 sm:pt-48">
          <FadeUp
            as="p"
            className="font-mono text-xs uppercase tracking-[0.2em] text-steel-text"
          >
            About
          </FadeUp>
          <FadeUp
            as="h1"
            delay={0.1}
            className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-bone sm:text-5xl"
          >
            An applied AI and IT consulting practice, built to turn
            operational noise into systems your team can run on its own.
          </FadeUp>
          <FadeUp
            as="p"
            delay={0.15}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/70"
          >
            LynxLogic designs and builds the automation, integrations, and
            infrastructure behind day-to-day operations — for private
            businesses and government departments alike. Every engagement
            starts with the same question: what&apos;s actually happening in
            this process, not what the org chart says is happening. From
            there, we build, document, and hand over systems that hold up
            without us in the room.
          </FadeUp>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-steel-text">
                  {fact.label}
                </p>
                <p className="mt-3 text-lg text-bone">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
            Why LynxLogic exists
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone/70">
            LynxLogic started from a simple observation: most operations
            aren&apos;t broken, they&apos;re just obscured — buried under
            manual steps, disconnected tools, and workarounds nobody wrote
            down. We built LynxLogic to bring the same clarity a lynx brings
            to a dark forest: find the structure that&apos;s already there,
            and make it visible.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-bone/70">
            We work out of New Delhi with clients across Australia and the
            United States, and stay small and senior on purpose — the people
            who scope an engagement are the people who deliver it.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
            What we believe
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.label} className="border-t border-line pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-steel-text">
                  {value.label}
                </p>
                <p className="mt-3 max-w-md text-base leading-relaxed text-bone/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working style */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
            How we work
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {workingStyle.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-steel-text">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-bone/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service commitments */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-16">
            <div>
              <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
                What you can count on
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70">
                Regardless of engagement size, every client gets the same
                baseline commitments.
              </p>
            </div>
            <ul className="divide-y divide-line border-t border-line">
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="py-4 text-base text-bone/80 first:pt-0"
                >
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-medium text-bone sm:text-3xl">
              Want to work with us?
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[4px] border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:outline-none"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { FadeUp } from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About — LynxLogic",
  description:
    "LynxLogic is the applied AI and IT consulting practice of Reliant Edge Software Solutions Private Limited, based in New Delhi and delivering globally.",
};

const facts = [
  { label: "Headquarters", value: "New Delhi, India" },
  { label: "Legal entity", value: "Reliant Edge Software Solutions Pvt. Ltd." },
  { label: "Delivery", value: "Australia & the United States" },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Intro */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-40 sm:pb-24 sm:pt-48">
          <FadeUp
            as="p"
            className="font-mono text-xs uppercase tracking-[0.2em] text-steel"
          >
            About
          </FadeUp>
          <FadeUp
            as="h1"
            delay={0.1}
            className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-bone sm:text-5xl"
          >
            LynxLogic is the brand. Reliant Edge Software Solutions Private
            Limited is who signs the contract.
          </FadeUp>
          <FadeUp
            as="p"
            delay={0.15}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/70"
          >
            LynxLogic is the applied AI and IT consulting practice of Reliant
            Edge Software Solutions Private Limited. Every engagement is
            delivered and invoiced through that entity, our registered
            company in India — the name on the brand is the same team as the
            name on the paperwork.
          </FadeUp>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-steel">
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

import Link from "next/link";
import { FadeUp } from "@/components/FadeUp";

export function CallToAction() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <FadeUp
          as="h2"
          className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight text-bone sm:text-4xl"
        >
          Ready to find the structure in your own noise?
        </FadeUp>
        <FadeUp
          as="p"
          delay={0.1}
          className="mx-auto mt-4 max-w-xl text-lg text-bone/70"
        >
          Tell us what's slowing you down. We'll tell you what it would take
          to fix it.
        </FadeUp>
        <FadeUp as="div" delay={0.2} className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[4px] bg-amber px-6 py-3 text-sm font-medium text-obsidian transition-colors hover:bg-amber/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
          >
            Book a call
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

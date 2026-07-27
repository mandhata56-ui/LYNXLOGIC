import Link from "next/link";
import { FadeUp } from "@/components/FadeUp";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-obsidian">
      {/* Radial amber glow behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(240,169,60,0.14), transparent 62%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 py-[120px] text-center sm:px-14">
        <FadeUp
          as="h2"
          className="mx-auto max-w-[720px] font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-bone sm:text-[52px]"
        >
          Ready to find the structure in your own noise?
        </FadeUp>
        <FadeUp
          as="p"
          delay={0.1}
          className="mx-auto mt-5 max-w-[520px] text-lg leading-relaxed text-bone/68"
        >
          Tell us what&apos;s slowing you down. We&apos;ll tell you what it
          would take to fix it — no obligation, no sales theater.
        </FadeUp>
        <FadeUp as="div" delay={0.2} className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-amber px-[30px] py-4 font-mono text-sm font-medium text-obsidian transition-colors hover:bg-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
          >
            Book a call →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

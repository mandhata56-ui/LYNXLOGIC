import Link from "next/link";
import { EyeGlint } from "@/components/EyeGlint";
import { FadeUp } from "@/components/FadeUp";
import { HeroGraphic } from "@/components/HeroGraphic";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-1/2 z-0 hidden h-[760px] w-[680px] -translate-y-1/2 lg:block"
      >
        <HeroGraphic />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 sm:py-40">
        <FadeUp
          as="p"
          onMount
          className="font-mono text-xs uppercase tracking-[0.2em] text-steel-text"
        >
          AI Automation — IT Consulting
        </FadeUp>

        <FadeUp
          as="h1"
          onMount
          delay={0.1}
          className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-bone sm:text-6xl"
        >
          We find the structure hiding in the noise
          <EyeGlint size={16} className="ml-3 -translate-y-2" />
        </FadeUp>

        <FadeUp
          as="p"
          onMount
          delay={0.2}
          className="mt-6 max-w-xl text-lg text-bone/70"
        >
          LynxLogic pairs applied AI with senior IT consulting to bring
          clarity, automation, and control to the processes that run your
          business.
        </FadeUp>

        <FadeUp as="div" onMount delay={0.3} className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[4px] border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:outline-none"
          >
            Book a call
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

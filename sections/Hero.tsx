import { EyeGlint } from "@/components/EyeGlint";
import { FadeUp } from "@/components/FadeUp";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-32 sm:py-40">
        <FadeUp
          as="p"
          onMount
          className="font-mono text-xs uppercase tracking-[0.2em] text-steel"
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
          <a
            href="#contact"
            className="inline-flex items-center rounded-[4px] border border-line px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-amber hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:outline-none"
          >
            Book a call
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

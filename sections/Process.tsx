import { FadeUp } from "@/components/FadeUp";

const steps = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We sit with the people who actually run the process, not just the org chart, to find where time and accuracy are being lost.",
  },
  {
    index: "02",
    title: "Map the workflow",
    description:
      "Every handoff, exception, and manual workaround gets documented into a single source of truth before a line of code is written.",
  },
  {
    index: "03",
    title: "Build & integrate",
    description:
      "Automations and systems are built against the real workflow and wired into the tools your team already uses, not a parallel system nobody adopts.",
  },
  {
    index: "04",
    title: "Handover & support",
    description:
      "Your team gets full visibility into how it works, documentation that holds up, and a support line for when the process changes.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <FadeUp
          as="p"
          className="font-mono text-xs uppercase tracking-[0.2em] text-steel"
        >
          Process
        </FadeUp>
        <FadeUp
          as="h2"
          delay={0.1}
          className="mt-4 max-w-2xl font-display text-3xl font-medium text-bone sm:text-4xl"
        >
          How an engagement runs, start to finish.
        </FadeUp>

        <FadeUp as="div" delay={0.2} className="mt-16">
          {/* Desktop: horizontal sequence */}
          <div className="hidden sm:flex sm:gap-6">
            {steps.map((step, i) => (
              <div key={step.index} className="relative flex-1">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-9 top-[18px] h-px bg-steel/40"
                    style={{ width: "calc(100% - 2.25rem + 1.5rem)" }}
                  />
                )}
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-steel/40 bg-obsidian font-mono text-xs text-steel">
                  {step.index}
                </span>
                <h3 className="mt-6 font-display text-lg font-medium text-bone">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-bone/70">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical sequence */}
          <div className="flex flex-col sm:hidden">
            {steps.map((step, i) => (
              <div key={step.index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-steel/40 font-mono text-xs text-steel">
                    {step.index}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-steel/40" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-display text-lg font-medium text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-bone/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

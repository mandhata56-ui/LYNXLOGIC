import { FadeUp } from "@/components/FadeUp";

const steps = [
  {
    num: "01",
    title: "Discovery",
    body: "We sit with the people who actually run the process, not just the org chart, to find where time and accuracy are being lost.",
  },
  {
    num: "02",
    title: "Map the workflow",
    body: "Every handoff, exception, and manual workaround gets documented into a single source of truth before a line of code is written.",
  },
  {
    num: "03",
    title: "Build & integrate",
    body: "Automations and systems are built against the real workflow and wired into the tools your team already uses.",
  },
  {
    num: "04",
    title: "Handover & support",
    body: "Your team gets full visibility, documentation that holds up, and a support line for when the process changes.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-bone text-obsidian">
      <div className="mx-auto w-full max-w-[1920px] px-6 py-24 sm:px-14">
        <FadeUp
          as="p"
          className="font-mono text-xs uppercase tracking-[0.14em] text-amber-deep"
        >
          Process
        </FadeUp>
        <FadeUp
          as="h2"
          delay={0.1}
          className="mt-4 mb-14 max-w-[640px] font-display text-3xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[44px]"
        >
          How an engagement runs, start to finish.
        </FadeUp>

        <FadeUp
          as="div"
          delay={0.15}
          className="grid grid-cols-1 gap-px border border-obsidian/12 bg-obsidian/12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex min-h-[230px] flex-col bg-bone px-7 pt-8 pb-10"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-[40px] font-bold leading-none">
                  {step.num}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-obsidian/12" />
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-obsidian/66">
                {step.body}
              </p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

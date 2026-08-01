import { Reveal } from "@/components/Reveal";

const steps = [
  {
    no: "01",
    title: "Discovery",
    desc: "We sit with the people who actually run the process, not just the org chart, to find where time and accuracy are being lost.",
  },
  {
    no: "02",
    title: "Map the workflow",
    desc: "Every handoff, exception, and manual workaround gets documented into a single source of truth before a line of code is written.",
  },
  {
    no: "03",
    title: "Build & integrate",
    desc: "Automations and systems are built against the real workflow and wired into the tools your team already uses.",
  },
  {
    no: "04",
    title: "Handover & support",
    desc: "Your team gets full visibility, documentation that holds up, and a support line for when the process changes.",
  },
];

export function Process() {
  return (
    <Reveal
      as="section"
      id="process"
      className="border-t border-bone/[0.08] py-[clamp(40px,6vw,80px)]"
    >
      <span className="font-mono text-[13px] tracking-[0.2em] text-amber">
        PROCESS
      </span>
      <h2 className="mb-11 mt-3.5 max-w-[22ch] font-display text-[clamp(28px,4vw,46px)] font-semibold leading-[1.08] tracking-[-0.02em]">
        How an engagement runs, start to finish.
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px overflow-hidden rounded-[16px] border border-bone/[0.08] bg-bone/[0.08]">
        {steps.map((st) => (
          <div
            key={st.no}
            className="relative min-h-[214px] bg-obsidian px-[26px] pb-[34px] pt-[30px]"
          >
            <div className="mb-5 font-display text-[44px] font-bold leading-none text-[rgba(226,168,63,.28)]">
              {st.no}
            </div>
            <h3 className="m-0 mb-2.5 font-display text-[19px] font-semibold">
              {st.title}
            </h3>
            <p className="m-0 text-[14px] leading-[1.55] text-[#b8b3a7]">
              {st.desc}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

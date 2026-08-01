import { Reveal } from "@/components/Reveal";

const diffs = [
  {
    no: "01",
    title: "Senior people, every engagement.",
    desc: "No juniors learning on your budget. The person in the room has shipped this before and owns the outcome.",
  },
  {
    no: "02",
    title: "Your stack, not ours.",
    desc: "We automate on the tools you already run. No parallel system, no rip-and-replace, no lock-in.",
  },
  {
    no: "03",
    title: "Process before software.",
    desc: "Discovery and mapping come first, always. We don't automate a mess — we remove it, then build.",
  },
  {
    no: "04",
    title: "Built to outlive us.",
    desc: "Documentation and handover that still make sense long after the engagement ends and the process changes.",
  },
];

export function WhyUs() {
  return (
    <Reveal
      as="section"
      id="why"
      className="border-t border-bone/[0.08] py-[clamp(40px,6vw,80px)]"
    >
      <div className="grid grid-cols-1 items-start gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <span className="font-mono text-[13px] tracking-[0.2em] text-amber">
            WHY LYNXLOGIC
          </span>
          <h2 className="mb-4 mt-3.5 max-w-[16ch] font-display text-[clamp(28px,4vw,46px)] font-semibold leading-[1.08] tracking-[-0.02em]">
            The difference is who&rsquo;s in the room.
          </h2>
          <p className="m-0 max-w-[42ch] text-[17px] leading-[1.6] text-[#b8b3a7]">
            Automation is a commodity now. Judgment isn&rsquo;t. Here&rsquo;s
            what you actually get when you work with us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-bone/[0.08] bg-bone/[0.08] sm:grid-cols-2">
          {diffs.map((d) => (
            <div key={d.no} className="min-h-[190px] bg-obsidian px-[26px] pb-[30px] pt-7">
              <div className="mb-[18px] font-mono text-[12px] text-amber">
                {d.no}
              </div>
              <h3 className="m-0 mb-2.5 font-display text-[19px] font-semibold leading-[1.18]">
                {d.title}
              </h3>
              <p className="m-0 text-[14px] leading-[1.55] text-[#b8b3a7]">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

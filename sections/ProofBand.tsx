import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export function ProofBand() {
  return (
    <Reveal
      as="section"
      className="mb-[clamp(8px,2vw,24px)] rounded-[20px] border border-bone/[0.1] bg-card px-[clamp(28px,4vw,52px)] py-[clamp(34px,4vw,52px)]"
    >
      <div className="mb-[30px] font-mono text-[13px] tracking-[0.2em] text-amber">
        WHAT STRUCTURE IS WORTH
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-px overflow-hidden rounded-[14px] border border-bone/[0.08] bg-bone/[0.08]">
        <div className="bg-obsidian px-[26px] pb-8 pt-[30px]">
          <div className="font-display text-[clamp(40px,5vw,60px)] font-semibold leading-none tracking-[-0.03em] text-bone">
            ~<CountUp to={11} from={0} />{" "}
            <span className="text-[0.5em] font-medium text-[#8f8b80]">hrs</span>
          </div>
          <div className="mt-3.5 font-mono text-[12px] tracking-[0.06em] text-[#8f8b80]">
            RETURNED / PERSON / WEEK
          </div>
        </div>

        <div className="bg-obsidian px-[26px] pb-8 pt-[30px]">
          <div className="font-display text-[clamp(40px,5vw,60px)] font-semibold leading-none tracking-[-0.03em] text-bone">
            <CountUp to={1} from={9} />{" "}
            <span className="text-[0.5em] font-medium text-[#8f8b80]">
              system
            </span>
          </div>
          <div className="mt-3.5 font-mono text-[12px] tracking-[0.06em] text-[#8f8b80]">
            FROM 9 DISCONNECTED TOOLS
          </div>
        </div>

        <div className="bg-obsidian px-[26px] pb-8 pt-[30px]">
          <div className="font-display text-[clamp(40px,5vw,60px)] font-semibold leading-none tracking-[-0.03em] text-bone">
            Days<span className="text-amber"> → </span>hrs
          </div>
          <div className="mt-3.5 font-mono text-[12px] tracking-[0.06em] text-[#8f8b80]">
            TIME-TO-SERVICE, MEASURED
          </div>
        </div>
      </div>

      <div className="mt-[18px] font-mono text-[11.5px] tracking-[0.04em] text-[#6b6862]">
        ILLUSTRATIVE ENGAGEMENT OUTCOMES
      </div>
    </Reveal>
  );
}

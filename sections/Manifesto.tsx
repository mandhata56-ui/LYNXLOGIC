import { Reveal } from "@/components/Reveal";
import { GridBg } from "@/components/GridBg";

export function Manifesto() {
  return (
    <Reveal
      as="section"
      className="relative mb-[clamp(56px,7vw,96px)] overflow-hidden rounded-[22px] bg-[#f4f1ea] px-[clamp(28px,6vw,76px)] py-[clamp(44px,6vw,84px)] text-obsidian"
    >
      <div className="absolute inset-0 opacity-50">
        <GridBg color="#0c0e0d" opacity={0.09} />
      </div>
      <div className="relative max-w-[34ch]">
        <div className="mb-[26px] font-mono text-[13px] tracking-[0.2em] text-[#a97a1e]">
          OUR PREMISE
        </div>
        <p className="m-0 mb-[26px] max-w-[20ch] font-display text-[clamp(26px,3.6vw,44px)] font-medium leading-[1.16] tracking-[-0.02em]">
          Every business already contains the system it needs.
        </p>
        <p className="m-0 max-w-[52ch] text-[clamp(17px,2vw,21px)] leading-[1.6] text-[#4b4a44]">
          It&rsquo;s buried under manual work, dead tools, and knowledge that
          lives in one person&rsquo;s head. Our job is to find it — and make it
          run without them.
        </p>
        <div className="mt-[30px] font-mono text-[12.5px] tracking-[0.04em] text-[#8a8578]">
          — THE LYNXLOGIC THESIS
        </div>
      </div>
    </Reveal>
  );
}

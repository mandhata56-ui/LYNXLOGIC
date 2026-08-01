import Link from "next/link";
import { HeroMesh } from "@/components/HeroMesh";

export function Hero() {
  return (
    <header className="relative flex min-h-[clamp(420px,64vh,760px)] items-center overflow-hidden py-[clamp(64px,10vw,150px)] pb-[clamp(60px,9vw,120px)]">
      <div className="pointer-events-none absolute inset-y-0 left-[26%] right-[calc(50%_-_50vw)] z-0 hidden md:block">
        <HeroMesh className="block h-full w-full" />
      </div>

      <div className="animate-rise relative z-[2] max-w-[660px]">
        <div className="mb-[26px] font-mono text-[13px] tracking-[0.2em] text-amber">
          AI AUTOMATION · IT INTEGRATION · SENIOR CONSULTING
        </div>
        <h1 className="m-0 mb-[26px] text-balance font-display text-[clamp(38px,6vw,74px)] font-semibold leading-[1.01] tracking-[-0.026em]">
          We find the structure hiding in the noise.
        </h1>
        <p className="m-0 mb-[38px] max-w-[53ch] text-[clamp(17px,2vw,20px)] leading-[1.62] text-[#b8b3a7]">
          The manual steps, the tool-switching, the process that only works when
          one person is at their desk — that&rsquo;s operational noise, and it
          compounds quietly. We engineer it out: applied AI and senior IT
          consulting that turn your loudest processes into systems that simply
          run.
        </p>
        <div className="flex flex-wrap gap-[14px]">
          <Link
            href="/contact"
            className="rounded-full bg-amber px-[26px] py-[15px] text-[15px] font-semibold text-obsidian transition-colors hover:bg-[#f0bd5e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          >
            Book a call →
          </Link>
          <Link
            href="/#process"
            className="rounded-full border border-bone/[0.22] px-[26px] py-[15px] text-[15px] text-bone transition-colors hover:border-amber hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          >
            See how we work
          </Link>
        </div>
      </div>
    </header>
  );
}

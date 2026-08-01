import Link from "next/link";
import { GridBg } from "@/components/GridBg";

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative mb-[clamp(56px,7vw,96px)] mt-[clamp(24px,4vw,40px)] overflow-hidden rounded-[22px] bg-amber px-[clamp(28px,6vw,72px)] py-[clamp(44px,7vw,80px)] text-center text-obsidian"
    >
      <div className="absolute inset-0 opacity-40">
        <GridBg color="#0c0e0d" opacity={0.09} />
      </div>
      <div className="relative">
        <h2 className="mx-auto mb-[18px] max-w-[20ch] font-display text-[clamp(28px,4.5vw,52px)] font-semibold leading-[1.05] tracking-[-0.025em]">
          Ready to find the structure in your own noise?
        </h2>
        <p className="mx-auto mb-[34px] max-w-[54ch] text-[clamp(16px,2vw,19px)] leading-[1.6] text-[#3a3524]">
          Tell us what&rsquo;s slowing you down. We&rsquo;ll tell you what it
          would take to fix it — no obligation, no sales theater.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-obsidian px-[30px] py-4 text-[16px] font-semibold text-[#f4f1ea] transition-colors hover:bg-[#26302a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2 focus-visible:ring-offset-amber"
        >
          Book a call →
        </Link>
      </div>
    </section>
  );
}

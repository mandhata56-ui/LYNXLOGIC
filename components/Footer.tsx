const explore = [
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why us" },
  { href: "/#process", label: "Process" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-bone/[0.08]">
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-9 px-[clamp(20px,5vw,64px)] pb-12 pt-[clamp(40px,6vw,64px)] sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="mb-4 font-display text-[20px] font-semibold">LynxLogic</div>
          <p className="m-0 max-w-[38ch] text-[13.5px] leading-[1.7] text-[#8f8b80]">
            Reliant Edge Software Solutions Pvt. Ltd.
            <br />
            9th Floor, Tower C, Logix Cyber Park,
            <br />
            Industrial Area Phase 2, Noida, U.P. 201309, India
            <br />
            <span className="text-[#b8b3a7]">Working with teams worldwide</span>
          </p>
        </div>

        <div>
          <div className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[#7f7b70]">
            Explore
          </div>
          <div className="flex flex-col gap-3 text-[14.5px] text-[#b8b3a7]">
            {explore.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[#7f7b70]">
            Contact
          </div>
          <div className="flex flex-col gap-3 text-[14.5px] text-[#b8b3a7]">
            <a
              href="mailto:hello@lynxlogic.ai"
              className="transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              hello@lynxlogic.ai
            </a>
            <a
              href="tel:+919650658953"
              className="transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              +91 96506 58953
            </a>
          </div>
        </div>

        <div className="col-span-full border-t border-bone/[0.06] pt-6 text-[12.5px] text-[#6b6862]">
          © {year} Reliant Edge Software Solutions Private Limited. All rights
          reserved.
        </div>
      </div>

      {/* Amber glow bleeding up from behind the wordmark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-120px] z-0 mx-auto h-[340px] w-[min(1100px,92%)]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226,168,63,0.12), transparent 68%)",
          filter: "blur(34px)",
        }}
      />

      {/* Giant ghosted brand watermark — metallic gradient + slow sheen.
          Anchored so it bleeds off the bottom edge instead of the letters
          being clipped. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[10px] z-0 flex select-none justify-center overflow-hidden"
      >
        <span className="lx-watermark">LynxLogic</span>
      </div>
    </footer>
  );
}

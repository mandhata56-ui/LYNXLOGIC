const explore = [
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why us" },
  { href: "/#process", label: "Process" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-bone/[0.08]">
      {/* Content band — brand/address on the left, Explore + Contact grouped
          to the right, copyright directly beneath. Sits above the watermark. */}
      <div className="relative z-10 mx-auto w-full max-w-[1536px] px-[clamp(20px,5vw,64px)] pt-[clamp(40px,6vw,64px)]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-4 font-display text-[20px] font-semibold">
              LynxLogic
            </div>
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

          <div className="flex gap-16 sm:gap-24">
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
          </div>
        </div>

        <div className="mt-10 border-t border-bone/[0.06] pt-6 text-[12.5px] text-[#6b6862]">
          © {year} Reliant Edge Software Solutions Private Limited. All rights
          reserved.
        </div>
      </div>

      {/* Watermark band — the ghost gets its own clear space below the
          content, so nothing overlaps it. Amber glow blooms behind it. */}
      <div aria-hidden="true" className="relative mt-[clamp(24px,4vw,48px)]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[min(1200px,94%)] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(226,168,63,0.14), transparent 68%)",
            filter: "blur(38px)",
          }}
        />
        <div className="pointer-events-none flex select-none justify-center overflow-hidden pb-[clamp(8px,1.5vw,20px)]">
          <span className="lx-watermark">LynxLogic</span>
        </div>
      </div>
    </footer>
  );
}

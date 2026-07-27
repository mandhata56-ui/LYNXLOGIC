import { LogoMark } from "@/components/LogoMark";

const explore = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone/8 bg-obsidian">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 pb-10 pt-[52px] sm:flex-row sm:justify-between sm:px-14">
        {/* Brand + legal */}
        <div className="flex max-w-sm flex-col gap-4">
          <span className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-[-0.01em] text-bone">
            <LogoMark size={26} />
            LynxLogic
          </span>
          <p className="text-[13.5px] leading-relaxed text-bone/50">
            Reliant Edge Software Solutions Private Limited
            <br />
            New Delhi, India · Working with teams worldwide
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bone/40">
              Explore
            </p>
            {explore.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-bone/60 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bone/40">
              Contact
            </p>
            <a
              href="mailto:hello@lynxlogic.ai"
              className="text-sm text-bone/60 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              hello@lynxlogic.ai
            </a>
            <a
              href="tel:+919650658953"
              className="text-sm text-bone/60 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              +91 96506 58953
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 pb-10 sm:px-14">
        <p className="text-xs text-bone/35">
          © {year} Reliant Edge Software Solutions Private Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg font-semibold tracking-tight text-bone">
            LynxLogic
          </span>
          <p className="max-w-xs text-sm text-bone/60">
            Reliant Edge Software Solutions Private Limited
            <br />
            New Delhi, India
          </p>
          <a
            href="mailto:hello@lynxlogic.ai"
            className="mt-1 w-fit font-mono text-xs text-steel transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            hello@lynxlogic.ai
          </a>
          <a
            href="tel:+919650658953"
            className="w-fit font-mono text-xs text-steel transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            +91 96506 58953
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-bone/60 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-line px-6 py-6">
        <p className="mx-auto max-w-6xl font-mono text-[11px] text-bone/40">
          © {year} Reliant Edge Software Solutions Private Limited. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

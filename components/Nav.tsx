"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why us" },
  { href: "/#process", label: "Process" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-bone/[0.08] bg-obsidian/[0.72] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[88px] w-full max-w-[1536px] items-center justify-between px-[clamp(20px,5vw,64px)]">
        <a
          href="/#top"
          className="flex items-center gap-[11px] font-display text-[19px] font-semibold tracking-[-0.01em] text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
        >
          <LogoMark size={28} blink />
          LynxLogic
        </a>

        <nav className="hidden items-center gap-[clamp(16px,2.6vw,34px)] text-[15px] sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#b8b3a7] transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="whitespace-nowrap rounded-full border border-bone/20 px-[18px] py-[9px] text-bone transition-colors hover:border-amber hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            Book a call →
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber sm:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-bone/[0.08] bg-obsidian px-[clamp(20px,5vw,64px)] py-6 sm:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] text-[#b8b3a7] transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-fit whitespace-nowrap rounded-full border border-bone/20 px-[18px] py-[9px] text-bone transition-colors hover:border-amber hover:text-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              Book a call →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

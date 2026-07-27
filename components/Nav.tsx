"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-bone/8 bg-obsidian/85 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-[22px] sm:px-14">
        <a
          href="/"
          className="flex items-center gap-2.5 font-display text-[21px] font-semibold tracking-[-0.01em] text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
        >
          <LogoMark size={30} blink />
          LynxLogic
        </a>

        <nav className="hidden items-center gap-[38px] sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[14.5px] text-bone/72 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-amber px-[18px] py-[11px] font-mono text-[13px] font-medium text-obsidian transition-colors hover:bg-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
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
          className="border-t border-bone/8 bg-obsidian px-6 py-6 sm:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-[15px] text-bone/72 transition-colors hover:text-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-fit bg-amber px-[18px] py-[11px] font-mono text-[13px] font-medium text-obsidian transition-colors hover:bg-bone focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
            >
              Book a call →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/boarding", label: "Boarding" },
  { href: "/training", label: "Training" },
  { href: "/breeding", label: "Breeding" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Pages that open with a full-bleed dark Hero — Nav text starts light then flips to dark on scroll.
const heroPaths = new Set(["/", "/boarding", "/training", "/breeding", "/about"]);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hasHero = heroPaths.has(pathname);
  // On hero pages: light text at top, dark text after scroll. On no-hero pages: always dark.
  const useLightText = hasHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 md:py-2 flex items-center justify-between">
        <Link href="/" aria-label="Hawksmeadow Farm — Home" className="block">
          <Image
            src="/logo.png"
            alt="Hawksmeadow Farm"
            width={750}
            height={850}
            priority
            className={`h-28 md:h-36 w-auto -my-4 md:-my-6 transition-[filter] duration-500 ${
              useLightText ? "invert brightness-200 contrast-100" : ""
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: useLightText ? "var(--color-bg)" : "var(--color-text)",
              }}
              className="text-eyebrow no-underline transition-colors duration-500 hover:opacity-70"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          style={{
            color: useLightText ? "var(--color-bg)" : "var(--color-text)",
          }}
          className="md:hidden text-eyebrow transition-colors duration-500"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-bg)] px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-eyebrow text-[var(--color-text)] no-underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

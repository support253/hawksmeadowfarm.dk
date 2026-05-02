"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// x = initial translate (px). Positive = starts to the right of final position; negative = starts left.
// Inner links (closer to logo) get smaller offsets and earlier delays so they emerge from the logo first.
const leftLinks = [
  { href: "/boarding", label: "Boarding", x: 120, delay: 0.8 }, // outer
  { href: "/training", label: "Training", x: 60, delay: 0.6 }, // inner
];

const rightLinks = [
  { href: "/breeding", label: "Breeding", x: -60, delay: 0.6 }, // inner
  { href: "/about", label: "About", x: -120, delay: 0.8 }, // outer
];

const mobileLinks = [
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

  const linkColor = useLightText ? "var(--color-bg)" : "var(--color-text)";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 md:py-2 flex items-center justify-between gap-6 md:gap-10">
        {/* Desktop: left nav links — pushed toward center logo */}
        <nav className="hidden md:flex items-center gap-10 flex-1 justify-end">
          {leftLinks.map((l) => (
            <motion.span
              key={l.href}
              initial={{ opacity: 0, x: l.x }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: l.delay, ease: easeOut }}
            >
              <Link
                href={l.href}
                style={{ color: linkColor }}
                className="text-eyebrow no-underline transition-colors duration-500 hover:opacity-70"
              >
                {l.label}
              </Link>
            </motion.span>
          ))}
        </nav>

        {/* Logo — left on mobile, center on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
          className="md:flex-shrink-0"
        >
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
        </motion.div>

        {/* Desktop: right nav links (clustered near logo) + Contact (pushed far right) */}
        <nav className="hidden md:flex items-center gap-10 flex-1 justify-start">
          {rightLinks.map((l) => (
            <motion.span
              key={l.href}
              initial={{ opacity: 0, x: l.x }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: l.delay, ease: easeOut }}
            >
              <Link
                href={l.href}
                style={{ color: linkColor }}
                className="text-eyebrow no-underline transition-colors duration-500 hover:opacity-70"
              >
                {l.label}
              </Link>
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.2, ease: easeOut }}
            className="ml-auto"
          >
            <Link
              href="/contact"
              style={{ color: linkColor }}
              className="text-eyebrow no-underline border-b border-current pb-1 transition-colors duration-500 hover:opacity-70"
            >
              Contact
            </Link>
          </motion.span>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          style={{ color: linkColor }}
          className="md:hidden text-eyebrow transition-colors duration-500"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-bg)] px-6 py-8 flex flex-col gap-6">
          {mobileLinks.map((l) => (
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

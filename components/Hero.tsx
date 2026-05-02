"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "./PlaceholderImage";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero({
  eyebrow,
  headline,
  subhead,
  ctaLabel,
  ctaHref,
  imageLabel = "Hero — full bleed, dog in landscape, golden hour",
  videoSrc,
  posterSrc,
  compactMobile = false,
}: {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageLabel?: string;
  videoSrc?: string;
  posterSrc?: string;
  compactMobile?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Slow parallax — bg translates at ~25% scroll speed for a quiet, cinematic drift.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden ${
        compactMobile
          ? "h-[65vh] min-h-[480px] md:h-screen md:min-h-[640px]"
          : "h-screen min-h-[640px]"
      }`}
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        ) : (
          <PlaceholderImage ratio="16/9" label={imageLabel} className="h-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-text)]/15 via-transparent to-[var(--color-text)]/55" />
      </motion.div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            className="text-eyebrow hero-overlay-eyebrow mb-6"
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: easeOut }}
          className="font-display hero-overlay-headline mb-6"
          style={{ fontSize: "var(--text-display)" }}
        >
          {headline}
        </motion.h1>

        {subhead && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
            className="font-display-italic hero-overlay-headline text-[20px] md:text-[28px] max-w-[640px] mb-10"
          >
            {subhead}
          </motion.p>
        )}

        {ctaLabel && ctaHref && (
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
            href={ctaHref}
            className="inline-block self-start text-eyebrow hero-overlay-cta border-b pb-2 hover:opacity-70 transition-opacity no-underline"
          >
            {ctaLabel}
          </motion.a>
        )}
      </div>
    </section>
  );
}

import PlaceholderImage from "./PlaceholderImage";

export default function Hero({
  eyebrow,
  headline,
  subhead,
  ctaLabel,
  ctaHref,
  imageLabel = "Hero — full bleed, dog in landscape, golden hour",
  videoSrc,
  posterSrc,
}: {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageLabel?: string;
  videoSrc?: string;
  posterSrc?: string;
}) {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
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
      </div>

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
        {eyebrow && (
          <span className="text-eyebrow hero-overlay-eyebrow mb-6">
            {eyebrow}
          </span>
        )}

        <h1
          className="font-display hero-overlay-headline mb-6"
          style={{ fontSize: "var(--text-display)" }}
        >
          {headline}
        </h1>

        {subhead && (
          <p className="font-display-italic hero-overlay-headline text-[20px] md:text-[28px] max-w-[640px] mb-10">
            {subhead}
          </p>
        )}

        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block self-start text-eyebrow hero-overlay-cta border-b pb-2 hover:opacity-70 transition-opacity no-underline"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}

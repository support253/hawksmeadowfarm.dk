import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function BreedingFlagship({
  ctaHref = "/breeding",
  videoSrc,
  imageSrc,
  imageLabel = "home-3 — full-bleed cinematic working-line black Lab portrait, golden hour rim light, misted meadow or dappled woodland, 16:9 landscape",
}: {
  ctaHref?: string;
  videoSrc?: string;
  imageSrc?: string;
  imageLabel?: string;
}) {
  return (
    <section className="relative w-full h-[80vh] min-h-[640px] max-h-[880px] overflow-hidden">
      {/* Full-bleed bg — image, video, or placeholder */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        ) : imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        ) : (
          <PlaceholderImage ratio="16/9" label={imageLabel} className="h-full" />
        )}

        {/* Soft directional gradient — heavy on the left where text sits, clear on the right where the imagery is hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1612]/80 via-[#1A1612]/35 to-transparent" />
        {/* Subtle bottom darkening for premium mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1612]/30" />
      </div>

      {/* Text overlay — left third */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center">
        <Reveal className="max-w-[520px] flex flex-col gap-8 md:gap-10">
          <span className="text-eyebrow hero-overlay-eyebrow">
            The Breeding Programme
          </span>

          <h2
            className="font-display hero-overlay-headline"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Selective by design.
          </h2>

          <p
            className="font-display-italic hero-overlay-headline"
            style={{ fontSize: "var(--text-h3)", lineHeight: 1.4 }}
          >
            Our current pairing involves the current World Field Trials
            Champion. A litter is expected July 2026. Availability will be
            limited.
          </p>

          <p
            className="hero-overlay-headline max-w-[460px]"
            style={{ fontSize: "17px", lineHeight: 1.7, opacity: 0.9 }}
          >
            Pairings are chosen with care — temperament, health, working ability.
            We breed for balanced, capable dogs, not for volume.
          </p>

          <a
            href={ctaHref}
            className="inline-block self-start text-eyebrow hero-overlay-cta border-b pb-2 hover:opacity-70 transition-opacity no-underline"
          >
            Read about the programme
          </a>
        </Reveal>
      </div>
    </section>
  );
}

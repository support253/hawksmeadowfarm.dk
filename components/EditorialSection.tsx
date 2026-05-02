import PlaceholderImage from "./PlaceholderImage";
import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow?: string;
  heading: string;
  body: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  imageLabel?: string;
  imageRatio?: "4/5" | "3/2" | "1/1";
  imageSide?: "left" | "right";
  videoSrc?: string;
  imageSrc?: string;
};

export default function EditorialSection({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  imageLabel = "Section image — landscape orientation",
  imageRatio = "4/5",
  imageSide = "left",
  videoSrc,
  imageSrc,
}: Props) {
  const ImageBlock = (
    <div className="lg:col-span-7">
      <PlaceholderImage
        ratio={imageRatio}
        label={imageLabel}
        videoSrc={videoSrc}
        imageSrc={imageSrc}
      />
    </div>
  );

  const TextBlock = (
    <div className="lg:col-span-5 flex flex-col gap-8">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className="font-display text-[var(--color-text)]"
        style={{ fontSize: "var(--text-h1)" }}
      >
        {heading}
      </h2>
      <div className="editorial-prose text-[var(--color-text)]">{body}</div>
      {ctaLabel && ctaHref && (
        <a href={ctaHref} className="text-link text-eyebrow self-start">
          {ctaLabel}
        </a>
      )}
    </div>
  );

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {imageSide === "left" ? (
            <>
              {ImageBlock}
              {TextBlock}
            </>
          ) : (
            <>
              {TextBlock}
              {ImageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

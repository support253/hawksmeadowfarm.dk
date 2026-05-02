import PlaceholderImage from "./PlaceholderImage";
import Eyebrow from "./Eyebrow";

export default function SplitSection({
  eyebrow,
  heading,
  body,
  imageLabel = "Section image — full bleed half",
  imageSide = "left",
  variant = "light",
}: {
  eyebrow?: string;
  heading: string;
  body: React.ReactNode;
  imageLabel?: string;
  imageSide?: "left" | "right";
  variant?: "light" | "moss";
}) {
  const isMoss = variant === "moss";

  const ImageBlock = (
    <div className="w-full lg:w-1/2 h-[60vh] min-h-[420px] lg:h-[80vh]">
      <PlaceholderImage ratio="3/2" label={imageLabel} className="h-full" />
    </div>
  );

  const TextBlock = (
    <div
      className={`w-full lg:w-1/2 flex items-center justify-center px-6 md:px-12 py-24 lg:py-0 ${
        isMoss
          ? "bg-[var(--color-moss)] text-[var(--color-bg)]"
          : "bg-[var(--color-bg)] text-[var(--color-text)]"
      }`}
    >
      <div className="max-w-[480px] flex flex-col gap-8">
        {eyebrow && (
          <span
            className={`text-eyebrow ${
              isMoss ? "text-[var(--color-bg)] opacity-80" : ""
            }`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className="font-display"
          style={{ fontSize: "var(--text-h1)" }}
        >
          {heading}
        </h2>
        <div
          className={`editorial-prose ${
            isMoss ? "text-[var(--color-bg)]/85" : ""
          }`}
        >
          {body}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full flex flex-col lg:flex-row">
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
    </section>
  );
}

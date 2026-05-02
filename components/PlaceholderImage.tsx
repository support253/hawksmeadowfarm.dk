type AspectRatio = "16/9" | "4/5" | "3/2" | "1/1" | "21/9";

const ratioClasses: Record<AspectRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
};

export default function PlaceholderImage({
  ratio = "16/9",
  label,
  className = "",
  videoSrc,
  imageSrc,
}: {
  ratio?: AspectRatio;
  label?: string;
  className?: string;
  videoSrc?: string;
  imageSrc?: string;
}) {
  return (
    <div
      className={`${ratioClasses[ratio]} w-full bg-[var(--color-earth)]/25 flex items-center justify-center overflow-hidden rounded-xl ${className}`}
    >
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
        <img
          src={imageSrc}
          alt={label ?? ""}
          className="w-full h-full object-cover"
        />
      ) : label ? (
        <span className="text-eyebrow text-[var(--color-text-muted)] px-4 text-center">
          [{label}]
        </span>
      ) : null}
    </div>
  );
}

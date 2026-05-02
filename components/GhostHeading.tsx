type Position =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center";

const placements: Record<Position, string> = {
  "top-right": "top-[-3vw] right-[-4vw]",
  "top-left": "top-[-3vw] left-[-4vw]",
  "bottom-right": "bottom-[-3vw] right-[-4vw]",
  "bottom-left": "bottom-[-3vw] left-[-4vw]",
  "top-center": "top-[-4vw] left-1/2 -translate-x-1/2",
};

const sizes = {
  md: "clamp(160px, 20vw, 320px)",
  lg: "clamp(220px, 26vw, 440px)",
  xl: "clamp(280px, 32vw, 560px)",
};

export default function GhostHeading({
  children,
  position = "top-right",
  size = "lg",
}: {
  children: React.ReactNode;
  position?: Position;
  size?: keyof typeof sizes;
}) {
  return (
    <span
      aria-hidden
      className={`font-display-italic absolute ${placements[position]} text-[var(--color-moss)] opacity-[0.06] pointer-events-none select-none whitespace-nowrap`}
      style={{ fontSize: sizes[size], lineHeight: 0.85 }}
    >
      {children}
    </span>
  );
}

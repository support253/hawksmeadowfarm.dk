export default function OrnamentDivider({
  width = "default",
}: {
  width?: "default" | "wide";
}) {
  const lineWidth = width === "wide" ? "w-20" : "w-12";
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`block ${lineWidth} h-px bg-[var(--color-moss)]/40`} />
      <span className="block w-1.5 h-1.5 rotate-45 bg-[var(--color-moss)]/70" />
      <span className={`block ${lineWidth} h-px bg-[var(--color-moss)]/40`} />
    </div>
  );
}

export default function Quote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Ghost quotation mark — magazine pull-quote treatment */}
      <span
        aria-hidden
        className="font-display-italic absolute top-[-4vw] left-1/2 -translate-x-1/2 text-[var(--color-moss)] opacity-[0.08] pointer-events-none select-none"
        style={{ fontSize: "clamp(320px, 42vw, 600px)", lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <div className="relative max-w-[860px] mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-10">
        <p
          className="font-display-italic text-[var(--color-moss)]"
          style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
        >
          &ldquo;{children}&rdquo;
        </p>

        {attribution && (
          <div className="flex items-center justify-center gap-4">
            <span className="block w-8 h-px bg-[var(--color-text-muted)]/60" />
            <p className="text-eyebrow">{attribution}</p>
            <span className="block w-8 h-px bg-[var(--color-text-muted)]/60" />
          </div>
        )}
      </div>
    </section>
  );
}

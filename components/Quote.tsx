import Reveal from "./Reveal";

export default function Quote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Reveal className="max-w-[860px] mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-10">
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
      </Reveal>
    </section>
  );
}

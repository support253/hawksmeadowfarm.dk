export default function Quote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
        <p
          className="font-display-italic text-[var(--color-moss)]"
          style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
        >
          &ldquo;{children}&rdquo;
        </p>
        {attribution && (
          <p className="text-eyebrow mt-10">{attribution}</p>
        )}
      </div>
    </section>
  );
}

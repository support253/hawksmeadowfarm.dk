import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";

const galleryItems: Array<{
  ratio: "4/5" | "3/2" | "1/1" | "16/9";
  label: string;
  span?: string;
}> = [
  { ratio: "4/5", label: "Dog at rest in long grass, low evening sun", span: "lg:col-span-7" },
  { ratio: "3/2", label: "Detail — handler hand on dog at heel", span: "lg:col-span-5" },
  { ratio: "16/9", label: "Wide woodland — fields, fence line, early morning mist", span: "lg:col-span-12" },
  { ratio: "4/5", label: "Working dog mid-stride across field", span: "lg:col-span-5" },
  { ratio: "3/2", label: "Kennel exterior — calm, considered architecture", span: "lg:col-span-7" },
  { ratio: "1/1", label: "Detail — paw print in soft earth", span: "lg:col-span-4" },
  { ratio: "3/2", label: "Pup at play, soft golden light", span: "lg:col-span-8" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero header (compact, not full screen) */}
      <section className="pt-40 md:pt-48 pb-24">
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h1
            className="font-display text-[var(--color-text)] mt-8"
            style={{ fontSize: "var(--text-h1)" }}
          >
            The setting, the dogs, the work.
          </h1>
          <p className="editorial-prose mx-auto mt-8 text-[var(--color-text-muted)]">
            A small selection. We update it occasionally — never overcrowded.
          </p>
        </Reveal>
      </section>

      {/* Editorial grid */}
      <section className="pb-32 md:pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
            {galleryItems.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1} className={item.span ?? "lg:col-span-6"}>
                <PlaceholderImage ratio={item.ratio} label={item.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

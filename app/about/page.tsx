import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";

const values = [
  {
    label: "Organic",
    body: "A natural environment built on woodland, field and open grassland — not concrete and chrome.",
  },
  {
    label: "Calm",
    body: "Low-stress routines and quiet handling. The dogs notice. So do their owners.",
  },
  {
    label: "Structured",
    body: "Predictable rhythms across the day. Dogs do best when they know what comes next.",
  },
  {
    label: "Professional",
    body: "Built on over a decade of hands-on experience with working dogs.",
  },
  {
    label: "Considered",
    body: "We work with a limited number of dogs. Quality over volume, every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="A different kind of kennel."
        subhead="Twelve years of professional dog handling, applied to the way dogs are kept."
        imageLabel="About hero — handler walking through morning fields with dog at heel"
      />

      {/* Story */}
      <section className="py-32 md:py-48">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
          <Eyebrow>The Story</Eyebrow>
          <p
            className="font-display-italic text-[var(--color-text)] mt-10"
            style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
          >
            Built on a decade of experience. Designed for the next.
          </p>
          <p className="editorial-prose mx-auto mt-10 text-[var(--color-text-muted)]">
            Hawksmeadow Farm was created to offer a level of care and
            understanding not commonly found in traditional kennels. Built on
            over twelve years of professional dog handling — across boarding,
            training and breeding — the approach is the same throughout:
            considered, quiet, and built around the individual dog.
          </p>
        </div>
      </section>

      {/* Portrait + setting */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <PlaceholderImage
            ratio="4/5"
            label="Portrait of Ben — natural light, working environment, no studio energy"
          />
          <PlaceholderImage
            ratio="4/5"
            label="The setting — wide woodland or field, early morning"
          />
        </div>
      </section>

      {/* Philosophy values */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <Eyebrow>Philosophy</Eyebrow>
            <h2
              className="font-display text-[var(--color-text)] mt-8"
              style={{ fontSize: "var(--text-h1)" }}
            >
              How we work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col gap-4">
                <h3
                  className="font-display text-[var(--color-moss)]"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {v.label}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Quote attribution="On Approach">
        Dogs perform best when given clarity, structure and the right
        environment.
      </Quote>

      {/* Setting */}
      <section className="py-32 md:py-48">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
          <Eyebrow>The Setting</Eyebrow>
          <p
            className="font-display-italic text-[var(--color-text)] mt-10"
            style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
          >
            Fyn, Denmark.
          </p>
          <p className="editorial-prose mx-auto mt-10 text-[var(--color-text-muted)]">
            Quiet woodland and open grassland. Long mornings. Long evenings.
            The kind of place that gives a dog room to be a dog.
          </p>
        </div>
      </section>
    </>
  );
}

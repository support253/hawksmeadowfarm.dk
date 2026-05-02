import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";

const values = [
  {
    label: "Organic & Natural",
    body: "A real environment built on woodland, field and open grassland — not concrete and chrome.",
  },
  {
    label: "Calm, Structured Routines",
    body: "Predictable rhythms across the day. Dogs do best when they know what comes next.",
  },
  {
    label: "Well-Rounded Dogs",
    body: "We aim to send dogs home more capable, more settled, and more themselves than when they arrived.",
  },
  {
    label: "Responsible Feeding",
    body: "Each dog fed to their own diet and schedule. We don't shortcut nutrition.",
  },
  {
    label: "Professional Handling",
    body: "Built on over a decade of hands-on experience with working dogs and high-drive breeds.",
  },
  {
    label: "Low-Stress Development",
    body: "Balanced exposure, quiet correction, generous rest. Stress is the enemy of learning.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="A different kind of kennel."
        subhead="Twelve years of professional dog handling, applied to the way dogs are kept."
        videoSrc="/hf_20260502_191156_d26b6784-9433-4086-9d8a-54ffe92845f1.mp4"
      />

      {/* Story */}
      <section className="py-24 md:py-32">
        <Reveal className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
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
        </Reveal>
      </section>

      {/* Portrait + setting */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <PlaceholderImage
              ratio="4/5"
              label="Portrait of Ben — natural light, working environment, no studio energy"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <PlaceholderImage
              ratio="4/5"
              label="The setting — wide woodland or field, early morning"
            />
          </Reveal>
        </div>
      </section>

      {/* Philosophy values */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-20">
            <Eyebrow>Philosophy</Eyebrow>
            <h2
              className="font-display text-[var(--color-text)] mt-8"
              style={{ fontSize: "var(--text-h1)" }}
            >
              How we work.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-12">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.08} className="flex flex-col gap-4">
                <h3
                  className="font-display text-[var(--color-moss)]"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  {v.label}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Quote attribution="On Approach">
        Dogs perform best when given clarity, structure and the right
        environment.
      </Quote>

      {/* Setting */}
      <section className="py-24 md:py-32">
        <Reveal className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
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
        </Reveal>
      </section>
    </>
  );
}

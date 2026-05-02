import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import Quote from "@/components/Quote";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import OrnamentDivider from "@/components/OrnamentDivider";
import Reveal from "@/components/Reveal";

export default function BreedingPage() {
  return (
    <>
      <Hero
        eyebrow="The Breeding Programme"
        headline="Selective by design."
        subhead="Pairings chosen for temperament, health and working ability."
        ctaLabel="Puppy Enquiry"
        ctaHref="/contact"
        videoSrc="/hf_20260502_191149_9a70ebe7-5bd5-4d7f-ad2c-6b8b3a51de0e.mp4"
      />

      {/* Current pairing — editorial broadsheet moment */}
      <section className="py-32 md:py-48">
        <Reveal className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Metadata column — vertical moss hairline rule on lg+ */}
            <div className="lg:col-span-3 lg:border-r lg:border-[var(--color-moss)]/30 lg:pr-12 flex flex-col gap-5">
              <span className="text-eyebrow text-[var(--color-moss)]">
                Current Pairing
              </span>
              <span className="text-eyebrow text-[var(--color-text-muted)]">
                Litter Est. July 2026
              </span>
            </div>

            {/* Feature column — mixed roman/italic display, italic Champion as moss crescendo */}
            <div className="lg:col-span-9 flex flex-col gap-10">
              <h2
                className="font-display text-[var(--color-text)]"
                style={{ fontSize: "var(--text-display)", lineHeight: 0.95 }}
              >
                World Field Trials{" "}
                <span
                  className="font-display-italic text-[var(--color-moss)]"
                >
                  Champion.
                </span>
              </h2>

              <p
                className="font-display-italic text-[var(--color-text)] max-w-[56ch]"
                style={{ fontSize: "var(--text-h3)", lineHeight: 1.4 }}
              >
                Our current mating involves the current World Field Trials
                Champion. A litter is expected July 2026. Availability will be
                limited.
              </p>

              <a
                href="/contact"
                className="inline-block self-start text-eyebrow text-[var(--color-text)] border-b border-[var(--color-text)] pb-2 hover:text-[var(--color-moss)] hover:border-[var(--color-moss)] transition-colors no-underline"
              >
                Register Interest
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Programme philosophy */}
      <EditorialSection
        eyebrow="The Approach"
        heading="A programme, not a litter."
        body={
          <div className="flex flex-col gap-5">
            <p>
              Our breeding programme is highly selective and focused on
              producing balanced, capable dogs. Pairings are carefully chosen
              based on temperament, health and working ability — never on
              demand or convenience.
            </p>
            <p>
              We breed infrequently, and only when the right opportunity
              presents itself. Each litter is small. Each home is chosen with
              the same care.
            </p>
          </div>
        }
        imageLabel="Working dog at rest — natural setting, dignified composition"
        imageRatio="4/5"
        imageSide="left"
      />

      {/* Image break */}
      <section>
        <Reveal className="max-w-[1400px] mx-auto px-6 md:px-12">
          <PlaceholderImage
            ratio="21/9"
            label="Wide environment shot — fields, soft early light, sense of space"
          />
        </Reveal>
      </section>

      <EditorialSection
        eyebrow="What We Look For"
        heading="Temperament. Health. Working Ability."
        body={
          <div className="flex flex-col gap-5">
            <p>
              The dogs we breed are bred to live well — in the field, in the
              home, and through every stage in between. We test for health
              clearances and we observe temperament across multiple
              environments before any pairing is confirmed.
            </p>
            <p>
              Working ability is not optional. The dogs we produce are bred to
              do something, and to do it calmly.
            </p>
          </div>
        }
        imageLabel="Detail — paw prints in soft earth, single dog walking away"
        imageRatio="4/5"
        imageSide="right"
      />

      <Quote attribution="On Breeding">
        We breed for the next decade of a dog&rsquo;s life, not the first
        twelve weeks.
      </Quote>

      <section className="py-24 md:py-36">
        <Reveal className="max-w-[860px] mx-auto px-6 md:px-12 text-center flex flex-col gap-10 items-center">
          <OrnamentDivider />
          <Eyebrow>Puppy Enquiries</Eyebrow>
          <h2
            className="font-display text-[var(--color-text)]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Limited availability. Considered placements.
          </h2>
          <p className="editorial-prose mx-auto text-[var(--color-text-muted)]">
            We speak with every prospective owner before confirming a
            placement. Please reach out early if you would like to be
            considered for the upcoming litter.
          </p>
          <a
            href="/contact"
            className="text-eyebrow text-[var(--color-text)] border-b border-[var(--color-text)] pb-2 hover:text-[var(--color-moss)] hover:border-[var(--color-moss)] transition-colors no-underline"
          >
            Register Interest
          </a>
        </Reveal>
      </section>
    </>
  );
}

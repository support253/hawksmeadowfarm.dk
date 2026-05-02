import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import Quote from "@/components/Quote";
import Eyebrow from "@/components/Eyebrow";

export default function TrainingPage() {
  return (
    <>
      <Hero
        eyebrow="Training"
        headline="A quieter method."
        subhead="Calm, consistent training tailored to each dog."
        ctaLabel="Make an Enquiry"
        ctaHref="/contact"
        imageLabel="Training hero — handler walking with dog at heel, open field, soft morning light"
      />

      <section className="py-32 md:py-48">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
          <Eyebrow>The Method</Eyebrow>
          <p
            className="font-display-italic text-[var(--color-text)] mt-10"
            style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
          >
            Built on understanding, not pressure.
          </p>
          <p className="editorial-prose mx-auto mt-10 text-[var(--color-text-muted)]">
            With a background in professional dog handling, we offer training
            tailored to each dog&rsquo;s temperament and drive. The work is
            quiet, methodical and built on understanding — never on noise or
            force.
          </p>
        </div>
      </section>

      <EditorialSection
        eyebrow="Tailored to the Dog"
        heading="No two programmes are the same."
        body={
          <p>
            Every dog comes with a different history, drive and threshold for
            stress. Sessions are designed around the individual — assessing
            first, then planning, then training. This is slower than a
            template-led approach. It is also more effective.
          </p>
        }
        imageLabel="Training session — close detail of handler hand and lead"
        imageRatio="4/5"
        imageSide="left"
      />

      <EditorialSection
        eyebrow="Working Dogs Welcome"
        heading="Field-ready, household-calm."
        body={
          <p>
            We work with companion dogs and working breeds alike. Our setting —
            woodland, fields, varied ground — gives us scope to expose dogs to
            real conditions, not artificial ones. Dogs leave more capable, and
            calmer, than they arrive.
          </p>
        }
        imageLabel="Working dog — alert posture, woodland background, side profile"
        imageRatio="4/5"
        imageSide="right"
      />

      <Quote attribution="On Training">
        Clarity, structure, and the right environment. Dogs do the rest.
      </Quote>

      <section className="py-32 md:py-48">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center flex flex-col gap-10 items-center">
          <Eyebrow>Training Enquiries</Eyebrow>
          <h2
            className="font-display text-[var(--color-text)]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Speak to us about your dog.
          </h2>
          <a
            href="/contact"
            className="text-eyebrow text-[var(--color-text)] border-b border-[var(--color-text)] pb-2 hover:text-[var(--color-moss)] hover:border-[var(--color-moss)] transition-colors no-underline"
          >
            Enquire about Training
          </a>
        </div>
      </section>
    </>
  );
}

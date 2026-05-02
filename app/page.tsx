import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import BreedingFlagship from "@/components/BreedingFlagship";
import Quote from "@/components/Quote";
import Eyebrow from "@/components/Eyebrow";
import OrnamentDivider from "@/components/OrnamentDivider";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Fyn, Denmark"
        headline="Rooted in nature."
        subhead="Premium dog boarding, training and breeding — set in the woodland and grassland of Fyn."
        ctaLabel="Make an Enquiry"
        ctaHref="/contact"
        videoSrc="/hero.mp4"
      />

      {/* Intro */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-28">
        <Reveal className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-baseline gap-3 mb-2">
            <span
              className="font-display-italic text-[var(--color-moss)]"
              style={{ fontSize: "20px", lineHeight: 1 }}
            >
              I.
            </span>
            <Eyebrow>An Introduction</Eyebrow>
          </div>
          <p
            className="font-display-italic text-[var(--color-text)] mt-10"
            style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
          >
            A calm, structured environment for dogs of the highest standard.
          </p>
          <p className="editorial-prose mx-auto mt-10 text-[var(--color-text-muted)]">
            Set within the quiet woodland and open grassland of Fyn,
            Hawksmeadow Farm offers a professional, considered approach to dog
            care. Built on over a decade of hands-on experience with working
            dogs, our focus is simple — to provide a safe, balanced and
            natural environment where dogs can thrive.
          </p>
        </Reveal>
      </section>

      {/* Boarding */}
      <EditorialSection
        eyebrow="Boarding"
        heading="More than a kennel."
        body={
          <p>
            Our boarding is designed for dogs who require more than a standard
            kennel environment. Each dog benefits from structured routines,
            individual attention and access to secure outdoor space — without
            the noise and stress of conventional facilities.
          </p>
        }
        ctaLabel="About Boarding"
        ctaHref="/boarding"
        videoSrc="/home-1.mp4"
        imageRatio="4/5"
        imageSide="left"
      />

      {/* Training */}
      <EditorialSection
        eyebrow="Training"
        heading="Calm. Consistent. Considered."
        body={
          <p>
            With a background in professional dog handling, we offer training
            tailored to each dog&rsquo;s temperament and drive. The work is
            quiet, methodical and built on understanding — not pressure.
          </p>
        }
        ctaLabel="About Training"
        ctaHref="/training"
        videoSrc="/home-2.mp4"
        imageRatio="4/5"
        imageSide="right"
      />

      {/* Breeding flagship */}
      <BreedingFlagship />

      {/* Philosophy pulled quote */}
      <Quote attribution="Our Approach">
        Dogs perform best when given clarity, structure and the right
        environment. We provide all three.
      </Quote>

      {/* About teaser */}
      <EditorialSection
        eyebrow="About"
        heading="Twelve years of working with dogs."
        body={
          <p>
            Hawksmeadow Farm was created to offer a level of care and
            understanding not commonly found in traditional kennels — built on
            over a decade of professional dog handling experience.
          </p>
        }
        ctaLabel="About Hawksmeadow"
        ctaHref="/about"
        imageLabel="home-4 — handler from behind in waxed jacket with black Lab at heel, looking out across misted meadow at first light"
        imageRatio="4/5"
        imageSide="left"
      />

      {/* Closing CTA */}
      <section className="py-24 md:py-36">
        <Reveal className="max-w-[860px] mx-auto px-6 md:px-12 text-center flex flex-col gap-10 items-center">
          <OrnamentDivider />
          <Eyebrow>Enquiries</Eyebrow>
          <h2
            className="font-display text-[var(--color-text)]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            We work with a limited number of dogs.
          </h2>
          <p className="editorial-prose mx-auto text-[var(--color-text-muted)]">
            Please reach out to discuss boarding, training or breeding. We
            respond personally to every enquiry.
          </p>
          <a
            href="/contact"
            className="text-eyebrow text-[var(--color-text)] border-b border-[var(--color-text)] pb-2 hover:text-[var(--color-moss)] hover:border-[var(--color-moss)] transition-colors no-underline"
          >
            Make an Enquiry
          </a>
        </Reveal>
      </section>
    </>
  );
}

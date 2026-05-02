import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import Quote from "@/components/Quote";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import GhostHeading from "@/components/GhostHeading";
import OrnamentDivider from "@/components/OrnamentDivider";

export default function BoardingPage() {
  return (
    <>
      <Hero
        eyebrow="Boarding"
        headline="Quiet. Considered."
        subhead="A boarding environment built for dogs of the highest standard."
        ctaLabel="Make an Enquiry"
        ctaHref="/contact"
        imageLabel="Boarding hero — exterior of kennel building, soft dawn light, dogs in foreground"
      />

      {/* Intro */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <GhostHeading position="top-left" size="lg">
          Boarding
        </GhostHeading>
        <div className="relative max-w-[860px] mx-auto px-6 md:px-12 text-center">
          <Eyebrow>The Approach</Eyebrow>
          <p
            className="font-display-italic text-[var(--color-text)] mt-10"
            style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
          >
            Not a kennel. A countryside stay.
          </p>
          <p className="editorial-prose mx-auto mt-10 text-[var(--color-text-muted)]">
            Our boarding is designed for dogs who require more than a standard
            kennel environment. Each dog benefits from structured routines,
            individual attention and access to secure outdoor space — without
            the noise and stress of conventional facilities.
          </p>
        </div>
      </section>

      {/* What's included */}
      <EditorialSection
        eyebrow="What's Included"
        heading="A daily rhythm."
        body={
          <div className="flex flex-col gap-5">
            <p>
              Each stay includes structured exercise across the woodland and
              fields, individual feeding to your dog&rsquo;s usual diet, and
              calm one-to-one handling throughout the day.
            </p>
            <p>
              Medical needs are managed carefully, with notes shared on
              request. Dogs are settled, not stored — and we limit numbers
              accordingly.
            </p>
          </div>
        }
        imageLabel="Daily routine — dog at rest in shaded outdoor area"
        imageRatio="4/5"
        imageSide="right"
      />

      {/* Webcam mention */}
      <section className="py-24 md:py-32 bg-[var(--color-sage)]/15">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center flex flex-col gap-8">
          <Eyebrow>While You&rsquo;re Away</Eyebrow>
          <h2
            className="font-display text-[var(--color-text)]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            24/7 webcam access.
          </h2>
          <p className="editorial-prose mx-auto text-[var(--color-text)]">
            On confirmation of your booking we share a private link to your
            dog&rsquo;s livestream — so you can check in from anywhere, at any
            time during their stay.
          </p>
        </div>
      </section>

      {/* Image break */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <PlaceholderImage
            ratio="21/9"
            label="Wide environment shot — fields, kennels distant, golden hour"
          />
        </div>
      </section>

      <Quote attribution="On Boarding">
        Our standards reflect the dogs we keep, not the dogs we don&rsquo;t.
      </Quote>

      {/* Closing CTA */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <GhostHeading position="bottom-right" size="lg">
          Welcome
        </GhostHeading>
        <div className="relative max-w-[860px] mx-auto px-6 md:px-12 text-center flex flex-col gap-10 items-center">
          <OrnamentDivider />
          <Eyebrow>Boarding Enquiries</Eyebrow>
          <h2
            className="font-display text-[var(--color-text)]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Limited spaces. Considered enquiries.
          </h2>
          <a
            href="/contact"
            className="text-eyebrow text-[var(--color-text)] border-b border-[var(--color-text)] pb-2 hover:text-[var(--color-moss)] hover:border-[var(--color-moss)] transition-colors no-underline"
          >
            Enquire about Boarding
          </a>
        </div>
      </section>
    </>
  );
}

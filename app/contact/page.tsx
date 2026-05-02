import Eyebrow from "@/components/Eyebrow";
import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 md:pt-48 pb-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <Eyebrow>Enquiries</Eyebrow>
          <h1
            className="font-display text-[var(--color-text)] mt-8"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Speak with us.
          </h1>
          <p className="editorial-prose mx-auto mt-8 text-[var(--color-text-muted)]">
            We work with a limited number of dogs to maintain our standards.
            Please reach out for boarding, training or breeding enquiries —
            we respond personally to every message.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

          {/* Contact details */}
          <aside className="lg:col-span-5 flex flex-col gap-12 lg:pt-2">
            <div className="flex flex-col gap-3">
              <Eyebrow>Email</Eyebrow>
              <a
                href="mailto:info@hawksmeadowfarm.dk"
                className="font-display text-[var(--color-text)] no-underline hover:text-[var(--color-moss)] transition-colors"
                style={{ fontSize: "var(--text-h3)" }}
              >
                info@hawksmeadowfarm.dk
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <Eyebrow>Location</Eyebrow>
              <p
                className="font-display text-[var(--color-text)]"
                style={{ fontSize: "var(--text-h3)" }}
              >
                Fyn, Denmark
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Eyebrow>Hours</Eyebrow>
              <p className="text-[var(--color-text-muted)] text-[16px] leading-[1.7]">
                We respond to enquiries within one working day. Visits are by
                appointment only.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="pb-32 md:pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <div className="text-center">
            <Eyebrow>Find Us</Eyebrow>
          </div>
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-[var(--color-line)]">
            <iframe
              src="https://maps.google.com/maps?q=Fyn,Denmark&t=&z=10&ie=UTF8&iwloc=&output=embed"
              title="Hawksmeadow Farm — Fyn, Denmark"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

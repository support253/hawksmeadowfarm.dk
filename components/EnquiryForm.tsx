"use client";

import { useState } from "react";

const enquiryTypes = [
  "Boarding",
  "Training",
  "Breeding",
  "Other",
] as const;

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wiring deferred to post-design-approval (n8n webhook or mailto for v1)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-[640px] py-16">
        <p
          className="font-display-italic text-[var(--color-text)]"
          style={{ fontSize: "var(--text-h2)", lineHeight: 1.3 }}
        >
          Thank you. We&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-[640px] flex flex-col gap-10">
      <Field label="Name" name="name" type="text" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />

      <div className="flex flex-col gap-3">
        <label
          htmlFor="enquiry"
          className="text-eyebrow"
        >
          Enquiry type
        </label>
        <select
          id="enquiry"
          name="enquiry"
          className="border-0 border-b border-[var(--color-line)] bg-transparent text-[var(--color-text)] py-3 focus:border-[var(--color-moss)] focus:outline-none transition-colors text-[18px] appearance-none cursor-pointer"
        >
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="message" className="text-eyebrow">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="border-0 border-b border-[var(--color-line)] bg-transparent text-[var(--color-text)] py-3 focus:border-[var(--color-moss)] focus:outline-none transition-colors text-[18px] resize-none"
        />
      </div>

      <button
        type="submit"
        className="text-eyebrow text-[var(--color-text)] border-b border-[var(--color-text)] pb-2 self-start hover:text-[var(--color-moss)] hover:border-[var(--color-moss)] transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="text-eyebrow">
        {label}
        {required && <span className="ml-1 text-[var(--color-moss)]">·</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-0 border-b border-[var(--color-line)] bg-transparent text-[var(--color-text)] py-3 focus:border-[var(--color-moss)] focus:outline-none transition-colors text-[18px]"
      />
    </div>
  );
}

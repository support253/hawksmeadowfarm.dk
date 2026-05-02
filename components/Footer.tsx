import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 flex flex-col items-center text-center gap-6">
        <Link href="/" aria-label="Hawksmeadow Farm — Home" className="block">
          <Image
            src="/logo.png"
            alt="Hawksmeadow Farm"
            width={750}
            height={850}
            className="h-32 md:h-40 w-auto"
          />
        </Link>

        <p className="editorial-prose text-[var(--color-text-muted)] text-[15px]">
          A calm, structured environment for dogs of the highest standard.
          <br />
          Fyn, Denmark.
        </p>

        <a
          href="mailto:info@hawksmeadowfarm.dk"
          className="text-eyebrow text-[var(--color-text)] hover:text-[var(--color-moss)] no-underline transition-colors"
        >
          info@hawksmeadowfarm.dk
        </a>

        <div className="mt-12 pt-8 border-t border-[var(--color-line)] w-full max-w-[400px]">
          <p className="text-[12px] text-[var(--color-text-muted)] tracking-wider">
            © {new Date().getFullYear()} Hawksmeadow Farm
          </p>
        </div>
      </div>
    </footer>
  );
}

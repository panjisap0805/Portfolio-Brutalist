import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative">
      <div className="sheet-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-5 py-24 md:px-10 md:py-36">
        <p className="stamp text-redline">404 / Not found</p>
        <h1 className="t-display text-[clamp(2rem,6vw,4rem)]">
          This page never shipped.
        </h1>
        <p className="max-w-[48ch] text-ink-soft">
          The document code you followed does not exist in this index. The four
          that do are one click away.
        </p>
        <Link href="/" className="btn-mech">
          Back to index &rarr;
        </Link>
      </div>
    </section>
  );
}

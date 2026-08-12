/** Shared section frame: hairline rule, functional number, anchor target. */
export default function SectionShell({ id, num, label, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-grid py-10 first:border-t-0 md:py-14">
      <header className="mb-7 flex items-baseline gap-3">
        <span aria-hidden="true" className="t-label text-cobalt">
          {num}
        </span>
        <h2 className="t-display text-[1.0625rem] tracking-normal">{label}</h2>
      </header>
      {children}
    </section>
  );
}

/** Skim layer: everything a hiring manager needs in 30 seconds. */
export default function Tldr({ tldr, readMinutes }) {
  const cells = [
    { label: "Problem", body: tldr.problem },
    { label: "My part", body: tldr.role },
    { label: "Outcome", body: tldr.outcome },
  ];

  return (
    <section aria-label="Summary" className="mx-auto max-w-[1200px] px-5 pt-10 md:px-10 md:pt-14">
      <div className="border border-ink bg-tint">
        <p className="t-label flex items-center justify-between gap-4 border-b border-ink px-5 py-2.5 md:px-6">
          <span>TL;DR / 30-second read</span>
          <span className="text-ink-soft">Full story ~{readMinutes} min</span>
        </p>
        <div className="grid md:grid-cols-3">
          {cells.map((c, i) => (
            <div
              key={c.label}
              className={`px-5 py-5 md:px-6 ${i > 0 ? "border-t border-grid md:border-l md:border-t-0" : ""}`}
            >
              <h2 className="t-label text-cobalt">{c.label}</h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2 border-t border-grid px-5 py-4 md:px-6">
          {tldr.metrics.map((m) => (
            <li key={m} className="t-label border border-ink bg-paper px-3 py-1.5">
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

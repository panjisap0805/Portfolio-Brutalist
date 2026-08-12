import Reveal from "@/components/ui/Reveal";

/** Usability test results, scale stated, failures included. */
export default function Validation({ section }) {
  return (
    <div className="space-y-6">
      {section.intro && <p className="max-w-[62ch] leading-relaxed">{section.intro}</p>}
      <Reveal className="max-w-[76ch] border border-ink">
        <div className="t-label grid grid-cols-[minmax(0,1fr)_5.5rem] items-center gap-4 border-b border-ink px-5 py-2.5 text-ink-soft md:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1.2fr)]">
          <span>Task</span>
          <span className="text-center">P1 / P2</span>
          <span className="max-md:hidden">Result</span>
        </div>
        <ul className="divide-y divide-grid">
          {section.tasks.map((t, i) => (
            <li
              key={t.name}
              className="rv grid grid-cols-[minmax(0,1fr)_5.5rem] items-baseline gap-4 px-5 py-4 md:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1.2fr)]"
              style={{ "--ri": i }}
            >
              <h3 className="text-[0.9375rem] font-medium">{t.name}</h3>
              <p className="text-center font-mono text-[0.9375rem] font-semibold">
                {t.scores.join(" / ")}
              </p>
              <div className="col-span-2 md:col-span-1">
                <p className="text-[0.9375rem] leading-snug text-ink-soft">{t.result}</p>
                {t.note && (
                  <p className="mt-1 text-[0.8125rem] leading-snug text-ink-soft">{t.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        {section.scale && (
          <p className="t-label border-t border-grid px-5 py-2.5 text-ink-soft">{section.scale}</p>
        )}
      </Reveal>
    </div>
  );
}

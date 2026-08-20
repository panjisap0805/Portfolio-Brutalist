import Reveal from "@/components/ui/Reveal";
import Prose from "./Prose";

/** Discovery: how the research ran and what it surfaced. Sub-blocks optional. */
export default function Discovery({ section }) {
  const { findings, prioritization, persona } = section;

  return (
    <div className="space-y-8">
      <Prose paragraphs={section.paragraphs} />

      {findings && (
        <Reveal className="border border-ink">
          <h3
            className={`t-label border-b border-ink px-5 py-2.5 ${
              findings.tone === "redline" ? "text-redline" : "text-cobalt"
            }`}
          >
            {findings.heading}
          </h3>
          <ul className="divide-y divide-grid">
            {findings.items.map((item, i) => (
              <li key={i} className="rv flex items-start gap-3 px-5 py-3.5" style={{ "--ri": i }}>
                <span
                  aria-hidden="true"
                  className={`mt-[7px] inline-block h-[9px] w-[9px] flex-none border-[1.5px] ${
                    findings.tone === "redline" ? "border-redline" : "border-cobalt"
                  }`}
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {prioritization && (
        <Reveal className="max-w-[70ch]">
          <h3 className="t-label rv">Prioritization out of the audit</h3>
          <div className="mt-4 space-y-4">
            <div className="rv" style={{ "--ri": 1 }}>
              <p className="t-label text-cobalt">High</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {prioritization.high.map((item) => (
                  <li key={item} className="border border-ink px-3 py-1.5 text-[0.875rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rv" style={{ "--ri": 2 }}>
              <p className="t-label text-ink-soft">Medium</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {prioritization.medium.map((item) => (
                  <li
                    key={item}
                    className="border border-grid px-3 py-1.5 text-[0.875rem] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      )}

      {persona && (
        <Reveal className="border border-ink">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink px-5 py-3">
            <h3 className="t-statement text-lg">{persona.name}</h3>
            <p className="t-label text-ink-soft">{persona.label}</p>
          </div>
          <div className="grid sm:grid-cols-3">
            {persona.columns.map((col, i) => (
              <div
                key={col.heading}
                className={`rv px-5 py-4 ${i > 0 ? "border-t border-grid sm:border-l sm:border-t-0" : ""}`}
                style={{ "--ri": i }}
              >
                <h4 className="t-label text-cobalt">{col.heading}</h4>
                <ul className="mt-2 space-y-1.5 text-[0.9375rem] leading-snug">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={col.items.length > 1 ? "flex items-start gap-2.5" : ""}
                    >
                      {col.items.length > 1 && (
                        <span
                          aria-hidden="true"
                          className={`mt-[5px] inline-block h-[7px] w-[7px] flex-none border-[1.5px] ${
                            findings?.tone === "redline" ? "border-redline" : "border-cobalt"
                          }`}
                        />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}

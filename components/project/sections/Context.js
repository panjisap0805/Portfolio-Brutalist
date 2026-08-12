import Reveal from "@/components/ui/Reveal";
import Prose from "./Prose";

/** Context & Stakes: why the project exists, at what scale, and what hurt. */
export default function Context({ section }) {
  return (
    <div className="space-y-8">
      <Prose paragraphs={section.paragraphs} />

      {section.facts?.length > 0 && (
        <Reveal as="dl" className="grid grid-cols-2 border border-ink lg:grid-cols-4">
          {section.facts.map((f, i) => (
            <div
              key={f.label}
              className={`rv p-5 md:p-6 ${i % 2 === 1 ? "border-l border-grid" : ""} ${
                i >= 2 ? "border-t border-grid lg:border-t-0 lg:border-l" : ""
              }`}
              style={{ "--ri": i }}
            >
              <dd className="font-mono text-2xl font-semibold md:text-3xl">{f.value}</dd>
              <dt className="t-label mt-2 text-ink-soft">{f.label}</dt>
            </div>
          ))}
        </Reveal>
      )}

      {section.problems?.length > 0 && (
        <Reveal className="max-w-[70ch]">
          <h3 className="t-label rv text-redline">The trigger</h3>
          <ul className="mt-3 space-y-3">
            {section.problems.map((p, i) => (
              <li key={i} className="rv flex items-start gap-3" style={{ "--ri": i + 1 }}>
                <span
                  aria-hidden="true"
                  className="mt-[7px] inline-block h-[9px] w-[9px] flex-none border-[1.5px] border-redline"
                />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  );
}

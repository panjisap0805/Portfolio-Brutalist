import Reveal from "@/components/ui/Reveal";
import Prose from "./Prose";

/** Honest limits and what comes next. The section most portfolios skip. */
export default function Reflection({ section }) {
  return (
    <div className="space-y-8">
      <Prose paragraphs={section.paragraphs ?? []} />
      <div className="grid max-w-[76ch] gap-6 md:grid-cols-2">
        {section.limitations?.length > 0 && (
          <Reveal className="border border-ink p-5 md:p-6">
            <h3 className="t-label rv">Honest limits</h3>
            <ul className="mt-3 space-y-3">
              {section.limitations.map((l, i) => (
                <li key={i} className="rv text-[0.9375rem] leading-relaxed text-ink-soft" style={{ "--ri": i + 1 }}>
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {section.nextSteps?.length > 0 && (
          <Reveal className="border border-grid bg-tint p-5 md:p-6">
            <h3 className="t-label rv text-cobalt">Next</h3>
            <ul className="mt-3 space-y-3">
              {section.nextSteps.map((n, i) => (
                <li key={i} className="rv text-[0.9375rem] leading-relaxed" style={{ "--ri": i + 1 }}>
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </div>
  );
}

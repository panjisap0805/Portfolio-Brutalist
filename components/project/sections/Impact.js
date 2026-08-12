import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import Prose from "./Prose";

/** Impact: measured numbers first, qualitative claims labeled as such. */
export default function Impact({ section }) {
  return (
    <div className="space-y-8">
      {section.stats?.length > 0 && (
        <Reveal as="dl" className="grid border border-ink sm:grid-cols-[auto_1fr]">
          {section.stats.map((s) => (
            <div key={s.label} className="rv contents">
              <dd className="border-grid p-6 font-mono text-[clamp(2.5rem,6vw,3.75rem)] font-semibold leading-none tracking-tight sm:border-r md:p-8">
                <CountUp
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                />
              </dd>
              <dt className="self-center border-t border-grid p-6 text-[0.9375rem] leading-relaxed text-ink-soft sm:border-t-0 md:p-8">
                {s.label}
              </dt>
            </div>
          ))}
        </Reveal>
      )}

      {section.qualitative?.length > 0 && (
        <Reveal as="ul" className="max-w-[70ch] space-y-3">
          {section.qualitative.map((q, i) => (
            <li key={i} className="rv flex items-start gap-3" style={{ "--ri": i }}>
              <span
                aria-hidden="true"
                className="mt-[7px] inline-block h-[9px] w-[9px] flex-none bg-cobalt"
              />
              <span className="leading-relaxed">{q}</span>
            </li>
          ))}
        </Reveal>
      )}

      {section.quote && (
        <Reveal as="figure" className="max-w-[62ch] border-l-2 border-cobalt pl-5">
          <blockquote className="rv text-[1.0625rem] leading-relaxed">
            &ldquo;{section.quote.text}&rdquo;
          </blockquote>
          <figcaption className="t-label rv mt-3 text-ink-soft" style={{ "--ri": 1 }}>
            {section.quote.name}, {section.quote.role}
          </figcaption>
        </Reveal>
      )}

      <Prose paragraphs={section.paragraphs ?? []} />
    </div>
  );
}

import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "years across fintech and e-commerce operations",
  },
  {
    value: 90,
    prefix: "-",
    suffix: "%",
    label: "paper use after the warehouse fulfillment rollout",
  },
  {
    value: 70,
    prefix: "-",
    suffix: "%",
    label: "helpdesk queries and complaints after deployment",
  },
  {
    value: 0,
    label: "items lost since the freight tool released",
  },
];

export default function StatBand() {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-5 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <h2 className="t-display rv text-[clamp(1.5rem,3.2vw,2.25rem)]">
            Numbers I can defend
          </h2>
          <p className="rv mt-3 max-w-[52ch] text-ink-soft" style={{ "--ri": 1 }}>
            Real outcomes from production systems. Built to cut friction,
            streamline operations, and deliver measurable business value.
          </p>
          <dl className="rv mt-8 grid border border-ink sm:grid-cols-2 lg:grid-cols-4" style={{ "--ri": 2 }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 md:p-8 ${i > 0 ? "border-t border-grid sm:border-t-0 sm:border-l" : ""} ${
                  i === 2 ? "max-lg:border-t max-lg:border-l-0 sm:max-lg:border-t" : ""
                } ${i === 3 ? "max-lg:border-t sm:max-lg:border-l" : ""}`}
              >
                <dd className="font-mono text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-none tracking-tight">
                  <CountUp
                    value={s.value}
                    decimals={s.decimals ?? 0}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                  />
                </dd>
                <dt className="t-label mt-4 text-ink-soft">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

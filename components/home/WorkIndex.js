import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Stamp from "@/components/ui/Stamp";
import { projects } from "@/data";

export default function WorkIndex() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <h2 className="t-display rv text-[clamp(1.75rem,4vw,2.75rem)]">
            Selected work
          </h2>
          <p className="rv mt-3 max-w-[56ch] text-ink-soft" style={{ "--ri": 1 }}>
            Four systems I designed and tested end-to-end. Stamped with
            honesty: some are live in production (&ldquo;Shipped&rdquo;), while
            others are rigorously user-validated held back only by release
            roadmaps or external blockers.
          </p>
        </Reveal>

        <Reveal className="mt-10 border-t border-ink">
          <p className="t-label grid grid-cols-[3.5rem_1fr_auto] gap-5 border-b border-grid py-2 text-ink-soft max-md:hidden">
            <span>No.</span>
            <span>Project</span>
            <span className="text-right">Result / Status</span>
          </p>
          <ul>
            {projects.map((p, i) => (
              <li key={p.slug} className="rv" style={{ "--ri": i + 1 }}>
                <Link
                  href={`/work/${p.slug}/`}
                  className="group relative block border-b border-grid py-6 transition-[padding,background-color] duration-200 ease-mech hover:bg-tint hover:pl-3 md:grid md:grid-cols-[3.5rem_1.4fr_auto] md:items-center md:gap-5"
                >
                  {/* Mobile Layout (< md) */}
                  <div className="flex flex-col gap-3 md:hidden">
                    <div>
                      <span className="t-label font-semibold text-cobalt block mb-1">
                        {p.docCode}
                      </span>
                      <h3 className="t-statement text-xl group-hover:text-cobalt">
                        {p.card.name}
                      </h3>
                    </div>

                    <div className="relative my-1 border border-ink bg-tint shadow-[3px_3px_0_var(--color-ink)] overflow-hidden">
                      <Image
                        src={p.card.thumbnail}
                        alt={p.card.alt || p.card.name}
                        width={480}
                        height={360}
                        sizes="100vw"
                        className="h-auto w-full aspect-[16/10] object-cover transition-transform duration-300 ease-mech group-hover:scale-[1.02]"
                      />
                      <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                        <Stamp
                          label={p.stamp.label}
                          tone={p.stamp.tone}
                          className="!text-[0.5625rem]"
                        />
                      </div>
                    </div>

                    <p className="text-[0.9375rem] leading-snug text-ink-soft">
                      {p.card.oneLiner}
                    </p>

                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-base font-bold text-ink transition-colors group-hover:text-cobalt">
                        {p.card.metric}
                      </span>
                      <span className="t-label text-ink-soft">
                        {p.card.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Layout (>= md) - Exactly preserved */}
                  <span className="t-label text-ink-soft transition-colors group-hover:text-cobalt hidden md:inline">
                    {p.docCode}
                  </span>
                  <span className="hidden md:block">
                    <span className="t-statement block text-[clamp(1.25rem,2.6vw,1.75rem)] group-hover:text-cobalt">
                      {p.card.name}
                    </span>
                    <span className="mt-1 block max-w-[52ch] text-[0.9375rem] leading-snug text-ink-soft">
                      {p.card.oneLiner}
                    </span>
                  </span>
                  <span className="hidden md:flex md:flex-col md:items-end md:gap-2">
                    <span className="font-mono text-[1.0625rem] font-semibold">
                      {p.card.metric}
                      <span className="ml-2 font-normal text-ink-soft">
                        {p.card.metricLabel}
                      </span>
                    </span>
                    <Stamp label={p.stamp.label} tone={p.stamp.tone} className="!text-[0.5625rem]" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[26%] top-1/2 z-10 hidden w-[240px] -translate-y-1/2 rotate-[-2deg] border border-ink opacity-0 shadow-[6px_6px_0_var(--color-cobalt)] transition-[opacity,transform] duration-200 ease-mech group-hover:rotate-0 group-hover:opacity-100 xl:block"
                  >
                    <Image
                      src={p.card.thumbnail}
                      alt=""
                      width={480}
                      height={360}
                      sizes="240px"
                      className="h-auto w-full"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

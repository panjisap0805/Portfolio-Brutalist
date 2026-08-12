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
          <p className="rv mt-3 max-w-[52ch] text-ink-soft" style={{ "--ri": 1 }}>
            Four systems, ordered by the strength of the story. Each one carries
            an honest status stamp, because &ldquo;shipped&rdquo; and
            &ldquo;validated&rdquo; are different claims.
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
                  className="group relative grid grid-cols-[2.5rem_1fr] items-center gap-4 border-b border-grid py-6 transition-[padding,background-color] duration-200 ease-mech hover:bg-tint hover:pl-3 md:grid-cols-[3.5rem_1.4fr_auto] md:gap-5"
                >
                  <span className="t-label text-ink-soft transition-colors group-hover:text-cobalt">
                    {p.docCode}
                  </span>
                  <span>
                    <span className="t-statement block text-[clamp(1.25rem,2.6vw,1.75rem)] group-hover:text-cobalt">
                      {p.card.name}
                    </span>
                    <span className="mt-1 block max-w-[52ch] text-[0.9375rem] leading-snug text-ink-soft">
                      {p.card.oneLiner}
                    </span>
                  </span>
                  <span className="col-span-2 flex items-center gap-4 md:col-span-1 md:flex-col md:items-end md:gap-2">
                    <span className="font-mono text-[1.0625rem] font-semibold">
                      {p.card.metric}
                      <span className="ml-2 font-normal text-ink-soft max-md:hidden">
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

import Link from "next/link";
import Stamp from "@/components/ui/Stamp";

/** Doc-header: a technical title block, with the status stamp inked on top. */
export default function ProjectHero({ project }) {
  const { hero, meta, docCode, year, domain, stamp } = project;

  return (
    <header className="relative border-b border-grid">
      <div className="sheet-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
        <div>
          <Link href="/#work" className="t-label link-draw text-ink-soft hover:text-ink">
            &larr; Back to index
          </Link>
          <p className="t-label mt-6 text-cobalt">
            {docCode} / {year} / {domain}
          </p>
          <h1 className="t-display mt-3 text-[clamp(2.25rem,6vw,4.5rem)]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-soft md:text-lg">
            {hero.description}
          </p>
        </div>
        <div className="relative self-start">
          <Stamp
            label={stamp.label}
            tone={stamp.tone}
            animate
            className="absolute -top-4 right-2 z-10"
          />
          <table className="w-full border border-ink bg-paper">
            <caption className="t-label border-b border-ink bg-ink px-4 py-2 text-left text-paper">
              Spec sheet / {docCode}
            </caption>
            <tbody>
              {meta.map((m) => (
                <tr key={m.label} className="border-b border-grid last:border-b-0">
                  <th
                    scope="row"
                    className="t-label w-[38%] px-4 py-3 text-left font-normal text-ink-soft"
                  >
                    {m.label}
                  </th>
                  <td className="px-4 py-3 text-[0.9375rem]">{m.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
}

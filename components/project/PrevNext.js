import Link from "next/link";

/** Prev/next case study, generated from the index order. */
export default function PrevNext({ prev, next }) {
  return (
    <nav aria-label="Case studies" className="border-t border-ink">
      <div className="mx-auto grid max-w-[1200px] sm:grid-cols-2">
        <div className="border-grid max-sm:border-b sm:border-r">
          {prev && (
            <Link
              href={`/work/${prev.slug}/`}
              className="group block px-5 py-8 transition-colors hover:bg-tint md:px-10"
            >
              <span className="t-label text-ink-soft">&larr; Previous / {prev.docCode}</span>
              <span className="t-statement mt-2 block text-xl group-hover:text-cobalt">
                {prev.card.name}
              </span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={`/work/${next.slug}/`}
              className="group block px-5 py-8 transition-colors hover:bg-tint md:px-10"
            >
              <span className="t-label text-ink-soft">Next / {next.docCode} &rarr;</span>
              <span className="t-statement mt-2 block text-xl group-hover:text-cobalt">
                {next.card.name}
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

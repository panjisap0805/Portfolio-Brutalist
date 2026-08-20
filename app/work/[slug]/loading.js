export default function CaseStudyLoading() {
  return (
    <article
      role="status"
      aria-live="polite"
      aria-label="Loading case study specification"
      className="w-full"
    >
      {/* Project Hero Spec Header Skeleton */}
      <header className="relative border-b border-grid">
        <div className="sheet-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
          <div>
            {/* Back link placeholder */}
            <div className="skeleton-block h-3.5 w-28 mb-6" />
            {/* Doc code & domain placeholder */}
            <div className="skeleton-block h-3 w-48 mb-4" />
            {/* Big title skeleton */}
            <div className="skeleton-block h-12 md:h-16 w-4/5 mb-3" />
            <div className="skeleton-block h-12 md:h-16 w-3/5 mb-6" />
            {/* Subhead / description skeleton */}
            <div className="skeleton-block h-4 w-full max-w-xl mb-2" />
            <div className="skeleton-block h-4 w-3/4 max-w-lg" />
          </div>

          {/* Spec Sheet Table Skeleton */}
          <div className="relative self-start">
            <div className="absolute -top-4 right-2 z-10 border border-ink bg-paper px-3 py-1 text-[11px] font-mono font-semibold text-cobalt shadow-[2px_2px_0px_0px_var(--color-ink)] rotate-[-2deg]">
              FETCHING_SPEC...
            </div>
            <div className="w-full border border-ink bg-paper">
              <div className="border-b border-ink bg-ink px-4 py-2 text-paper flex items-center justify-between">
                <span className="t-label text-paper">Spec sheet // BUFFERING</span>
                <span className="inline-block h-1.5 w-1.5 bg-cobalt animate-ping" />
              </div>
              <div className="divide-y divide-grid">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center px-4 py-3 gap-4">
                    <div className="skeleton-block h-3 w-20" />
                    <div className="skeleton-block h-3.5 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TL;DR Summary Box Skeleton */}
      <section className="mx-auto max-w-[1200px] px-5 pt-10 md:px-10 md:pt-14">
        <div className="border border-ink bg-tint">
          <div className="flex items-center justify-between border-b border-ink px-5 py-2.5 md:px-6">
            <span className="t-label text-ink">TL;DR / 30-SECOND READ</span>
            <div className="skeleton-block h-3 w-24" />
          </div>
          <div className="grid md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`px-5 py-5 md:px-6 space-y-3 ${
                  i > 0 ? "border-t border-grid md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="skeleton-block h-3 w-16" />
                <div className="skeleton-block h-3.5 w-full" />
                <div className="skeleton-block h-3.5 w-4/5" />
                <div className="skeleton-block h-3.5 w-3/5" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-grid px-5 py-4 md:px-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="skeleton-block h-7 w-28 border border-ink" />
            ))}
          </div>
        </div>
      </section>

      {/* Main Body Skeleton */}
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-12 md:px-10 md:pb-24 xl:grid xl:grid-cols-[210px_minmax(0,1fr)] xl:gap-12">
        {/* Side Index skeleton */}
        <aside className="hidden xl:block">
          <div className="space-y-3 border-l-2 border-grid pl-4 py-2">
            <div className="skeleton-block h-3 w-20 mb-4" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="skeleton-block h-3.5 w-32" />
            ))}
          </div>
        </aside>

        {/* Section wireframes */}
        <div className="space-y-12 min-w-0">
          <div className="border border-ink bg-paper p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--color-grid)] space-y-4">
            <div className="skeleton-block h-3.5 w-32" />
            <div className="skeleton-block h-8 w-3/4" />
            <div className="skeleton-block h-4 w-full" />
            <div className="skeleton-block h-4 w-5/6" />
            <div className="skeleton-block h-64 w-full border border-grid mt-6" />
          </div>
        </div>
      </div>
    </article>
  );
}

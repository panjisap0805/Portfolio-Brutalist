export default function RootLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page contents"
      className="relative min-h-[85vh] w-full"
    >
      {/* Blueprint background grid */}
      <div className="sheet-grid absolute inset-0 opacity-60" aria-hidden="true" />

      {/* Top technical loading badge */}
      <div className="relative mx-auto max-w-[1200px] px-5 pt-8 md:px-10 md:pt-12">
        <div className="inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1.5 shadow-[2px_2px_0px_0px_var(--color-ink)]">
          <span className="inline-block h-2 w-2 bg-cobalt animate-ping" />
          <span className="t-label text-ink font-semibold">
            FETCHING SPECIFICATION // BUFFERING ROUTE...
          </span>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="relative mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-16">
        <div className="skeleton-block h-4 w-36 mb-6" />
        <div className="skeleton-block h-14 md:h-20 w-3/4 max-w-2xl mb-4" />
        <div className="skeleton-block h-14 md:h-20 w-1/2 max-w-lg mb-8" />
        <div className="skeleton-block h-6 w-full max-w-xl mb-3" />
        <div className="skeleton-block h-6 w-4/5 max-w-md" />
      </div>

      {/* Section wireframe skeleton cards */}
      <div className="relative mx-auto max-w-[1200px] px-5 pb-20 md:px-10">
        <div className="border-t border-grid pt-10">
          <div className="flex items-center justify-between mb-8">
            <div className="skeleton-block h-4 w-40" />
            <div className="skeleton-block h-4 w-24" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-ink bg-paper p-6 space-y-4 shadow-[4px_4px_0px_0px_var(--color-grid)]">
              <div className="skeleton-block h-48 w-full" />
              <div className="skeleton-block h-6 w-2/3" />
              <div className="skeleton-block h-4 w-full" />
            </div>
            <div className="border border-ink bg-paper p-6 space-y-4 shadow-[4px_4px_0px_0px_var(--color-grid)]">
              <div className="skeleton-block h-48 w-full" />
              <div className="skeleton-block h-6 w-2/3" />
              <div className="skeleton-block h-4 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Skill ticker. The only marquee on the site.
 * Reduced motion: the track stops and wraps into a static list.
 */
export default function Ticker({ items }) {
  const row = (hidden) => (
    <span aria-hidden={hidden || undefined} className="inline-flex">
      {items.map((item) => (
        <span key={item} className="t-label inline-flex items-center px-5 py-3 text-paper/85">
          <span aria-hidden="true" className="mr-5 inline-block h-[7px] w-[7px] bg-cobalt" />
          {item}
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-ink bg-ink" aria-label="Skills and tools">
      <div className="ticker-track whitespace-nowrap">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

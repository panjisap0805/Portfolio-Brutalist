import Reveal from "@/components/ui/Reveal";

/** Numbered findings, each traceable to its research source. */
export default function Insights({ section }) {
  return (
    <div>
      <Reveal as="ol" className="grid gap-px border border-ink bg-grid md:grid-cols-3">
        {section.items.map((item, i) => (
          <li key={item.title} className="rv bg-paper p-5 md:p-6" style={{ "--ri": i }}>
            <span aria-hidden="true" className="t-label text-cobalt">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="t-statement mt-2 text-[1.0625rem]">{item.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
          </li>
        ))}
      </Reveal>
      {section.source && (
        <p className="t-label mt-3 text-ink-soft normal-case tracking-normal">
          Source: {section.source}
        </p>
      )}
    </div>
  );
}

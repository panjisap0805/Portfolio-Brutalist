import Reveal from "@/components/ui/Reveal";

/** Decisions, each wired back to the insight it answers. */
export default function Decisions({ section }) {
  return (
    <Reveal as="ul" className="max-w-[76ch] border-t border-ink">
      {section.items.map((item, i) => (
        <li
          key={item.title}
          className="rv grid gap-2 border-b border-grid py-5 md:grid-cols-[minmax(0,1fr)_9.5rem] md:gap-8"
          style={{ "--ri": i }}
        >
          <div>
            <h3 className="t-statement text-[1.0625rem]">{item.title}</h3>
            <p className="mt-1.5 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-soft">
              {item.body}
            </p>
          </div>
          {item.respondsTo && (
            <p className="t-label text-cobalt md:pt-1 md:text-right">
              &larr; {item.respondsTo}
            </p>
          )}
        </li>
      ))}
    </Reveal>
  );
}

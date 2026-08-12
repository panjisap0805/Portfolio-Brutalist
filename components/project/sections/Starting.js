import Prose from "./Prose";

/** Starting Point: what was known, assumed, and planned before discovery. */
export default function Starting({ section }) {
  return (
    <div className="space-y-6">
      <Prose paragraphs={section.paragraphs} />
      {section.note && (
        <p className="t-label max-w-[70ch] border-l-2 border-grid pl-4 leading-relaxed text-ink-soft normal-case tracking-normal">
          {section.note}
        </p>
      )}
    </div>
  );
}

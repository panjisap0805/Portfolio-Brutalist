import Reveal from "@/components/ui/Reveal";

/** The Turn: the insight that changed direction. The story's dark panel beat. */
export default function Turn({ section }) {
  return (
    <Reveal className="border border-ink bg-ink px-6 py-10 text-paper md:px-10 md:py-14">
      <p className="t-statement rv max-w-[24ch] text-[clamp(1.5rem,3.6vw,2.5rem)]">
        {section.statement}
      </p>
      <div className="mt-6 max-w-[62ch] space-y-4 leading-relaxed text-paper/80">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="rv" style={{ "--ri": i + 1 }}>
            {p}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

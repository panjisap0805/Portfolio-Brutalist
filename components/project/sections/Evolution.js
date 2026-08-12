import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/** Version evolution: blueprint to shipped, tagged with real artifact versions. */
export default function Evolution({ section }) {
  return (
    <div className="space-y-6">
      {section.intro && <p className="max-w-[62ch] leading-relaxed">{section.intro}</p>}
      <div className="grid gap-8 lg:grid-cols-2">
        {section.versions.map((v, i) => (
          <Reveal as="figure" key={v.tag} className="m-0">
            <p className="t-label rv mb-2 inline-block border border-ink bg-paper px-2.5 py-1">
              {v.tag}
            </p>
            <div className="rv border border-ink" style={{ "--ri": 1 }}>
              <Image
                src={v.image}
                alt={v.alt}
                width={v.width}
                height={v.height}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="t-label rv mt-3 text-ink-soft" style={{ "--ri": 2 }}>
              {v.caption}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

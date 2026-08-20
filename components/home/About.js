import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const specs = [
  { label: "Based", value: "Jakarta, Indonesia" },
  { label: "Community", value: "Public Relations at UXID" },
  { label: "Mentoring", value: "Junior designers, career and craft" },
  { label: "Stack", value: "Research to Figma to VPS" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-grid bg-tint">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="rv relative mx-auto max-w-[380px] border border-ink bg-paper lg:mx-0">
            <Image
              src="/asset-panji.webp"
              alt="Portrait of Panji Saputro"
              width={480}
              height={1043}
              sizes="(max-width: 1024px) 320px, 380px"
              className="h-auto w-full object-cover"
              style={{ aspectRatio: "4 / 5", objectPosition: "top" }}
            />
          </div>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <h2 className="t-display rv text-[clamp(1.75rem,4vw,2.75rem)]">
            From network ops to product design
          </h2>
          <div className="mt-6 max-w-[62ch] space-y-4 text-ink">
            <p className="rv" style={{ "--ri": 1 }}>
              My background in network operations taught me that software only
              works if it survives real-world stress. I bring that same
              discipline to product design. I build systems meant for real
              shifts, heavy workloads, and complex operational flows.
            </p>
            <p className="rv" style={{ "--ri": 2 }}>
              I specialize in operational and B2B products: from high-volume
              warehouse fulfillment to cooperative fintech and internal support
              tools. I don&rsquo;t design in isolation; I run on-ground research,
              shadow field teams, and solve for edge cases first.
            </p>
            <p className="rv" style={{ "--ri": 3 }}>
              Because I also code and manage infrastructure, I understand
              technical constraints before they become blockers. I design
              solutions that are not only intuitive for users, but realistic and
              efficient for engineering teams to build.
            </p>
          </div>
          <dl className="rv mt-8 border-t border-ink" style={{ "--ri": 4 }}>
            {specs.map((s) => (
              <div
                key={s.label}
                className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-grid py-3"
              >
                <dt className="t-label pt-[2px] text-ink-soft">{s.label}</dt>
                <dd className="text-[0.9375rem]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

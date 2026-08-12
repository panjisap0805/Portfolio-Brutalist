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
              I started in network operations, where &ldquo;it works&rdquo; is
              measured in uptime, not applause. That habit followed me into
              design: I treat every screen as part of a system that has to
              survive real operations, real staff, and real shifts.
            </p>
            <p className="rv" style={{ "--ri": 2 }}>
              Most of my work lives in operational products: lending for a
              cooperative, warehouses that never close, a two-person helpdesk
              serving members nationwide. I run the research myself and walk
              the floor whenever there is a floor to walk.
            </p>
            <p className="rv" style={{ "--ri": 3 }}>
              I also write code. Two of the systems in this portfolio run on
              infrastructure I deploy and maintain, which keeps my design
              decisions honest about what engineering actually costs.
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

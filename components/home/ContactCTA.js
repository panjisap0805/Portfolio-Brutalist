import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <h2 className="t-display rv text-[clamp(2rem,5vw,3.5rem)]">
            Currently open
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="rv" style={{ "--ri": 1 }}>
              <h3 className="t-statement text-xl">Hiring for a product team?</h3>
              <p className="mt-3 max-w-[42ch] text-paper/75">
                The case studies above are the interview: process, trade-offs,
                and honest status included. CV and references on request.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href="https://www.linkedin.com/in/panjisap0805/"
                  external
                  variant="paper"
                >
                  LinkedIn profile &rarr;
                </ButtonLink>
              </div>
            </div>
            <div className="rv" style={{ "--ri": 2 }}>
              <h3 className="t-statement text-xl">
                Building something that needs design and code?
              </h3>
              <p className="mt-3 max-w-[42ch] text-paper/75">
                I take on select freelance work, end to end when needed: from
                research to a deployed product.
              </p>
              <div className="mt-6">
                <ButtonLink href="mailto:hallo@panjisaputro.id" variant="paper">
                  Email me &rarr;
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

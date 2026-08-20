import RoleCycler from "@/components/ui/RoleCycler";
import ButtonLink from "@/components/ui/ButtonLink";

const ROLES = ["UI/UX Designer", "Product Designer", "UX Researcher"];

export default function Hero() {
  return (
    <section className="relative">
      <div className="sheet-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-24">
        <p className="t-label mb-8 flex flex-wrap gap-x-3 gap-y-1 text-ink-soft">
          <span className="text-ink">Open to work</span>
          <span aria-hidden="true">/</span>
          <span>Jakarta, ID</span>
          <span aria-hidden="true">/</span>
          <span>4+ yrs</span>
          <span aria-hidden="true">/</span>
          <span>Design + code</span>
        </p>
        {/*
          Sized off the longest role, not off taste: "Product Designer" is
          13.5em wide in expanded Archivo. Below md it wraps inside a two-line
          mask; from md up it must fit one line of (min(vw,1200) - 80px).
        */}
        <p className="mb-2 text-[clamp(1.0625rem,2.2vw,1.375rem)] font-medium text-ink-soft">
          Hi — I&rsquo;m <b className="font-semibold text-ink">Panji Saputro</b>, a
        </p>
        <h1 className="t-display text-[clamp(1.625rem,9vw,3.25rem)] md:text-[min(6.4vw,5rem)]">
          <span className="block">
            <RoleCycler roles={ROLES} />
          </span>
          <span className="block">who ships.</span>
        </h1>
        <p className="subhead mt-7">
          I turn messy operational reality into working systems. I do running
          the research, drawing the flows, and <u>deploying the code myself</u>.
          Design and engineering, one hand-off shorter.
        </p>
        <div className="mt-9">
          <ButtonLink href="/#work">View case studies &rarr;</ButtonLink>
        </div>
      </div>
    </section>
  );
}

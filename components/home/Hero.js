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
        <h1 className="t-display text-[clamp(1.625rem,9vw,3.25rem)] md:text-[min(6.4vw,5rem)]">
          <span className="block">
            <RoleCycler roles={ROLES} />
          </span>
          <span className="block">who ships.</span>
        </h1>
        <p className="mt-7 max-w-[38ch] text-[clamp(1.125rem,2.2vw,1.375rem)] leading-[1.45]">
          I&rsquo;m Panji. I turn messy operational reality into working systems:
          research, flows, and code I deploy myself.
        </p>
        <div className="mt-9">
          <ButtonLink href="/#work">View case studies &rarr;</ButtonLink>
        </div>
      </div>
    </section>
  );
}

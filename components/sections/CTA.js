import Link from 'next/link';

export default function CTA({ isProject, nextLink, nextProjectName }) {
  const isLastProject = isProject && (!nextLink || nextLink === "#");
  const showNextProject = isProject && !isLastProject;

  return (
    <section className="bg-background-light text-black py-16 mb-16 lg:py-24 relative flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs md:text-sm tracking-[1.4px] uppercase text-black md:mb-8 text-center font-bold">
          Curious?
        </p>
        <h2 className="flex flex-col items-center font-bold uppercase tracking-tight leading-[0.9] text-center mb-12 md:mb-16">
          <span className="text-5xl md:text-7xl lg:text-[128px]">LET&apos;S GET IN</span>
          <span className="text-5xl md:text-7xl lg:text-[128px] text-primary">TOUCH!</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a href="https://www.linkedin.com/in/panjisap0805/" target="_blank" rel="noopener noreferrer" className="group bg-white text-black font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border brutalist-shadow-primary hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_#0f49bd] transition-all flex items-center gap-2">
            [LINKEDIN]
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:translate-x-1 transition-transform"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          {showNextProject ? (
            <Link href={nextLink} className="group bg-white text-black font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border hover:bg-gray-50 transition-all flex items-center gap-2">
              [{nextProjectName || "NEXT_PROJECT"}]
              <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          ) : (
            <a href="mailto:hallo@panjisaputro.id" target="_blank" rel="noopener noreferrer" className="group bg-white text-black font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border brutalist-shadow-primary hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_#0f49bd] transition-all flex items-center gap-2">
              [EMAIL]
              <span className="material-icons text-sm">email</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

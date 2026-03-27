import Link from 'next/link';

export default function CTA({ isProject, nextLink, nextProjectName }) {
  const isLastProject = isProject && (!nextLink || nextLink === "#");
  const showNextProject = isProject && !isLastProject;

  return (
    <section className="bg-background-light text-black py-16 mb-16 mt-16 lg:py-24 relative flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs md:text-sm tracking-[1.4px] uppercase text-black md:mb-8 text-center font-bold">
          Are you ready?
        </p>
        <h2 className="flex flex-col items-center font-bold uppercase tracking-tight leading-[0.9] text-center mb-12 md:mb-16">
          <span className="text-5xl md:text-7xl lg:text-[128px]">LET&apos;S BUILD</span>
          <span className="text-5xl md:text-7xl lg:text-[128px]">SOMETHING</span>
          <span className="text-5xl md:text-7xl lg:text-[128px] text-primary">EFFICIENT.</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a href="mailto:hallo@panjisaputro.id" className="group bg-black text-white font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border brutalist-shadow-primary hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_#0f49bd] transition-all flex items-center gap-2">
            [CONTACT_ME]
            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          {showNextProject ? (
            <Link href={nextLink} className="group bg-white text-black font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border hover:bg-gray-50 transition-all flex items-center gap-2">
              [NEXT_PROJECT]
              <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          ) : (
            <a href="/Panji_Saputro_CV.pdf" target="_blank" rel="noopener noreferrer" className="group bg-white text-black font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border hover:bg-gray-50 transition-all flex items-center gap-2">
              DOWNLOAD_CV
              <span className="material-icons text-sm">download</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

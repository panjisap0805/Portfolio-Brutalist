import Link from 'next/link';

export default function ProjectNavigation({ nextProject }) {
  if (!nextProject) return null;

  return (
    <section className="bg-white border-t-2 border-black py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-block px-3 py-1 border-2 border-black rounded-full text-xs font-mono font-bold mb-6 bg-primary text-white brutalist-shadow">
          {nextProject.tag}
        </div>
        <h2
          className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tighter uppercase mb-12"
          dangerouslySetInnerHTML={{ __html: nextProject.title }}
        />
        
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
          <Link href="/" className="group bg-white text-black font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border hover:bg-gray-50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
            [HOME]
          </Link>
          <Link href={nextProject.link} className="group bg-black text-white font-bold text-lg px-8 py-4 uppercase tracking-wider text-center brutalist-border brutalist-shadow-primary hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_#0f49bd] transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
            [NEXT_PROJECT]
            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

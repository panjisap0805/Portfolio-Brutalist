import Link from 'next/link';

function CaseStudy({ number, tag, tags, title, description, imageSrc, alt, link }) {
  return (
    <article className="group relative grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black last:border-b-0">
      <div className="lg:col-span-1 bg-gray-100 border-r-2 border-black flex items-center justify-center py-6 lg:py-0">
        <span className="font-mono text-4xl font-bold text-gray-300 group-hover:text-primary transition-colors rotate-0 lg:-rotate-90 whitespace-nowrap">
          {number} / {tag}
        </span>
      </div>
      <div className="lg:col-span-7 p-8 lg:p-12 border-r-2 border-black flex flex-col justify-center">
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((t, i) => (
            <span key={i} className={`px-3 py-1 border border-black rounded-full text-xs font-bold uppercase ${i === 0 ? 'bg-primary/10 text-primary' : ''}`}>
              {t}
            </span>
          ))}
        </div>
        <h4 className="text-4xl lg:text-6xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-lg text-gray-600 font-medium mb-8 max-w-xl">
          {description}
        </p>
        {link ? (
          <Link href={link} className="inline-flex items-center gap-3 font-mono font-bold text-lg hover:underline decoration-2 underline-offset-4 decoration-primary">
            READ_CASE_STUDY <span className="material-icons text-primary">arrow_forward</span>
          </Link>
        ) : (
          <a className="inline-flex items-center gap-3 font-mono font-bold text-lg hover:underline decoration-2 underline-offset-4 decoration-primary" href="#">
            READ_CASE_STUDY <span className="material-icons text-primary">arrow_forward</span>
          </a>
        )}
      </div>
      <div className="lg:col-span-4 relative h-64 lg:h-auto overflow-hidden border-t-2 lg:border-t-0 border-black lg:border-l-0">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all"></div>
        <img alt={alt} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" src={imageSrc} />
      </div>
    </article>
  );
}

export default function Work() {
  const caseStudies = [
    {
      number: "01",
      tag: "FIN",
      tags: ["Fintech", "Mobile App", "UX Research"],
      title: "MDS Cash",
      description: "Revolutionizing micro-transactions for the unbanked. We reduced transaction time by 40% through a streamlined, gesture-based interface.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwMesRAWTO-yOefSsEvtl1Y-9Sj32l01ZyDRYqRaXf350-o9OYSC-PpXK1nUZf54HLMNjkiGpDyRkr8hxuo2wLhcoBOGzi-His8xoVt5PFvUkrrjMhXZP1H4pvip2R4WRb8sBVSiyHhvxy7vqWa3nivh_wMcXftqVHjilQ0h9wT2xgLEB_tgQO0aIfXAzJaogABkpSdnlD240Dba6TBvbhDJEpBi3SwWWGNBgAObQtH0rOxUs9ZWFwUmt3EezA7jIVya5oC-09sv0i",
      alt: "MDS Cash App",
      link: "/work/mds-cash"
    },
    {
      number: "02",
      tag: "LOG",
      tags: ["Logistics", "Web Platform", "B2B"],
      title: "Jakmall Warehouse",
      description: "A comprehensive warehouse management system designed for high-volume inventory tracking. Improved picker accuracy by 99% with a new visual scanning system.",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWynDAb3G0aibdcro6Mb5mPfSRsKjz1EpucKEJcqk4UhVqx9zYu2Nntd84GFWd8h_9oipslLzS9yHYPxHrKcxl-WKqS9W-FK1AKytmMt2FRUW_QX1eK2OWU2h1VWisvue970SHwybiZS4Bd_HTGmonM9pwDT7gc3hpNlWapkLkza9CzTIMGDQDYIhG77mcCnWP2pCIDjxuSyrT9mlXZRZAOAU3DrCelVc-TvTj94hvOyMOamFfypgGENvUSIt5pzW0rlhanajEZeCe",
      alt: "Jakmall Warehouse"
    }
  ];

  return (
    <section className="relative z-10 border-b-2 border-black bg-white" id="work">
      <div className="p-6 border-b-2 border-black bg-black text-white flex justify-between items-center">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Selected Case Studies</h3>
        <span className="font-mono text-sm">[DIR: /PROJECTS]</span>
      </div>
      {caseStudies.map((study, idx) => (
        <CaseStudy key={idx} {...study} />
      ))}
    </section>
  );
}

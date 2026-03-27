export default function ProjectShowcase({ mainImage, mainTag, mobileImage, detailImage }) {
  return (
    <div className="border-b-2 border-black bg-gray-100 p-6 md:p-16 relative">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <h3 className="font-bold text-3xl uppercase tracking-tight">Interface Output</h3>
        <span className="font-mono text-xs bg-black text-white px-3 py-1.5 uppercase font-bold tracking-widest border border-white">{mainTag}</span>
      </div>
      
      <div className="aspect-video w-full bg-slate-300 border-2 border-black overflow-hidden relative group shadow-[12px_12px_0px_#000]">
        <img alt="Dashboard Mockup" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-[1.02] transform origin-center" src={mainImage} />
        <div className="absolute bottom-6 left-6 bg-white border-2 border-black text-black font-mono flex items-center gap-3 px-4 py-3 shadow-[4px_4px_0px_#000]">
          <span className="w-3 h-3 border border-black rounded-full bg-green-500 animate-pulse"></span>
          <span className="font-bold text-xs uppercase tracking-widest">STATUS: LIVE PROTOTYPE</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="aspect-[4/3] bg-orange-200 border-2 border-black overflow-hidden shadow-[8px_8px_0px_#000]">
          <img alt="Mobile View" className="object-cover w-full h-full" src={mobileImage} />
        </div>
        <div className="aspect-[4/3] bg-slate-800 border-2 border-black overflow-hidden shadow-[8px_8px_0px_#000]">
          <img alt="Data Grid Detail" className="object-cover w-full h-full" src={detailImage} />
        </div>
      </div>
    </div>
  );
}

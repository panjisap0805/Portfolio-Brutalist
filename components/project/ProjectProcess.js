export default function ProjectProcess({ steps }) {
  return (
    <div className="p-6 md:p-16 border-b-2 border-black bg-white">
      <h3 className="font-bold text-3xl uppercase tracking-tight mb-12 flex items-center gap-3">
        <span className="material-icons text-3xl">timeline</span> Process Log
      </h3>
      
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-4 gap-0 border-2 border-black bg-white">
        {steps.map((step, idx) => (
          <div key={idx} className={`p-8 hover:bg-black hover:text-white transition-colors group ${idx < steps.length - 1 ? 'border-r-2 border-black' : ''}`}>
            <span className="text-5xl font-black text-gray-200 group-hover:text-primary transition-colors block mb-4">{step.number}</span>
            <h4 className="font-bold text-xl uppercase mb-3 tracking-tight">{step.title}</h4>
            <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed font-medium tracking-wide">{step.description}</p>
          </div>
        ))}
      </div>
      
      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-6 p-6 border-2 border-black bg-white shadow-[4px_4px_0px_#000]">
            <span className="font-black text-3xl text-primary">{step.number}</span>
            <span className="font-bold text-xl uppercase tracking-tight">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

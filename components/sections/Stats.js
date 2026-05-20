export default function Stats() {
  return (
    <section className="border-b-2 border-black bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-gray-50 transition-colors group">
          <div className="text-sm font-mono text-gray-500 mb-2 group-hover:text-black">EFFICIENCY_METRIC_01</div>
          <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">99.5%</div>
          <div className="font-bold uppercase tracking-tight">Time Saved in Handoff</div>
        </div>
        <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-gray-50 transition-colors group">
          <div className="text-sm font-mono text-gray-500 mb-2 group-hover:text-black">DESIGN_SYSTEMS</div>
          <div className="text-5xl lg:text-6xl font-bold text-black mb-2 group-hover:text-primary transition-colors">8+</div>
          <div className="font-bold uppercase tracking-tight">Scalable Libraries Built</div>
        </div>
        <div className="p-8 border-b-2 md:border-b-0 border-black hover:bg-gray-50 transition-colors group">
          <div className="text-sm font-mono text-gray-500 mb-2 group-hover:text-black">SYSTEM_PERFORMANCE</div>
          <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">300%</div>
          <div className="font-bold uppercase tracking-tight">Faster Design Iterations</div>
        </div>
        {/*
        <div className="p-8 border-b-2 md:border-b-0 border-black md:border-r-2 lg:border-t-2 hover:bg-gray-50 transition-colors group">
          <div className="text-sm font-mono text-gray-500 mb-2 group-hover:text-black">USER_BASE_IMPACT</div>
          <div className="text-5xl lg:text-6xl font-bold text-black mb-2 group-hover:text-primary transition-colors">55K+</div>
          <div className="font-bold uppercase tracking-tight">Active Monthly Users</div>
        </div>
        <div className="p-8 border-b-2 md:border-b-0 lg:border-r-2 lg:border-t-2 border-black hover:bg-gray-50 transition-colors group">
          <div className="text-sm font-mono text-gray-500 mb-2 group-hover:text-black">LINES_OF_CODE</div>
          <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">NaN</div>
          <div className="font-bold uppercase tracking-tight">Countless frontend commits</div>
        </div>
        <div className="p-8 lg:border-t-2 border-black hover:bg-primary hover:text-white transition-colors group flex flex-col justify-center items-center cursor-pointer">
          <span className="material-icons text-6xl mb-2">trending_up</span>
          <div className="font-mono font-bold text-xl underline decoration-2 underline-offset-4">VIEW_FULL_REPORT</div>
        </div>
        */}
      </div>
    </section>
  );
}

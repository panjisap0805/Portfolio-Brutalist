export default function ProjectImpact({ csatScore, csatSubtitle, efficiencyGain, efficiencySubtitle, constraintsText, feedbackQuote, feedbackSentiment }) {
  return (
    <div className="p-6 md:p-16 bg-white min-h-[500px] border-b-2 border-black">
      <h3 className="font-bold text-2xl uppercase tracking-tight mb-8">System Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {/* Stat 1 */}
        <div className="p-8 bg-primary text-white border-2 border-black flex flex-col justify-between min-h-[280px] shadow-[4px_4px_0px_#000]">
          <div className="flex justify-between items-start">
            <span className="material-icons text-5xl opacity-40">thumb_up</span>
            <span className="font-mono text-[10px] uppercase tracking-widest border border-white/30 px-2 py-1 bg-black/20 font-bold">USABILITY TESTING SCORE</span>
          </div>
          <div className="mt-8">
            <span className="text-7xl font-black tracking-tighter">{csatScore}</span>
            <span className="text-2xl font-bold opacity-50">/5.0</span>
            <p className="mt-4 text-white/90 font-medium leading-snug">{csatSubtitle}</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="p-8 bg-black text-white border-2 border-black flex flex-col justify-between min-h-[280px] shadow-[4px_4px_0px_theme(colors.primary)]">
          <div className="flex justify-between items-start">
            <span className="material-icons text-5xl opacity-40 text-gray-400">speed</span>
            <span className="font-mono text-[10px] uppercase tracking-widest border border-white/30 px-2 py-1 bg-white/10 font-bold">EFFICIENCY</span>
          </div>
          <div className="mt-8">
            <span className="text-7xl font-black tracking-tighter text-white">{efficiencyGain}</span>
            <p className="mt-4 text-gray-400 font-medium leading-snug">{efficiencySubtitle}</p>
          </div>
        </div>

        {/* Third Column: Constraints or Feedback */}
        {constraintsText ? (
          <div className="p-8 border-2 border-black border-dashed bg-white flex flex-col justify-between min-h-[280px]">
            <div className="flex items-center gap-3 text-gray-400 mb-6">
              <span className="material-icons text-2xl">construction</span>
              <span className="font-bold uppercase text-xs tracking-widest">Constraints</span>
            </div>
            <div>
               <h4 className="font-bold text-xl uppercase tracking-tight mb-3">Technical Limitations</h4>
               <p className="text-sm text-gray-600 font-medium leading-relaxed tracking-wide mb-6">
                 {constraintsText}
               </p>
               <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest bg-gray-100 border border-black text-black px-3 py-1.5 shadow-[2px_2px_0px_#000]">
                 <span className="w-2 h-2 rounded-none bg-orange-500 border border-black"></span>
                 PARTIAL SYNC
               </div>
            </div>
          </div>
        ) : (
          <div className="p-8 border-2 border-slate-300 rounded-lg flex flex-col justify-between min-h-[280px]">
             <div className="flex items-center gap-2 text-slate-500">
               <span className="material-icons">forum</span>
               <span className="font-bold uppercase text-sm">STAKEHOLDER FEEDBACK</span>
             </div>
             <div>
               <p className="text-lg md:text-xl font-bold leading-relaxed mb-4">
                 "{feedbackQuote}"
               </p>
               <div className="inline-flex items-center gap-1 text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">
                 <span className="w-2 h-2 rounded-full bg-green-500"></span>
                 {feedbackSentiment}
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectInsights({ legacyIssues, systemUpgrades }) {
  return (
    <div className="grid md:grid-cols-2 border-b-2 border-black bg-white">
      {/* Problem Column */}
      <div className="p-8 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black bg-gray-50">
        <h3 className="font-bold text-2xl uppercase mb-10 flex items-center gap-3">
          <span className="material-icons text-gray-400 text-3xl">cancel</span>
          Legacy Issues
        </h3>
        <div className="space-y-6">
          {legacyIssues.map((issue, idx) => (
            <div key={idx} className="p-8 bg-white border-2 border-black shadow-[4px_4px_0px_#000]">
              <h4 className="font-bold text-xl uppercase tracking-tight mb-3">{issue.title}</h4>
              <p className="text-gray-600 font-medium leading-relaxed tracking-wide">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Column */}
      <div className="p-8 md:p-16 bg-white">
        <h3 className="font-bold text-2xl uppercase mb-10 flex items-center gap-3 text-primary relative">
          <span className="material-icons text-3xl">check_circle</span>
          System Upgrades
        </h3>
        <div className="space-y-6">
          {systemUpgrades.map((upgrade, idx) => (
            <div key={idx} className="p-8 bg-primary/10 border-2 border-primary shadow-[4px_4px_0px_theme(colors.primary)]">
              <h4 className="font-bold text-xl uppercase tracking-tight mb-3 text-primary">{upgrade.title}</h4>
              <p className="text-gray-800 font-medium leading-relaxed tracking-wide">{upgrade.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

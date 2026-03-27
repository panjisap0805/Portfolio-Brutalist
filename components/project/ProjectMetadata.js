export default function ProjectMetadata({ metadata }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-black bg-white text-sm font-medium">
      {metadata.map((item, idx) => (
        <div 
          key={idx} 
          // Applies border-r except for mobile 2nd col and desktop last col
          className={`p-6 md:p-8 flex flex-col justify-between gap-4 border-black
            ${idx < metadata.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''}
            ${(idx === 0 || idx === 2) ? 'border-r-2' : ''}
          `}
        >
          <span className="text-gray-500 font-mono uppercase tracking-widest text-xs">{item.label}</span>
          <span className="text-xl md:text-2xl font-bold tracking-tight">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

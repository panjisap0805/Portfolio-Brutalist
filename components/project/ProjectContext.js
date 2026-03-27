export default function ProjectContext({ overview, challenges }) {
  return (
    <div className="grid md:grid-cols-2 border-b-2 border-black bg-white">
      <div className="p-8 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black">
        <div className="flex items-center gap-3 mb-8 text-primary">
          <span className="material-icons font-bold text-2xl">info</span>
          <h3 className="font-bold text-2xl uppercase tracking-tight">The Overview</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg tracking-wide">
          {overview}
        </p>
      </div>
      <div className="p-8 md:p-16 bg-white">
        <div className="flex items-center gap-3 mb-8 text-red-600">
          <span className="material-icons font-bold text-2xl">warning</span>
          <h3 className="font-bold text-2xl uppercase tracking-tight">The Challenge</h3>
        </div>
        <ul className="space-y-6 text-gray-700 text-lg">
          {challenges.map((challenge, idx) => (
            <li key={idx} className="flex gap-4 items-start">
              <span className="text-gray-400 font-black mt-1">—</span>
              <span className="tracking-wide" dangerouslySetInnerHTML={{ __html: challenge }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProjectHero({ tag, title, description }) {
  return (
    <header className="border-b-2 border-black bg-white">
      <div className="px-6 py-12 md:py-24 max-w-5xl mx-auto text-left">
        <div className="inline-block px-3 py-1 border-2 border-black rounded-full text-xs font-mono font-bold mb-6 bg-primary text-white brutalist-shadow">
          {tag}
        </div>
        <h2
          className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tighter uppercase mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed mt-6">
          {description}
        </p>
      </div>
    </header>
  );
}

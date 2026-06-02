export default function Process() {
  const skills = [
    { name: "Interaction Design", color: "" },
    { name: "UX Research", color: "" },
    { name: "Usability Testing", color: "" },
    { name: "Wireframing & Prototyping", color: "" },
    { name: "Information Architecture", color: "" },
    { name: "Design Systems", color: "" },
    { name: "Figma", color: "" },
    { name: "HTML/CSS/Javascript", color: "" },
    { name: "Git Flow", color: "" },
    { name: "Node.js", color: "" },
    { name: "Jira", color: "" },
    { name: "Problem Solving", color: "text-primary border-primary hover:bg-primary hover:text-white hover:border-primary" },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black" id="process">
      <div className="p-8 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-background-light">
        <h3 className="text-5xl font-bold uppercase mb-8 leading-tight">
          The <span className="text-primary">Technical Edge</span>
        </h3>
        <p className="text-xl font-medium mb-10 leading-relaxed">
          I don&apos;t stop at Figma. I speak the language of engineers. My workflow includes Git, component-driven development, and a deep understanding of frontend and backend constraints.
        </p>
        <div className="space-y-6 font-mono">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-primary border border-black"></div>
            <span className="text-lg font-bold">Process Engineering</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-black border border-black"></div>
            <span className="text-lg font-bold">Design Systems Architecture</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-white border-2 border-black"></div>
            <span className="text-lg font-bold">Frontend Bridging</span>
          </div>
        </div>
      </div>
      <div className="p-8 lg:p-16 bg-gray-50 flex flex-col justify-center">
        <div className="border-2 border-black bg-white p-6 brutalist-shadow">
          <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-4">
            <span className="font-mono font-bold">SKILL_MATRIX.JSON</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span key={i} className={`px-4 py-2 border-2 border-black rounded-full font-bold cursor-crosshair transition-colors ${skill.color ? skill.color : 'hover:bg-black hover:text-white'}`}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

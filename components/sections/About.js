export default function About() {
  const items = [
    {
      icon: "groups",
      title: "Community Public Relation at UXID",
      description: "Active contributor to Indonesia's largest UX community. Sharing knowledge and organizing local meetups.",
      linkText: "VIEW_PROFILE",
      link: "https://www.instagram.com/ux_indonesia"
    },
    {
      icon: "school",
      title: "Mentor at Dealls.com",
      description: "Helping junior designers navigate their career paths and improving their technical design skills.",
      linkText: "VIEW_MENTORSHIP",
      link: "https://dealls.com/mentoring/panji-saputro-865"
    }
  ];

  return (
    <section className="p-8 lg:p-16 border-b-2 border-black bg-background-light" id="about">
      <h3 className="text-2xl font-bold uppercase mb-8 border-b-2 border-black pb-2 inline-block">Community &amp; Mentorship</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="border-2 border-black p-6 hover:bg-primary/5 transition-colors relative group">
            <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="material-icons text-5xl">{item.icon}</span>
            </div>
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-600 mb-4 pr-12">{item.description}</p>
            <a className="text-sm font-mono font-bold underline decoration-2 underline-offset-2 hover:text-primary" href={item.link || "#"} target="_blank" rel="noopener noreferrer">
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

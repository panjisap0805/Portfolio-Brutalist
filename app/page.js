import Hero from "@/components/home/Hero";
import Ticker from "@/components/ui/Ticker";
import WorkIndex from "@/components/home/WorkIndex";
import StatBand from "@/components/home/StatBand";
import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";

const skills = [
  "UX Research",
  "Usability Testing",
  "Contextual Inquiry",
  "Design Systems",
  "Figma",
  "Prototyping",
  "HTML / CSS / JS",
  "Node.js",
  "Git",
  "VPS Deploy",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker items={skills} />
      <WorkIndex />
      <StatBand />
      <About />
      <ContactCTA />
    </>
  );
}

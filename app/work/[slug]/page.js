import { notFound } from "next/navigation";
import { projects, getProject, getPrevNext } from "@/data";
import ProjectHero from "@/components/project/ProjectHero";
import Tldr from "@/components/project/Tldr";
import SideIndex from "@/components/project/SideIndex";
import SectionRenderer, { getSectionIndex } from "@/components/project/SectionRenderer";
import PrevNext from "@/components/project/PrevNext";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.card.name,
    description: project.tldr.problem,
    openGraph: {
      title: `${project.card.name}, a case study by Panji Saputro`,
      description: project.tldr.outcome,
      images: [{ url: project.card.thumbnail }],
    },
  };
}

function collectStrings(value, out) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectStrings(v, out));
  else if (value && typeof value === "object")
    Object.values(value).forEach((v) => collectStrings(v, out));
  return out;
}

function readMinutes(project) {
  const words = collectStrings([project.tldr, project.sections], [])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 180));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getPrevNext(slug);
  const index = getSectionIndex(project.sections);

  return (
    <article>
      <ProjectHero project={project} />
      <Tldr tldr={project.tldr} readMinutes={readMinutes(project)} />
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-6 md:px-10 md:pb-24 xl:grid xl:grid-cols-[210px_minmax(0,1fr)] xl:gap-12">
        <SideIndex items={index} />
        <div className="min-w-0">
          <SectionRenderer sections={project.sections} />
        </div>
      </div>
      <PrevNext prev={prev} next={next} />
    </article>
  );
}

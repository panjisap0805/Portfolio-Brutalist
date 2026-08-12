import { projects } from "@/data";

export const dynamic = "force-static";

const base = "https://panjisaputro.id";

export default function sitemap() {
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}/`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}

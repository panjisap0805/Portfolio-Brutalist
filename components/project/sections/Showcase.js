import Annotated from "@/components/ui/Annotated";

/** Final designs through the annotation layer. No silent images. */
export default function Showcase({ section }) {
  return (
    <div className="space-y-10">
      {section.intro && <p className="max-w-[62ch] leading-relaxed">{section.intro}</p>}
      {section.images.map((img) => (
        <Annotated key={img.src} {...img} />
      ))}
    </div>
  );
}

/** Long-form paragraphs. The data schema takes arrays on purpose (PLAN §3.2). */
export default function Prose({ paragraphs = [], className = "" }) {
  if (paragraphs.length === 0) return null;
  return (
    <div className={`max-w-[62ch] space-y-4 leading-relaxed ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

/**
 * Status stamp. tone "ink" = shipped, "cobalt" = validated/pending.
 * animate=true plays the one-time stamp-in on mount (case study hero).
 */
export default function Stamp({ label, tone = "cobalt", animate = false, className = "" }) {
  const color = tone === "ink" ? "text-ink" : "text-cobalt";
  return (
    <span className={`stamp ${animate ? "stamp--in" : ""} ${color} ${className}`}>{label}</span>
  );
}

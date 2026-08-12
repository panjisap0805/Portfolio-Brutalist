import SectionShell from "./SectionShell";
import Context from "./sections/Context";
import Starting from "./sections/Starting";
import Discovery from "./sections/Discovery";
import Turn from "./sections/Turn";
import Insights from "./sections/Insights";
import Decisions from "./sections/Decisions";
import Evolution from "./sections/Evolution";
import Showcase from "./sections/Showcase";
import Validation from "./sections/Validation";
import Impact from "./sections/Impact";
import Reflection from "./sections/Reflection";

const registry = {
  context: { label: "Context & Stakes", component: Context },
  starting: { label: "Starting Point", component: Starting },
  discovery: { label: "Discovery", component: Discovery },
  turn: { label: "The Turn", component: Turn },
  insights: { label: "Insights", component: Insights },
  decisions: { label: "Decisions", component: Decisions },
  evolution: { label: "Evolution", component: Evolution },
  showcase: { label: "Solution", component: Showcase },
  validation: { label: "Validation", component: Validation },
  impact: { label: "Impact", component: Impact },
  reflection: { label: "Reflection & Limits", component: Reflection },
};

export function getSectionIndex(sections) {
  return sections
    .filter((s) => registry[s.type])
    .map((s, i) => ({
      id: s.type,
      num: String(i + 1).padStart(2, "0"),
      label: registry[s.type].label,
    }));
}

export default function SectionRenderer({ sections }) {
  let n = 0;
  return sections.map((section) => {
    const entry = registry[section.type];
    if (!entry) return null;
    n += 1;
    const Component = entry.component;
    return (
      <SectionShell
        key={section.type}
        id={section.type}
        num={String(n).padStart(2, "0")}
        label={entry.label}
      >
        <Component section={section} />
      </SectionShell>
    );
  });
}

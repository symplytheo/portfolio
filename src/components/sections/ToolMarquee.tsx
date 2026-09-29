import { skills } from "../../data";
import { SkillIcon } from "../ui/SkillIcon";

const tools = skills.flatMap((group) => group.items);

/** Endless strip of the tools I use. Second copy is decorative (aria-hidden) to make the loop seamless. */
export function ToolMarquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {tools.map((tool) => (
        <li key={tool} className="text-soft flex items-center gap-2.5 font-mono text-sm whitespace-nowrap">
          <SkillIcon name={tool} />
          {tool}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border-line border-y bg-raised">
      <div className="marquee overflow-hidden py-5" aria-label="Tools I work with">
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}

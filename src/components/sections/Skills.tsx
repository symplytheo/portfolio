import { skills } from "../../data";
import { Section } from "../ui/Section";
import { SkillIcon } from "../ui/SkillIcon";
import { Tag } from "../ui/Tag";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools chosen for the job, not the trend"
      lead="Deep in both major frontend ecosystems — React/Next.js and Vue/Nuxt — with enough backend fluency (NestJS, REST, GraphQL) to design the full data contract."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-(--border) sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group} className="bg-raised p-6 sm:p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag label={item} icon={<SkillIcon name={item} />} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

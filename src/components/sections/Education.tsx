import { education } from "../../data";
import { Section } from "../ui/Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education & Credentials" title="Foundations">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((entry) => (
          <article key={entry.institution} className="rounded-2xl border border-line bg-raised p-6 sm:p-7">
            <p className="tabular font-mono text-xs text-brand">{entry.period}</p>
            <h3 className="font-display mt-2 text-lg font-bold tracking-tightest text-body">
              {entry.credential}
            </h3>
            <p className="mt-1 text-sm text-soft">{entry.institution}</p>
            <p className="mt-3 text-sm leading-relaxed text-soft">{entry.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

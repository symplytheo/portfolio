import { profile } from "../../data";
import { Section } from "../ui/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A product mindset, applied to systems architecture">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-soft md:text-lg">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <dl className="h-fit space-y-4 rounded-2xl border border-line bg-raised p-6">
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-soft">Currently</dt>
            <dd className="mt-1 text-sm text-body">
              Senior Software Engineer @ Soft Alliance · Senior Frontend Engineer @ Leyyow
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-soft">Focus</dt>
            <dd className="mt-1 text-sm text-body">
              Frontend architecture · API design · performance · enterprise reliability
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-soft">Open to</dt>
            <dd className="mt-1 text-sm text-body">
              Senior software &amp; frontend roles, remote-first teams, and high-stakes product work
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

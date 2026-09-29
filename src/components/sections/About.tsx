import { principles, profile } from "../../data";
import { Section } from "../ui/Section";

export function About() {
  return (
    <Section id="about" index="02" eyebrow="About" title="A product mindset, applied to systems architecture.">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="space-y-5 text-base leading-relaxed text-soft md:text-lg">
            {profile.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-5 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-soft">Currently</dt>
              <dd className="mt-1 text-sm text-body">Soft Alliance · Leyyow</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-soft">Open to</dt>
              <dd className="mt-1 text-sm text-body">Remote-first teams, contracts &amp; high-stakes product work</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="note text-3xl text-brand">How I work —</h3>
          <ol className="mt-4 space-y-3">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="flex gap-5 rounded-2xl border border-line bg-raised p-5 transition-transform hover:-translate-y-0.5"
              >
                <span className="font-display tabular text-2xl font-extrabold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-lg font-bold tracking-tightest text-body">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

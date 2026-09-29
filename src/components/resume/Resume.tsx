import { useEffect } from "react";
import { education, experience, profile, projects, skills } from "../../data";

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

function Heading({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{children}</h2>
  );
}

/** In-browser résumé at /resume — same data as the site, printable to PDF. */
export default function Resume() {
  useEffect(() => {
    document.title = `Résumé — ${profile.name}, ${profile.role}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="main" className="bg-dots min-h-screen px-4 pt-28 pb-20 print:bg-none print:p-0">
      <div className="no-print mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-between gap-3">
        <a href="/" className="text-sm text-soft transition-colors hover:text-brand">
          ← Back to portfolio
        </a>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-line bg-raised px-4 py-2 text-sm font-medium text-body transition-colors hover:border-(--brand)"
          >
            Print / Save as PDF
          </button>
          <a
            href={profile.resumePdf}
            download
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-(--bg) transition-opacity hover:opacity-90"
          >
            Download PDF
          </a>
        </div>
      </div>

      <article className="mx-auto max-w-3xl rounded-2xl border border-line bg-raised p-7 shadow-[0_30px_60px_-40px_rgb(36_26_18/0.5)] sm:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tightest text-body sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-brand">{profile.role}</p>
          </div>
          <ul className="space-y-1 font-mono text-xs text-soft sm:text-right">
            <li>{profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-brand">{profile.email}</a>
            </li>
            <li>
              <a href={profile.social.linkedin} className="hover:text-brand">linkedin.com/in/symplytheo</a>
            </li>
            <li>
              <a href={profile.social.github} className="hover:text-brand">github.com/symplytheo</a>
            </li>
          </ul>
        </header>

        <section className="mt-8">
          <Heading>Summary</Heading>
          <p className="mt-3 leading-relaxed text-body">{profile.summary[0]}</p>
        </section>

        <section className="mt-10 print-avoid-break">
          <Heading>Skills</Heading>
          <dl className="mt-4 space-y-2 text-sm">
            {skills.map((group) => (
              <div key={group.group} className="grid gap-1 sm:grid-cols-[150px_1fr]">
                <dt className="font-semibold text-body">{group.group}</dt>
                <dd className="text-soft">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <Heading>Experience</Heading>
          <ol className="mt-4 space-y-8">
            {experience.map((role) => (
              <li key={`${role.company}-${role.title}`} className="print-avoid-break">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-display text-lg font-bold tracking-tightest text-body">
                    {role.title}
                    {role.type && <span className="ml-2 font-mono text-xs font-normal text-soft">({role.type})</span>}
                  </h3>
                  <p className="tabular shrink-0 font-mono text-xs text-soft">
                    {role.start} — {role.end}
                  </p>
                </div>
                <p className="text-sm text-soft">
                  {role.company} · {role.location}
                </p>
                <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-body marker:text-brand">
                  {role.highlights.map((h) => (
                    <li key={h.slice(0, 32)}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 print-avoid-break">
          <Heading>Selected projects</Heading>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.name}>
                <p className="font-display font-bold text-body">
                  {p.name}{" "}
                  {p.link && (
                    <a href={p.link} className="font-mono text-xs font-normal text-brand">
                      {hostOf(p.link)}
                    </a>
                  )}
                </p>
                <p className="text-sm leading-relaxed text-soft">{p.impact}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 print-avoid-break">
          <Heading>Education</Heading>
          <ul className="mt-4 space-y-3 text-sm">
            {education.map((e) => (
              <li key={e.institution} className="flex flex-col justify-between gap-1 sm:flex-row">
                <span>
                  <span className="font-semibold text-body">{e.credential}</span>
                  <span className="text-soft"> — {e.institution}</span>
                </span>
                <span className="tabular font-mono text-xs text-soft">{e.period}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

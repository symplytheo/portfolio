import { projects } from "../../data";
import { ProjectVisual } from "../ui/ProjectVisual";
import { Section } from "../ui/Section";
import { Tag } from "../ui/Tag";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Production systems, not demos"
      lead="Every project below runs in production with real users, real money, or real public-sector stakes."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col rounded-2xl border border-line bg-raised p-6 transition-colors hover:border-(--brand) sm:p-7"
          >
            <ProjectVisual />
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                {project.category}
              </p>
              <p className="font-mono text-xs text-soft">{project.role}</p>
            </div>
            <h3 className="font-display mt-3 text-2xl font-bold tracking-tightest text-body">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-soft">{project.description}</p>
            <p className="mt-3 border-l-2 border-(--brand) pl-3 text-sm font-medium text-body">
              {project.impact}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 pt-1">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Tag label={tech} />
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm font-medium text-brand underline-offset-4 hover:underline"
              >
                Visit project ↗
              </a>
            )}
          </article>
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {more.map((project) => (
            <article key={project.name} className="rounded-2xl border border-line p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-bold tracking-tightest text-body">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-soft">{project.category}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-soft">{project.description}</p>
              <p className="mt-3 font-mono text-xs text-soft">{project.stack.join(" · ")}</p>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}

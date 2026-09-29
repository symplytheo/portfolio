import { projects, type Project } from "../../data";
import { useReveal } from "../../hooks/useReveal";
import { Section } from "../ui/Section";
import { Tag } from "../ui/Tag";

const hostOf = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, "") : "");

/** Minimal browser chrome around a screenshot. */
function BrowserFrame({ src, host, alt }: { src: string; host: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-raised shadow-[0_24px_50px_-24px_rgb(36_26_18/0.45)]">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="text-soft ml-3 truncate rounded-md bg-page px-2.5 py-0.5 font-mono text-[11px]">{host}</span>
      </div>
      <img
        src={src}
        alt={alt}
        width={1200}
        height={750}
        loading="lazy"
        decoding="async"
        className="aspect-16/10 w-full object-cover object-top"
      />
    </div>
  );
}

/**
 * Taped stack of screenshots: the first shot sits in front, a second one peeks out
 * behind it and slides into view on hover.
 */
function ShotStack({ project, tilt }: { project: Project; tilt: "left" | "right" }) {
  const [front, back] = project.shots ?? [];
  if (!front) return null;
  const left = tilt === "left";

  return (
    <div className={`relative ${back ? (left ? "pr-8 pb-8" : "pb-8 pl-8") : ""}`}>
      {back && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 top-8 transition-transform duration-500 ease-out-soft ${
            left
              ? "left-8 rotate-[3deg] group-hover:translate-x-4 group-hover:rotate-[5deg]"
              : "right-8 rotate-[-3deg] group-hover:-translate-x-4 group-hover:rotate-[-5deg]"
          }`}
        >
          <BrowserFrame src={back.src} host={back.host} alt="" />
        </div>
      )}
      <div
        className={`relative transition-transform duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:rotate-0 ${
          left ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
        }`}
      >
        <span aria-hidden="true" className="tape -top-3 left-6 -rotate-6" />
        <span aria-hidden="true" className="tape -right-4 -bottom-3 rotate-[-28deg]" />
        <BrowserFrame src={front.src} host={front.host} alt={`Screenshot of ${project.name} (${front.host})`} />
      </div>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLElement>();
  const flip = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="reveal group grid items-center gap-10 md:grid-cols-2 md:gap-14"
    >
      <div className={flip ? "md:order-2" : ""}>
        <ShotStack project={project} tilt={flip ? "right" : "left"} />
      </div>
      <div>
        <div className="flex items-baseline gap-4">
          <span className="num-outline font-display text-5xl font-extrabold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{project.category}</p>
        </div>
        <h3 className="font-display mt-3 text-4xl font-extrabold tracking-tightest text-body">{project.name}</h3>
        <p className="mt-4 leading-relaxed text-soft">{project.description}</p>
        <p className="mt-5 rounded-xl bg-brand-soft px-4 py-3 text-sm font-medium text-body">
          <span className="font-mono text-[11px] tracking-[0.18em] text-brand uppercase">Impact · </span>
          {project.impact}
        </p>
        <p className="mt-5 font-mono text-xs text-soft">
          My role — <span className="text-body">{project.role}</span>
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
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
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand underline-offset-4 hover:underline"
          >
            Visit {hostOf(project.link)} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      index="01"
      eyebrow="Selected work"
      title="Production systems, not demos."
      lead="Every project below runs in production with real users, real money, or real public-sector stakes."
      note="all live — click through ↘"
    >
      <div className="space-y-24 md:space-y-32">
        {featured.map((project, i) => (
          <FeaturedProject key={project.name} project={project} index={i} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <h3 className="font-display mt-28 text-2xl font-bold tracking-tightest text-body">Also shipped</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {more.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-raised transition-colors hover:border-(--brand)"
              >
                {project.shots?.[0] && (
                  <div className="overflow-hidden border-b border-line">
                    <img
                      src={project.shots[0].src}
                      alt=""
                      width={1200}
                      height={750}
                      loading="lazy"
                      decoding="async"
                      className="aspect-16/8 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-xl font-bold tracking-tightest text-body">
                      {project.name} <span aria-hidden="true" className="text-brand">↗</span>
                    </h4>
                    <p className="font-mono text-xs text-soft">{project.category}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-soft">{project.description}</p>
                  <p className="mt-3 font-mono text-xs text-soft">{project.stack.join(" · ")}</p>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}

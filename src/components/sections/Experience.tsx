import { experience } from "../../data";
import { Section } from "../ui/Section";
import { useReveal } from "../../hooks/useReveal";

function RoleEntry({
  role,
  index,
}: {
  role: (typeof experience)[number];
  index: number;
}) {
  const ref = useReveal<HTMLLIElement>();
  const code = String(experience.length - index).padStart(2, "0");

  return (
    <li
      ref={ref}
      className="reveal relative grid gap-4 py-8 md:grid-cols-[160px_1fr] md:gap-10"
    >
      {/* Timeline rail */}
      <div className="md:text-right">
        <p className="tabular font-mono text-sm text-brand">{code}</p>
        <p className="tabular mt-1 font-mono text-xs text-soft">
          {role.start} — {role.end}
        </p>
      </div>

      <div className="border-l border-line pl-6 md:pl-10">
        <span
          aria-hidden="true"
          className="absolute mt-2 ml-[-30.5px] h-2 w-2 rounded-full border border-(--brand) bg-page md:ml-[-44.5px]"
        />
        <h3 className="font-display text-xl font-bold tracking-tightest text-body">
          {role.title}
          {role.type && (
            <span className="ml-2 font-mono text-xs font-normal text-soft">
              ({role.type})
            </span>
          )}
        </h3>
        <p className="mt-1 text-sm text-soft">
          {role.company} · {role.location}
        </p>
        <ul className="mt-4 space-y-2.5">
          {role.highlights.map((highlight) => (
            <li
              key={highlight.slice(0, 32)}
              className="flex gap-3 text-sm leading-relaxed text-soft"
            >
              <span
                aria-hidden="true"
                className="mt-1.75 h-1 w-3 shrink-0 rounded-full bg-brand-soft"
              >
                <span className="block h-1 w-1.5 rounded-full bg-brand" />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {role.stack && (
          <p className="mt-4 font-mono text-xs text-soft">
            {role.stack.join(" · ")}
          </p>
        )}
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Six years, from internship to architecture lead"
      lead="A reverse-chronological record. Each entry is numbered like a ledger line — the most recent work at the top."
    >
      <ol className="divide-y divide-(--border)">
        {experience.map((role, index) => (
          <RoleEntry
            key={`${role.company}-${role.title}`}
            role={role}
            index={index}
          />
        ))}
      </ol>
    </Section>
  );
}

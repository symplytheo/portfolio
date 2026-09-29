import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  lead?: string;
  note?: string;
}

/** Shared section shell: numbered eyebrow, display heading, optional hand-written note, reveal-on-scroll. */
export function Section({ id, index, eyebrow, title, lead, note, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
    >
      <header className="relative mb-12 md:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
          <span className="text-soft">{index} /</span> {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="font-display mt-3 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-tightest text-body sm:text-5xl"
        >
          {title}
        </h2>
        {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-soft md:text-lg">{lead}</p>}
        {note && (
          <p aria-hidden="true" className="note absolute -top-2 right-0 hidden rotate-3 text-2xl text-brand md:block">
            {note}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  lead?: string;
}

/** Shared section shell: ledger-code eyebrow, display heading, reveal-on-scroll. */
export function Section({ id, eyebrow, title, lead, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
    >
      <header className="mb-10 md:mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h2
          id={`${id}-title`}
          className="font-display mt-3 text-3xl font-bold tracking-tightest text-body sm:text-4xl"
        >
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-soft">{lead}</p>}
      </header>
      {children}
    </section>
  );
}

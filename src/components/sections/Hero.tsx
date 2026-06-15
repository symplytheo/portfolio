import { impactLedger, profile } from "../../data";
import { useCountUp } from "../../hooks/useCountUp";

function LedgerRow({
  prefix,
  value,
  suffix,
  label,
  index,
}: {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, value: count } = useCountUp(value, 1000 + index * 150);
  const formatted = count.toLocaleString("en-NG");

  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-4 last:border-b-0">
      <span className="text-sm leading-snug text-soft">{label}</span>
      <span
        ref={ref}
        className="tabular font-mono text-lg font-medium whitespace-nowrap text-body sm:text-xl"
      >
        {prefix}
        {formatted}
        {suffix}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative mx-auto max-w-6xl overflow-hidden px-5 pt-32 pb-16 sm:px-8 md:pt-40 md:pb-24"
    >
      <div aria-hidden="true" className="hero-glow" />
      <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            {profile.role} · {profile.location}
          </p>
          <h1 className="font-display mt-5 text-4xl leading-[1.15] font-bold tracking-tightest text-body sm:text-5xl md:text-6xl">
            Frontend for systems that move{" "}
            <span className="relative inline-block text-brand">
              money
              <svg
                aria-hidden="true"
                viewBox="0 0 120 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-brand"
              >
                <path
                  d="M2 8 C 20 2, 40 12, 60 6 S 100 2, 118 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            , people, and trust.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-(--bg) transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-line bg-raised px-6 py-3 text-sm font-medium text-body transition-colors hover:border-(--brand)"
            >
              Download CV (PDF)
            </a>
            {/* <a
              href={`mailto:${profile.email}`}
              className="px-2 py-3 text-sm text-soft underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              {profile.email}
            </a> */}
          </div>
        </div>

        {/* Signature element: the impact ledger */}
        <aside
          aria-label="Career impact at a glance"
          className="rounded-2xl border border-line bg-raised p-6 shadow-[0_1px_0_var(--border)] sm:p-7"
        >
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-soft">
              Impact ledger
            </h2>
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand"
            />
          </div>
          {impactLedger.map((item, i) => (
            <LedgerRow key={item.label} index={i} {...item} />
          ))}
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-soft">
            Figures from production systems shipped 2023–2026.
          </p>
        </aside>
      </div>
    </section>
  );
}

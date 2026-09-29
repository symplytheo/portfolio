import { useRef, type PointerEvent } from "react";
import { impactLedger, profile } from "../../data";
import { useCountUp } from "../../hooks/useCountUp";
import { AccessBadge } from "../ui/AccessBadge";

function Stat({
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

  return (
    <div className="border-line border-t pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
      <p className="font-display tabular text-3xl font-bold tracking-tightest md:text-4xl">
        <span ref={ref}>
          {prefix}
          {count.toLocaleString("en-NG")}
          {suffix}
        </span>
      </p>
      <p className="text-soft mt-1.5 text-sm leading-snug">{label}</p>
    </div>
  );
}

export function Hero() {
  const bandRef = useRef<HTMLElement>(null);

  // Spotlight follows the pointer (CSS vars only — no React re-render)
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = bandRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="top"
      ref={bandRef}
      aria-label="Introduction"
      onPointerMove={onPointerMove}
      className="band band-grid relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-5 pt-32 pb-14 sm:px-8 md:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-soft">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
              </span>
              Available for new work · {profile.location}
            </p>
            <h1 className="font-display mt-6 text-[2.75rem] leading-[1.02] font-extrabold tracking-tightest sm:text-6xl md:text-7xl">
              Frontend for systems that move{" "}
              <span className="relative inline-block text-brand">
                money
                <svg
                  aria-hidden="true"
                  viewBox="0 0 120 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand"
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
            <p className="text-soft mt-7 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-brand px-6 py-3 text-sm on-brand font-semibold transition-transform hover:-translate-y-0.5"
              >
                See selected work
              </a>
              <a
                href={profile.resumePage}
                className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-(--brand)"
              >
                View résumé
              </a>
            </div>
          </div>

          <div className="relative pt-10 pb-4 lg:pt-0">
            <p
              aria-hidden="true"
              className="note absolute top-10 -left-6 hidden -rotate-6 text-2xl text-brand xl:block"
            >
              hi, that's me —
              <br />
              click to spin
              <svg viewBox="0 0 80 40" className="mt-1 ml-16 h-8 w-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 6 C 30 4, 55 12, 72 32" />
                <path d="M62 30 L 73 33 L 74 21" />
              </svg>
            </p>
            <AccessBadge />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4">
          {impactLedger.map((item, i) => (
            <Stat key={item.label} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

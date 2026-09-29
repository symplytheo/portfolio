import { profile, services } from "../../data";
import { Section } from "../ui/Section";

export function Services() {
  return (
    <Section
      id="services"
      index="06"
      eyebrow="Work with me"
      title="Choose how we work together."
      lead="Three ways to bring me into your product. Every engagement starts with a free 30-minute call to scope it properly."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, i) => {
          const highlighted = i === 0;
          return (
            <article
              key={service.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                highlighted
                  ? "band ink border-transparent shadow-[0_30px_60px_-30px_rgb(36_26_18/0.6)]"
                  : "border-line bg-raised"
              }`}
            >
              {service.badge && (
                <p className="note absolute -top-4 right-5 rotate-3 rounded-sm bg-(--color-tape) px-3 py-1 text-lg text-[#241a12] shadow-sm">
                  {service.badge}
                </p>
              )}
              <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display mt-2 text-2xl font-extrabold tracking-tightest">{service.name}</h3>
              <p className="text-soft mt-2 text-sm leading-relaxed">{service.summary}</p>

              <div className="border-line mt-6 border-t pt-6">
                <p className="font-display tabular text-4xl font-extrabold tracking-tightest">{service.price}</p>
                <p className="text-soft mt-1 font-mono text-xs">{service.priceNote}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={highlighted ? "" : "text-body"}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`${service.name} enquiry`)}`}
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  highlighted ? "on-brand bg-brand" : "border border-line text-body hover:border-(--brand)"
                }`}
              >
                {service.cta}
              </a>
            </article>
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm text-soft">
        Not sure which fits?{" "}
        <a href={`mailto:${profile.email}`} className="font-semibold text-brand underline-offset-4 hover:underline">
          Tell me what you're building
        </a>{" "}
        and I'll recommend the best way forward.
      </p>
    </Section>
  );
}

import { profile } from "../../data";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="band band-grid relative scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
          <span className="text-soft">07 /</span> Contact
        </p>
        <h2
          id="contact-title"
          className="font-display mx-auto mt-5 max-w-4xl text-5xl leading-[0.98] font-extrabold tracking-tightest sm:text-7xl md:text-8xl"
        >
          Got a hard problem?
          <br />
          <span className="text-brand">Let's build it.</span>
        </h2>
        <p className="text-soft mx-auto mt-7 max-w-xl text-lg leading-relaxed">
          Open to software engineering roles, contract engagements, and conversations about hard
          product-engineering problems.
        </p>

        <div className="relative mx-auto mt-10 inline-block">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-brand px-8 py-4 text-base on-brand font-semibold transition-transform hover:-translate-y-0.5 sm:text-lg"
          >
            {profile.email}
          </a>
          <p aria-hidden="true" className="note absolute top-1/2 -right-44 hidden w-40 -translate-y-1/2 rotate-[-4deg] text-left text-xl text-brand lg:block">
            ← I reply within a business day
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { href: profile.social.linkedin, label: "LinkedIn", external: true },
            { href: profile.social.github, label: "GitHub", external: true },
            { href: profile.social.whatsapp, label: "WhatsApp", external: true },
            { href: profile.social.x, label: "X / Twitter", external: true },
            { href: profile.resumePage, label: "Résumé", external: false },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-block rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-(--brand)"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { profile } from "../../data";
import { Section } from "../ui/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something dependable"
      lead="I'm open to senior frontend roles, contract engagements, and conversations about hard frontend problems. The fastest way to reach me is email — I reply within a business day."
    >
      <div className="rounded-2xl border border-line bg-raised p-7 sm:p-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-2xl font-bold tracking-tightest text-brand underline-offset-8 hover:underline sm:text-3xl"
            >
              {profile.email}
            </a>
            {/* <p className="mt-3 font-mono text-sm text-soft">{profile.phone} · {profile.location}</p> */}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-body transition-colors hover:border-(--brand)"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-body transition-colors hover:border-(--brand)"
            >
              GitHub
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-(--bg) transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

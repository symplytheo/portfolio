import { profile } from "../../data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono text-xs text-soft">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React,
          Vite & TailwindCSS.
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-soft transition-colors hover:text-brand"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-soft transition-colors hover:text-brand"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-soft transition-colors hover:text-brand"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

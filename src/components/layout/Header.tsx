import { useEffect, useState } from "react";
import { navLinks, profile } from "../../data";
import { ThemeToggle } from "../ui/ThemeToggle";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when a link is chosen
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-line bg-raised-glass px-5 shadow-sm backdrop-blur-sm transition-shadow sm:px-4 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <a href="#top" className="font-display text-sm font-bold tracking-tightest text-body">
          T<span className="text-brand">.</span>Iyonor
          <span className="ml-2 hidden font-mono text-xs font-normal text-soft sm:inline">
            / frontend engineer
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-soft transition-colors hover:text-body"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-(--bg) transition-opacity hover:opacity-90 md:inline-block"
          >
            Download CV
          </a>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-body md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-raised-glass shadow-md backdrop-blur-md md:hidden">
          <ul className="px-3 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-base text-body"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.resumeUrl}
                download
                onClick={close}
                className="block rounded-full bg-brand px-4 py-3 text-center text-sm font-medium text-(--bg)"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

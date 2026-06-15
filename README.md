# Theophilus Iyonor — Portfolio

A production-ready personal portfolio built with **React 18 + Vite 6 + TypeScript + TailwindCSS v4**.

```bash
npm install
npm run dev      # local development
npm run build    # type-check + production build
npm run preview  # preview the production build
```

---

## 1. Portfolio strategy

The site is positioned around one differentiating truth from the CV: this is not a portfolio of demos — it's a record of **high-stakes production systems** (payments, payroll, biometric identity) with measurable financial and civic outcomes. Every section reinforces that positioning:

- The hero leads with the thesis ("Frontend for systems that move money, people, and trust") and an **Impact Ledger** — the four hardest numbers from the CV (₦1B+ monthly volume, 215,000+ verified employees, ₦200M+ payroll, 100k+ users), animated with a count-up and formatted with tabular numerals like a bank statement.
- Projects are framed by **category → description → impact → stack → role**, so a recruiter scanning for 8 seconds still leaves with the outcomes.
- Dual-ecosystem depth (React/Next *and* Vue/Nuxt) is called out explicitly because it's rare and widens the recruiter match surface.
- The contact section sets a response-time expectation ("within a business day") to signal professionalism.

A testimonials section was deliberately omitted: there are no quotes in the source material, and fabricated social proof damages credibility. A slot for it is trivial to add later (see §10).

## 2. Site architecture & sitemap

Single-page application with anchor navigation — the right shape for a portfolio (one canonical URL, maximum link equity, instant section jumps):

```
/  (single page)
├── #top         Hero + Impact Ledger
├── #about       About + current status card
├── #skills      Skills grouped by domain
├── #experience  Reverse-chronological timeline (numbered ledger lines)
├── #projects    Featured (4) + additional (2) projects
├── #education   Education & credentials
└── #contact     Email, phone, socials, CV download
/Theophilus_Iyonor_CV.pdf   (downloadable resume)
/sitemap.xml, /robots.txt, /site.webmanifest
```

## 3. UI/UX design rationale

**Concept: "the ledger."** The work is payments and payroll, so the visual language borrows from financial statements: ruled rows, tabular monospace numerals, a single trust-green accent, quiet surfaces. The signature element is the hero Impact Ledger; everything else stays disciplined so that one element carries the memorability.

- **Hierarchy:** mono uppercase eyebrows → Archivo display headings → Instrument Sans body. Three distinct voices make scanning effortless.
- **Timeline as information:** experience entries are numbered in reverse (07 → 01) like ledger lines — the numbering encodes actual sequence, not decoration.
- **Recruiter scanning:** impact statements in project cards are visually isolated with a green left rule; stacks are mono-type one-liners.
- **Motion:** one orchestrated moment (the count-up) plus subtle scroll reveals. `prefers-reduced-motion` disables all of it.
- **Accessibility:** semantic landmarks, skip link, `aria-labelledby` sections, visible `:focus-visible` rings, `aria-pressed` theme toggle, `color-scheme` declarations, AA-contrast palette in both themes.

## 4. Implementation

See `src/`. Highlights:

- **Data-driven content:** all copy lives in `src/data/profile.ts`. Updating the site never requires touching components.
- **Tailwind v4:** tokens defined in `@theme`; light/dark handled by semantic CSS variables flipped on `.dark`, with `@custom-variant dark` for class-based dark mode.
- **Hooks:** `useTheme` (persisted, falls back to system preference, storage-failure safe), `useReveal` (IntersectionObserver scroll reveals), `useCountUp` (eased rAF counter, reduced-motion aware).

## 5. Color palette & typography

| Token | Light | Dark | Role |
|---|---|---|---|
| paper / bg | `#F6F7F5` | `#0C1110` | page background |
| surface | `#FFFFFF` | `#131A17` | cards |
| ink / fg | `#14201B` | `#E8EDE9` | text |
| muted | `#5B6A63` | `#93A39B` | secondary text |
| line | `#DCE2DD` | `#243029` | rules & borders |
| accent | `#0E7A5F` | `#3ECF9A` | "ledger green" — finance-grade trust |

Type: **Archivo** (display, 700–800, tight tracking) · **Instrument Sans** (body) · **IBM Plex Mono** (eyebrows, dates, metrics — always `tabular-nums`).

## 6. Component structure

```
src/
├── data/profile.ts            ← single source of truth
├── hooks/                     useTheme · useReveal · useCountUp
└── components/
    ├── layout/                Header (sticky nav, mobile menu) · Footer
    ├── sections/              Hero · About · Skills · Experience · Projects · Education · Contact
    └── ui/                    Section (shared shell) · Tag · ThemeToggle
```

## 7. SEO implementation

- Optimised `<title>` and meta description with role + stack keywords.
- Open Graph (`profile` type) and Twitter card tags; `og:image` slot at `/og-image.png` (add a 1200×630 PNG — see §10).
- **JSON-LD structured data:** `Person` (with `knowsAbout`, `worksFor`, `alumniOf`, `sameAs` → GitHub/LinkedIn) + `WebSite`, giving search engines and AI answer systems a machine-readable profile.
- Canonical URL, `robots.txt`, `sitemap.xml`, web manifest, semantic HTML (`header/main/section/article/ol`), one `h1`, ordered heading levels.
- **Action required:** replace `https://symplytheo.dev/` with your real domain in `index.html`, `robots.txt`, and `sitemap.xml`.

## 8. Performance

Already in the build: ~55 kB gzipped JS (React chunk split for caching), 4.9 kB gzipped CSS, zero runtime CSS-in-JS, font loading via preconnect + `display=swap`, passive scroll listeners, IntersectionObservers disconnected after use.

Recommended next: self-host fonts as WOFF2 via `@fontsource` (removes third-party requests), add a real OG image as optimised PNG, serve via a CDN edge network, and run Lighthouse CI on deploy (this build should score 95+ across the board).

## 9. Deployment

**Vercel** is the natural fit (already in your workflow): `vercel` from the repo root, framework auto-detected, zero config. Netlify or Cloudflare Pages work identically (`build` command: `npm run build`, output: `dist`). Connect the GitHub repo for CI/CD on push, then add the custom domain and verify the canonical URLs match.

## 10. Future enhancements

1. **OG image** — a 1200×630 card with name, role, and the ledger motif; biggest remaining SEO/social win.
2. **Testimonials** — collect 2–3 short quotes from colleagues at Soft Alliance/Leyyow; add a `testimonials` array to `profile.ts` and a small section component.
3. **Blog/Insights** — worth adding only with a writing cadence; engineering write-ups on the AFIS/biometric integration or the ₦1B-scale payment frontend would rank well and demonstrate depth. Vite + MDX or migrating the shell to Astro are clean paths.
4. **Case-study pages** — one deep-dive per featured project (problem → constraints → architecture → outcome) for hiring-manager audiences.
5. **Contact form** — a serverless endpoint (Vercel function + Resend) if mailto friction shows up in analytics.
6. **Analytics** — privacy-friendly (Plausible/Umami) to learn which sections recruiters dwell on.

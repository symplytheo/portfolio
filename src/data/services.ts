export interface Service {
  name: string;
  summary: string;
  price: string;
  priceNote: string;
  includes: string[];
  cta: string;
  badge?: string;
}

export const services: Service[] = [
  {
    name: "Product Build",
    summary:
      "A web product built properly from Figma to production — for founders and teams launching something new.",
    price: "$3.5k – $10k",
    priceNote: "per project · 3 – 6 months",
    includes: [
      "MVPs, dashboards & internal tools",
      "React / Next.js or Vue / Nuxt",
      "API integration, auth & payments",
      "Responsive, accessible UI",
      "Deployment & CI/CD setup",
      "30 days post-launch support",
    ],
    cta: "Discuss your project",
    badge: "Best for startups",
  },
  {
    name: "Frontend Rescue",
    summary:
      "An existing React or Vue app that's slow, fragile, or hard to change — audited and fixed.",
    price: "$1k – $3.5k",
    priceNote: "fixed scope · 2 – 6 weeks",
    includes: [
      "Architecture & codebase audit",
      "Core Web Vitals & bundle optimisation",
      "State management clean-up",
      "Component-system refactor",
      "Written report with priorities",
    ],
    cta: "Fix my frontend",
  },
  {
    name: "Embedded Engineer",
    summary:
      "Experienced frontend capacity inside your team, shipping alongside your engineers every sprint.",
    price: "From $1.5k",
    priceNote: "per month · contract",
    includes: [
      "Feature development",
      "Frontend architecture & reviews",
      "Mentoring & design-system work",
      "Product & QA collaboration",
      "Async-friendly, overlaps EU/US hours",
    ],
    cta: "Work with me",
  },
];

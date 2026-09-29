/** Personal identity, summary, and social links. */

import portrait from "../assets/images/theo.webp";

export const profile = {
  name: "Theophilus O. Iyonor",
  firstName: "Theophilus",
  handle: "symplytheo",
  role: "Software Engineer",
  location: "Lagos, Nigeria · Remote (Global)",
  email: "symplytheo@gmail.com",
  phone: "+234 803 261 6345",
  /** HTML résumé (printable) and the original PDF */
  resumePage: "/resume",
  resumePdf: "/Theophilus_Iyonor_CV.pdf",
  /**
   * Badge photo(s). Only `center` is required. Add `left`, `right`, `up`, `down`
   * (same crop, looking in that direction) and the badge will follow the cursor
   * with your gaze.
   */
  portrait: {
    center: portrait,
  } as Partial<Record<"center" | "left" | "right" | "up" | "down", string>>,
  tagline:
    "I build the systems people depend on — payments, payroll, and identity platforms where reliability is non-negotiable. I lead from the frontend, with the full-stack reach to own the whole data contract.",
  summary: [
    "I'm a Software Engineer with deep frontend specialisation, building scalable, high-performance web applications across the modern JavaScript ecosystem — Vue, Nuxt, React, Next.js, and TypeScript — backed by Node, NestJS, and SQL/NoSQL data layers. For the last six years I've worked where software quality has real financial and civic consequences: payment processors, payroll engines, and biometric identity systems used by governments and financial institutions.",
    "I lead frontend architecture decisions, design the API contracts behind them, mentor engineers, and collaborate closely with product, backend, and QA teams. My focus goes beyond clean code: performance budgets, maintainability, accessibility, and the long-term health of the systems I ship.",
    "I bring a product mindset to engineering — every component I build is judged by the outcome it creates for the people using it.",
  ],
  social: {
    github: "https://github.com/symplytheo",
    linkedin: "https://www.linkedin.com/in/symplytheo/",
    x: "https://x.com/symplytheo",
    /** wa.me link with a prefilled first message */
    whatsapp: `https://wa.me/2348032616345?text=${encodeURIComponent(
      "Hey Theo! I came across your portfolio and really liked your work. I'd love to chat with you about a project.",
    )}`,
  },
} as const;

/** Hero "ledger" — the measurable outcomes that define the work */
export const impactLedger = [
  {
    value: 1,
    suffix: "B+",
    prefix: "₦",
    label: "Monthly transaction volume on SoftPay frontend",
  },
  {
    value: 215000,
    suffix: "+",
    prefix: "",
    label: "Public-sector employees verified via EbioVerify",
  },
  {
    value: 200,
    suffix: "M+",
    prefix: "₦",
    label: "Payroll processed through SoftSuite HRM",
  },
  {
    value: 100000,
    suffix: "+",
    prefix: "",
    label: "Users served across enterprise platforms",
  },
] as const;

/** "How I work" — principles shown beside the About copy */
export const principles = [
  {
    title: "Reliability is a feature.",
    body: "In payments and payroll a flaky screen is a financial incident. I design the failure, loading, and empty states before the happy path.",
  },
  {
    title: "Own the data contract.",
    body: "I shape the API with the backend team, so the frontend never has to guess what the server means.",
  },
  {
    title: "Performance is a budget, not a cleanup task.",
    body: "Bundle size, render cost, and network waterfalls get decided up front — and measured before every release.",
  },
  {
    title: "Build for the next engineer.",
    body: "Typed, documented component systems that a team can extend confidently long after I've moved on to the next module.",
  },
  {
    title: "AI speeds me up. I own every line.",
    body: "Claude Code and Copilot are in my toolbox; everything they produce is reviewed, tested, and understood before it ships.",
  },
] as const;

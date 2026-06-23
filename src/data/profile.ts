/** Personal identity, summary, and social links. */

export const profile = {
  name: "Theophilus O. Iyonor",
  firstName: "Theophilus",
  role: "Senior Software Engineer",
  location: "Lagos, Nigeria · Remote (Global)",
  email: "symplytheo@gmail.com",
  phone: "+234 803 261 6345",
  resumeUrl: "/Theophilus_Iyonor_CV.pdf",
  tagline:
    "I build the systems people depend on — payments, payroll, and identity platforms where reliability is non-negotiable. I lead from the frontend, with the full-stack reach to own the whole data contract.",
  summary: [
    "I'm a Senior Software Engineer with deep frontend specialisation, building scalable, high-performance web applications across the modern JavaScript ecosystem — Vue, Nuxt, React, Next.js, and TypeScript — backed by Node, NestJS, and SQL/NoSQL data layers. For the last six years I've worked where software quality has real financial and civic consequences: payment processors, payroll engines, and biometric identity systems used by governments and financial institutions.",
    "I lead frontend architecture decisions, design the API contracts behind them, mentor engineers, and collaborate closely with product, backend, and QA teams. My focus goes beyond clean code: performance budgets, maintainability, accessibility, and the long-term health of the systems I ship.",
    "I bring a product mindset to engineering — every component I build is judged by the outcome it creates for the people using it.",
  ],
  social: {
    github: "https://github.com/symplytheo",
    linkedin: "https://www.linkedin.com/in/symplytheo/",
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

/** Work history, most recent first. */

export interface Role {
  company: string;
  location: string;
  title: string;
  type?: string;
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
}

export const experience: Role[] = [
  {
    company: "Soft Alliance and Resources Limited",
    location: "Lagos, Nigeria · Hybrid",
    title: "Senior Software Engineer",
    start: "Mar 2025",
    end: "Present",
    highlights: [
      "Lead frontend engineering across enterprise products serving government and financial institutions.",
      "Architect SoftSuite, an HRM platform used by 10+ organisations, supporting payroll operations exceeding ₦200M in processed salaries.",
      "Build and optimise frontend systems for SoftPay, a payment processor handling ₦1B+ in monthly transaction volume, with a focus on reliability and regulatory alignment.",
      "Engineer core UI modules for EbioVerify, a biometric verification platform supporting 215,000+ public-sector employees across Oyo, Ekiti, and Niger states.",
      "Mentor engineers and enforce scalable architecture patterns that reduce regressions and improve maintainability.",
    ],
    stack: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "TailwindCSS"],
  },
  {
    company: "Leyyow",
    location: "Remote",
    title: "Senior Frontend Engineer",
    type: "Contract",
    start: "Feb 2025",
    end: "Present",
    highlights: [
      "Architect core frontend features for a sales-management platform serving 1,000+ active retail users, targeting 99%+ uptime.",
      "Design reusable, type-safe Vue + TypeScript component systems that accelerate product iteration.",
      "Drive performance optimisation and bug-reduction initiatives toward a near-zero-regression production environment.",
    ],
    stack: ["Vue.js", "TypeScript", "TailwindCSS"],
  },
  {
    company: "Soft Alliance and Resources Limited",
    location: "Lagos, Nigeria · Hybrid",
    title: "Intermediate Software Engineer",
    start: "Nov 2023",
    end: "Feb 2025",
    highlights: [
      "Developed scalable frontend modules across multiple enterprise platforms serving 100k+ users.",
      "Built SoftSuite HRM frontend with React, Vite, and SCSS within a 13-member cross-functional team; integrated Redux Toolkit and React Query for state and data-fetching performance.",
      "Built and maintained the SoftPay frontend with Vue, Vite, and TailwindCSS, including dynamic transaction-tracking components with Pinia.",
      "Led EbioVerify frontend (React, Vite, TailwindCSS) and contributed NestJS REST APIs; integrated AFIS biometric workflows with Secugen fingerprint devices.",
    ],
    stack: ["React", "Vue", "Vite", "NestJS", "Redux Toolkit", "React Query", "Pinia"],
  },
  {
    company: "Classic System Infotech Limited",
    location: "Ekiti State, Nigeria",
    title: "ICT Instructor (NYSC)",
    start: "Jun 2022",
    end: "May 2023",
    highlights: [
      "Redesigned the HTML, CSS, and JavaScript curriculum for hybrid learning, improving course-transition efficiency and comprehension.",
      "Delivered hands-on web development training to 200+ corps members through NYSC SAED programmes.",
      "Supported business growth through technical consultations, contributing to a 35% increase in monthly net income.",
    ],
  },
  {
    company: "Bristle",
    location: "Remote · Canada",
    title: "Frontend Developer",
    type: "Contract",
    start: "Jan 2022",
    end: "May 2022",
    highlights: [
      "Built modular UI components with React, Next.js, SCSS Modules, and TailwindCSS, cutting feature development time ~25% through reusable design systems.",
      "Collaborated asynchronously across time zones, contributing to a ~20% improvement in team delivery efficiency.",
      "Streamlined deployments with Vercel CI/CD, reducing manual release overhead.",
    ],
    stack: ["React", "Next.js", "SCSS", "TailwindCSS", "Vercel"],
  },
  {
    company: "The Sixth Avis",
    location: "Remote",
    title: "Frontend Engineer",
    type: "Contract",
    start: "Mar 2021",
    end: "Nov 2021",
    highlights: [
      "Translated Figma prototypes into scalable applications with Nuxt.js, Vuetify, Vue-Chart.js, and Leaflet.",
      "Implemented interactive data-visualisation and mapping features for the EARWAC coastal-flood platform.",
      "Partnered with backend engineers on REST API integration and data-flow optimisation.",
    ],
    stack: ["Nuxt.js", "Vuetify", "Leaflet"],
  },
  {
    company: "Rainbow Hub",
    location: "Akure, Nigeria",
    title: "Frontend Developer",
    type: "Internship",
    start: "Apr 2020",
    end: "Dec 2020",
    highlights: [
      "Developed responsive web templates with React and modern CSS, accelerating delivery by 15%.",
      "Shipped a full Vue.js feature implementation with Vuex and GraphQL within 4 weeks.",
      "Improved page speed by 25% through asset optimisation and frontend performance work across 6+ projects.",
    ],
  },
];

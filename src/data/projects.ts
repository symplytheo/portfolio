import softpay from "../assets/projects/softpay.webp";
import softpayApp from "../assets/projects/softpay-app.webp";
import ebioverify from "../assets/projects/ebioverify.webp";
import ebioverifyApp from "../assets/projects/ebioverify-app.webp";
import softsuite from "../assets/projects/softsuite.webp";
import softsuiteApp from "../assets/projects/softsuite-app.webp";
import leyyow from "../assets/projects/leyyow.webp";
import earwac from "../assets/projects/earwac.webp";
import cmda from "../assets/projects/cmda.webp";

export interface Project {
  name: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  role: string;
  link?: string;
  shots?: { src: string; host: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "SoftPay",
    category: "Payments",
    description:
      "A secure payment processor that streamlines collections through versatile payment channels and efficient bulk payouts for private and public entities.",
    impact:
      "Handles ₦1B+ in monthly transaction volume with regulatory-grade reliability.",
    stack: ["Vue", "Nuxt", "TailwindCSS", "Pinia"],
    role: "Frontend lead",
    featured: true,
    link: "https://softpay.ng",
    shots: [
      { src: softpay, host: "softpay.ng" },
      { src: softpayApp, host: "dashboard.softpay.ng" },
    ],
  },
  {
    name: "EbioVerify",
    category: "Identity",
    description:
      "A biometric employee-verification platform for secure onboarding and identity management, integrating with HRMS and FIS systems via AFIS and Secugen devices.",
    impact:
      "Verifies 215,000+ public-sector employees across three Nigerian states.",
    stack: ["React", "NestJS", "TypeScript", "TailwindCSS"],
    role: "Full-stack (frontend lead)",
    featured: true,
    link: "https://ebioverify.com",
    shots: [
      { src: ebioverifyApp, host: "app.ebioverify.com" },
      { src: ebioverify, host: "ebioverify.com" },
    ],
  },
  {
    name: "SoftSuite",
    category: "HR / Payroll",
    description:
      "A comprehensive HR ERP that automates people management, payroll, self-service, and performance management from hiring to retirement.",
    impact: "Used by 10+ organisations; supports ₦200M+ in processed salaries.",
    stack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "React Query"],
    role: "Frontend lead",
    featured: true,
    link: "https://softsuite.com",
    shots: [
      { src: softsuiteApp, host: "hcm.softsuite.com" },
      { src: softsuite, host: "softsuite.com" },
    ],
  },
  {
    name: "Leyyow",
    category: "Retail SaaS",
    description:
      "A sales-management web app for small retail businesses that streamlines operations and turns sales data into actionable insights.",
    impact: "Serves 1,000+ active retail users with 99%+ uptime targets.",
    stack: ["Vue.js", "TypeScript", "TailwindCSS"],
    role: "Senior frontend engineer",
    featured: true,
    link: "https://www.leyyow.com",
    shots: [{ src: leyyow, host: "leyyow.com" }],
  },
  {
    name: "EARWAC",
    category: "GeoData / Civic",
    description:
      "A web platform integrating Earth Observation data and local indicators for coastal-flood vulnerability assessment in West Africa.",
    impact:
      "Interactive mapping and data visualisation for climate-risk insight.",
    stack: ["Vue", "Nuxt", "Leaflet"],
    role: "Frontend engineer",
    featured: true,
    link: "https://earwac.com",
    shots: [{ src: earwac, host: "earwac.com" }],
  },
  {
    name: "CMDA Nigeria",
    category: "Community",
    description:
      "A digital platform offering resources, training, and support for Christian medical and dental professionals.",
    impact: "Full-stack delivery from API design to UI.",
    stack: ["NestJS", "React", "TypeScript"],
    role: "Full-stack engineer",
    featured: true,
    link: "https://cmdanigeria.net/",
    shots: [{ src: cmda, host: "cmdanigeria.net" }],
  },
];

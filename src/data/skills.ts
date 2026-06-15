/** Skill groups rendered in the Skills section. */

export const skills = [
  {
    group: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "React Native",
      "TailwindCSS",
      "SCSS",
      "CSS Modules",
      "HTML",
    ],
  },
  {
    group: "State & Data",
    items: ["Redux Toolkit", "React Query", "Pinia", "Vuex", "Vue-Apollo", "GraphQL", "REST APIs"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "Swagger"],
  },
  {
    group: "Tooling & Workflow",
    items: ["Vite", "GitHub", "GitLab", "CI/CD", "Vercel", "Figma", "JIRA", "Claude Code", "GitHub Copilot"],
  },
] as const;

import {
  siApollographql,
  siClaude,
  siCssmodules,
  siExpress,
  siFigma,
  siGithub,
  siGithubactions,
  siGithubcopilot,
  siGitlab,
  siGraphql,
  siHtml5,
  siJavascript,
  siJira,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNuxt,
  siOpenapiinitiative,
  siPinia,
  siPostgresql,
  siPrisma,
  siReact,
  siReactquery,
  siRedux,
  siSass,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVuedotjs,
} from "simple-icons";

/** Map of skill label → simple-icons SVG path (24×24 viewBox). */
const iconPaths: Record<string, string> = {
  TypeScript: siTypescript.path,
  JavaScript: siJavascript.path,
  React: siReact.path,
  "Next.js": siNextdotjs.path,
  "Vue.js": siVuedotjs.path,
  "Nuxt.js": siNuxt.path,
  "React Native": siReact.path,
  TailwindCSS: siTailwindcss.path,
  SCSS: siSass.path,
  "CSS Modules": siCssmodules.path,
  HTML: siHtml5.path,
  "Redux Toolkit": siRedux.path,
  "React Query": siReactquery.path,
  Pinia: siPinia.path,
  Vuex: siVuedotjs.path,
  "Vue-Apollo": siApollographql.path,
  GraphQL: siGraphql.path,
  "REST APIs": siOpenapiinitiative.path,
  "Node.js": siNodedotjs.path,
  NestJS: siNestjs.path,
  "Express.js": siExpress.path,
  PostgreSQL: siPostgresql.path,
  MongoDB: siMongodb.path,
  Prisma: siPrisma.path,
  Swagger: siSwagger.path,
  Vite: siVite.path,
  GitHub: siGithub.path,
  GitLab: siGitlab.path,
  "CI/CD": siGithubactions.path,
  Vercel: siVercel.path,
  Figma: siFigma.path,
  JIRA: siJira.path,
  "Claude Code": siClaude.path,
  "GitHub Copilot": siGithubcopilot.path,
};

interface SkillIconProps {
  name: string;
}

/** Decorative monochrome brand icon for a skill tag. Hidden from AT — the text label carries the meaning. */
export function SkillIcon({ name }: SkillIconProps) {
  const path = iconPaths[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-3.5 w-3.5 shrink-0 fill-current opacity-80"
    >
      <path d={path} />
    </svg>
  );
}

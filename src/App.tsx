import { lazy, Suspense } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ToolMarquee } from "./components/sections/ToolMarquee";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { WhatsAppFab } from "./components/ui/WhatsAppFab";
import { useTheme } from "./hooks/useTheme";

// The résumé is its own route and chunk, so it costs the home page nothing.
const Resume = lazy(() => import("./components/resume/Resume"));
const isResume = window.location.pathname.replace(/\/+$/, "") === "/resume";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-(--bg)"
      >
        Skip to main content
      </a>
      <div className="no-print">
        <Header theme={theme} onToggleTheme={toggle} />
      </div>
      {isResume ? (
        <Suspense fallback={<main id="main" className="min-h-screen" />}>
          <Resume />
        </Suspense>
      ) : (
        <main id="main">
          <Hero />
          <ToolMarquee />
          <div className="bg-dots">
            <Projects />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Services />
          </div>
          <Contact />
        </main>
      )}
      <div className="no-print">
        <Footer />
      </div>
      <WhatsAppFab />
    </>
  );
}

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/sideBar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Certifications from "./pages/certifications";
import Workshops from "./pages/workshops";
import Experience from "./pages/experience";
import Recommendations from "./pages/recommendations";
import Publications from "./pages/publications";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Interests from "./pages/interests";
import useScrollReveal from "./hooks/useScrollReveal";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // wait a tick so the target section exists after a route change
      const id = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => window.clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-indigo-700 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Sidebar />

      <main id="main-content" className="min-h-screen lg:ml-72 pt-20 lg:pt-8 px-4 sm:px-6 lg:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedRoutes />
        </div>
      </main>
    </Router>
  );
}

function AnimatedRoutes() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);
  return (
    <div key={pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
    </div>
  );
}

export default App;

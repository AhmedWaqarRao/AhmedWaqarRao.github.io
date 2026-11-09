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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Sidebar />

      <main className="min-h-screen lg:ml-72 pt-20 lg:pt-8 px-4 sm:px-6 lg:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedRoutes />
        </div>
      </main>
    </Router>
  );
}

function AnimatedRoutes() {
  const { pathname } = useLocation();
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
            <Route path="skills" element={<Skills />} />
          </Routes>
    </div>
  );
}

export default App;

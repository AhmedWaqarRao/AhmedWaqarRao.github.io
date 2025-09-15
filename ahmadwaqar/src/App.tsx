import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sideBar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Certifications from "./pages/certifications";
import Workshops from "./pages/workshops";
import Experience from "./pages/experience";
import Recommendations from "./pages/recommendations";
import Publications from "./pages/publications";
import Education from "./pages/education";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <main className="flex-1 min-h-screen bg-gray-100 p-6 overflow-y-auto ml-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/education" element={<Education/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

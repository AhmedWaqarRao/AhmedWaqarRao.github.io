import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sideBar";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="ml-64 flex-1 min-h-screen bg-gray-100 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/publications" element={<Publications />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/certifications" element={<Certifications />} /> */}
            {/* <Route path="/workshops" element={<Workshops />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

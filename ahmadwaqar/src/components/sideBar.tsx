import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, FileDown } from "lucide-react";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Conferences/Workshops", path: "/workshops" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
    { name: "Certifications", path: "/certifications" },
    { name: "Recommendations", path: "/recommendations" },
  ];

  return (
    <>
      {/* Toggle Button (works on both mobile + desktop now) */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 flex flex-col justify-between transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* CV Download Button */}
        <div className="mt-6">
          <a
            href="/Ahmed Waqar Rao CV NPU (2).pdf"
            download
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FileDown size={20} /> Download CV
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

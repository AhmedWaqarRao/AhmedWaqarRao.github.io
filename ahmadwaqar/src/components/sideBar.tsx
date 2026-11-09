import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  FileDown,
  Home,
  GraduationCap,
  Wrench,
  Briefcase,
  BookOpen,
  FolderGit2,
  Mic,
  Award,
  MessageSquareQuote,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Skills", path: "/skills", icon: Wrench },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "Publications", path: "/publications", icon: BookOpen },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Conferences/Workshops", path: "/workshops", icon: Mic },
  { name: "Certifications", path: "/certifications", icon: Award },
  { name: "Recommendations", path: "/recommendations", icon: MessageSquareQuote },
];

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 h-14 px-4 flex items-center justify-between bg-[#0b1020]/90 backdrop-blur border-b border-white/10 text-white">
        <span className="font-semibold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
          Ahmed Waqar Rao
        </span>
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="p-2 -mr-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar: permanent on desktop, drawer on mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 max-w-[85vw] z-50 flex flex-col justify-between overflow-y-auto
        bg-[#0b1020] text-slate-200 p-6 border-r border-white/10
        transform transition-transform duration-300 lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img
              src={`${process.env.PUBLIC_URL}/ahmadwaqar.jpg`}
              alt=""
              className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-400/60"
            />
            <div className="leading-tight">
              <h2 className="text-lg font-bold text-white">Ahmed Waqar Rao</h2>
              <p className="text-xs text-slate-400">AI · Edge · UAV Research</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500/90 to-cyan-500/70 text-white shadow-lg shadow-indigo-900/40"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={18} /> {name}
              </NavLink>
            ))}
          </nav>
        </div>

        <a
          href={`${process.env.PUBLIC_URL}/Ahmed%20Waqar%20Rao%20CV%20NPU%20(2).pdf`}
          download
          className="mt-8 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-900/40 hover:brightness-110 transition"
        >
          <FileDown size={18} /> Download CV
        </a>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

import { FC } from "react";
import { NavLink } from "react-router-dom";

const Sidebar: FC = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Publications", path: "/publications" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Workshops/Trainings", path: "/workshops" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
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
  );
};

export default Sidebar;

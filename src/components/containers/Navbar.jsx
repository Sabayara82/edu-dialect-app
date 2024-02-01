import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import TabsContainer from "./TabsContainer.jsx";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const links = [
    { name: "About", path: "/about", width: "w-16" },
    { name: "Impact", path: "/impact", width: "w-16" },
    { name: "Proficiency Test", path: "/proficiencytest", width: "w-40" },
    { name: "Support", path: "/support", width: "w-16" },
  ];
  return (
    <div className="flex justify-between w-full bg-white py-4 px-8 items-center">
      <img className="w-14 md:w-32 lg:w-48" src="Logo.png" s />
      <div className="flex gap-8 px-8 justify-center  h-full items-center">
        {links.map((link) => (
          <div
            key={link.name}
            className={`flex text-center text-xl grow  ${link.width} ${
              activeTab === link.path
                ? "text-primary-400 font-semibold"
                : "text-gray-500"
            }`}
          >
            <Link
              to={link.path}
              className={` ${activeTab === link.path ? " font-semibold" : ""}`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex gap-8">
        <div className="rounded-3xl px-4 py-1 border-2 text-xl">Login</div>
        <div className="rounded-3xl px-4 py-1 bg-primary-400 text-white text-xl">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Navbar;

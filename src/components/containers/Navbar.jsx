import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import TabsContainer from "./TabsContainer.jsx";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const navigate = useNavigate();
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const links = [
    { name: "About", path: "/about", width: "w-16" },
    { name: "Impact", path: "/impact", width: "w-16" },
    { name: "Proficiency Test", path: "/proficiencytest", width: "w-40" },
    { name: "Support", path: "/support", width: "w-16" },
    // Saba added bellow code for testing purposes delete 
    { name: "StuSignUp", path: "/StudentSignUp", width: "w-16" },
    { name: "volSignUp", path: "/VolunteerSignUp", width: "w-16" },
  ];
  return (
    <div className="flex justify-between w-full bg-white py-4 px-8 items-center">
      <img
        onClick={() => navigate("/")}
        className="w-14 md:w-32 lg:w-48 cursor-pointer"
        src="Logo.png"
      />
      <div className="flex gap-8 px-8 justify-center  h-full items-center">
        {links.map((link) => (
          <div
            key={link.name}
            className={`flex text-center justify-center text-xl grow  ${
              link.width
            } hover:text-primary-400 ${
              activeTab === link.path
                ? "text-primary-400 font-semibold border-b-2 border-primary-400"
                : "text-gray-500"
            }`}
          >
            <Link
              to={link.path}
              className={` ${activeTab === link.path ? " font-semibold" : ""}`}
            >
              {link.name}
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
          </div>
        ))}
      </div>

      <div className="flex gap-8">
        <div className="rounded-3xl px-4 py-1 border-2 text-xl cursor-pointer hover:bg-primary-400 transition ease-in hover:text-white">
          Login
        </div>
        <div className="rounded-3xl px-4 py-1 bg-primary-400 text-white text-xl cursor-pointer hover:bg-primary-400 hover:brightness-110 transition ease-in">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Navbar;

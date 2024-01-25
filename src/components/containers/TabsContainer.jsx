import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Tab({ label, path, activeTab }) {
  const isActive = activeTab === path;

  const tabStyles = {
    fontFamily: "YourFontName, sans-serif", 
    //fontWeight: isActive ? "bold" : "normal", // css for active and inactive tabs
    fontSize: "20px", 
    
  };


  return (
    <Link
      to={path}
      className={`h-full relative flex items-center justify-center w-1/4 border-none ${
        isActive ? "bg-[#719da3] text-white" : "bg-white text-black"
      }`}
      style={tabStyles}
    >
      <span>{label}</span>
    </Link>
  );
}


function Tabs() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex h-full items-center ">
      <div className="flex justify-evenly h-[50%] w-full divide-x-2 border-2 border-none">
        <Tab label="About" path="/about" activeTab={activeTab} />
        <Tab label="Impact" path="/impact" activeTab={activeTab} />
        <Tab label="Proficiency Test" path="/proficiencytest" activeTab={activeTab} />
        <Tab label="Support" path="/support" activeTab={activeTab} />
      </div>
      
    </div>
  );
}

export default Tabs;




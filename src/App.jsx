import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./index.css"

import FooterContainer from "./components/containers/FooterContainer"
import LoginContainer from "./components/containers/LoginContainer"
import LogoTitleContainer from "./components/containers/LogoTitleContainer"
import TabsContainer from "./components/containers/TabsContainer"

import HomePageTab from "./components/tabs/HomePageTab";
import AboutTab from "./components/tabs/AboutTab";
import ImpactTab from "./components/tabs/ImpactTab";
import ProficiencyTestTab from "./components/tabs/ProficiencyTestTab";
import SupportTab from "./components/tabs/SupportTab";
import CurriculumTab from './components/tabs/CurriculumTab';

// let router = createBrowserRouter([
//   { path: "/", id: "Home", element: <HomePageTab />, value: "0" },
//   { path: "/about", id: "About", element: <AboutTab />, value: "1" },
//   { path: "/impact", id: "Impact", element: <ImpactTab />, value: "2" },
//   { path: "/proficiencytest", id: "ProficiencyTest", element: <ProficiencyTestTab />, value: "3" },
//   { path: "/support", id: "Support", element: <SupportTab />, value: "4" },
// ])

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="basis-2/12 flex flex-row">
          <div className="basis-3/12 bg-orange-500"> <LogoTitleContainer /> </div>
          <div className="basis-7/12 bg-orange-600"> <TabsContainer /> </div>
          <div className="basis-2/12 bg-orange-700"> <LoginContainer /> </div>
        </div>

        {/* <div className="basis-11/12 bg-yellow-600">
          <RouterProvider router={router} /> 
        </div> */}

        <div className="basis-11/12 bg-yellow-600">
          <Routes>
            <Route exact path="/" element={<HomePageTab />} />
            <Route exact path="/about" element={<AboutTab />} />
            <Route exact path="/impact" element={<ImpactTab />} />
            <Route exact path="/proficiencytest" element={<ProficiencyTestTab />} />
            <Route exact path="/support" element={<SupportTab />} />
            <Route exact path="/curriculum" element={<CurriculumTab />} />
          </Routes>
        </div>

        <div className="basis-1.5px bg-lime-600">
          <FooterContainer />
        </div>
      </div>

    </>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import TabsContainer from "./components/containers/TabsContainer"

import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";

import AboutTab from "../src/components/tabs/AboutTab";
import ImpactTab from "../src/components/tabs/ImpactTab";
import ProficiencyTestTab from "../src/components/tabs/ProficiencyTestTab";
import SupportTab from "../src/components/tabs/SupportTab";

export let router = createBrowserRouter([ 
    { path: "/about", id: "About", element: <AboutTab />, value: "1" },
    { path: "/impact", id: "Impact", element: <ImpactTab />, value: "2" },
    { path: "/proficiencytest", id: "ProficiencyTest", element: <ProficiencyTestTab />, value: "3" },
    { path: "/upport", id: "Support", element: <SupportTab />, value: "4" },
])


function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <RouterProvider router={router} /> 
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;


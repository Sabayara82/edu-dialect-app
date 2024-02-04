import { Link } from "react-router-dom"; // Import the Link component
import Hero from "../HomePageComponents/Hero";
import WhatIsEDU from "../HomePageComponents/WhatIsEDU";
import HowItWorks from "../HomePageComponents/HowItWorks";
import GetInvolved from "../HomePageComponents/GetInvolved";

export default function HomePageTab() {
  return (
    // Full page container
    <>
      <Hero />
      <WhatIsEDU />
      <HowItWorks />
      <GetInvolved />
    </>
  );
}

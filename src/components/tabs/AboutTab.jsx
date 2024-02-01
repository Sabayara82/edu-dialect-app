
import { Link } from "react-router-dom";
// import AboutImg from "./public/aboutImg.png"; 

export default function AboutTab() {
  return (
    // Full page container
    <div className="h-screen bg-white flex flex-col sm:flex-row">
      {/* Left side of the page */}
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="flex-grow flex flex-col items-center justify-center mt-20">
          <p className="text-6xl font-poppins font-bold max-w-full max-h-full mb-10 mt-20">
            About EduDialect
          </p>
          <div className="flex-grow flex flex-col items-center">
            <p className="text-lg text-gray-700 max-w-md text-center mb-5">
            Edu Dialect is a volunteer-driven non-profit organization dedicated to empowering underprivileged children 
            worldwide with essential resources. Our mission is to fundraise for charity organizations worldwide by providing 
            quality English Language classes.            
            </p>
            <p className="text-lg text-gray-700 max-w-md text-center mb-5">
              
              Our team consists of passionate individuals dedicated to [briefly describe team or organization]. We strive to [mention any unique aspects or goals].
            </p>
            <p className="text-lg text-gray-700 max-w-md text-center mb-5">
              
              With a vision for [mention your vision or goals], EduDialect aims to [explain how you're making a positive impact]. Join us on this journey!
            </p>
            {/* Additional information, links, or calls to action can be added here */}
          </div>
        </div>
      </div>

      {/* Right side of the page */}
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="flex-grow h-2/3 flex flex-col items-center justify-center">
          {/* About page image */}
          {/* <img src={AboutImg} alt="About Image" className="max-w-full max-h-full mb-4" /> */}
        </div>
        <div className="flex-grow">
          {/* Additional content or sections can be added here */}
        </div>
      </div>
    </div>
  );

}

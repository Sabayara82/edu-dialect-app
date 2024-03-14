import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
const Hero = () => {
  return (
    <div className="font-poppins h-screen bg-white flex flex-col sm:flex-row">
      {/* Left side of page */}
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="flex-grow flex flex-col items-center justify-center mt-20">
          <p className="text-6xl font-poppins font-bold max-w-full max-h-full mb-10 mt-20">
            Welcome to EduDialect
          </p>
          <div className="flex-grow flex flex-col items-center ">
            {" "}
            {/* Adjust the mt-10 value */}
            {/* "Learn More" button linking to the about page */}
            <Link to="/about">
              <button className="py-4 px-16 bg-[#719da3] font-bold text-white rounded-lg hover:brightness-110 transition ease-int mb-5">
                Learn More
              </button>
            </Link>
            {/* Links "Sign up" button to sign up page*/}
            <button className="font-medium py-4 px-16 text-slate-700 border border-black rounded-lg hover:bg-primary-400 hover:text-white transition ease-in">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* Right side of the page */}
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        {/*  */}
        <div className="flex-grow h-2/3 flex flex-col items-center justify-center">
          <img
            src="HomeImg.png"
            alt="Image"
            className="max-w-full max-h-full mb-4"
          />
        </div>
        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default Hero;

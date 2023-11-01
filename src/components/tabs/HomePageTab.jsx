import { Link } from "react-router-dom"; // Import the Link component

export default function HomePageTab() {
  return (
    // Full page container
    <div className="h-screen bg-white flex">
      {/* Left side of page */}
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <p className="text-6xl font-poppins font-bold mb-8">Welcome to EduDialect</p>
        {/* "Learn More" button linking to the about page */}
        <Link to="/about">
          <button className="py-3 px-16 bg-[#719da3] font-bold text-white rounded-lg hover:bg-slate-100 hover:text-slate-900 mb-5">
            Learn More
          </button>
        </Link>
        {/* Links "Sign up" button to sign up page*/}
        <button className="font-medium py-3 px-14 text-slate-700 border border-black rounded-lg hover:bg-slate-100 hover:text-slate-900">
            Sign up
          </button>
      </div>
      {/* Right side of the page */}
      <div className="w-1/2 p-8 flex justify-center items-center">
        <img src="HomeImg.png" alt="Image" className="max-w-full max-h-full" />
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function FooterContainer() {
  return (
    <>
      <div className="text-white font-poppins flex px-24 py-12 items-center flex-col gap-12 bg-primary-500">
        <div className="flex justify-evenly w-full items-center">
          {" "}
          <div className="flex flex-col gap-4">
            <img className="h-36" src="clearLogo.png" />
            <div className="flex gap-3 items-center">
              {" "}
              <IoIosMail /> email@email.com
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <Link to="/about">About Us</Link>
            <Link to="\impact">Impact</Link>
            <Link to="\proficiencytest">Proficiency Test</Link>
            <Link to="\support">Support</Link>

            {/* <Link to = "\impact"></Link> */}
          </div>
          <div className="flex basis-1/6 justify-end pr-5 space-x-2">
            <a
              href="https://www.instagram.com/edu.dialect/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
              target="_blank"
            >
              <FaInstagram size={35} />
            </a>
            <a
              href="https://www.linkedin.com/company/edudialect/about/"
              target="_blank"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
        </div>
        <div className=" w-full">
          <div className="basis-5/6 pl-4">© 2023 Edu Dialect</div>
        </div>
      </div>
    </>
  );
}

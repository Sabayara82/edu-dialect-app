import { Link } from "react-router-dom";
// import AboutImg from "/aboutImg.png";

export default function AboutTab() {
  return (
    // Full page container
    <div className=" bg-white flex flex-col py-4">
      <div className="flex gap-20 px-12 py-24 justify-center ">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-2xl font-bold">About EduDialect</div>
          <div className="text-3xl font-light">
            Edu Dialect is a volunteer-driven non-profit organization dedicated
            to empowering underprivileged children worldwide with essential
            resources.
          </div>
        </div>
        <div className="w-1/3">
          {" "}
          <img src={"aboutus1.svg"} className=" " />
        </div>
      </div>
      <div className="flex flex-col">
        <img src="bg-section-top-desktop-1.svg" />
        <div className="flex gap-20 px-12 py-24 justify-center bg-primary-300">
          <div className="w-1/3">
            <img src={"aboutus2.svg"} className=" " />
          </div>

          <div className="flex flex-col gap-4 w-1/2 ">
            <div className="text-xl font-bold">Our Mission</div>
            <div className="text-2xl font-light">
              Our mission is to fundraise for charity organizations worldwide by
              providing quality English Language classes. Our team consists of
              passionate individuals dedicated to [briefly describe team or
              organization]. We strive to [mention any unique aspects or goals].
              With a vision for [mention your vision or goals], EduDialect aims
              to [explain how you're making a positive impact]. Join us on this
              journey!
            </div>
          </div>
        </div>
        <img src="bg-section-bottom-desktop-1.svg" />
      </div>
    </div>
  );
}

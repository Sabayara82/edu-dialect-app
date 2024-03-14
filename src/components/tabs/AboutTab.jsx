import { Link } from "react-router-dom";
// import AboutImg from "/aboutImg.png";

export default function AboutTab() {
  const tableData = [
    {
      id: 1,
      name: "name1",
      photoUrl: "",
      description: "3rd year Software Engineer at UofC",
    },
    {
      id: 2,
      name: "name2",
      photoUrl: "",
      description: "3rd year Software Engineer at UofC",
    },
    {
      id: 3,
      name: "",
      photoUrl: "",
      description: "4th year in Biomedical Sciences at UofC",
    },
    {
      id: 4,
      name: "name3",
      photoUrl: "",
      description: "2nd year Master's in Biomedical Engineering at UofC",
    },
    {
      id: 5,
      name: "name4",
      photoUrl: "",
      description: "3rd year Software Engineer & Business at UofC",
    },
    {
      id: 6,
      name: "name5",
      photoUrl: "",

      description: "2nd Year Medicial School at UofC",
    },
  ];
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
          <img src={"aboutus1.svg"} className="" />
        </div>
      </div>
      <div className="flex flex-col">
        <img src="bg-section-top-desktop-1.svg" className="h-14" />
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

        <img src="bg-section-bottom-desktop-1.svg" className="h-14" />
      </div>
      <div className="py-16 px-24">
        <div className="flex  flex-col items-center justify-center  gap-4 py-8">
          {" "}
          <div className="font-semi-bold text-2xl "> MEET </div>
          <h2 className="text-6xl font-semibold text-purple-700">The Team</h2>
        </div>

        <div className="  mb-12 grid  grid-cols-3 py-8">
          {tableData.map((member) => (
            <div
              key={member.id}
              className="team-member mb-6 grid place-items-center gap-10 transition-opacity duration-700 ease-in-out"
            >
              <img
                src={member.photoUrl.trim()} // Trim to ensure no accidental whitespace
                alt={member.name}
                loading="lazy"
                className="h-100 w-96 rounded-xl object-cover opacity-0 animate-fadeIn" // Ensure this class is defined in your CSS
                onLoad={(e) => e.target.classList.add("opacity-100")} // Fade in the image once it's loaded
              />
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

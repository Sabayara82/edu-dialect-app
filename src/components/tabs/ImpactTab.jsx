import CountUp from "react-countup";

export default function ImpactTab() {
  const n = 100;
  const x = 50;
  const y = 3;
  const p = 32;
  //Through our dedicated efforts, we've achieved remarkable milestones
  return (
    <div className=" bg-white flex flex-col py-4">
      <div className="flex  px-20 py-4 justify-center items-center">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="text-6xl font-bold">Our Impact</div>
          <section className="mb-8 py-8">
            <h2 className="text-2xl font-semibold mb-4">
              Transforming Lives Through Language and Culture
            </h2>
            <p className="text-lg text-gray-700">
              Edu Dialect provides an excellent opportunity for both volunteers
              and students to communicate regularly, connect with, and better
              understand individuals who offer unique backgrounds, cultures, and
              ideologies. The volunteer teachers of Edu Dialect were given the
              opportunity to better discover their hidden similarities with
              individuals who live and perceive life utterly different from
              them. This program, therefore, was able to develop a community
              where individuals could feel empowered by their differences as
              they discuss personal and opinion-based topics. Volunteers were
              furthermore able to hone on their leadership skills and acquire
              essential workplace skills.
            </p>
            <p className="text-lg mt-4  text-gray-700">
              The opportunity to familiarize oneself with a more excellent range
              of viewpoints allows for an effective and proficient set of
              individuals who have an advantage when challenged by complex
              problems. Therefore, for students, not only was this program an
              opportunity to learn English outside of the traditional classroom,
              but it offered a unique environment where diversity could provide
              a spectacular variation of intellectual and creative perspectives
              that could enhance creativity and innovation essential to any
              field.
            </p>
          </section>
        </div>
        <div className="w-1/2">
          {" "}
          <img src={"impact2.svg"} className="" />
        </div>
      </div>
      <div className="flex flex-col">
        <img src="bg-section-top-desktop-1.svg" className="h-8" />
        <div className="flex  px-20 py-4 justify-center items-center bg-primary-300">
          <div className="w-1/2">
            <img src={"impact3.svg"} className="" />
          </div>

          <div className="flex flex-col gap-4 w-1/2 ">
            <section>
              <h2 className="text-4xl font-semibold mb-4">
                Making a Tangible Impact
              </h2>
              <p className="text-xl text-gray-700">
                "With the first two rounds of the program, we were able to
                significantly financially aid a school for underprivileged
                students. The school was in great need of donations and
                assistance to provide the students with necessary school
                supplies as well as their financial aid for their families. With
                Edu Dialect, we were able to provide the entire year’s school
                supplies for seventeen elementary students.
              </p>
            </section>
          </div>
        </div>
        <img src="bg-section-bottom-desktop-1.svg" />
      </div>
      <ul className="flex  justify-evenly mt-6 text-xl pt-4 pb-12">
        <li className=" flex flex-col items-center text-gray-600">
          Connected
          <div className="w-16 text-center">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <CountUp
                end={n}
                duration={2.75}
                className="text-4xl font-bold text-black"
              />
              <div className="text-3xl">+</div>{" "}
            </div>
          </div>
          students
        </li>
        <li className=" flex flex-col items-center justify-center text-center text-gray-600">
          with
          <div className="flex items-center gap-2">
            <CountUp
              end={x}
              duration={2.75}
              className="text-4xl font-bold text-black"
            />{" "}
            <div className="text-3xl">+</div>{" "}
          </div>
          passionate volunteer teachers
        </li>
        {/* <li className=" flex flex-col items-center justify-center text-center">
              Supported{" "}
              <CountUp end={y} duration={2.75} className="text-4xl " />{" "}
              underprivileged schools,
            </li> */}
        <li className=" flex flex-col items-center justify-center text-center text-gray-600">
          Raised{" "}
          <div className="flex items-center gap-2">
            {" "}
            <CountUp
              end={p}
              duration={2.75}
              prefix="$"
              decimals={2}
              className="text-4xl font-bold text-black"
            />
            <div className="text-3xl">+</div>
          </div>
          for educational resources.
        </li>
      </ul>
    </div>
  );
}

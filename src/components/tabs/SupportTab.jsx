import React, { useState } from "react";

import DonateInput from "../SupportComponents/DonateInput";
export default function SupportTab() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
  });

  return (
    <div>
      <div className="flex px-24 py-12 items-center ">
        <div className="flex flex-col gap-3 w-4/5">
          <div className="font-semibold text-5xl">Empower Through Language</div>
          <div className="font-light text-2xl">
            Join Edu Dialect in Fostering Global Connections and Supporting
            Educational Opportunities for Underprivileged Children
          </div>
          <div className=" py-2">
            <button className="rounded-xl px-4 py-2 bg-primary-400 font-semibold text-white text-xl">
              Donate
            </button>
          </div>
        </div>
        <div className="">
          <img src="support2.svg" className="lg:w-[85rem]" />
        </div>
      </div>
      <div className="flex-col px-24 py-8 ">
        <div className="flex flex-col gap-3 mb-3">
          {" "}
          <div className="text-4xl font-semibold ">
            Why Your Support Matters
          </div>
          <div className="font-normal text-gray-500 text-xl">
            {" "}
            Your support fuels Edu Dialect's mission to bridge cultural divides
            and empower underprivileged children through education. Each
            donation expands our reach, enabling more students and volunteers to
            connect, learn, and grow together.
          </div>
        </div>
        <div className="flex gap-8 items-center">
          {" "}
          <img src="support3.svg" className="h-[30rem] mt-5" />
          <div className="flex-col px-4">
            <div className="text-4xl font-semibold">Your Impact</div>
            <div className="flex flex-col py-4 gap-4">
              <div className="rounded shadow-md border-2 card w-[45rem] text-lg px-4 py-2">
                <strong>Empowering Individuals: </strong>Your donations have
                enabled us to run four successful rounds of classes, connecting
                35 students with 55 dedicated volunteers, fostering meaningful
                exchanges and personal growth.
              </div>
              <div className="rounded shadow-md border-2 card w-[45rem] text-lg px-4 py-2">
                <strong>Educational Support: </strong>Through the funds raised,
                we have significantly aided a school for underprivileged
                students, providing an entire year's worth of school supplies
                for 17 children, thereby alleviating the financial burden on
                their families and ensuring uninterrupted learning.
              </div>
              <div className="rounded shadow-md border-2 card w-[45rem] text-lg px-4 py-2">
                <strong>Capacity Building: </strong>Contributions like yours
                allow us to enhance our curriculum, train more volunteers, and
                implement innovative teaching methods, increasing the efficacy
                and reach of our program.
              </div>
              <div className="rounded shadow-md border-2 card w-[45rem] text-lg px-4 py-2">
                <strong>Future Goals: </strong>Looking ahead, we aim to double
                our impact by enrolling more students, expanding to new regions,
                and developing additional resources to support learners and
                educators alike. Your support is pivotal in turning these goals
                into realities, paving the way for a world where every child has
                access to the education they deserve.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col px-24 py-8">
        <div className="text-4xl font-bold">
          Interested in Supporting Us? Here's How:
        </div>
        <DonateInput formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
}

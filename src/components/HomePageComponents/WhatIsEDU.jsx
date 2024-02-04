import React from "react";

const WhatIsEDU = () => {
  return (
    <div className="font-poppins bg-primary-400 px-28 py-12 flex justify-between">
      {/* Left SIde */}
      <div className="flex flex-col w-1/2 gap-4 justify-center">
        <div className="text-white text-4xl font-semibold">
          What is EDU Dialect?
        </div>
        <div className="text-lg">
          Edu Dialect is an opportunity for you to use the vocabulary and
          English skills that you have gained in various classes within a
          complete English speaking environment. Get the opportunity to speak
          regularly with a native english speaker, who is there to help, in a
          fun and new setting. For more information or registration, give us a
          message on instagram @Edu.Dialect.{" "}
        </div>
      </div>
      {/* Right Side */}
      <div className="text-lg w-1/3">
        <img src="whatIs.svg" alt="earth" />{" "}
      </div>
    </div>
  );
};

export default WhatIsEDU;

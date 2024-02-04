import React, { useState, useMemo, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// const useIntersectionObserver = (ref, options) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsVisible(entry.isIntersecting);
//     }, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, options]);

//   return isVisible;
// };
const steps = [
  {
    number: 1,
    title: "Register",
    description:
      "Select your preferred English class and easily enroll by providing your information.",
    image: "Step1.svg",
  },
  {
    number: 2,
    title: "Take the Proficiency Test",
    description:
      "Answer a series of questions to determine your English comprehension level.",
    image: "Step2.svg",
  },
  {
    number: 3,
    title: "Get Matched with a Volunteer",
    description:
      "Upon registration approval, a dedicated volunteer teacher matching your qualifications will reach out to guide you.",
    image: "Step3.svg",
  },
  {
    number: 4,
    title: "Take Weekly Sessions",
    description:
      "Immerse yourself in engaging sessions, and learn while donating to a local charity through each session.",
    image: "Step4.svg",
  },
];

const Step = ({ step, isSelected }) => {
  const stepClassName = `flex gap-4 items-center px-4 py-6 rounded-lg transition ease-in duration-300 w-full ${
    isSelected ? "shadow-md bg-white" : ""
  }`;
  return (
    <div key={step.number} className={stepClassName}>
      <div className="h-full flex items-center">
        <div className="rounded-full bg-primary-400 h-12 w-12 flex justify-center items-center text-white">
          {step.number}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-md font-semibold">{step.title}</div>
        <div className="font-md">{step.description}</div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chosenStep, setChosenStep] = useState(0);
  const [fade, setFade] = useState(true);
  //   const leftRef = useRef(null);
  //   const rightRef = useRef(null);
  //   const onScreenLeft = useIntersectionObserver(leftRef, { threshold: 0.1 });
  //   const onScreenRight = useIntersectionObserver(rightRef, {
  //     threshold: 0.1,
  //     root: null,
  //     rootMargin: "0px",
  //   });
  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setChosenStep((prevStep) => (prevStep + 1) % steps.length);
      setFade(true);
    }, 250);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setChosenStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
      setFade(true);
    }, 250);
  };

  useEffect(() => {
    setFade(true);
  }, [chosenStep]);
  const renderedSteps = useMemo(
    () =>
      steps.map((step, index) => (
        <Step key={step.number} step={step} isSelected={index === chosenStep} />
      )),
    [chosenStep]
  );

  return (
    <div className="bg-primary-300 px-28 py-12 flex gap-8">
      <div className="flex gap-4 flex-col">
        <div className="text-4xl font-semibold mb-4">How It Works</div>
        <div className="flex gap-6">
          {" "}
          <button
            onClick={handlePrev}
            className="bg-white w-20 flex items-center justify-center h-12 rounded-full hover:bg-gray-100 transition duration-200 ease-in"
          >
            <IoIosArrowBack size={30} />
          </button>
          <button
            onClick={handleNext}
            className="bg-white w-20 flex items-center justify-center h-12 rounded-full hover:bg-gray-100 transition duration-200 ease-in"
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>

        <div className="flex gap-20">
          {/* Left side */}
          <div
            // ref={leftRef}
            className={`flex flex-col gap-8 mt-4 transition-all duration-1000 `}
          >
            {renderedSteps}
          </div>
          {/* Right Side */}
          <div
            // ref={rightRef}
            className={`font-bold w-1/2 transition-all duration-1000 
  
            `}
          >
            <img
              src={steps[chosenStep].image}
              className={`transition-opacity duration-500 ease-in-out  ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              alt="Step illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

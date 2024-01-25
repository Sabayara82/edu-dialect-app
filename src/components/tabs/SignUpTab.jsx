import { useNavigate } from "react-router-dom"
import React, { useEffect, useState, useRef} from "react";

import SignUpControl from "./SignUpControl";

import SignUpAccount from "./steps/SignUpAccount"
import SignUpDetails from "./steps/SignUpDetails";
import SignUpFinal from "./steps/SignUpFinal";

export default function SignUpTab({steps, currentStep}) {
    // const [currentStep, setCurrentStep] = useState(1);
    // const signUpSteps = [
    //     "Account Information",
    //     "Personal Details",
    //     "Complete"
    // ]
    // const displayStep = (step) => {
    //     switch (step) {
    //         case 1: return <SignUpAccount />
    //         case 2: return <SignUpDetails />
    //         case 2: return <SignUpFinal />
    //     }
    // }


    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) =>{
        const newSteps = [...steps];
        let count = 0;

        while (count < newSteps.length){
            
        }

    };

    // any changes in steps and currentStep will make useEffect run
    useEffect(()=>{
        // create object
        const stepsState = steps.map((step, index) =>
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false,
                }
            )
        );
        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current);
        setNewStep(current);
    }, [steps, currentStep]) 
    const navigate = useNavigate();
    

    return (
        <>
            <button onClick={() => navigate("/login")}> Have an account? Log in </button>
        </>
    );
}
import { useNavigate } from "react-router-dom"

export default function TabsContainer() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex h-full items-center">
                <div className="flex justify-evenly h-[50%] w-full divide-x-2 border-2 border-solid">
                    <button className="h-full" onClick={() => navigate("/about")}>About</button>
                    <button className="pl-[8%] h-full" onClick={() => navigate("/impact")}>Impact</button>
                    <button className="pl-[8%] h-full" onClick={() => navigate("/proficiencytest")}>Proficiency Test</button>
                    <button className="pl-[8%] h-full" onClick={() => navigate("/support")}>Support</button>
                    <button className="pl-[8%] h-full" onClick={() => navigate("/curriculum")}>Curriculum</button>
                </div>
                

            </div>
        </>
    );
}

import {useNavigate} from "react-router-dom"

export default function LogoTitleContainer() {
    const navigate = useNavigate();
    
    return (
        <>
            <button onClick={()=>navigate("/")}>
                <img className="w-14 md:w-32 lg:w-48"
                src="Logo.png"
                s/>
                
                </button>
        </>
    ); 
}
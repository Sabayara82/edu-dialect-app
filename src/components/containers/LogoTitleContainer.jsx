import {useNavigate} from "react-router-dom"

export default function LogoTitleContainer() {
    const navigate = useNavigate();
    
    return (
        <>
            <button onClick={()=>navigate("/")}>Logo and Title</button>
        </>
    ); 
}
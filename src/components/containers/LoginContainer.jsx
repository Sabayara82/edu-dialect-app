import {useNavigate} from "react-router-dom"

export default function LoginContainer() {
    const navigate = useNavigate();
    return (
        <>
            
            <button onClick={()=>navigate("/")}>Login</button>
        </>
        
    ); 
}
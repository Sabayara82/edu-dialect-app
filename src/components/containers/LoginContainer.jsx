import {useNavigate} from "react-router-dom"

export default function LoginContainer() {
    const navigate = useNavigate();
    return ( 
        <>
            <button onClick={()=>navigate("/login")}>
                <img className="w-8 md:w-16 lg:w-20" src="login.png"/>
            </button>
            
        </>
    );
}


import {useNavigate} from "react-router-dom"
import React, {useState} from "react";

export default function LoginTab() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value ={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                <label htmlFor="password">password</label>
                <input value ={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="password"></input>
                
                <button type="submit" >Log In</button>
            </form>
            <button onClick={()=>navigate("/signup")}>Don't have an account?</button>
        </>
       
    );
}
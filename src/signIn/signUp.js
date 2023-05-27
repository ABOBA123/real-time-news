import "./signIn.css"
import Arrow from "../Arrow1.svg"
import eye from "./eye.svg"
import eyeslash from "./eyeslash.svg"
import { useNavigate } from "react-router";
import { useState } from "react";
function SignUp(){
    const [eyeSlash, setEyeSlash] = useState(true)
    const navigate = useNavigate()
    return(
        <div>
        <div className="full-slide d-fl ali-cent jc-cent">
            <div className="signInContainer">
                <h1>Sign up</h1>
                <span>Don't you have an account?<span style={{textDecorationLine:"underline",color:"#089FE0",cursor:"pointer"}} onClick={()=>navigate("/login")}>sign in</span> </span>
                <input className="signIn-input" placeholder="Write your E-mail"/>
                <div className="input-eye" >
                <input type = {eyeSlash?"password":"text"} security={eyeSlash?true:false} className="signIn-input" placeholder="Write your password"/>
                <img className="eye" src={eyeSlash?eye:eyeslash} onClick={()=>setEyeSlash(!eyeSlash)}/>
                </div>
                <button className="signInButton" style={{fontWeight:"100"}}>sign up<img className="arrow" src={Arrow}/></button>
            </div>
        </div>
        </div>
    )
}
export default SignUp;
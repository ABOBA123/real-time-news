import "./signIn.css"
import Arrow from "../Arrow1.svg"
import { useNavigate } from "react-router";
function SingIn (){
    const navigate = useNavigate()
    return(
        <div>
        <div className="full-slide d-fl ali-cent jc-cent">
            <div className="signInContainer">
                <h1>Sign in</h1>
                <span>Don't you have an account?<span style={{textDecorationLine:"underline",color:"#089FE0",cursor:"pointer"}} onClick={()=>navigate("/register")}>sign up</span> </span>
                <input className="signIn-input" placeholder="Praveen"/>
                <input className="signIn-input" placeholder="E-mail"/>
                <button className="signInButton" style={{fontWeight:"100"}}>sign in <img className="arrow" src={Arrow}/></button>
            </div>
        </div>
        </div>
    )
}
export default SingIn;
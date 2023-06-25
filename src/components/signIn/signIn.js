import "./signIn.css";
import Arrow from "../pictures/Arrow1.svg";
import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../http";
function SingIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    function loginHandler() {
      login({ email, password })
        .catch((error) => {})
        .then((data) => console.log(data));
    }
  return (
    <div>
      <div className="full-slide d-fl ali-cent jc-cent">
        <div className="signInContainer">
          <h1>Sign in</h1>
          <span>
            Don't you have an account?
            <span
              style={{
                textDecorationLine: "underline",
                color: "#089FE0",
                cursor: "pointer",
              }}
              onClick={() => navigate("/register")}
            >
              sign up
            </span>{" "}
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signIn-input"
            placeholder="Praveen"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signIn-input"
            placeholder="E-mail"
          />
          <button onClick={()=>loginHandler()} className="signInButton" style={{ fontWeight: "100" }}>
            sign in <img className="arrow" src={Arrow} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default SingIn;

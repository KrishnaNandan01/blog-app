import "./login.css"
//import { Link } from "react-router-dom";
const Login = ()=>{
    return(<div className="container">
        <div className="login-div">
            <h1>Login</h1>
            <div>
                <div className="label">Email:</div>
                <input className="input" type="email"/>
            </div>
            <div>
                <div className="label">Password:</div>
                <input className="input" type="password"/>
            </div>
            <input className="check" type="checkbox"/>
            <label id="rem">Remember me?</label>
            <div>
              <button className="btn">LOGIN</button>
            </div>
            <div>
              <button id="forgot">Forgot Password?</button>
            </div>
           
            <span className="signup">Need an acount?</span>
            {/* <Link to="/signup"></Link> */}

            <button id="forgot">SinUp</button>
            
           
        </div>
    </div>)
};

export default Login;
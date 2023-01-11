import "./login.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "../ContextApi/context";
const Login = ()=>{
    const {loginData,setLoginData,SigninUser} = useContext(BlogContext);
    const LoginHandler = ()=>{
        SigninUser();
    }
    return(<div className="container">
        <div className="login-div">
            <h1>Login</h1>
            <div>
                <div className="label">Email:</div>
                <input className="input" type="email" onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}}/>
            </div>
            <div>
                <div className="label">Password:</div>
                <input className="input" type="password" onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}/>
            </div>
            <input className="check" type="checkbox"/>
            <label id="rem">Remember me?</label>
            <div>
              <button className="btn" onClick={LoginHandler}>LOGIN</button>
            </div>
            <div>
              <button id="forgot">Forgot Password?</button>
            </div>
           
            <span className="signup">Need an acount?</span>
            <Link to="/signup"> <button id="signup">SignUp</button></Link>

           
            
           
        </div>
    </div>)
};

export default Login;
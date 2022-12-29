import { useContext, useState } from "react";
import BlogContext from "../ContextApi/context";
import "./signup.css"
const SignUp = ()=>{
    const {setSignupData,signupData,SignUpUser} = useContext(BlogContext);
    const [form,setForm] = useState({email:"",password:"",confirmPassword:""});
    const SignUpHandler =()=>{
        if(!form.email){
            alert("please enter email");
        }
        else{
            if (form.password!==form.confirmPassword) {
                alert("password does not match");
            }
            else{
                setSignupData({...signupData,email:form.email,password:form.password});
                SignUpUser();
            }
        }
    }
    return(<div className="container">
        <div className="login-div">
            <h1>Sign Up</h1>
            <div>
                <div className="label">Email:</div>
                <input className="input" type="email" onBlur={(e)=>{setForm({...form,email:e.target.value})}}/>
            </div>
            <div>
                <div className="label">Password:</div>
                <input className="input" type="password" onBlur={(e)=>{setForm({...form,password:e.target.value})}}/>
            </div>
            <div>
                <div className="label">Confirm Password:</div>
                <input className="input" type="password"  onBlur={(e)=>{setForm({...form,confirmPassword:e.target.value})}}/>
            </div>
            <div>
              <button className="btn" onClick={SignUpHandler}>SIGNUP</button>
            </div>
        </div>
    </div>)
};

export default SignUp;
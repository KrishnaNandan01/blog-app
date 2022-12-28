import "./signup.css"
const SignUp = ()=>{
    return(<div className="container">
        <div className="login-div">
            <h1>Sign Up</h1>
            <div>
                <div className="label">Email:</div>
                <input className="input" type="email"/>
            </div>
            <div>
                <div className="label">Password:</div>
                <input className="input" type="password"/>
            </div>
            <div>
                <div className="label">Confirm Password:</div>
                <input className="input" type="password"/>
            </div>
            <div>
              <button className="btn">SIGNUP</button>
            </div>
        </div>
    </div>)
};

export default SignUp;
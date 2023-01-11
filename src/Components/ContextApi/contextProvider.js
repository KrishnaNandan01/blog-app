import BlogContext from "./context"
import axios from "axios";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ContextProviderDetails = (props)=>{
    const navigate = useNavigate();
    const [loginData,setLoginData] = useState({email:"",password:""});
    const [signupData,setSignupData] = useState({email:"",password:""});
    const [blogData,setBlogData] = useState([]);
    const [Blog, setBlog] = useState({title:"",description:"",image:""});

    const SigninUser = async()=>{
        await axios.post("https://blogapp-backend-3g3g.onrender.com/api/v1/login",loginData).then((res)=>{
            localStorage.setItem("token",res.data.token);
            alert("signin Sucessull!")
            navigate("/home");
            document.location.reload();
        }).catch((res)=>{
            console.log("====>"+res.response.data.message);
            alert(res.response.data.message);
        }); 
            
    };
    const SignUpUser = ()=>{
        axios.post("https://blogapp-backend-3g3g.onrender.com/api/v1/register",signupData).then((res)=>{
            console.log(res);
            alert("signup succesfully");
            navigate("/");
        }).catch((err)=>{
            console.log("====>"+err.response.data.message);
            alert(err.response.data.message);
        })
    };
    
    const FetchData = ()=>{
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                authorization: token,
            }
        };
        axios.get("https://blogapp-backend-3g3g.onrender.com/api/v1/posts",config).then((res)=>{
            setBlogData(res.data.users);
        }).catch((res)=>{
            setBlogData([]);
        })
    }

    useEffect(()=>{
        FetchData();
    },[])

    const PostData = ()=>{
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                authorization: token,
            }
        };
        axios.post("https://blogapp-backend-3g3g.onrender.com/api/v1/posts",Blog,config).then((res)=>{
            FetchData();
            navigate("/home");
        })
    }
    return(
    <BlogContext.Provider value={
        {
            loginData,
            setLoginData,
            SigninUser,
            signupData,
            setSignupData,
            SignUpUser,
            blogData,
            Blog,
            setBlog,
            PostData,
            }}>
        {props.children}
    </BlogContext.Provider>
    )
};

export default ContextProviderDetails;
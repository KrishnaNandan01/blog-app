import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BlogContext from "../ContextApi/context";
import "./home.css";

const Home = ()=>{
    const navigate = useNavigate();
    const {blogData} = useContext(BlogContext)
    return(<>
    <div className="main-container">
        <div className="header">
            <h1 id="blog">Blog App</h1>
                <div className="nav-bar">
                    <button className="btn-nav">Home</button>
                    <button className="btn-nav" onClick={()=>{
                        navigate("/blog")
                    }}>Create</button>
                    <button className="btn-nav" onClick={()=>{
                       localStorage.removeItem("token");
                       navigate("/");
                    }}>Logout</button>
                </div>
        </div>
        {blogData.map((item,i)=>{
            return(
                <div key={i} className="card-blog">
                    <div className="card">
                        <h1>{item.title}</h1>
                        <p id="p">{item.description}</p>
                    </div>
                </div> 
            )
        })}
    </div>
    </>)
};

export default Home;
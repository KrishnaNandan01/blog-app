import { useContext } from "react";
import BlogContext from "../ContextApi/context";
import "./blog.css"
const BlogPage =()=>{
    const {Blog,setBlog,PostData} = useContext(BlogContext);
    const BlogHandler =()=>{
        PostData();
    }
    return(<>
    <div className="blog-main-container">
        <div className="blog-container">
            <div>
                <input className="input-size" type="text" placeholder="title" onBlur={(e)=>{setBlog({...Blog,title:e.target.value})}}/>
            </div>
            <div>
                <input className="input-size" type="text"  placeholder="Enter image link" onBlur={(e)=>{setBlog({...Blog,image:e.target.value})}}/>
            </div>
            <div>
               <textarea onBlur={(e)=>{setBlog({...Blog,description:e.target.value})}}>desc...</textarea>
            </div>
            <button id="save" onClick={BlogHandler}>Save</button>
        </div>
    </div>
    </>)
}
export default BlogPage;
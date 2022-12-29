import ContextProviderDetails from "./ContextApi/contextProvider";
import Login from "./login/Login_page";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from "./SignUp/signup";
import Home from "./Home/home";
import BlogPage from "./blog/blog";


function App() {
  const token =localStorage.getItem("token");
  console.log(token);
  return (
    <BrowserRouter>
      <ContextProviderDetails>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/home" element={
            token?<Home/>:"page not found"
          }/>
       <Route path="/blog" element={<BlogPage/>}/>
        </Routes>
      </ContextProviderDetails>
    </BrowserRouter>
  );
}

export default App;

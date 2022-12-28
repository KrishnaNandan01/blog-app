import ContextProviderDetails from "./ContextApi/contextProvider";
import Login from "./login/Login_page";
import{BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from "./SignUp/signup";
import Home from "./Home/home";


function App() {
  return (
    // <>
    // <Login/>
    // </>



    <BrowserRouter>
     
    <ContextProviderDetails>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ContextProviderDetails>

    </BrowserRouter>
  );
}

export default App;

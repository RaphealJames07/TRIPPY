
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./Components/Intro/Intro";
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/Home/Home";
import './App.css'
import SignUp from "./Components/Auth/SignUp/SignUp";
import Verify from "./Components/Auth/Verify/Verify";

const App = () => {
  return (
    <>
      <div className="MainBody">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Verify" element={<Verify />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

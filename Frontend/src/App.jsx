
import { HashRouter, Route, Routes } from "react-router-dom";
import Intro from "./Components/Intro/Intro";
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/Home/Home";
import './App.css'
import SignUp from "./Components/Auth/SignUp/SignUp";
import Verify from "./Components/Auth/Verify/Verify";
import ForgetPassword from "./Components/Auth/ForgetPassword/ForgetPassword";
import ForgetPwd from "./Components/Auth/ForgetPassword/ForgetPwd2";
import ResetPassword from "./Components/Auth/ResetPassword/ResetPassword";
import ResetPwdSuccess from "./Components/Auth/ResetPassword/ResetPwdSuccess";
import Description from "./Components/Description/Description";
import DescPage from "./Components/Description/DescPage";
import Booking from "./Components/Booking/Booking";
import Flight from "./Components/Booking/Flight";
import BookingCart from "./Components/BookingCart/BookingCart";

const App = () => {
  return (
    <>
      <div className="MainBody">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Verify" element={<Verify />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/ForgetPasswordConfirm" element={<ForgetPwd />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/ResetPwdSuccess" element={<ResetPwdSuccess />} />
            <Route path="/Description" element={<Description />} />
            <Route path="/DescPage/:tourId" element={<DescPage />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Flight" element={<Flight />} />
            <Route path="/BookingCart" element={<BookingCart />} />
            
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;

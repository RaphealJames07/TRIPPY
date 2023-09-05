
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
// import BookingCart from "./Components/BookingCart/BookingCart";
import Play from "./Components/PlayGround/Play";
import HeaderNew from './Components/Header/HeaderNew'
import NewHotel from "./Components/Hotel/NewHotel";
import NewFlight from "./Components/Flight/NewFlight";
import Header from "./Components/Header/Header";
import BookingNew from "./Components/Booking/BookingH";
import BookingCar from "./Components/Booking/BookingCar";
import BookingHotel from "./Components/Booking/BookingHotel";
import BookingFlight from "./Components/Booking/BookingFlight";
import BookingCartHead from "./Components/BookingCart/BookingCartHead";
import { CommentsProvider } from '../src/Components/Redux/Context';
import NewExplore from "./Components/Explore/NewExplore";
import HeaderLone from "./Components/Header/HeaderLone";
import NewAbout from "./Components/About/NewAbout";
import ThreeSum from "./Components/Booking/ThreeSum";
import MyBookings from "./Components/Booking/MyBookings";
import WishList from "./Components/Wishlist/WhisList";
import NewCar from "./Components/Car/NewCar";
import Account from "./Components/AcountProfile/Account";
import Api from "../src/Components/Redux/Api";
import Api2 from "../src/Components/Redux/Api2";
import ToTop from "./Components/ToTop";


const App = () => {
  return (
    <>
       <CommentsProvider>
            
      <div className="MainBody">
      <Api/>
        <Api2/>
        <HashRouter>
        <ToTop/>
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
            <Route path="/DescPage" element={<DescPage />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Flight" element={<Flight />} />
            {/* <Route path="/BookingCart" element={<BookingCart />} /> */}
            <Route path="/Play" element={<Play/>} />
            <Route path="/HeaderNew" element={<HeaderNew/>} />
            <Route path="/NewHotel" element={<NewHotel/>} />
            <Route path="/NewFlight" element={<NewFlight/>} />
            <Route path="/NewCar" element={<NewCar/>} />
            <Route path="/HeaderTwo" element={<Header/>} />
            <Route path="/BookingNew/:tourId" element={<BookingNew/>} />
            <Route path="/BookingCar" element={<BookingCar/>} />
            <Route path="/BookingHotel" element={<BookingHotel/>} />
            <Route path="/BookingFlight" element={<BookingFlight/>} />
            <Route path="/BookingCart" element={<BookingCartHead/>} />
            <Route path="/Explore" element={<NewExplore/>} />
            <Route path="/HeaderLone" element={<HeaderLone/>} />
            <Route path="/About" element={<NewAbout/>} />
            <Route path="/Booking3" element={<ThreeSum/>} />
            <Route path="/MyBookings" element={<MyBookings/>} />
            <Route path="/WishList" element={<WishList/>} />
            <Route path="/Account" element={<Account/>} />
        
            
            
            
            
          </Routes>
        </HashRouter>
      </div>
        </CommentsProvider>
    </>
  );
}

export default App;

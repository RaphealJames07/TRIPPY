import { useState } from "react";
import HeaderLone from "../Header/HeaderLone";
import Footer from "../Footer/Footer";
import "./MyBookings.css";
import axios from "axios";
import { useSelector } from "react-redux";

const MyBookings = () => {



  const userToken = useSelector((state) => state.Trippy.trippyUser.token);
  const [bookingRes, setBookingRes] = useState([])


    const handleGetBooking = () => {
      const token = userToken
      const headers = {
        Authorization: `Bearer ${token}`,
    };
      console.log('Getting Booking...');
        const url = "https://trippyapiv1.onrender.com/trippy/user-booking"
        axios
            .get(url, {headers})
            .then((res) => {
                console.log("response", res);
                setBookingRes(res.data)
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    };

    console.log(bookingRes);

    return (
        <>
            <div className="MyBookingsBody">
                <HeaderLone />
                <div className="MyBookingContents">
                    <div className="MyBookingTop">
                        <h1>My Booking</h1>
                    </div>
                    <div className="MyBookingDown">
                        <div className="MyBookingDownWrap">
                            <div className="MyBookingItem1">
                              <button onClick={handleGetBooking}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MyBookings;

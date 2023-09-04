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
                        <h1>My Bookings</h1>
                    </div>
                    <div className="MyBookingDown">
                        <div className="MyBookingDownWrap">
                            <div className="MyBookingItem1">
                                <div className="MyBookingItem1Left">
                                    <div className="MyBookingItem1Tour">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Tour Name </h3>
                                            <span>Nairobi Safari</span>
                                        </div>
                                        <div>
                                            <p>Tour Price</p>
                                            <span>500usd</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour ID</p>
                                            <span>NAKY27719037EKY</span>
                                        </div>
                                        <div>
                                            <p>Names Of Tourist </p>
                                            <span>John Doe</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour Status </p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Flight">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Airline Name </h3>
                                            <span>Arik Airline</span>
                                        </div>
                                        <div>
                                            <p>Flight Departure Date </p>
                                            <span>2023-JAN-31</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Return Date </p>
                                            <span>2023-JAN-34</span>
                                        </div>
                                        <div>
                                            <p>Price: 400usd</p>
                                            <span>Tickets: 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Flight ID</p>
                                            <span>AA20238201PAEL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="MyBookingItem1Right">
                                    <div className="MyBookingItem1Hotel">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Hotel Name</h3>
                                            <span>CARAT HOTEL</span>
                                        </div>
                                        <div>
                                            <p>CheckIn: 22-JAN-2023 @ 12:AM </p>
                                            <span>
                                                CheckOut: 22-JAN-2023 @ 12:AM
                                            </span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Price:</p>
                                            <span>150usd</span>
                                        </div>
                                        <div>
                                            <p>No of Guest: 4</p>
                                            <span>No of Rooms : 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Hotel ID</p>
                                            <span>HTR001283CHL</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Car">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Car Name</h3>
                                            <span>LEXUS 300</span>
                                        </div>
                                        <div>
                                            <p>Rental Date </p>
                                            <span>2023-JAN-21</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Rental Price</p>
                                            <span>400usd</span>
                                        </div>
                                        <div>
                                            <p>Car ID</p>
                                            <span>TRLEX82103KESD</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Car Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MyBookingItem1">
                                <div className="MyBookingItem1Left">
                                    <div className="MyBookingItem1Tour">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Tour Name </h3>
                                            <span>Nairobi Safari</span>
                                        </div>
                                        <div>
                                            <p>Tour Price</p>
                                            <span>500usd</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour ID</p>
                                            <span>NAKY27719037EKY</span>
                                        </div>
                                        <div>
                                            <p>Names Of Tourist </p>
                                            <span>John Doe</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour Status </p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Flight">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Airline Name </h3>
                                            <span>Arik Airline</span>
                                        </div>
                                        <div>
                                            <p>Flight Departure Date </p>
                                            <span>2023-JAN-31</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Return Date </p>
                                            <span>2023-JAN-34</span>
                                        </div>
                                        <div>
                                            <p>Price: 400usd</p>
                                            <span>Tickets: 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Flight ID</p>
                                            <span>AA20238201PAEL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="MyBookingItem1Right">
                                    <div className="MyBookingItem1Hotel">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Hotel Name</h3>
                                            <span>CARAT HOTEL</span>
                                        </div>
                                        <div>
                                            <p>CheckIn: 22-JAN-2023 @ 12:AM </p>
                                            <span>
                                                CheckOut: 22-JAN-2023 @ 12:AM
                                            </span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Price:</p>
                                            <span>150usd</span>
                                        </div>
                                        <div>
                                            <p>No of Guest: 4</p>
                                            <span>No of Rooms : 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Hotel ID</p>
                                            <span>HTR001283CHL</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Car">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Car Name</h3>
                                            <span>LEXUS 300</span>
                                        </div>
                                        <div>
                                            <p>Rental Date </p>
                                            <span>2023-JAN-21</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Rental Price</p>
                                            <span>400usd</span>
                                        </div>
                                        <div>
                                            <p>Car ID</p>
                                            <span>TRLEX82103KESD</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Car Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MyBookingItem1">
                                <div className="MyBookingItem1Left">
                                    <div className="MyBookingItem1Tour">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Tour Name </h3>
                                            <span>Nairobi Safari</span>
                                        </div>
                                        <div>
                                            <p>Tour Price</p>
                                            <span>500usd</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour ID</p>
                                            <span>NAKY27719037EKY</span>
                                        </div>
                                        <div>
                                            <p>Names Of Tourist </p>
                                            <span>John Doe</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour Status </p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Flight">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Airline Name </h3>
                                            <span>Arik Airline</span>
                                        </div>
                                        <div>
                                            <p>Flight Departure Date </p>
                                            <span>2023-JAN-31</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Return Date </p>
                                            <span>2023-JAN-34</span>
                                        </div>
                                        <div>
                                            <p>Price: 400usd</p>
                                            <span>Tickets: 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Flight ID</p>
                                            <span>AA20238201PAEL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="MyBookingItem1Right">
                                    <div className="MyBookingItem1Hotel">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Hotel Name</h3>
                                            <span>CARAT HOTEL</span>
                                        </div>
                                        <div>
                                            <p>CheckIn: 22-JAN-2023 @ 12:AM </p>
                                            <span>
                                                CheckOut: 22-JAN-2023 @ 12:AM
                                            </span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Price:</p>
                                            <span>150usd</span>
                                        </div>
                                        <div>
                                            <p>No of Guest: 4</p>
                                            <span>No of Rooms : 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Hotel ID</p>
                                            <span>HTR001283CHL</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Car">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Car Name</h3>
                                            <span>LEXUS 300</span>
                                        </div>
                                        <div>
                                            <p>Rental Date </p>
                                            <span>2023-JAN-21</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Rental Price</p>
                                            <span>400usd</span>
                                        </div>
                                        <div>
                                            <p>Car ID</p>
                                            <span>TRLEX82103KESD</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Car Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MyBookingItem1">
                                <div className="MyBookingItem1Left">
                                    <div className="MyBookingItem1Tour">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Tour Name </h3>
                                            <span>Nairobi Safari</span>
                                        </div>
                                        <div>
                                            <p>Tour Price</p>
                                            <span>500usd</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour ID</p>
                                            <span>NAKY27719037EKY</span>
                                        </div>
                                        <div>
                                            <p>Names Of Tourist </p>
                                            <span>John Doe</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour Status </p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Flight">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Airline Name </h3>
                                            <span>Arik Airline</span>
                                        </div>
                                        <div>
                                            <p>Flight Departure Date </p>
                                            <span>2023-JAN-31</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Return Date </p>
                                            <span>2023-JAN-34</span>
                                        </div>
                                        <div>
                                            <p>Price: 400usd</p>
                                            <span>Tickets: 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Flight ID</p>
                                            <span>AA20238201PAEL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="MyBookingItem1Right">
                                    <div className="MyBookingItem1Hotel">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Hotel Name</h3>
                                            <span>CARAT HOTEL</span>
                                        </div>
                                        <div>
                                            <p>CheckIn: 22-JAN-2023 @ 12:AM </p>
                                            <span>
                                                CheckOut: 22-JAN-2023 @ 12:AM
                                            </span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Price:</p>
                                            <span>150usd</span>
                                        </div>
                                        <div>
                                            <p>No of Guest: 4</p>
                                            <span>No of Rooms : 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Hotel ID</p>
                                            <span>HTR001283CHL</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Car">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Car Name</h3>
                                            <span>LEXUS 300</span>
                                        </div>
                                        <div>
                                            <p>Rental Date </p>
                                            <span>2023-JAN-21</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Rental Price</p>
                                            <span>400usd</span>
                                        </div>
                                        <div>
                                            <p>Car ID</p>
                                            <span>TRLEX82103KESD</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Car Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="MyBookingItem1">
                                <div className="MyBookingItem1Left">
                                    <div className="MyBookingItem1Tour">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Tour Name </h3>
                                            <span>Nairobi Safari</span>
                                        </div>
                                        <div>
                                            <p>Tour Price</p>
                                            <span>500usd</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour ID</p>
                                            <span>NAKY27719037EKY</span>
                                        </div>
                                        <div>
                                            <p>Names Of Tourist </p>
                                            <span>John Doe</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Tour Status </p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Flight">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Airline Name </h3>
                                            <span>Arik Airline</span>
                                        </div>
                                        <div>
                                            <p>Flight Departure Date </p>
                                            <span>2023-JAN-31</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Return Date </p>
                                            <span>2023-JAN-34</span>
                                        </div>
                                        <div>
                                            <p>Price: 400usd</p>
                                            <span>Tickets: 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Flight Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Flight ID</p>
                                            <span>AA20238201PAEL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="MyBookingItem1Right">
                                    <div className="MyBookingItem1Hotel">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Hotel Name</h3>
                                            <span>CARAT HOTEL</span>
                                        </div>
                                        <div>
                                            <p>CheckIn: 22-JAN-2023 @ 12:AM </p>
                                            <span>
                                                CheckOut: 22-JAN-2023 @ 12:AM
                                            </span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Price:</p>
                                            <span>150usd</span>
                                        </div>
                                        <div>
                                            <p>No of Guest: 4</p>
                                            <span>No of Rooms : 2</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Hotel Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                        <div>
                                            <p>Hotel ID</p>
                                            <span>HTR001283CHL</span>
                                        </div>
                                    </div>
                                    <div className="MyBookingItem1Car">
                                        <div className="MyBookingItem1SplitOdd">
                                            <h3>Car Name</h3>
                                            <span>LEXUS 300</span>
                                        </div>
                                        <div>
                                            <p>Rental Date </p>
                                            <span>2023-JAN-21</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Rental Price</p>
                                            <span>400usd</span>
                                        </div>
                                        <div>
                                            <p>Car ID</p>
                                            <span>TRLEX82103KESD</span>
                                        </div>
                                        <div className="MyBookingItem1SplitOdd">
                                            <p>Car Status</p>
                                            <span>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleGetBooking}>Search</button>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MyBookings;

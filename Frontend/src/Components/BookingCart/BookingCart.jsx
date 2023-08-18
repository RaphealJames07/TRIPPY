import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./BookingCart.css";
import TourImg from "../../assets/HeroBg.png";
import { useDispatch } from "react-redux";
import { clearBookingData } from "../Redux/Features";

function BookingCart() {
    const dispatch = useDispatch();
    const bookingCartData = useSelector(
        (state) => state.Trippy.trippyBookingCart
    );
    // console.log("SEE DATA", bookingCartData);
    const mergedBookingData = {};

    bookingCartData.forEach((item) => {
        Object.keys(item).forEach((key) => {
            if (!mergedBookingData.hasOwnProperty(key)) {
                mergedBookingData[key] = item[key];
            }
        });
    });

    const mergedArray = [mergedBookingData];

    // console.log(mergedArray);
    // console.log(mergedArray[0].tourData);

    return (
        <>
            <div className="BookingCartBody">
                <Header />

                <div className="container">
                    {mergedArray?.map((item, index) => (
                        <div className="box1" key={index}>
                            <div className="shape">
                                <div className="shape1">
                                    <img
                                        src={mergedArray[0].tourData.images[0]}
                                        alt="tour"
                                    />
                                </div>
                                <div className="text">
                                    <h2>
                                        {mergedArray[0].tourData.city}{" "}
                                        <span></span>
                                    </h2>
                                    <h2>{mergedArray[0].tourData.country}</h2>
                                </div>
                                <div className="shape2">
                                    <div className="card1">
                                        <p>
                                            Departure Time:{" "}
                                            {
                                                mergedArray[0].flightData
                                                    .depatureTime
                                            }
                                            <br />
                                            Time: 8:00AM <br />
                                            Lagos Int’l Airport Lagos NG <br />
                                            Greece Int’l Airport Athens, GC
                                        </p>
                                    </div>
                                    <div className="card1">
                                        <p>
                                            Hotel: Comfort Suites <br />
                                            Check In: 21 Jan Check Out: 24 Jan{" "}
                                            <br />
                                            Rooms: 2 Persons: 3
                                        </p>
                                    </div>
                                </div>
                                <div className="shape3">
                                    <div className="card2">
                                        <p>
                                            Car: Toyota Corolla
                                            <br />
                                            Seat: 4 Color: Black
                                        </p>
                                    </div>
                                    <div className="card3">
                                        <p>Name</p>
                                        <div className="inputholder">
                                            <input placeholder="" />
                                        </div>

                                        <p>Email</p>
                                        <div className="inputholder">
                                            <input placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="box2">
                        <div className="innerbox2">
                            <div className="innerbox1">Total Bookings</div>
                            <div className="innerbox">
                                <p>Flight Total:</p>
                                <p>300.00</p>
                            </div>
                            <div className="innerbox">
                                <p>Hotel Total:</p>
                                <p>80.00</p>
                            </div>
                            <div className="innerbox">
                                <p>Car Total:</p>
                                <p>45.00</p>
                            </div>
                            <div className="innerbox">
                                <p>Sub Total:</p>
                                <p>45.00</p>
                            </div>
                            <div className="innerbox">
                                <p>Service Charge</p>
                                <p>45.00</p>
                            </div>
                            <div className="innerbox">
                                <p>Total</p>
                                <p>90.00</p>
                            </div>
                            <button className="pay">Proceed to Pay</button>
                            <button
                                className="deleteBooking"
                                onClick={() => {
                                    dispatch(clearBookingData());
                                    // alert("User LogOut Successfully");
                                }}
                            >
                                Cancel Boking
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
export default BookingCart;

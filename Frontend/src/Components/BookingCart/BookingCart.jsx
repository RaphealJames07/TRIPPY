import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import "./BookingCart.css";
// import TourImg from "../../assets/HeroBg.png";
import { useDispatch } from "react-redux";
import { clearBookingData } from "../Redux/Features";

function BookingCart() {
    const dispatch = useDispatch();
    const bookingCartData = useSelector(
        (state) => state.Trippy.trippyBookingCart
    );
    console.log("SEE DATA", bookingCartData);
    const cartData = bookingCartData

    // const arrayOfObjects = [
    //     { prop1: 'value1', prop2: 'value2' },
    //     { prop2: 'value2', prop3: 'value3' },
    //     { prop1: 'value1', prop3: 'value3' },
    //     { prop4: 'value4', prop5: 'value5' }
    // ];
    
    const mergedObject = cartData.reduce((merged, currentObject) => {
        Object.entries(currentObject).forEach(([key, value]) => {
            if (!merged[key]) {
                merged[key] = [value];
            } else {
                merged[key].push(value);
            }
        });
        return merged;
    }, {});
    
    // console.log('GPT', mergedObject);
    const NewCartData = [mergedObject]
    console.log('Maybe',NewCartData);

    return (
        <>
            <div className="BookingCartBody">
                {/* <Header /> */}

                {
                    NewCartData?.map((item, index) => (
                        <div className="container" key={index}>
                    <div className="box1">
                        <div className="shape">
                            <div className="shape1">
                                        <img src={item?.tourData[0].images[0]} alt="tour" />
                                        
                            </div>
                            <div className="text">
                                <h2>
                                    {item?.tourData[0].tourName}
                                            <span> Tour Price: { item?.tourData[0].pricePerPerson}</span>
                                </h2>
                                <h2></h2>
                            </div>
                            <div className="shape2">
                                <div className="card1">
                                    <p>
                                        Departure Time:
                                        <br /> Arrival Time
                                        <br />
                                        Lagos Int’l Airport Lagos NG <br />
                                        Nairobi Intl airport Nairobi KY
                                    </p>{" "}
                                        <span><p>Price:N</p></span>
                                    <br />
                                </div>
                                <div className="card1">
                                    <p>
                                        Hotel: <br />
                                        Check In: <span></span>{" "}
                                        <span> Check Out: </span> <br />
                                        Max Per Rooms: <br />
                                    </p>
                                        <span>Price:N</span>
                                </div>
                            </div>
                            <div className="shape3">
                                <div className="card2">
                                    <p>
                                        Car: <span></span>
                                        <br />
                                        Seat: regNo:
                                    </p>
                                        <span><p>Price:N</p></span>
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
                    ))
                }
            </div>
        </>
    );
}
export default BookingCart;

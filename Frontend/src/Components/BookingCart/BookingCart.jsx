import { useSelector } from "react-redux";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import "./BookingCart.css";
// import TourImg from "../../assets/HeroBg.png";
import { useDispatch } from "react-redux";
import { clearBookingData } from "../Redux/Features";
import axios from "axios";
import { useState } from "react";

function BookingCart() {
    const dispatch = useDispatch();
    const bookingCartData = useSelector(
        (state) => state.Trippy.trippyBookingCart
    );
    // console.log("SEE DATA", bookingCartData);
    const cartData = bookingCartData;
    const userToken = useSelector((state) => state.Trippy.trippyUser.token);
    console.log("User Token is", userToken);
    const userData = useSelector((state) => state.Trippy.trippyUser);
    const userFirstName = userData.firstName;

    console.log("User Data is", userData);

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
    const NewCartData = [mergedObject];
    console.log("My Final", NewCartData);

    const flightId = `${NewCartData[0].flightData[0]._id}`;
    const returnFlightId = `${NewCartData[0].flightData[1]._id}`;
    const flightPrice =
        parseFloat(NewCartData[0].flightData[1].priceFlex) +
        parseFloat(NewCartData[0].flightData[0].priceFlex);
    const numberOfTickets = 2;
    const namesOfTravelers = ["John Doe", "Mary John"];
    const flightDate = `27-01-2023`;
    const returnDate = `30-01-2023`;
    const carRentalId = `${NewCartData[0].carData[0]._id}`;
    const rentalDays = 3;
    const rentalDate = `27-01-2023`;
    const rentalPrice =
        parseFloat(NewCartData[0].carData[0].pricePerDay) * rentalDays;
    const hotelId = `${NewCartData[0].hotelData[0]._id}`;
    const tourId = `${NewCartData[0].tourData[0]._id}`;
    const tourPrice = parseFloat(NewCartData[0].tourData[0].pricePerPerson) * 2;
    const checkInDate = `27-01-2023`;
    const checkOutDate = `30-01-2023`;
    const numberOfGuests = 2;
    const numberOfRooms = 1;
    const hotelPrice = parseFloat(NewCartData[0].hotelData[0].pricePerNight);
    const totalPrice = flightPrice + rentalPrice + hotelPrice + tourPrice;

    const data = {
        flightId,
        returnFlightId,
        numberOfTickets,
        namesOfTravelers,
        flightDate,
        returnDate,
        flightPrice,
        carRentalId,
        rentalDays,
        rentalDate,
        rentalPrice,
        hotelId,
        tourId,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        numberOfRooms,
        hotelPrice,
        totalPrice,
    };

    const [bookingProcessing, setBookingProcessing] = useState(false);

    const handleBooking = () => {
        console.log("Booking processing");
        setBookingProcessing(true);
        const token = userToken;
        const requestedData = data;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .post(
                `https://trippyapiv1.onrender.com/trippy/new-booking`,
                requestedData,
                { headers }
            )
            .then((res) => {
                console.log(res);
                payment();
            })
            .catch((err) => {
                console.log(err);
            });
        setBookingProcessing(false);
    };

    const payment = () => {
        const refVal = "KoKo" + Math.random() * 1000;
        window.Korapay.initialize({
            key: "pk_test_g6zBHAZmHopS6Tyyvwn7iz5ucLqrDP6kqWwvKr66",
            reference: `${refVal}`,
            amount: totalPrice,
            currency: "NGN",
            customer: {
                name: userFirstName,
                email: userData.email,
            },
            notification_url: "https://example.com/webhook",
        });
    };

    return (
        <>
            <div className="BookingCartBody">
                {/* <Header /> */}

                {NewCartData?.map((item, index) => (
                    <div className="container" key={index}>
                        <div className="box1">
                            <div className="shape">
                                <div className="shape1">
                                    <img
                                        src={item?.tourData[0].images[0]}
                                        alt="tour"
                                    />
                                </div>
                                <div className="text">
                                    <h2>
                                        {item?.tourData[0].tourName}
                                        <span>
                                            {" "}
                                            Tour Price:{" "}
                                            {item?.tourData[0].pricePerPerson}
                                        </span>
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
                                        <span>
                                            <p>Price:N</p>
                                        </span>
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
                                        <span>
                                            <p>Price:N</p>
                                        </span>
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
                                <button className="pay" onClick={handleBooking}>
                                    {bookingProcessing
                                        ? "Booking Processing..."
                                        : "Proceed to Pay"}
                                </button>
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
                ))}
            </div>
        </>
    );
}
export default BookingCart;

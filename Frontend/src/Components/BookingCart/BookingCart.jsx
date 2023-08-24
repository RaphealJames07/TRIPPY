import { useSelector } from "react-redux";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import "./BookingCart.css";
// import TourImg from "../../assets/HeroBg.png";
import { useDispatch } from "react-redux";
import { clearBookingData } from "../Redux/Features";
import axios from "axios";
import { useState } from "react";
// import TourImg from "../../assets/home_slider.jpg.webp";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./BookingCart.css";

const BookingCart = () =>{
    const dispatch = useDispatch();
    const bookingCartData = useSelector(
        (state) => state.Trippy.trippyBookingCart
    );
    // console.log("SEE DATA", bookingCartData);
    const cartData = bookingCartData;
    const userToken = useSelector((state) => state.Trippy.trippyUser.token);
    // console.log("User Token is", userToken);
    const userData = useSelector((state) => state.Trippy.trippyUser);
    const userFirstName = userData.firstName;

    // console.log("User Data is", userData);

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

    const [tourTickets, setTourTickets] = useState(0);
    

    
        const [touristName, setTouristName] = useState('');
        const [allTouristNames, setAllTouristNames] = useState([]);
    
    const handleAddName = () => {
        if (touristName.trim() !== '') {
            setAllTouristNames([...allTouristNames, touristName]);
            setTouristName(''); // Clear the input field
        }
    }
    const handleClearAllNames = () => {
        setAllTouristNames([]);
    };
      

    const flightId = `${NewCartData[0].flightData[0]._id}`;
    const returnFlightId = `${NewCartData[0].flightData[1]._id}`;
    const flightPrice =
        parseFloat(NewCartData[0].flightData[1].priceFlex) +
        parseFloat(NewCartData[0].flightData[0].priceFlex);
    const numberOfTickets = tourTickets;
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
    const tourPrice = parseFloat(NewCartData[0].tourData[0].pricePerPerson);
    const checkInDate = `27-01-2023`;
    const checkOutDate = `30-01-2023`;
    const numberOfGuests = 2;
    const numberOfRooms = 1;
    const hotelPrice = parseFloat(NewCartData[0].hotelData[0].pricePerNight);
    const totalPrice = flightPrice + rentalPrice + hotelPrice + tourPrice;


    const totalTourPrice = tourPrice * tourTickets;

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
    console.log(bookingProcessing);

    const handleBooking = () => {
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
            <div className="CocoBody">
                {NewCartData?.map((item, index) => (
                    <div className="CocoBodyWrap" key={index}>
                        <div className="CocoTop">
                            <h1 className="CocoTopHeaderText">
                                Booking Summary
                            </h1>
                            <div className="CocoTopImgDiv">
                                <img src={item?.tourData[0].images[0]} alt="" />
                            </div>
                            <div className="CocoTopTourDetailsDiv">
                                <div className="CocoTopTourDetailsDivOne">
                                    <h2>
                                        {item?.tourData[0].tourName}
                                        <span
                                            style={{
                                                marginLeft: "30px",
                                                fontSize: "19px",
                                            }}
                                        >
                                            {item?.tourData[0].city}
                                        </span>
                                    </h2>
                                    <h3>{item?.tourData[0].country}</h3>
                                    <div className="CocoTopTourDetailsDivStar">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </div>
                                </div>
                                <div className="CocoTopTourDetailsDivTwo">
                                    <div className="CocoTopTourDetailsDivTwoSpan1">
                                        <h2>Tour Info:</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Alias
                                            adipisci cupiditate earum
                                            consequatur, dolores aut veniam, in
                                            nobis nostrum quos omnis iure ad
                                            fugiat culpa placeat, sequi facilis
                                            ipsam eos!
                                        </p>
                                    </div>
                                    <div className="CocoTopTourDetailsDivTwoSpan2">
                                        <h2>Amenities</h2>
                                        <p>{item?.tourData[0].amenities}</p>
                                    </div>
                                    <div className="CocoTopTourDetailsDivInputs">
                                        <h3>
                                            Price Per Person:
                                            {item?.tourData[0].pricePerPerson}
                                            <span>
                                                Total Tour Price{" "}
                                                {totalTourPrice}
                                            </span>
                                        </h3>
                                        <div className="CocoTopTourDetailsDivInputsNum">
                                            <label htmlFor="Name">
                                                No Of Tickets
                                            </label>
                                            <input
                                                type="number"
                                                min={0}
                                                value={tourTickets}
                                                onChange={(e) =>
                                                    setTourTickets(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="CocoTopTourDetailsDivInputsName">
                                            <label htmlFor="Name">
                                                Name of Tourist
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Input Name"
                                                value={touristName}
                                                onChange={(e) =>
                                                    setTouristName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button onClick={handleAddName}>
                                                Add Name
                                            </button>
                                            <button onClick={handleClearAllNames}>Clear Names</button>
                                            <p>
                                                
                                            </p>
                                        </div>
                                    </div>
                                        <div className="CocoTopTourDetailsDivTouristName">
                                            <p>All Names:
                                                {allTouristNames.join(", ")}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="CocoDown">
                            <div className="CocoLeft">
                                <div className="CocoTourFlightDiv">
                                    <div className="CocoTourFlightDivLeft">
                                        <div className="CocoTourFlightDivLeftImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="CocoTourFlightDivLeftDetailsDiv">
                                            <h3>To Flight Detail</h3>
                                            <p>Flight Name</p>
                                            <p>
                                                Fron Lagos to{" "}
                                                <span>Nairobi</span>{" "}
                                            </p>
                                            <p>Depature Time</p>
                                            <p>Arrival Time</p>
                                            <p>
                                                date <input type="date" />
                                            </p>
                                            <select name="" id="">
                                                <option value="">
                                                    Select Price
                                                </option>
                                                <option value="priceFlex">
                                                    PriceFlex
                                                </option>
                                                <option value="priceStandard">
                                                    PriceStandard
                                                </option>
                                            </select>
                                            <p>Return Price</p>
                                        </div>
                                    </div>
                                    <div className="CocoTourFlightDivRight">
                                        <div className="CocoTourFlightDivRightImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="CocoTourFlightDivRightDetailsDiv">
                                            <h3>From Flight Detail</h3>
                                            <p>Flight Name</p>
                                            <p>
                                                Fron Lagos to{" "}
                                                <span>Nairobi</span>{" "}
                                            </p>
                                            <p>Depature Time</p>
                                            <p>Arrival Time</p>
                                            <p>
                                                date <input type="date" />
                                            </p>
                                            <select name="" id="">
                                                <option value="">
                                                    Select Price
                                                </option>
                                                <option value="priceFlex">
                                                    PriceFlex
                                                </option>
                                                <option value="priceStandard">
                                                    PriceStandard
                                                </option>
                                            </select>
                                            <p>Return Price</p>
                                        </div>
                                    </div>
                                    {/* <p>Total Flight Price</p> */}
                                </div>
                                <div className="CocoTourHotelDiv">
                                    <div className="CocoTourHotelDivImgDiv">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="CocoTourHotelDivDetailsDiv">
                                        <h3>
                                            Hotel Name <span>Kenya</span>
                                        </h3>
                                        <p>12 kokoyi street</p>
                                        <p>
                                            CheckIn <span>CheckOut</span>
                                        </p>
                                        <p>
                                            Price per night
                                            <span>max per room (2)</span>
                                        </p>
                                        <p>
                                            Nights
                                            <input
                                                type="number"
                                                name=""
                                                id=""
                                                min={0}
                                            />
                                            <span>No of Guest</span>
                                        </p>
                                        <p>Total Hotel Price</p>
                                    </div>
                                </div>
                                <div className="CocoTourCarDiv">
                                    <div className="CocoTourCarDivImgDiv">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="CocoTourCarDivDetailsDiv">
                                        <h3>
                                            Car Name <span>Model</span>
                                        </h3>
                                        <p>
                                            Seats <span>Color</span>
                                        </p>
                                        <p>Max Passenger</p>
                                        <p>Location</p>
                                        <p>
                                            PricePerDaR{" "}
                                            <input
                                                type="number"
                                                name=""
                                                id=""
                                            />{" "}
                                            <span>No of days</span>
                                        </p>
                                        <p>Regno</p>
                                        <p>Total Price</p>
                                    </div>
                                </div>
                            </div>
                            <div className="CocoRight">
                                <div className="CocoPayment">
                                    <div className="CocoPaymentFigures">
                                        <p>
                                            Total Tour Price <span>20000</span>
                                        </p>
                                        <p>
                                            Total Flight Price{" "}
                                            <span>20000</span>
                                        </p>
                                        <p>
                                            Total Car Price <span>20000</span>
                                        </p>
                                        <p>
                                            Total Hotel Price <span>20000</span>
                                        </p>
                                        <p>
                                            SubTotal Booking Price{" "}
                                            <span>20000</span>
                                        </p>
                                        <p>
                                            Service Charge <span>20000</span>
                                        </p>
                                        <h3>
                                            Total Booking Fee <span>20000</span>
                                        </h3>
                                    </div>
                                    <div className="CocoPaymentActionBtns">
                                        <button
                                            className="CocoPaymentActionBtnsCancel"
                                            onClick={() =>
                                                dispatch(clearBookingData)
                                            }
                                        >
                                            Cancel Booking
                                        </button>
                                        <button
                                            className="CocoPaymentActionBtnsPay"
                                            onClick={handleBooking}
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default BookingCart;

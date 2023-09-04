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
import ConfirmationModal from "./ConfirmModal";
import { useNavigate } from "react-router";
import { ScaleLoader } from "react-spinners";
import {InputNumber, Form, Button, Input, DatePicker, Select} from "antd";
const {Option} = Select;

const BookingCart = () => {
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

    const [touristName, setTouristName] = useState("");
    const [allTouristNames, setAllTouristNames] = useState([]);

    const handleAddName = () => {
        if (touristName.trim() !== "") {
            setAllTouristNames([...allTouristNames, touristName]);
            setTouristName(""); // Clear the input field
        }
    };
    const handleClearAllNames = () => {
        setAllTouristNames([]);
    };

    const [flyOut, setFlyOut] = useState(0);
    const [flyBack, setFlyBack] = useState(0);
    const [flyOutDate, setFlyOutDate] = useState("");
    const [flyBackDate, setFlyBackDate] = useState("");

    const [noOfNights, setNoOfNights] = useState(1);
    const [noOfRooms, setNoOfRooms] = useState(1);
    const hotelPricePerNight = parseFloat(
        NewCartData[0].hotelData[0].pricePerNight
    );
    const newHotelTotalPRIcePerNight =
        parseFloat(hotelPricePerNight) * parseFloat(noOfRooms);
    const newHotelTotalPRIce =
        parseFloat(newHotelTotalPRIcePerNight) * parseFloat(noOfNights);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const [carDays, setCarDays] = useState(0);
    const [carDate, setCarDate] = useState(null);

    const flightId = `${NewCartData[0].flightData[0]._id}`;
    const returnFlightId = `${NewCartData[0].flightData[1]._id}`;
    const flightPrice = parseFloat(flyOut) + parseFloat(flyBack);
    const numberOfTickets = tourTickets;
    const namesOfTravelers = allTouristNames;
    const flightDate = flyOutDate;
    const returnDate = flyBackDate;
    const carRentalId = `${NewCartData[0].carData[0]._id}`;
    const rentalDays = parseFloat(carDays);
    const rentalDate = carDate;
    const rentalPrice =
        parseFloat(NewCartData[0].carData[0].pricePerDay) * rentalDays;
    const hotelId = `${NewCartData[0].hotelData[0]._id}`;
    const tourId = `${NewCartData[0].tourData[0]._id}`;
    const tourPrice = parseFloat(NewCartData[0].tourData[0].pricePerPerson);
    const checkInDate = checkIn;
    const checkOutDate = checkOut;
    const numberOfGuests = 2;
    const numberOfRooms = noOfRooms;
    const hotelPrice = newHotelTotalPRIce;

    const totalTourPrice = tourPrice * tourTickets;

    // const totalPrice = flightPrice + rentalPrice + hotelPrice + totalTourPrice;

    const subTotalPrice =
        hotelPrice + rentalPrice + flightPrice + totalTourPrice;

    const serviceCharge = 1500;

    const totalPrice = subTotalPrice + serviceCharge;
    console.log(totalPrice);

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
                {headers}
            )
            .then((res) => {
                console.log(res);
                payment();
                console.log("Payment Successful");
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setBookingProcessing(false);
            });
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

    const nav = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmClearData = () => {
        dispatch(clearBookingData());
        nav("/HeaderNew");
        setIsModalOpen(false);
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
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {item?.tourData[0].city}
                                        </span>
                                    </h2>
                                    <h3>
                                        Country: {item?.tourData[0].country}
                                    </h3>
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
                                            <Form.Item label="No Of Tickets">
                                                <InputNumber
                                                    min={0}
                                                    defaultValue={0}
                                                    value={tourTickets}
                                                    onChange={(value) =>
                                                        setTourTickets(value)
                                                    }
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="CocoTopTourDetailsDivInputsName">
                                            <label htmlFor="Name">
                                                Name of Tourist
                                            </label>
                                            <Input
                                                required
                                                placeholder="Input Name"
                                                value={touristName}
                                                onChange={(e) =>
                                                    setTouristName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <Button
                                                onClick={handleAddName}
                                                style={{width: "100px"}}
                                            >
                                                Add Name
                                            </Button>
                                            <Button
                                                onClick={handleClearAllNames}
                                                style={{width: "100px"}}
                                            >
                                                Clear Names
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="CocoTopTourDetailsDivTouristName">
                                        <p>
                                            All Names:
                                            {allTouristNames.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="CocoDown">
                            <div className="CocoLeft">
                                <div className="CocoTourFlightDiv">
                                    <div className="CocoTourFlightDivLeft">
                                        <div className="CocoTourFlightDivLeftImgDiv">
                                            <img
                                                src={
                                                    item?.flightData[0]
                                                        .airlineLogo
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <div className="CocoTourFlightDivLeftDetailsDiv">
                                            <h3>FlyOut Detail</h3>
                                            <p>
                                                Flight Name:{" "}
                                                {
                                                    item?.flightData[0]
                                                        .airlineName
                                                }
                                            </p>
                                            <p>
                                                Fron {item?.flightData[0].from}
                                                {"   "}
                                                to
                                                <span>
                                                    {"  "}
                                                    {item?.flightData[0].to}
                                                </span>{" "}
                                            </p>
                                            <p>
                                                Arr. Time
                                                {
                                                    item?.flightData[0]
                                                        .depatureTime
                                                }
                                            </p>
                                            <p>
                                                Dep. Time
                                                {
                                                    item?.flightData[0]
                                                        .arrivalTime
                                                }
                                            </p>
                                            <p>
                                                <Form.Item label="Date">
                                                    <DatePicker
                                                        value={flyOutDate}
                                                        onChange={(date) => {
                                                            setFlyOutDate(date);
                                                        }}
                                                    />
                                                </Form.Item>
                                            </p>
                                            <Form.Item label="Select Price">
                                                <Select
                                                    value={flyOut}
                                                    onChange={(value) => {
                                                        setFlyOut(value); // Update the selected value
                                                    }}
                                                >
                                                    <Option
                                                        value={
                                                            item?.flightData[0]
                                                                .priceFlex
                                                        }
                                                    >
                                                        PriceFlex{" "}
                                                        {
                                                            item?.flightData[0]
                                                                .priceFlex
                                                        }
                                                    </Option>
                                                    <Option
                                                        value={
                                                            item?.flightData[0]
                                                                .priceStandard
                                                        }
                                                    >
                                                        PriceStandard{" "}
                                                        {
                                                            item?.flightData[0]
                                                                .priceStandard
                                                        }
                                                    </Option>
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="CocoTourFlightDivRight">
                                        <div className="CocoTourFlightDivRightImgDiv">
                                            <img
                                                src={
                                                    item?.flightData[1]
                                                        .airlineLogo
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <div className="CocoTourFlightDivRightDetailsDiv">
                                            <h3>Fly Back Detail</h3>
                                            <p>
                                                Flight Name:{" "}
                                                {
                                                    item?.flightData[1]
                                                        .airlineName
                                                }
                                            </p>
                                            <p>
                                                Fron {item?.flightData[1].from}{" "}
                                                to
                                                <span>
                                                    {item?.flightData[1].to}
                                                </span>{" "}
                                            </p>
                                            <p>
                                                Arr. Time
                                                {
                                                    item?.flightData[1]
                                                        .depatureTime
                                                }
                                            </p>
                                            <p>
                                                Dep. Time
                                                {
                                                    item?.flightData[1]
                                                        .arrivalTime
                                                }
                                            </p>
                                            <p>
                                                <Form.Item label="Date">
                                                    <DatePicker
                                                        value={flyBackDate}
                                                        onChange={(date) => {
                                                            setFlyBackDate(
                                                                date
                                                            );
                                                        }}
                                                    />
                                                </Form.Item>
                                            </p>
                                            <Form.Item label="Select Price">
                                                <Select
                                                    value={flyBack}
                                                    onChange={(value) => {
                                                        setFlyBack(value); // Update the selected value
                                                    }}
                                                >
                                                    <Option
                                                        value={
                                                            item?.flightData[1]
                                                                .priceFlex
                                                        }
                                                    >
                                                        PriceFlex{" "}
                                                        {
                                                            item?.flightData[1]
                                                                .priceFlex
                                                        }
                                                    </Option>
                                                    <Option
                                                        value={
                                                            item?.flightData[1]
                                                                .priceStandard
                                                        }
                                                    >
                                                        PriceStandard{" "}
                                                        {
                                                            item?.flightData[1]
                                                                .priceStandard
                                                        }
                                                    </Option>
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <p className="CocoTourFlightDivText">
                                        Total Flight Price: {flightPrice}
                                    </p>
                                </div>
                                <div className="CocoTourHotelDiv">
                                    <div className="CocoTourHotelDivImgDiv">
                                        <img
                                            src={item?.hotelData[0].images[0]}
                                            alt=""
                                        />
                                    </div>
                                    <div className="CocoTourHotelDivDetailsDiv">
                                        <h3>
                                            {item?.hotelData[0].hotelName}{" "}
                                            <span>
                                                {item?.hotelData[0].city}
                                            </span>
                                        </h3>
                                        <p>
                                            {item?.hotelData[0].address}{" "}
                                            <span>
                                                {item?.hotelData[0].country}
                                            </span>
                                        </p>
                                        <p>
                                            Check In:{" "}
                                            {item?.hotelData[0].checkIn}{" "}
                                            <span>
                                                Check Out:{" "}
                                                {item?.hotelData[0].checkOut}{" "}
                                            </span>
                                        </p>
                                        <p>
                                            Price per night{" "}
                                            {item?.hotelData[0].pricePerNight}
                                            <span>
                                                {" "}
                                                max per room{" "}
                                                {item?.hotelData[0].maxPerRoom}
                                            </span>
                                        </p>
                                        <div className="CocoHotelTourNights2">
                                            <Form.Item label="CheckIn Date">
                                                <DatePicker
                                                    value={checkIn}
                                                    onChange={(date) => {
                                                        setCheckIn(date); // Update the selected date
                                                    }}
                                                />
                                            </Form.Item>
                                            <Form.Item label="CheckOut Date">
                                                <DatePicker
                                                    value={checkOut}
                                                    onChange={(date) => {
                                                        setCheckOut(date); // Update the selected date
                                                    }}
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="CocoHotelTourNights">
                                            <Form.Item label="Nights">
                                                <InputNumber
                                                    min={1}
                                                    value={noOfNights}
                                                    onChange={(value) => {
                                                        setNoOfNights(value); // Update the selected value
                                                    }}
                                                />
                                            </Form.Item>
                                            <Form.Item label="No of rooms">
                                                <InputNumber
                                                    min={1}
                                                    value={noOfRooms}
                                                    onChange={(value) => {
                                                        setNoOfRooms(value); // Update the selected value
                                                    }}
                                                />
                                            </Form.Item>
                                        </div>
                                        <p>Total Hotel Price {hotelPrice}</p>
                                    </div>
                                </div>
                                <div className="CocoTourCarDiv">
                                    <div className="CocoTourCarDivImgDiv">
                                        <img
                                            src={item?.carData[0].image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="CocoTourCarDivDetailsDiv">
                                        <h3>
                                            {item?.carData[0].brand}{" "}
                                            <span>
                                                {item?.carData[0].model}
                                            </span>
                                        </h3>
                                        <p>
                                            {" "}
                                            Max No Of Passengers
                                            {
                                                item?.carData[0].maxPassengers
                                            }{" "}
                                            <span style={{marginLeft: "20px"}}>
                                                {" "}
                                                Color:
                                                {item?.carData[0].color}
                                            </span>
                                        </p>

                                        <p>
                                            Location:{" "}
                                            {item?.carData[0].location}
                                        </p>
                                        <div className="CocoCarNoOfDays">
                                        <p>
                                            Price Per Day{" "}
                                            {item?.carData[0].pricePerDay}
                                            {}
                                        </p>
                                        <Form.Item label="No of days">
                                            <InputNumber
                                                min={0}
                                                value={carDays}
                                                onChange={(value) => {
                                                    setCarDays(value); // Update the selected value
                                                }}
                                            />
                                        </Form.Item>
                                        </div>
                                        <div className="CocoCarNoOfDays">
                                        <p>
                                            Reg No:
                                            {
                                                item?.carData[0]
                                                    .registrationNumber
                                            }
                                        </p>
                                        
                                            <Form.Item label='Rental Date'>
                                                <DatePicker
                                                    value={carDate}
                                                    onChange={(date) => {
                                                        setCarDate(date); // Update the selected date
                                                    }}
                                                />
                                            </Form.Item>
                                        
                                        </div>
                                        <p>Total Price {rentalPrice}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="CocoRight">
                                <div className="CocoPayment">
                                    <div className="CocoPaymentFigures">
                                        <p>
                                            Total Tour Price{" "}
                                            <span>{totalTourPrice}</span>
                                        </p>
                                        <p>
                                            Total Flight Price
                                            <span>{flightPrice}</span>
                                        </p>
                                        <p>
                                            Total Car Price{" "}
                                            <span>{rentalPrice}</span>
                                        </p>
                                        <p>
                                            Total Hotel Price{" "}
                                            <span>{hotelPrice}</span>
                                        </p>
                                        <p>
                                            SubTotal Booking Price
                                            <span>{subTotalPrice}</span>
                                        </p>
                                        <p>
                                            Service Charge{" "}
                                            <span>{serviceCharge}</span>
                                        </p>
                                        <h3>
                                            Total Booking Fee{" "}
                                            <span>{totalPrice}</span>
                                        </h3>
                                    </div>
                                    <div className="CocoPaymentActionBtns">
                                        <button
                                            className="CocoPaymentActionBtnsCancel"
                                            onClick={handleOpenModal}
                                        >
                                            Cancel Booking
                                        </button>

                                        <button
                                            className="CocoPaymentActionBtnsPay"
                                            onClick={handleBooking}
                                            disabled={bookingProcessing} // Disable the button while processing
                                        >
                                            {bookingProcessing ? (
                                                <>
                                                    <ScaleLoader color="#000" />
                                                </>
                                            ) : (
                                                "Pay"
                                            )}
                                        </button>
                                        <ConfirmationModal
                                            isOpen={isModalOpen}
                                            onClose={handleCloseModal}
                                            onConfirm={handleConfirmClearData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
export default BookingCart;

import "./Booking.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Flight from "./Flight"
import { useState } from "react";
// import { CiLocationOn } from "react-icons/ci";
import "./Flight.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hotelData, flightData, carData } from "../Redux/Features";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Car from "./Car";
import { Link } from "react-router-dom";

const Booking = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showHotel, setShowHotel] = useState(false);
    const [showCar, setShowCar] = useState(false);
    const [fromFlight, setFromFlight] = useState("");
    const [toFlight, setToFlight] = useState("");
    const [hotelCity, setHotelCity] = useState("");
    const [hotelCountry, setHotelCountry] = useState("");
    const [carCity, setCarCity] = useState("");
    const dispatch = useDispatch();

    const handleFlightSearch = () => {
        const url = `https://trippyapiv1.onrender.com/trippy/find-flights/?from=${encodeURIComponent(
            fromFlight
        )}&to=${encodeURIComponent(toFlight)}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                dispatch(flightData(res.data.flights));
            })
            .catch((err) => {
                console.log(err);
            });

        setShowPopup(true);
    };

    const handleFlightPopUp = () => {
        setShowPopup(false);
    };

    const handleHotelSearch = () => {
        const url = `https://trippyapiv1.onrender.com/trippy//find-hotels/?city=${encodeURIComponent(
            hotelCity
        )}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                dispatch(hotelData(res.data.hotels));
            })
            .catch((err) => {
                console.log(err);
            });
        setShowHotel(true);
    };
    const handleHotelPopUp = () => {
        setShowHotel(false);
    };

    const handleCarSearch = () => {
        const url = `https://trippyapiv1.onrender.com/trippy//find-car-rentals/?location=${encodeURIComponent(
            carCity
        )}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                dispatch(carData(res.data.carRentals));
            })
            .catch((err) => {
                console.log(err);
            });
        setShowCar(true);
    };

    const handleCarPopUp = () => {
        setShowCar(false);
    };

    const handlePopupBoxClick = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div className="BookingBody">
                <Header />
                <>
                    <div className="FlightBody">
                        <div className="FlightWrapper">
                            <div className="FlightProgress">
                                <p>Details / Booking</p>
                                <div className="FlightProgressBar">
                                    <div className="Flightbar1 Circle"></div>
                                    <div className="Flightbar2 Line"></div>
                                    <div className="Flightbar3 Circle"></div>
                                    <div className="Flightbar4 Line"></div>
                                    <div className="Flightbar5 Circle"></div>
                                    <div className="Flightbar6 Line"></div>
                                    <div className="Flightbar7 Circle"></div>
                                    <div className="Flightbar8 Line"></div>
                                    <div className="Flightbar9 Circle"></div>
                                </div>
                            </div>
                            <div className="SearchPages">
                                <div className="FlightSearchDiv">
                                    <h3 className="FlightDetailText">
                                        Flight Search
                                    </h3>

                                    <div className="FlightSearchDiv2">
                                        <div className="FlightSearchDiv2Text">
                                            <label htmlFor="Date">
                                                Depature
                                            </label>
                                            <label htmlFor="Date">
                                                Destination
                                            </label>
                                        </div>
                                        <div className="FlightSearchDiv2DateInput">
                                            <select
                                                name="OriginAirport"
                                                id="OriginAirport"
                                                onChange={(e) =>
                                                    setFromFlight(
                                                        e.target.value
                                                    )
                                                }
                                                value={fromFlight}
                                            >
                                                <option
                                                    value=""
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Select Origin Airport
                                                </option>

                                                <option
                                                    value="lagos"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Lagos
                                                </option>
                                                <option
                                                    value="accra"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Accra
                                                </option>
                                            </select>
                                            <select
                                                name="DestinationAirport"
                                                id="DestinationAirport"
                                                onChange={(e) =>
                                                    setToFlight(e.target.value)
                                                }
                                                value={toFlight}
                                            >
                                                <option
                                                    value=""
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Select Destination Airport
                                                </option>
                                                <option
                                                    value="nairobi"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Nairobi
                                                </option>
                                                <option
                                                    value="cairo"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Cairo
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="FlightSearchButtons">
                                        <button
                                            className="Search"
                                            onClick={handleFlightSearch}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <div className="FlightSearchDiv">
                                    <h3 className="FlightDetailText">
                                        Hotel Search
                                    </h3>

                                    <div className="FlightSearchDiv2">
                                        <div className="FlightSearchDiv2Text">
                                            <label htmlFor="Date">
                                                Country
                                            </label>
                                            <label htmlFor="Date">City</label>
                                        </div>
                                        <div className="FlightSearchDiv2DateInput">
                                            <select
                                                name="HotelCountry"
                                                id="HotelCountry"
                                                onChange={(e) =>
                                                    setHotelCountry(
                                                        e.target.value
                                                    )
                                                }
                                                value={hotelCountry}
                                            >
                                                <option
                                                    value=""
                                                    onChange={(e) => {
                                                        e.target.value;
                                                    }}
                                                >
                                                    Select Hotel Country
                                                </option>
                                                <option value="Nigeria">
                                                    Nigeria
                                                </option>
                                                <option value="France">
                                                    France
                                                </option>
                                                <option value="Kenya">
                                                    Kenya
                                                </option>
                                                <option value="Ghana">
                                                    Ghana
                                                </option>
                                            </select>
                                            <select
                                                name="HotelCity"
                                                id="HotelCity"
                                                onChange={(e) =>
                                                    setHotelCity(e.target.value)
                                                }
                                                value={hotelCity}
                                            >
                                                <option value="">
                                                    Select city
                                                </option>
                                                <option
                                                    value="lagos"
                                                    onChange={(e) => {
                                                        e.target.value;
                                                    }}
                                                >
                                                    Lagos
                                                </option>
                                                <option value="nairobi">
                                                    Nairobi
                                                </option>
                                                <option value="athens">
                                                    Athens
                                                </option>
                                                <option value="Accra">
                                                    Accra
                                                </option>
                                                <option value="Paris">
                                                    Paris
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="FlightSearchButtons">
                                        <button
                                            className="Search"
                                            onClick={handleHotelSearch}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <div className="FlightSearchDiv">
                                    <h3 className="FlightDetailText">
                                        Car Rentals Search
                                    </h3>

                                    <div className="FlightSearchDiv2">
                                        <div className="FlightSearchDiv2Text">
                                            <label htmlFor="Date">City</label>
                                        </div>
                                        <div className="FlightSearchDiv2DateInput">
                                            <select
                                                name="OriginAirport"
                                                id="OriginAirport"
                                                onChange={(e) =>
                                                    setCarCity(e.target.value)
                                                }
                                                value={carCity}
                                            >
                                                <option value="">
                                                    Select City
                                                </option>

                                                <option
                                                    value="lagos"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Lagos
                                                </option>
                                                <option
                                                    value="nairobi"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Nairobi
                                                </option>
                                                <option
                                                    value="accra"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Accra
                                                </option>
                                                <option
                                                    value="cairo"
                                                    onChange={(e) =>
                                                        e.target.value
                                                    }
                                                >
                                                    Cairo
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="FlightSearchButtons">
                                        <button
                                            className="Search"
                                            onClick={handleCarSearch}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                                <Link to='/BookingCart'>
                                    <button
                                        style={{
                                            padding: "15px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Proceed to Booking Summary
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {showPopup && (
                            <div
                                className="FlightPopUpSearch"
                                onClick={handleFlightPopUp}
                            >
                                <div
                                    className="FlightPopUpSearchBox"
                                    onClick={handlePopupBoxClick}
                                >
                                    <div className="FlightPopUpSearchHeaderText">
                                        <h3>Flight Results</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItemBox">
                                        <div className="FlightPopUpSearchItemBoxWrap">
                                            <Flight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showCar && (
                            <div
                                className="FlightPopUpSearch"
                                onClick={handleCarPopUp}
                            >
                                <div
                                    className="FlightPopUpSearchBox"
                                    onClick={handlePopupBoxClick}
                                >
                                    <div className="FlightPopUpSearchHeaderText">
                                        <h3>Car Results</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItemBox">
                                        <div className="HotelPopUpSearchItemBoxWrap">
                                            <Car />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showHotel && (
                            <div
                                className="FlightPopUpSearch"
                                onClick={handleHotelPopUp}
                            >
                                <div
                                    className="FlightPopUpSearchBox"
                                    onClick={handlePopupBoxClick}
                                >
                                    <div className="FlightPopUpSearchHeaderText">
                                        <h3>Hotel Results</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItemBox">
                                        <div className="HotelPopUpSearchItemBoxWrap">
                                            <Hotel />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
                <Footer />
            </div>
        </>
    );
};

export default Booking;

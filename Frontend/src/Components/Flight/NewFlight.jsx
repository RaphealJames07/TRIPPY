import "./NewFlights.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { flightData } from "../Redux/Features";
import { clearFlightData } from "../Redux/Features";
import { useSelector } from "react-redux";
import { bookingData } from "../Redux/Features";
import { Link } from "react-router-dom";

const NewFlight = () => {
    const [fromFlight, setFromFlight] = useState("");
    const [toFlight, setToFlight] = useState("");
    const [froFlight, setFroFlight] = useState("");
    const [troFlight, setTroFlight] = useState("");
    const [showResult, setShowResult] = useState(false);
    const dispatch = useDispatch();

    const handleFlightSearch = () => {
        // const url = `https://trippyapiv1.onrender.com/trippy/find-flights/?from=${encodeURIComponent(
        //     fromFlight
        // )}&to=${encodeURIComponent(toFlight)}backFrom=${encodeURIComponent(
        //     froFlight
        // )}&backTo=${encodeURIComponent(troFlight)}`;
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
    };

    const handleShowResult = () => {
        setShowResult(true);
        handleFlightSearch();
    };
    const flightDataToMap = useSelector(
        (state) => state.Trippy.trippyFlightData
    );

    const [showLoginModal, setShowLoginModal] = useState(false);
    const toggleModal = () => {
        setShowLoginModal(true)
    }

    const handleAddFlight = (selectedFlight) => {
        const selectedFlightData = {
            flightData: selectedFlight,
        };
        dispatch(bookingData(selectedFlightData));
        dispatch(clearFlightData())
        // alert("Flight added successfully");
    };

    return (
        <>

            <div className="NewFlightBody">
                <div className="NewFlightHead">
                    <h1>Compare Flights from different airlines</h1>
                </div>
                <div className="NewFlightContent">
                    <div className="NewFlightContentInput">
                        <h3>Go Flight</h3>
                        <select
                            name="OriginAirport"
                            id="OriginAirport"
                            onChange={(e) => setFromFlight(e.target.value)}
                            value={fromFlight}
                        >
                            <option value="" onChange={(e) => e.target.value}>
                                Select Origin Airport
                            </option>

                            <option
                                value="lagos"
                                onChange={(e) => e.target.value}
                            >
                                Lagos
                            </option>
                            <option
                                value="accra"
                                onChange={(e) => e.target.value}
                            >
                                Accra
                            </option>
                            <option
                                value="nairobi"
                                onChange={(e) => e.target.value}
                            >
                                Nairobi
                            </option>
                        </select>
                        <select
                            name="DestinationAirport"
                            id="DestinationAirport"
                            onChange={(e) => setToFlight(e.target.value)}
                            value={toFlight}
                        >
                            <option value="" onChange={(e) => e.target.value}>
                                Select Destination Airport
                            </option>
                            <option
                                value="nairobi"
                                onChange={(e) => e.target.value}
                            >
                                Nairobi
                            </option>
                            <option
                                value="cairo"
                                onChange={(e) => e.target.value}
                            >
                                Cairo
                            </option>
                            <option
                                value="lagos"
                                onChange={(e) => e.target.value}
                            >
                                Lagos
                            </option>
                        </select>
                        <button onClick={handleShowResult}>Search</button>
                    </div>
                    <div className="NewFlightContentInput">
                        <h3>Return Flight</h3>
                        <select
                            name="DestinationAirport"
                            id="DestinationAirport"
                            onChange={(e) => setFroFlight(e.target.value)}
                            value={froFlight}
                        >
                            <option value="" onChange={(e) => e.target.value}>
                                Select Destination Airport
                            </option>
                            <option
                                value="nairobi"
                                onChange={(e) => e.target.value}
                            >
                                Nairobi
                            </option>
                            <option
                                value="cairo"
                                onChange={(e) => e.target.value}
                            >
                                Cairo
                            </option>
                        </select>
                        <select
                            name="OriginAirport"
                            id="OriginAirport"
                            onChange={(e) => setTroFlight(e.target.value)}
                            value={troFlight}
                        >
                            <option value="" onChange={(e) => e.target.value}>
                                Select Origin Airport
                            </option>

                            <option
                                value="lagos"
                                onChange={(e) => e.target.value}
                            >
                                Lagos
                            </option>
                            <option
                                value="accra"
                                onChange={(e) => e.target.value}
                            >
                                Accra
                            </option>
                        </select>
                        <button onClick={handleShowResult}>Search</button>
                    </div>
                    {showResult && (
                        <div className="NewFlightContentResults">
                            {flightDataToMap?.map((item, index) => (
                                <div
                                    className="NewFlightResultItem1"
                                    key={index}
                                >
                                    <div className="NewFlightResultItem1Left">
                                        <div className="NewFlightResultItem1ImgDiv">
                                            <img
                                                src={item?.airlineLogo}
                                                alt=""
                                            />
                                        </div>
                                        <p>
                                            {item?.depatureTime} PM -{" "}
                                            {item?.arrivalTime} <br />{" "}
                                            <span>{item?.airlineName}</span>
                                        </p>
                                        <p>NonStop</p>
                                        <p>
                                            5h 20min <br />
                                            <span>LOs-NBO</span>
                                        </p>
                                    </div>
                                    <div className="NewFlightResultItem1Right">
                                        <div className="NewFlightResultItem1RightTop">
                                            <h3>
                                                ${item?.priceFlex} / per person
                                                (Flex)
                                            </h3>
                                            <p>${item?.priceStandard}</p>
                                            <p>
                                                {item?.from} to{" "}
                                                <span>{item?.to}</span>
                                            </p>
                                        </div>

                                        <div className="NewFlightResultItem1RightDown">

                                        <button onClick={toggleModal}>Add Flight</button>


                                        </div>
                                    </div>
                                    {showLoginModal ? (
                                        <div
                                            className="modal-overlay"
                                            style={{
                                                position: "fixed",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div
                                                className="modal-content"
                                                style={{
                                                    backgroundColor: "white",
                                                    width: "600px",
                                                    height: "200px",
                                                    borderRadius: "8px",
                                                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                                    textAlign: "center",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    flexDirection: "column",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <h2>
                                                    Flight Selected are you sure you want to add to booking
                                                </h2>
                                                <button
                                                    onClick={() => setShowLoginModal(false)}
                                                    style={{ padding: "15px", cursor: "pointer" }}
                                                >
                                                    Continue Viewing
                                                </button>
                                                <button
                                                    style={{ padding: "15px", cursor: "pointer" }}
                                                    onClick={() => {
                                                        handleAddFlight(item)
                                                        setShowLoginModal(false);
                                                    }}
                                                >
                                                    Add to Booking
                                                </button>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>

                            ))}
                        </div>
                    )}
                </div>
                <button
                    className="CancelSearchBtn"
                    onClick={() => dispatch(clearFlightData())}
                >
                    Cancel Search
                </button>
                <Link to='/BookingCar'>
                <button>
                    Proceed
                </button>
                </Link>
            </div>
        </>
    );
};

export default NewFlight;

import "./NewFlight.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { flightData } from "../Redux/Features";

const NewFlight = () => {
    const [fromFlight, setFromFlight] = useState("");
    const [toFlight, setToFlight] = useState("");
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
    };

    return (
        <>
            <div className="NewFlightBody">
                <div className="NewFlightHead">
                    <h1>Compare Flights from different airlines</h1>
                </div>
                <div className="NewFlightContent">
                    <div className="NewFlightContentInput">
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
                        </select>
                        <button onClick={handleFlightSearch}>Search</button>
                    </div>
                    <div className="NewFlightContentResults">
                        <div className="NewFlightResultItem1">
                            <div className="NewFlightResultItem1Left">
                               <div className="NewFlightResultItem1ImgDiv">
                               <img src="" alt="" />
                               </div>
                                <p>
                                    10:45 pm - 6:05 <br /> <span>Kenya Airways</span>
                                </p>
                                <p>NonStop</p>
                                <p>
                                    5h 20min  <br /><span>LOs-NBO</span>
                                </p>
                            </div>
                            <div className="NewFlightResultItem1Right">
                                <div className="NewFlightResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Economy</p>
                                </div>

                                <div className="NewFlightResultItem1RightDown">
                                    <button>Add Flight</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewFlightResultItem1">
                            <div className="NewFlightResultItem1Left">
                               <div className="NewFlightResultItem1ImgDiv">
                               <img src="" alt="" />
                               </div>
                                <p>
                                    10:45 pm - 6:05 <br /> <span>Kenya Airways</span>
                                </p>
                                <p>NonStop</p>
                                <p>
                                    5h 20min  <br /><span>LOs-NBO</span>
                                </p>
                            </div>
                            <div className="NewFlightResultItem1Right">
                                <div className="NewFlightResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Economy</p>
                                </div>

                                <div className="NewFlightResultItem1RightDown">
                                    <button>Add Flight</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewFlightResultItem1">
                            <div className="NewFlightResultItem1Left">
                               <div className="NewFlightResultItem1ImgDiv">
                               <img src="" alt="" />
                               </div>
                                <p>
                                    10:45 pm - 6:05 <br /> <span>Kenya Airways</span>
                                </p>
                                <p>NonStop</p>
                                <p>
                                    5h 20min  <br /><span>LOs-NBO</span>
                                </p>
                            </div>
                            <div className="NewFlightResultItem1Right">
                                <div className="NewFlightResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Economy</p>
                                </div>

                                <div className="NewFlightResultItem1RightDown">
                                    <button>Add Flight</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewFlightResultItem1">
                            <div className="NewFlightResultItem1Left">
                               <div className="NewFlightResultItem1ImgDiv">
                               <img src="" alt="" />
                               </div>
                                <p>
                                    10:45 pm - 6:05 <br /> <span>Kenya Airways</span>
                                </p>
                                <p>NonStop</p>
                                <p>
                                    5h 20min  <br /><span>LOs-NBO</span>
                                </p>
                            </div>
                            <div className="NewFlightResultItem1Right">
                                <div className="NewFlightResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Economy</p>
                                </div>

                                <div className="NewFlightResultItem1RightDown">
                                    <button>Add Flight</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewFlightResultItem1">
                            <div className="NewFlightResultItem1Left">
                               <div className="NewFlightResultItem1ImgDiv">
                               <img src="" alt="" />
                               </div>
                                <p>
                                    10:45 pm - 6:05 <br /> <span>Kenya Airways</span>
                                </p>
                                <p>NonStop</p>
                                <p>
                                    5h 20min  <br /><span>LOs-NBO</span>
                                </p>
                            </div>
                            <div className="NewFlightResultItem1Right">
                                <div className="NewFlightResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Economy</p>
                                </div>

                                <div className="NewFlightResultItem1RightDown">
                                    <button>Add Flight</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewFlightResultItem1">
                            <div className="NewFlightResultItem1Left">
                               <div className="NewFlightResultItem1ImgDiv">
                               <img src="" alt="" />
                               </div>
                                <p>
                                    10:45 pm - 6:05 <br /> <span>Kenya Airways</span>
                                </p>
                                <p>NonStop</p>
                                <p>
                                    5h 20min  <br /><span>LOs-NBO</span>
                                </p>
                            </div>
                            <div className="NewFlightResultItem1Right">
                                <div className="NewFlightResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Economy</p>
                                </div>

                                <div className="NewFlightResultItem1RightDown">
                                    <button>Add Flight</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="CancelSearchBtn">Cancel Search</button>
            </div>
        </>
    );
};

export default NewFlight;

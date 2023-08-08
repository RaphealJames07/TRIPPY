import { useState } from "react";
import "./Flight.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPlaneDeparture } from "react-icons/fa";

const Flight = () => {
    const [showPopup, setShowPopup] = useState(false);

    // const [showPopup, setShowPopup] = useState(false);

    const handlePopupClick = () => {
        setShowPopup(false);
    };

    const handlePopupBoxClick = (event) => {
        // Prevent the click event from propagating to the parent div
        event.stopPropagation();
    };
    
    return (
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
                    <h3 className="FlightDetailText">Flight Details</h3>
                    <div className="FlightSearchDiv">
                        <div className="FlightSearchDiv1">
                            <div className="FlightSearchDiv1Text">
                                <label htmlFor="Date">Text</label>
                            </div>
                            <div className="FlightSearchDiv1DateInput">
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="FlightSearchDiv2">
                            <div className="FlightSearchDiv2Text">
                                <label htmlFor="Date">Text</label>
                                <label htmlFor="Date">Text</label>
                            </div>
                            <div className="FlightSearchDiv2DateInput">
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="FlightSearchDiv2">
                            <div className="FlightSearchDiv2Text">
                                <label htmlFor="Date">Text</label>
                                <label htmlFor="Date">Text</label>
                            </div>
                            <div className="FlightSearchDiv2DateInput">
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="FlightSearchDiv2">
                            <div className="FlightSearchDiv2Text">
                                <label htmlFor="Date">Text</label>
                                <label htmlFor="Date">Text</label>
                            </div>
                            <div className="FlightSearchDiv2DateInput">
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>

                        <div className="FlightSearchButtons">
                            <button className="Skip">Skip</button>
                            <button className="Search" onClick={()=>setShowPopup(true)}>
                            Search
                        </button>
                        </div>
                    </div>
                </div>
                    {showPopup && (
                        <div className="FlightPopUpSearch" onClick={handlePopupClick}>
                    <div className="FlightPopUpSearchBox" onClick={handlePopupBoxClick}>
                        <div className="FlightPopUpSearchHeaderText">
                            <h3>Search Results</h3>
                        </div>
                        <div className="FlightPopUpSearchItemBox">
                            <div className="FlightPopUpSearchItemBoxWrap">
                                <div className="FlightPopUpSearchItem1">
                                    <div className="FlightPopUpSearchItem1A">
                                        <CiLocationOn />
                                        <FaPlaneDeparture />
                                        <CiLocationOn />
                                    </div>
                                    <div className="FlightPopUpSearchItem1B">
                                        <h3>Lagos NG</h3>
                                        <h3>Athens GR</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItem1C">
                                        <p>21st Jan 2023</p>
                                        <p>21st Jan 2023</p>
                                    </div>
                                    <div className="FlightPopUpSearchItem1D">
                                        <h3>$200</h3>
                                        <button>Add</button>
                                    </div>
                                </div>
                                <div className="FlightPopUpSearchItem1">
                                    <div className="FlightPopUpSearchItem1A">
                                        <CiLocationOn />
                                        <FaPlaneDeparture />
                                        <CiLocationOn />
                                    </div>
                                    <div className="FlightPopUpSearchItem1B">
                                        <h4>Lagos NG</h4>
                                        <h3>Athens GR</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItem1C">
                                        <p>21st Jan 2023</p>
                                        <p>21st Jan 2023</p>
                                    </div>
                                    <div className="FlightPopUpSearchItem1D">
                                        <h3>$200</h3>
                                        <button>Add</button>
                                    </div>
                                </div>
                                <div className="FlightPopUpSearchItem1">
                                    <div className="FlightPopUpSearchItem1A">
                                        <CiLocationOn />
                                        <FaPlaneDeparture />
                                        <CiLocationOn />
                                    </div>
                                    <div className="FlightPopUpSearchItem1B">
                                        <h4>Lagos NG</h4>
                                        <h3>Athens GR</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItem1C">
                                        <p>21st Jan 2023</p>
                                        <p>21st Jan 2023</p>
                                    </div>
                                    <div className="FlightPopUpSearchItem1D">
                                        <h3>$200</h3>
                                        <button>Add</button>
                                    </div>
                                </div>
                                <div className="FlightPopUpSearchItem1">
                                    <div className="FlightPopUpSearchItem1A">
                                        <CiLocationOn />
                                        <FaPlaneDeparture />
                                        <CiLocationOn />
                                    </div>
                                    <div className="FlightPopUpSearchItem1B">
                                        <h4>Lagos NG</h4>
                                        <h3>Athens GR</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItem1C">
                                        <p>21st Jan 2023</p>
                                        <p>21st Jan 2023</p>
                                    </div>
                                    <div className="FlightPopUpSearchItem1D">
                                        <h3>$200</h3>
                                        <button>Add</button>
                                    </div>
                                </div>
                                <div className="FlightPopUpSearchItem1">
                                    <div className="FlightPopUpSearchItem1A">
                                        <CiLocationOn />
                                        <FaPlaneDeparture />
                                        <CiLocationOn />
                                    </div>
                                    <div className="FlightPopUpSearchItem1B">
                                        <h4>Lagos NG</h4>
                                        <h3>Athens GR</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItem1C">
                                        <p>21st Jan 2023</p>
                                        <p>21st Jan 2023</p>
                                    </div>
                                    <div className="FlightPopUpSearchItem1D">
                                        <h3>$200</h3>
                                        <button>Add</button>
                                    </div>
                                </div>
                                <div className="FlightPopUpSearchItem1">
                                    <div className="FlightPopUpSearchItem1A">
                                        <CiLocationOn />
                                        <FaPlaneDeparture />
                                        <CiLocationOn />
                                    </div>
                                    <div className="FlightPopUpSearchItem1B">
                                        <h4>Lagos NG</h4>
                                        <h3>Athens GR</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItem1C">
                                        <p>21st Jan 2023</p>
                                        <p>21st Jan 2023</p>
                                    </div>
                                    <div className="FlightPopUpSearchItem1D">
                                        <h3>$200</h3>
                                        <button>Add</button>
                                    </div>
                                </div>
                                <div className="FlightPopUpSearchItem1">
                                    <div className="FlightPopUpSearchItem1A">
                                        <CiLocationOn />
                                        <FaPlaneDeparture />
                                        <CiLocationOn />
                                    </div>
                                    <div className="FlightPopUpSearchItem1B">
                                        <h4>Lagos NG</h4>
                                        <h3>Athens GR</h3>
                                    </div>
                                    <div className="FlightPopUpSearchItem1C">
                                        <p>21st Jan 2023</p>
                                        <p>21st Jan 2023</p>
                                    </div>
                                    <div className="FlightPopUpSearchItem1D">
                                        <h3>$200</h3>
                                        <button>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                
            </div>
        </>
    );
};

export default Flight;

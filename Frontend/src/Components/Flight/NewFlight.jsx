import "./NewFlights.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { flightData } from "../Redux/Features";
import { clearFlightData } from "../Redux/Features";
import { bookingData } from "../Redux/Features";
import { Link } from "react-router-dom";
import HeaderLone from "../Header/HeaderLone";
import Footer from "../Footer/Footer";
import { Button, Modal, Select } from "antd";

const {Option} = Select;

const FlightDetailsModal = ({ flight, isVisible, onClose, onAddBooking }) => (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      destroyOnClose
    >
      <div className="modal-content">
        <h2>Flight Selected: {flight.airlineName}</h2>
        <p>From: {flight.from}</p>
        <p>To: {flight.to}</p>
        <p>Price Flex: {flight.priceFlex}</p>
        <p>Price Standard: {flight.priceStandard}</p>
        <Button onClick={onClose}>Continue Viewing</Button>
        <Button onClick={onAddBooking}>Add to Booking</Button>
      </div>
    </Modal>
  );

const NewFlight = () => {
    const [fromFlight, setFromFlight] = useState("");
  const [toFlight, setToFlight] = useState("");
  const dispatch = useDispatch();
  const [showFlightResult, setShowFlightResult] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showFlightModal, setShowFlightModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);



    const handleFlightSearch = () => {
        const url = `https://trippyapiv1.onrender.com/trippy/find-flights/?from=${encodeURIComponent(
            fromFlight
        )}&to=${encodeURIComponent(toFlight)}`;
    
        axios
            .get(url)
            .then((res) => {
                dispatch(flightData(res.data.flights));
                setSearchResults(res.data.flights);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    

    const handleShowResult = () => {
        setIsLoading(true);
    setShowFlightResult(true);
    handleFlightSearch();
    };

    console.log(searchResults);
   
    const handleAddFlight = (flight) => {
    setSelectedFlight(flight);
    setShowFlightModal(true);
  };

  const handleConfirmBooking = () => {
    dispatch(bookingData({ flightData: selectedFlight }));
    setShowFlightModal(false);
  };

    return (
        <>
       

            <div className="NewFlightBody">
                <HeaderLone />
                <div className="NewFlightHead">
                    <h1>Compare Flights from different airlines</h1>
                </div>
                
                <div className="NewFlightContent2">
                <div className="NewFlightContent2Select">
                                <div className="NewFlightContent2SelectDiv1">
                                    <div className="NewFlightSearchSelectsDiv">
                                        <label htmlFor="">Travel Ticket</label>
                                        <Select
                                            placeholder="Select Origin Airport"
                                            onChange={(value) =>
                                                setFromFlight(value)
                                            }
                                            value={fromFlight}
                                            className="Tuface"
                                        >
                                            <Option
                                                value=""
                                                onChange={(e) => e.target.value}
                                            >
                                                From
                                            </Option>
                                            <Option
                                                value="lagos"
                                                onChange={(e) => e.target.value}
                                            >
                                                Lagos
                                            </Option>
                                            <Option
                                                value="accra"
                                                onChange={(e) => e.target.value}
                                            >
                                                Accra
                                            </Option>
                                            <Option
                                                value="nairobi"
                                                onChange={(e) => e.target.value}
                                            >
                                                Nairobi
                                            </Option>
                                        </Select>
                                        <label htmlFor="">
                                            Flight destination
                                        </label>
                                        <Select
                                            placeholder="Select Destination Airport"
                                            onChange={(value) =>
                                                setToFlight(value)
                                            }
                                            value={toFlight}
                                            className="Tuface"
                                        >
                                            <Option
                                                value=""
                                                onChange={(e) => e.target.value}
                                            >
                                                To
                                            </Option>
                                            <Option
                                                value="nairobi"
                                                onChange={(e) => e.target.value}
                                            >
                                                Nairobi
                                            </Option>
                                            <Option
                                                value="cairo"
                                                onChange={(e) => e.target.value}
                                            >
                                                Cairo
                                            </Option>
                                            <Option
                                                value="lagos"
                                                onChange={(e) => e.target.value}
                                            >
                                                Lagos
                                            </Option>
                                        </Select>
                                    </div>
                                    <div className="ThreeSearchSelectsBtn">
                                        <Button
                                            type="primary"
                                            onClick={handleShowResult}
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>
                                <div className="NewFlightContent2SelectDiv1">
                                    <div className="NewFlightSearchSelectsDiv">
                                        <label htmlFor="">Return Ticket</label>
                                        <Select
                                            placeholder="Select Origin Airport"
                                            onChange={(value) =>
                                                setFromFlight(value)
                                            }
                                            value={fromFlight}
                                            className="Tuface"
                                        >
                                            <Option value="">From</Option>
                                            <Option
                                                value="lagos"
                                                onChange={(e) => e.target.value}
                                            >
                                                Lagos
                                            </Option>
                                            <Option
                                                value="accra"
                                                onChange={(e) => e.target.value}
                                            >
                                                Accra
                                            </Option>
                                            <Option
                                                value="nairobi"
                                                onChange={(e) => e.target.value}
                                            >
                                                Nairobi
                                            </Option>
                                        </Select>
                                        <label htmlFor="">
                                            Flight destination
                                        </label>
                                        <Select
                                            placeholder="Select Destination Airport"
                                            onChange={(value) =>
                                                setToFlight(value)
                                            }
                                            value={toFlight}
                                            className="Tuface"
                                        >
                                            <Option value="">To</Option>
                                            <Option
                                                value="nairobi"
                                                onChange={(e) => e.target.value}
                                            >
                                                Nairobi
                                            </Option>
                                            <Option
                                                value="cairo"
                                                onChange={(e) => e.target.value}
                                            >
                                                Cairo
                                            </Option>
                                            <Option
                                                value="lagos"
                                                onChange={(e) => e.target.value}
                                            >
                                                Lagos
                                            </Option>
                                        </Select>
                                    </div>
                                    <div className="ThreeSearchSelectsBtn">
                                        <Button
                                            type="primary"
                                            onClick={handleShowResult}
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="ThreeSearchFlightResults">
                                {showFlightResult && (
                                    <>
                                        {searchResults.map((item, index) => (
                                            <div
                                                className="ThreeSearchFlightResultsItem1"
                                                key={index}
                                            >
                                                <div className="ThreeSearchFlightResultsItem1ImgDiv">
                                                    <img
                                                        src={item?.airlineLogo}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ThreeSearchFlightResultsItem1Details">
                                                    <p>
                                                        Airline Name:{" "}
                                                        {item?.airlineName}
                                                    </p>
                                                    <p
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        From: {item?.from}
                                                        <span>
                                                            To: {item?.to}
                                                        </span>
                                                    </p>
                                                    <p
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        Price Flex:{" "}
                                                        {item?.priceFlex}
                                                        <span>
                                                            Price Standard:{" "}
                                                            {
                                                                item?.priceStandard
                                                            }
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="ThreeSearchFlightResultsItem1Btn">
                                                    <Button
                                                        type="primary"
                                                        onClick={() =>
                                                            handleAddFlight(
                                                                selectedFlight
                                                            )
                                                        }
                                                    >{`Add Flight`}</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                            
                            {/* {showLoginModal ? (
                                        <div
                                            className="modal-overlay"
                                            style={{
                                                position: "fixed",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor:
                                                    "rgba(0, 0, 0, 0.5)",
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
                                                    boxShadow:
                                                        "0 0 10px rgba(0, 0, 0, 0.3)",
                                                    textAlign: "center",
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                    flexDirection: "column",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <h2>
                                                    Flight Selected are you sure
                                                    you want to add to booking
                                                </h2>
                                                <button
                                                    onClick={() =>
                                                        setShowLoginModal(false)
                                                    }
                                                    style={{
                                                        padding: "15px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Continue Viewing
                                                </button>
                                                <button
                                                    style={{
                                                        padding: "15px",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() => {
                                                        handleAddFlight(selectedFlight);
                                                        setShowLoginModal(
                                                            false
                                                        );
                                                    }}
                                                >
                                                    Add to Booking
                                                </button>
                                            </div>
                                        </div>
                                    ) : null} */}
                </div>
                <div className="NewFlightDownBtns">
                    <button
                        className="CancelSearchBtn"
                        onClick={() => dispatch(clearFlightData())}
                    >
                        Cancel Search
                    </button>
                    <Link to="/BookingCar" className="NewFlightBtnProceed">
                        <button>Proceed</button>
                    </Link>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewFlight;

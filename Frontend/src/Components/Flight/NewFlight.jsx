import {Button, Select, Modal} from "antd";
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import "./NewFlights.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {bookingData} from "../Redux/Features";
const {Option} = Select;

const NewFlight = () => {
    const [fromFlightOneWay, setFromFlightOneWay] = useState("");
    const [toFlightOneWay, setToFlightOneWay] = useState("");
    const [fromFlightReturn, setFromFlightReturn] = useState("");
    const [toFlightReturn, setToFlightReturn] = useState("");

    const [flightDataRes, setFlightDataRes] = useState([]);
    const [searchResultVisible, setSearchResultVisible] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);

    const dispatch = useDispatch();

    const handleFlightSearch = (from, to) => {
        console.log("Search clicked");
        const url = `https://trippyapiv1.onrender.com/trippy/find-flights/?from=${encodeURIComponent(
            from
        )}&to=${encodeURIComponent(to)}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setFlightDataRes(res.data.flights);
                showSearchResult();
            })
            .catch((err) => {
                console.log(err);
                showError();
            });
    };

    const showSearchResult = () => {
        setSearchResultVisible(true);
    };

    const showError = () => {
        setErrorVisible(true);
    };

    const handleShowResult = () => {
        handleFlightSearch(fromFlightOneWay, toFlightOneWay);
    };
    const handleShowResultReturn = () => {
        handleFlightSearch(fromFlightReturn, toFlightReturn);
    };

    const handleAddFlight = (selectedFlight) => {
        const selectedFlightData = {
            flightData: selectedFlight,
        };
        dispatch(bookingData(selectedFlightData));
    };

    console.log(flightDataRes);

    return (
        <>
            <div className="NewFlightBody">
                <HeaderLone />
                <div className="NewFlightHead">
                    <h1>Search For Flights On the Go</h1>
                </div>

                <div className="NewFlightContent2">
                    <div className="NewFlightSelectDiv">
                        <div className="NewFlightSelects">
                            <div className="NewFlightSelectsDiv">
                                <label htmlFor="">One-Way Ticket</label>
                                <Select
                                    placeholder="Select Origin Airport"
                                    onChange={(value) =>
                                        setFromFlightOneWay(value)
                                    }
                                    value={fromFlightOneWay}
                                    className="Tuface"
                                >
                                    <Option value="">From</Option>
                                    <Option value="lagos">Lagos</Option>
                                    <Option value="accra">Accra</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                </Select>
                                <label htmlFor="">Flight destination</label>
                                <Select
                                    placeholder="Select Destination Airport"
                                    onChange={(value) =>
                                        setToFlightOneWay(value)
                                    }
                                    value={toFlightOneWay}
                                    className="Tuface"
                                >
                                    <Option value="">To</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                    <Option value="cairo">Cairo</Option>
                                    <Option value="lagos">Lagos</Option>
                                </Select>
                            </div>
                            <div className="NewFlightSelectsBtn">
                                <Button
                                    type="primary"
                                    onClick={handleShowResult}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                        <div className="NewFlightSelects">
                            <div className="NewFlightSelectsDiv">
                                <label htmlFor="">Return Ticket</label>
                                <Select
                                    placeholder="Select Origin Airport"
                                    onChange={(value) =>
                                        setFromFlightReturn(value)
                                    }
                                    value={fromFlightReturn}
                                    className="Tuface"
                                >
                                    <Option value="">From</Option>
                                    <Option value="lagos">Lagos</Option>
                                    <Option value="accra">Accra</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                </Select>
                                <label htmlFor="">Flight destination</label>
                                <Select
                                    placeholder="Select Destination Airport"
                                    onChange={(value) =>
                                        setToFlightReturn(value)
                                    }
                                    value={toFlightReturn}
                                    className="Tuface"
                                >
                                    <Option value="">To</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                    <Option value="cairo">Cairo</Option>
                                    <Option value="lagos">Lagos</Option>
                                </Select>
                            </div>
                            <div className="NewFlightSelectsBtn">
                                <Button
                                    type="primary"
                                    onClick={handleShowResultReturn}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>

                    <Modal
                        title="Flight Search Results"
                        visible={searchResultVisible}
                        onCancel={() => setSearchResultVisible(false)}
                        footer={null}
                    >
                        <>
                        <div className="ThreeSearchFlightResults">

                            {flightDataRes.map((item, index) => (
                                <div
                                    className="NewFlightResultsItem1"
                                    key={index}
                                >
                                    <div className="NewFlightResultsItem1ImgDiv">
                                        <img src={item?.airlineLogo} alt="" />
                                    </div>
                                    <div className="NewFlightResultsItem1Details">
                                        <p>Airline Name: {item?.airlineName}</p>
                                        <p
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            From: {item?.from}
                                            <span>To: {item?.to}</span>
                                        </p>
                                        <p
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            Price Flex: {item?.priceFlex}
                                            <span>
                                                Price Standard:{" "}
                                                {item?.priceStandard}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="NewFlightResultsItem1Btn">
                                        <Button
                                            type="primary"
                                            onClick={() =>
                                                handleAddFlight(item)
                                            }
                                        >{`Add`}</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </>
                    </Modal>

                    <Modal
                        title="Error"
                        visible={errorVisible}
                        onCancel={() => setErrorVisible(false)}
                        footer={[
                            <Button
                                key="ok"
                                type="primary"
                                onClick={() => setErrorVisible(false)}
                            >
                                OK
                            </Button>,
                        ]}
                    >
                        An error occurred while searching for flights. Please
                        try again later.
                    </Modal>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewFlight;

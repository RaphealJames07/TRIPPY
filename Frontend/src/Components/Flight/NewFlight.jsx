import {Button, Select, Modal} from "antd";
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import "./NewFlights.css";
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {bookingData} from "../Redux/Features";
import {useNavigate} from "react-router";
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
    const nav = useNavigate();

    const handleNavToHotel = () => {
        nav("/NewHotel");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const [addSucc, setAddSucc] = useState(false)

    const handleAddFlight = (selectedFlight) => {
        const selectedFlightData = {
            flightData: selectedFlight,
        };
        dispatch(bookingData(selectedFlightData));
        setAddSucc(true)
        setSearchResultVisible(false)
    };

    console.log(flightDataRes);

    const handleBack = () => {
        nav(-1);
    };

    return (
        <>
            <div className="NewFlightBody">
                <HeaderLone />
                <div className="NewFlightHead">
                    <h1>Search For Flights</h1>
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
                                    size="large"
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
                                    size="large"
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
                                    size="large"
                                >
                                    <Option value="">From</Option>
                                    <Option value="lagos">Lagos</Option>
                                    <Option value="accra">Accra</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                    <Option value="limpopo">Limpopo</Option>
                                    <Option value="cairo">Cairo</Option>
                                </Select>
                                <label htmlFor="">Flight destination</label>
                                <Select
                                    placeholder="Select Destination Airport"
                                    onChange={(value) =>
                                        setToFlightReturn(value)
                                    }
                                    value={toFlightReturn}
                                    className="Tuface"
                                    size="large"
                                >
                                    <Option value="">To</Option>
                                    <Option value="lagos">Lagos</Option>
                                    <Option value="accra">Accra</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                    <Option value="cairo">Cairo</Option>
                                    <Option value="limpopo">Limpopo</Option>
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
                    <div className="NewFlightSelectDivMobile">
                        <div className="NewFlightSelectsMobile">
                            <div className="NewFlightSelectsDivMobile">
                                <div className="NewFlightSelectsDivMobile1">
                                <label htmlFor="">One-Way Ticket</label>
                                <Select
                                    placeholder="Select Origin Airport"
                                    onChange={(value) =>
                                        setFromFlightOneWay(value)
                                    }
                                    value={fromFlightOneWay}
                                    className="TufaceMobile"
                                    size="large"
                                >
                                    <Option value="">From</Option>
                                    <Option value="lagos">Lagos</Option>
                                    <Option value="accra">Accra</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                    <Option value="cairo">Cairo</Option>
                                    <Option value="limpopo">Limpopo</Option>
                                </Select>
                                </div>
                                <div className="NewFlightSelectsDivMobile1">
                                <label htmlFor="">Flight destination</label>
                                <Select
                                    placeholder="Select Destination Airport"
                                    onChange={(value) =>
                                        setToFlightOneWay(value)
                                    }
                                    value={toFlightOneWay}
                                    className="TufaceMobile"
                                    size="large"
                                >
                                    <Option value="">To</Option>
                                    <Option value="lagos">Lagos</Option>
                                    <Option value="accra">Accra</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                    <Option value="limpopo">Limpopo</Option>
                                    <Option value="cairo">Cairo</Option>
                                </Select>
                                </div>
                            </div>
                            <div className="NewFlightSelectsBtnMobile">
                                <Button
                                    type="primary"
                                    onClick={handleShowResult}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                        <div className="NewFlightSelectsMobile">
                            <div className="NewFlightSelectsDivMobile">
                                <div className="NewFlightSelectsDivMobile1">
                                <label htmlFor="">Return Ticket</label>
                                <Select
                                    placeholder="Select Origin Airport"
                                    onChange={(value) =>
                                        setFromFlightReturn(value)
                                    }
                                    value={fromFlightReturn}
                                    className="TufaceMobile"
                                    size="large"
                                >
                                    <Option value="">From</Option>
                                    <Option value="lagos">Lagos</Option>
                                    <Option value="accra">Accra</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                </Select>
                                </div>
                                <div className="NewFlightSelectsDivMobile1">
                                <label htmlFor="">Flight destination</label>
                                <Select
                                    placeholder="Select Destination Airport"
                                    onChange={(value) =>
                                        setToFlightReturn(value)
                                    }
                                    value={toFlightReturn}
                                    className="TufaceMobile"
                                    size="large"
                                >
                                    <Option value="">To</Option>
                                    <Option value="nairobi">Nairobi</Option>
                                    <Option value="cairo">Cairo</Option>
                                    <Option value="lagos">Lagos</Option>
                                </Select>
                                </div>
                            </div>
                            <div className="NewFlightSelectsBtnMobile">
                                <Button
                                    type="primary"
                                    onClick={handleShowResultReturn}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="NewFlightBtns">
                        <Button type="default" size="large" onClick={handleBack}>
                            Back
                        </Button>
                        <Button
                            type="primary"
                            size="large"
                            onClick={handleNavToHotel}
                        >
                            Book Hotel
                        </Button>
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
                                            <img
                                                src={item?.airlineLogo}
                                                alt=""
                                            />
                                        </div>
                                        <div className="NewFlightResultsItem1Details">
                                            <div
                                                style={{display: "flex"}}
                                                className="NewFlightResultDetailsFLexed"
                                            >
                                                <p>Airline Name:</p>
                                                <span>{item?.airlineName}</span>
                                            </div>
                                            <div
                                                style={{display: "flex"}}
                                                className="NewFlightResultDetailsFLexed"
                                            >
                                                <p>From: {item?.from}</p>
                                                <span>To: {item?.to}</span>
                                            </div>

                                            <div
                                                style={{display: "flex"}}
                                                className="NewFlightResultDetailsFLexed"
                                            >
                                                <p>Price Flex:</p>
                                                <span>{item?.priceFlex}</span>
                                            </div>
                                            <div
                                                style={{display: "flex"}}
                                                className="NewFlightResultDetailsFLexed"
                                            >
                                                <p>Price Standard:</p>
                                                <span>
                                                    {item?.priceStandard}
                                                </span>
                                            </div>
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
                        No Results for flights. Please
                        try again later.
                    </Modal>
                    <Modal
                        title="Successful!"
                        visible={addSucc}
                        onCancel={() => setAddSucc(false)}
                        footer={[
                            <Button
                                key="ok"
                                type="primary"
                                onClick={() => setAddSucc(false)}
                            >
                                OK
                            </Button>,
                        ]}
                    >
                        Flight Added Successfully
                    </Modal>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewFlight;

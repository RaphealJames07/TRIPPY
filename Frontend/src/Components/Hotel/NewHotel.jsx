import {Button, Select, Modal} from "antd";
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {bookingData} from "../Redux/Features";
const {Option} = Select;

const NewFlight = () => {
    const dispatch = useDispatch()
    const [hotelCity, setHotelCity] = useState("");
    const [hotelCountry, setHotelCountry] = useState("");
    const [searchResultVisible, setSearchResultVisible] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);
    const [hotelDataRes, setHotelDataRes] = useState([]);


    const handleHotelSearch = () => {
        console.log("Searching Hotel");
        const url = `https://trippyapiv1.onrender.com/trippy//find-hotels/?city=${encodeURIComponent(
            hotelCity
        )}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setHotelDataRes(res.data.hotels);
                showSearchResult();
            })
            .catch((err) => {
                console.log(err);
                showError()
            });
    };

    const handleShowHotelResult = () => {
        handleHotelSearch()
    };

    const showSearchResult = () => {
        setSearchResultVisible(true);
    };

    const showError = () => {
        setErrorVisible(true);
    };
    

    const handleAddHotel = (selectedHotel) => {
        const selectedHotelData = {
            hotelData: selectedHotel,
        };
        dispatch(bookingData(selectedHotelData));
        // alert("Flight added successfully");
    };

    return (
        <>
            <div className="NewFlightBody">
                <HeaderLone />
                <div className="NewFlightHead">
                    <h1>Search For Hotels On the Go</h1>
                </div>

                <div className="NewFlightContent2">
                <div className="ThreeSearchFlightSelectDiv">
                                <div className="ThreeSearchSelects">
                                    <div className="ThreeSearchSelectsDiv">
                                        <label htmlFor="">Hotel Country</label>
                                        <Select
                                            placeholder="Select Origin Airport"
                                            onChange={(value) =>
                                                setHotelCountry(value)
                                            }
                                            value={hotelCountry}
                                            className="Tuface"
                                        >
                                            <Option value="">Select</Option>
                                            <Option
                                                value="nigeria"
                                                onChange={(e) => e.target.value}
                                            >
                                                Nigeria
                                            </Option>
                                            <Option
                                                value="ghana"
                                                onChange={(e) => e.target.value}
                                            >
                                                Ghana
                                            </Option>
                                            <Option
                                                value="kenya"
                                                onChange={(e) => e.target.value}
                                            >
                                                Kenya
                                            </Option>
                                        </Select>
                                        <label htmlFor="">Hotel City</label>
                                        <Select
                                            placeholder="Select Hotel Country"
                                            onChange={(value) =>
                                                setHotelCity(value)
                                            }
                                            value={hotelCity}
                                            className="Tuface"
                                        >
                                            <Option value="">Select</Option>
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
                                            onClick={handleShowHotelResult}
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
                               
                                        {hotelDataRes.map((item, index) => (
                                            <div
                                                className="ThreeSearchFlightResultsItem1"
                                                key={index}
                                            >
                                                <div className="ThreeSearchFlightResultsItem1ImgDiv">
                                                    <img
                                                        src={item?.images[0]}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ThreeSearchFlightResultsItem1Details">
                                                    <p>
                                                        Airline Name:{" "}
                                                        {item?.hotelName}
                                                    </p>
                                                    <p
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        City {item?.city}
                                                        <span>
                                                            Country:{" "}
                                                            {item?.country}
                                                        </span>
                                                    </p>
                                                    <p
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        Price Per Night:{" "}
                                                        {item?.pricePerNight}
                                                        <span>
                                                            Max Per Room:{" "}
                                                            {item?.maxPerRoom}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="ThreeSearchFlightResultsItem1Btn">
                                                    <Button
                                                        type="primary"
                                                        onClick={() =>
                                                            handleAddHotel(item)
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

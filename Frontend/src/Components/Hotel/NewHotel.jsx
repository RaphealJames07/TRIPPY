import {Button, Select, Modal} from "antd";
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {bookingData} from "../Redux/Features";
const {Option} = Select;
import "./NewHotel.css";
import {useNavigate} from "react-router";

const NewHotel = () => {
    const dispatch = useDispatch();
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
                showError();
            });
    };

    const handleShowHotelResult = () => {
        handleHotelSearch();
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

    const nav = useNavigate();

    const handleNavToCar = () => {
        nav("/NewCar");
    };

    const handleBack = () => {
        nav(-1);
    };

    return (
        <>
            <div className="NewHotelBody">
                <HeaderLone />
                <div className="NewHotelHead">
                    <h1>Search For Hotels</h1>
                </div>

                <div className="NewHotelContent">
                    <div className="NewHotelSelectDiv Hotel">
                        <div className="NewHotelSelectsHotel">
                            <div className="NewHotelSelectsDiv">
                                <div className="NewFlightSelectsDivMobile1">
                                <label htmlFor="">Hotel Country</label>
                                <Select
                                    placeholder="Select Origin Airport"
                                    onChange={(value) => setHotelCountry(value)}
                                    value={hotelCountry}
                                    className="Tuface"
                                    size="large"
                                    style={{width:'80%'}}
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
                                </div>
                                <div className="NewFlightSelectsDivMobile1">
                                <label htmlFor="">Hotel City</label>
                                <Select
                                    placeholder="Select Hotel Country"
                                    onChange={(value) => setHotelCity(value)}
                                    value={hotelCity}
                                    className="Tuface"
                                    size="large"
                                    style={{width:'80%'}}
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
                            </div>
                            <div className="NewHotelSelectsBtn">
                                <Button
                                    type="primary"
                                    onClick={handleShowHotelResult}
                                    size="large"
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="NewHotelSelectDiv Big Hotel">
                        <div className="NewHotelSelectsHotel Big">
                            <div className="NewHotelSelectsDiv Big">
                                <div className="NewFlightSelectsDivMobile1 Big">
                                <label htmlFor="">Hotel Country</label>
                                <Select
                                    placeholder="Select Origin Airport"
                                    onChange={(value) => setHotelCountry(value)}
                                    value={hotelCountry}
                                    className="Tuface"
                                    size="large"
                                    style={{width:'80%'}}
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
                                </div>
                                <div className="NewFlightSelectsDivMobile1 Big">
                                <label htmlFor="">Hotel City</label>
                                <Select
                                    placeholder="Select Hotel Country"
                                    onChange={(value) => setHotelCity(value)}
                                    value={hotelCity}
                                    className="Tuface Big"
                                    size="large"
                                    style={{width:'80%'}}
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
                            </div>
                            <div className="NewHotelSelectsBtn">
                                <Button
                                    type="primary"
                                    onClick={handleShowHotelResult}
                                    size="large"
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>

                    <Modal
                        title="Hotel Search Results"
                        visible={searchResultVisible}
                        onCancel={() => setSearchResultVisible(false)}
                        footer={null}
                    >
                        <>
                            <div className="NewHotelHotelResults">
                                {hotelDataRes.map((item, index) => (
                                    <div
                                        className="NewHotelHotelResultsItem1"
                                        key={index}
                                    >
                                        <div className="NewHotelHotelResultsItem1ImgDiv">
                                            <img src={item?.images[0]} alt="" />
                                        </div>
                                        <div className="NewHotelHotelResultsItem1Details">
                                            <div className="NewHotelResultDetailsFLexed">
                                                <span>{item?.hotelName}</span>
                                            </div>
                                            <div className="NewHotelResultDetailsFLexed">
                                                
                                                <span>{item?.city}</span>
                                                <span>{item?.country}</span>
                                            </div>
                                            
                                            <div className="NewHotelResultDetailsFLexed">
                                                <p>Price Per Night:</p>
                                                <span>
                                                    {item?.pricePerNight}
                                                </span>
                                            </div>
                                            <div className="NewHotelResultDetailsFLexed">
                                                <p>
                                                    Max Per Room:
                                                    <span>
                                                        {item?.maxPerRoom}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="NewHotelHotelResultsItem1Btn">
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
                        An error occurred while searching for Hotels. Please
                        try again later.
                    </Modal>
                </div>
                <div className="NewHotelBtns">
                    <Button type="default" size="large" onClick={handleBack}>
                        Back
                    </Button>
                    <Button
                        type="primary"
                        onClick={handleNavToCar}
                        size="large"
                    >
                        Book A Car
                    </Button>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewHotel;

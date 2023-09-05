import {Button, Select, Modal} from "antd";
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {bookingData} from "../Redux/Features";
const {Option} = Select;
import './NewCar.css'
import { useNavigate } from "react-router";

const NewCar = () => {
    const dispatch = useDispatch()
    const [ carCity, setCarCity] = useState("");
    const [carCountry, setCarCountry] = useState("");
    const [searchResultVisible, setSearchResultVisible] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);
    const [carDataRes, setCarDataRes] = useState([]);


    const handleHotelSearch = () => {
        console.log("Searching Hotel");
        const url = `https://trippyapiv1.onrender.com/trippy//find-car-rentals/?location=${encodeURIComponent(
            carCity
        )}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setCarDataRes(res.data.carRentals);
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
    
    const [addSucc, setAddSucc] = useState(false)

    const handleAddCar = (selectedCar) => {
        const selectedCarData = {
            type: "car",
            carData: selectedCar,
        };
        dispatch(bookingData(selectedCarData));
        setAddSucc(true)
        setSearchResultVisible(false)
    };

    const nav = useNavigate();

    const handleNavToBooking = () => {
        nav("/BookingCart");
    };

    const handleBack = () => {
        nav(-1);
    };

    return (
        <>
            <div className="NewCarBody">
                <HeaderLone />
                <div className="NewCarHead">
                    <h1>Search For Cars</h1>
                </div>

                <div className="NewHotelContent">
                    <div className="NewHotelSelectDiv Hotel">
                        <div className="NewHotelSelectsHotel">
                            <div className="NewHotelSelectsDiv">
                                <div className="NewFlightSelectsDivMobile1">
                                    <label htmlFor="">Car Country</label>
                                    <Select
                                        placeholder="Select Origin Airport"
                                        onChange={(value) =>
                                            setCarCountry(value)
                                        }
                                        value={carCountry}
                                        className="Tuface"
                                        size="large"
                                        style={{width: "80%"}}
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
                                    <label htmlFor="">Car City</label>
                                    <Select
                                        placeholder="Select Hotel Country"
                                        onChange={(value) => setCarCity(value)}
                                        value={carCity}
                                        className="Tuface"
                                        size="large"
                                        style={{width: "80%"}}
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
                                    <label htmlFor="">Car Country</label>
                                    <Select
                                        placeholder="Select Origin Airport"
                                        onChange={(value) =>
                                            setCarCountry(value)
                                        }
                                        value={carCountry}
                                        className="Tuface"
                                        size="large"
                                        style={{width: "80%"}}
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
                                    <label htmlFor="">Car City</label>
                                    <Select
                                        placeholder="Select Hotel Country"
                                        onChange={(value) => setCarCity(value)}
                                        value={carCity}
                                        className="Tuface Big"
                                        size="large"
                                        style={{width: "80%"}}
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
                            <div className="NewHotelResults">
                                {carDataRes.map((item, index) => (
                                    <div
                                        className="NewHotelResultsItem1"
                                        key={index}
                                    >
                                        <div className="NewHotelResultsItem1ImgDiv">
                                            <img src={item?.image} alt="" />
                                        </div>
                                        <div className="NewHotelResultsItem1Details">
                                            <div className="NewHotelResultDetailsFLexed">
                                                <span>{item?.brand}</span>
                                            </div>
                                            <div className="NewHotelResultDetailsFLexed">
                                                <span>{item?.city}</span>
                                                <span>{item?.country}</span>
                                            </div>

                                            <div className="NewHotelResultDetailsFLexed">
                                                <p>Price Per Night:</p>
                                                <span>
                                                    {item?.pricePerDay}
                                                </span>
                                            </div>
                                            <div className="NewHotelResultDetailsFLexed">
                                                <p>
                                                    Max Perssenger:
                                                    <span>
                                                        {item?.maxPassengers}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="NewHotelResultsItem1Btn">
                                            <Button
                                                type="primary"
                                                onClick={() =>
                                                    handleAddCar(item)
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
                        An error occurred while searching for Hotels. Please try
                        again later.
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
                        Car Added Successfully
                    </Modal>
                </div>
                <div className="NewCarBtns">
                    <Button type="default" size="large" onClick={handleBack}>
                        Back to Previous
                    </Button>
                    <Button
                        type="primary"
                        onClick={handleNavToBooking}
                        size="large"
                    >
                        Proceed To Booking
                    </Button>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewCar;

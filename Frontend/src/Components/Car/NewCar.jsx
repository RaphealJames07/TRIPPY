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
    

    const handleAddCar = (selectedCar) => {
        const selectedCarData = {
            type: "car",
            carData: selectedCar,
        };
        dispatch(bookingData(selectedCarData));
    };

    const nav = useNavigate();

    const handleNavToBooking = () => {
        nav("/BookingCart");
    };


    return (
        <>
            <div className="NewCarBody">
                <HeaderLone />
                <div className="NewCarHead">
                    <h1>Search For Cars On the Go</h1> 
                </div>

                <div className="NewCarContent2">
                <div className="NewCarSelectDiv">
                                <div className="NewCarSelects">
                                    <div className="NewCarSelectsDiv">
                                        <label htmlFor="">Car Rental Country</label>
                                        <Select
                                            placeholder="Select"
                                            onChange={(value) =>
                                                setCarCountry(value)
                                            }
                                            value={carCountry}
                                            className="Tuface"
                                            size="large"
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
                                        <label htmlFor="">Car Rental City</label>
                                        <Select
                                            placeholder="Select"
                                            onChange={(value) =>
                                                setCarCity(value)
                                            }
                                            value={carCity}
                                            className="Tuface"
                                            size="large"
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
                                    <div className="NewCarSelectsBtn">
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
                        title="Car Search Results"
                        visible={searchResultVisible}
                        onCancel={() => setSearchResultVisible(false)}
                        footer={null}
                    >
                        <>
                        <div className="NewCarResults">
                               
                                        {carDataRes.map((item, index) => (
                                            <div
                                                className="NewCarResultsItem1"
                                                key={index}
                                            >
                                                <div className="NewCarResultsItem1ImgDiv">
                                                    <img
                                                        src={item?.image}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="NewCarResultsItem1Details">
                                                    <p>
                                                        Airline Name:{" "}
                                                        {item?.brand}
                                                        <span>{item?.model}</span>
                                                    </p>
                                                    <p
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        City: {item?.location}
                                                        <span>
                                                            Reg No: {item?.registrationNumber}
                                                        </span>
                                                    </p>
                                                    <p
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                        }}
                                                    >
                                                        Price Per Day:{" "}
                                                        {item?.pricePerDay}
                                                        <span>
                                                            Max Passenger:{" "}
                                                            {
                                                                item?.maxPassengers
                                                            }
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="NewCarResultsItem1Btn">
                                                    <Button
                                                        type="primary"
                                                        onClick={() =>
                                                            handleAddCar(
                                                                item
                                                            )
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
                <div className="NewCarBtns">
                    <Button
                        type="default"
                        size="large"
                    >
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

import {useState} from "react";
import "./ThreeSum.css";
import {Button, Collapse, Modal, Select} from "antd";
const {Option} = Select;
import {useDispatch} from "react-redux";
import axios from "axios";
import {carData, flightData, hotelData} from "../Redux/Features";
import {useSelector} from "react-redux";
// import {clearFlightData} from "../Redux/Features";
import {bookingData} from "../Redux/Features";

const TheThreeAD = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState("");

    const {Panel} = Collapse;

    const [flightAdded, setFlightAdded] = useState(false);

    const items = [
        {
            key: "1",
            label: (
                <h4 style={{display: "flex", justifyContent: "space-between"}}>
                    Flights{" "}
                    <span>
                        {flightAdded ? (
                            <span>Flight added to booking</span>
                        ) : (
                            <Button
                                type="primary"
                                onClick={(event) => openPopup(event, "Flight")}
                            >
                                Click To Add Flight
                            </Button>
                        )}
                    </span>
                </h4>
            ),
            items: (
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Itaque distinctio voluptatibus suscipit ea quidem eum
                    consequuntur quisquam, id impedit quam delectus fugit
                    aliquid temporibus alias incidunt quo beatae maxime eaque
                    totam omnis dolores atque, voluptates vitae? Repellat,
                    officia earum. Magni esse quidem nulla doloribus tempora.
                    Exercitationem ratione dolorum illo soluta?
                </p>
            ),
        },
        {
            key: "2",
            label: (
                <h4 style={{display: "flex", justifyContent: "space-between"}}>
                    Hotel{" "}
                    <span>
                        <Button
                            type="primary"
                            onClick={(event) => openPopup(event, "Hotel")}
                        >
                            Click To Add Hotel
                        </Button>
                    </span>
                </h4>
            ),
            items: (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur expedita nulla temporibus quasi cupiditate
                    pariatur sed id fugiat rem voluptas excepturi laboriosam
                    totam sit dolorum aperiam dolor illum dolores, placeat nihil
                    voluptatibus! Cupiditate voluptatum atque distinctio est
                    harum doloremque quibusdam animi placeat alias, accusamus,
                    vitae, nam beatae quo? Adipisci, cumque.
                </p>
            ),
            className: "ant-collapse-header ThreeHeader2",
        },
        {
            key: "3",
            label: (
                <h4 style={{display: "flex", justifyContent: "space-between"}}>
                    Car{" "}
                    <span>
                        <Button
                            type="primary"
                            onClick={(event) => openPopup(event, "Car")}
                        >
                            Click To Add Car
                        </Button>
                    </span>
                </h4>
            ),
            items: (
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, praesentium quis neque beatae recusandae
                    reprehenderit dolores quia repellendus architecto nisi
                    aperiam molestias ipsum harum labore sequi aliquam et
                    exercitationem ducimus cumque autem facere! Aliquam aliquid
                    iure sequi eaque, obcaecati illo, natus atque soluta
                    deleniti deserunt unde quam. Blanditiis, excepturi ad.
                </p>
            ),
        },
    ];

    const openPopup = (event, content) => {
        event.stopPropagation();
        setPopupVisible(true);
        setPopupContent(content);
    };

    const closePopup = () => {
        setPopupVisible(false);
        setPopupContent("");
    };

    //Handle Of Flight Search and Add

    const [fromFlight, setFromFlight] = useState("");
    const [toFlight, setToFlight] = useState("");

    const [showFlightResult, setShowFlightResult] = useState(false);

    const dispatch = useDispatch();

    const handleFlightSearch = () => {
        console.log("Search clicked");
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
        setShowFlightResult(true);
        handleFlightSearch();
    };
    const flightDataToMap = useSelector(
        (state) => state.Trippy.trippyFlightData
    );

    const handleAddFlight = (selectedFlight) => {
        const selectedFlightData = {
            flightData: selectedFlight,
        };
        dispatch(bookingData(selectedFlightData));
        setFlightAdded(true);
        // alert("Flight added successfully");
    };

    console.log(flightDataToMap);

    //Handle Of Hotel Search and Add
    const [hotelCity, setHotelCity] = useState("");
    const [hotelCountry, setHotelCountry] = useState("");
    const [showHotelResults, setShowHotelResults] = useState(false);

    const handleHotelSearch = () => {
        console.log("Searching Hotel");
        const url = `https://trippyapiv1.onrender.com/trippy//find-hotels/?city=${encodeURIComponent(
            hotelCity
        )}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                dispatch(hotelData(res.data.hotels));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleShowHotelResult = () => {
        setShowHotelResults(true);
        handleHotelSearch();
    };

    const hotelDataToMap = useSelector((state) => state.Trippy.trippyHotelData);
    // console.log("Hotel data is ready to be mapped", hotelDataToMap);

    const handleAddHotel = (selectedHotel) => {
        const selectedHotelData = {
            hotelData: selectedHotel,
        };
        dispatch(bookingData(selectedHotelData));
        // alert("Flight added successfully");
    };
    //Handle Of Hotel Search and Add
    const [carCity, setCarCity] = useState("");
    const [carCountry, setCarCountry] = useState("");
    const [showCarResults, setShowCarResults] = useState(false);

    const handleCarSearch = () => {
        const url = `https://trippyapiv1.onrender.com/trippy//find-car-rentals/?location=${encodeURIComponent(
            carCity
        )}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                dispatch(carData(res.data.carRentals));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCarResult = () => {
        setShowCarResults(true);
        handleCarSearch();
    };

    const carDataToMap = useSelector((state) => state.Trippy.trippyCarData);
    // console.log("Hotel data is ready to be mapped", hotelDataToMap);

    const handleAddCar = (selectedCar) => {
        const selectedCarData = {
            type: "car",
            carData: selectedCar,
        };
        dispatch(bookingData(selectedCarData));
    };

    return (
        <div>
            <Collapse accordion defaultActiveKey={[""]} size="large">
                {items.map((item) => (
                    <Panel key={item.key} header={item.label}>
                        {item.items}
                    </Panel>
                ))}
            </Collapse>

            <Modal
                open={popupVisible}
                onCancel={closePopup}
                footer={null}
                className="ThreeSearchPopUpBody"
            >
                <div className="ThreeSearchPopUpBodyWrap">
                    <div className="ThreeSearchHead">
                        <p>{`This is the ${popupContent} popup.`}</p>
                    </div>
                    {/* Flight Search Input Div And Result Div */}
                    {popupContent === "Flight" && (
                        <>
                            <div className="ThreeSearchFlightSelectDiv">
                                <div className="ThreeSearchSelects">
                                    <div className="ThreeSearchSelectsDiv">
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
                                <div className="ThreeSearchSelects">
                                    <div className="ThreeSearchSelectsDiv">
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
                                        {flightDataToMap.map((item, index) => (
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
                                                                item
                                                            )
                                                        }
                                                    >{`Add ${popupContent}`}</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </>
                    )}
                    {/* Flight Search Input Div And Result Div */}
                    {popupContent === "Hotel" && (
                        <>
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
                            <div className="ThreeSearchFlightResults">
                                {showHotelResults && (
                                    <>
                                        {hotelDataToMap.map((item, index) => (
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
                                                    >{`Add ${popupContent}`}</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </>
                    )}
                    {/* Flight Search Input Div And Result Div */}
                    {popupContent === "Car" && (
                        <>
                            <div className="ThreeSearchFlightSelectDiv">
                                <div className="ThreeSearchSelects">
                                    <div className="ThreeSearchSelectsDiv">
                                        <label htmlFor="">Country</label>
                                        <Select
                                            placeholder="Select Origin Airport"
                                            onChange={(value) =>
                                                setCarCountry(value)
                                            }
                                            value={carCountry}
                                            className="Tuface"
                                        >
                                            <Option
                                                value=""
                                                onChange={(e) => e.target.value}
                                            >
                                                Select
                                            </Option>
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
                                                value="lagos"
                                                onChange={(e) => e.target.value}
                                            >
                                                Kenya
                                            </Option>
                                        </Select>
                                        <label htmlFor="">City</label>
                                        <Select
                                            placeholder="Select Destination Airport"
                                            onChange={(value) =>
                                                setCarCity(value)
                                            }
                                            value={carCity}
                                            className="Tuface"
                                        >
                                            <Option
                                                value=""
                                                onChange={(e) => e.target.value}
                                            >
                                                Select
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
                                            onClick={handleCarResult}
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="ThreeSearchFlightResults">
                                {showCarResults && (
                                    <>
                                        {carDataToMap.map((item, index) => (
                                            <div
                                                className="ThreeSearchFlightResultsItem1"
                                                key={index}
                                            >
                                                <div className="ThreeSearchFlightResultsItem1ImgDiv">
                                                    <img
                                                        src={item?.image}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ThreeSearchFlightResultsItem1Details">
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
                                                <div className="ThreeSearchFlightResultsItem1Btn">
                                                    <Button
                                                        type="primary"
                                                        onClick={() =>
                                                            handleAddCar(
                                                                item
                                                            )
                                                        }
                                                    >{`Add ${popupContent}`}</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default TheThreeAD;

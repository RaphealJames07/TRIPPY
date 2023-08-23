import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { bookingData } from "../Redux/Features";
import { useState } from "react";
import axios from "axios";
import { carData, clearCarData } from "../Redux/Features";
import { Link } from "react-router-dom";

const NewCar = () => {
    const [carCity, setCarCity] = useState("");
    const dispatch = useDispatch();

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
    const carDataToMap = useSelector((state) => state.Trippy.trippyCarData);
    const handleAddCar = (selectedCar) => {
        const selectedCarData = {
           
            carData: selectedCar,
        };
        dispatch(bookingData(selectedCarData));
    };

    return (
        <>
            <div className="NewHotelBody">
                <div className="NewHotelHead">
                    <h1>Get Car Rentals Deals for your ease</h1>
                </div>
                <div className="NewHotelContent">
                    <div className="NewHotelContentInput">
                        <select
                            name="Location"
                            id="Location"
                            onChange={(e) => setCarCity(e.target.value)}
                            value={carCity}
                        >
                            <option value="" onChange={(e) => e.target.value}>
                                Location
                            </option>

                            <option
                                value="lagos"
                                onChange={(e) => e.target.value}
                            >
                                Lagos
                            </option>
                            <option
                                value="nairobi"
                                onChange={(e) => e.target.value}
                            >
                                Nairobi
                            </option>
                            <option
                                value="accra"
                                onChange={(e) => e.target.value}
                            >
                                Accra
                            </option>
                        </select>

                        <button onClick={handleCarSearch}>Search</button>
                    </div>
                    <div className="NewHotelContentResults">
                        {carDataToMap?.map((item, index) => (
                            <div className="NewHotelResultItem1" key={index}>
                                <div className="NewHotelResultItem1Left">
                                    <div className="NewHotelResultItem1ImgDiv">
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className="NewHotelResultItem1Desc">
                                        <div className="NewHotelResultItem1DescTop">
                                            <h1>
                                                {item?.brand} (
                                                <span>{item?.type}</span>)
                                            </h1>
                                            <p>{item?.model}</p>

                                            <span>
                                                <span>
                                                    max passenger{" "}
                                                    {item?.maxPassengers}
                                                </span>{" "}
                                                <br />
                                                <span>Manual</span>
                                                <span>AC</span>
                                            </span>
                                        </div>
                                        <div className="NewHotelResultItem1DescDown">
                                            <span>
                                                {item?.registrationNumber}
                                            </span>
                                            <span>{item?.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="NewHotelResultItem1Right">
                                    <div className="NewHotelResultItem1RightTop">
                                        <h3>$ {item?.pricePerDay} per day</h3>
                                    </div>

                                    <div className="NewHotelResultItem1RightDown">
                                        <Link to="/BookingHotel">
                                            <button
                                                onClick={() =>
                                                    handleAddCar(item)
                                                }
                                            >
                                                Add Car
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="CancelSearchBtn"
                    onClick={() => dispatch(clearCarData())}
                >
                    Clear Search
                </button>
            </div>
        </>
    );
};

export default NewCar;

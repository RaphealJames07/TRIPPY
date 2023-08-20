import "./NewHotel.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { bookingData } from "../Redux/Features";
import { useState } from "react";
import axios from "axios";
import { hotelData, clearHotelData } from "../Redux/Features";

const NewHotel = () => {
    const [hotelCity, setHotelCity] = useState("");
    const dispatch = useDispatch();

    const handleHotelSearch = () => {
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

    const hotelDataToMap = useSelector((state) => state.Trippy.trippyHotelData);
    // console.log("Hotel data is ready to be mapped", hotelDataToMap);

    const handleAddHotel = (selectedHotel) => {
        const selectedHotelData = {
            type: "hotel",
            hotelData: selectedHotel,
        };
        dispatch(bookingData(selectedHotelData));
        // alert("Flight added successfully");
    };

    return (
        <>
            <div className="NewHotelBody">
                <div className="NewHotelHead">
                    <h1>Compare Hotels from all around the world</h1>
                </div>
                <div className="NewHotelContent">
                    <div className="NewHotelContentInput">
                        <select
                            name="Location"
                            id="Location"
                            onChange={(e) => setHotelCity(e.target.value)}
                            value={hotelCity}
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

                        <button onClick={handleHotelSearch}>Search</button>
                    </div>
                    <div className="NewHotelContentResults">
                        {hotelDataToMap?.map((item, index) => (
                            <div className="NewHotelResultItem1" key={index}>
                                <div className="NewHotelResultItem1Left">
                                    <div className="NewHotelResultItem1ImgDiv">
                                        <img src={item?.images[1]} alt="" />
                                    </div>
                                    <div className="NewHotelResultItem1Desc">
                                        <div className="NewHotelResultItem1DescTop">
                                            <h1>{item?.hotelName}</h1>
                                            <p>
                                                star rating {item?.starRating}{" "}
                                                <span>{item?.city}</span>
                                            </p>

                                            <span>
                                                <span>
                                                    {item?.ratings.length}{" "}
                                                    reviews
                                                </span>
                                                <span>
                                                    {" "}
                                                    ( {item?.maxPerRoom} ) max
                                                    per room
                                                </span>
                                            </span>
                                        </div>
                                        <div className="NewHotelResultItem1DescDown">
                                            <p>
                                                <span>{item?.features[0]}</span>
                                                <span>{item?.features[1]}</span>
                                                <span>{item?.features[2]}</span>
                                                <span>{item?.features[3]}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="NewHotelResultItem1Right">
                                    <div className="NewHotelResultItem1RightTop">
                                        <h3>
                                            ${item?.pricePerNight} / Per Night
                                        </h3>
                                        <p>Chek In: {item?.checkIn}</p>
                                        <p>Check Out: {item?.checkOut}</p>
                                    </div>

                                    <div className="NewHotelResultItem1RightDown">
                                        <button
                                            onClick={() => handleAddHotel(item)}
                                        >
                                            Add Hotel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="CancelSearchBtn"
                    onClick={() => dispatch(clearHotelData())}
                >
                    Clear Search
                </button>
            </div>
        </>
    );
};

export default NewHotel;

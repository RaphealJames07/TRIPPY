import "./Flight.css";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { bookingData } from "../Redux/Features";

const Hotel = () => {
    const dispatch = useDispatch();

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
            {hotelDataToMap?.map((item, index) => (
                <div className="HotelPopUpSearchItem1" key={index}>
                    <div className="HotelPopUpItem1A">
                        {/* <img src={item?.images[0]} alt="" /> */}
                    </div>
                    <div className="HotelPopUpItem1B">
                        <h3>{item?.hotelName}</h3>
                        <div className="HotelPopUpItem1BTop">
                            <CiLocationOn />
                            <p>
                                {item?.city} <span>{item?.country}</span>{" "}
                                <span>{item?.starRating} star rating</span>
                            </p>
                        </div>
                        <div className="HotelPopUpItem1BMid">
                            <CiLocationOn />
                            <p>
                                <span>{item?.manPerRoom} max per room</span>
                            </p>
                        </div>
                        <div className="HotelPopUpItem1BDown">
                            <CiLocationOn />
                            <p>
                                $ {item?.pricePerNight}
                                <span>
                                    <button onClick={()=>handleAddHotel(item)}>Add</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Hotel;

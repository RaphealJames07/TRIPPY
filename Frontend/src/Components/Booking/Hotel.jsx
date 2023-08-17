import "./Flight.css";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Hotel = () => {
    const hotelDataToMap = useSelector((state) => state.Trippy.trippyHotelData);
    console.log("Hotel data is ready to be mapped", hotelDataToMap);

    return (
        <>
            <div className="HotelPopUpSearchItem1">
                <div className="HotelPopUpItem1A">
                    <img src="" alt="" />
                </div>
                <div className="HotelPopUpItem1B">
                    <h3>Comfort Suites</h3>
                    <div className="HotelPopUpItem1BTop">
                        <CiLocationOn />
                        <p>
                            Greece <span>4.5 star rating</span>
                        </p>
                    </div>
                    <div className="HotelPopUpItem1BMid">
                        <CiLocationOn />
                        <p>
                            2 rooms <span>3 nights</span>
                        </p>
                    </div>
                    <div className="HotelPopUpItem1BDown">
                        <CiLocationOn />
                        <p>
                            $807{" "}
                            <span>
                                <button>Add</button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotel;

import "./Flight.css";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { bookingData } from "../Redux/Features";

const Car = () => {
    const dispatch = useDispatch();
    const carDataToMap = useSelector((state) => state.Trippy.trippyCarData);
    // console.log('Car data is ready to be mapped', carDataToMap);

    const handleAddCar = (selectedCar) => {
      const selectedCarData = {
        type: "car",
        carData: selectedCar,
    };
    dispatch(bookingData(selectedCarData));
    };

    return (
        <>
            {
              carDataToMap?.map((item, index) =>(
                <div className="HotelPopUpSearchItem1" key={index}>
                <div className="HotelPopUpItem1A">
                    {/* <img src={item?.image} alt="" /> */}
                </div>
                <div className="HotelPopUpItem1B">
                    <h3>{item?.brand} <span></span></h3>
                    <div className="HotelPopUpItem1BTop">
                        <CiLocationOn />
                        <p>
                            {item?.location} <span>{item?.registrationNumber}</span>
                        </p>
                    </div>
                    <div className="HotelPopUpItem1BMid">
                        <CiLocationOn />
                        <p>{item?.maxPassengers} people max</p>
                    </div>
                    <div className="HotelPopUpItem1BDown">
                        <CiLocationOn />
                        <p>
                            price per day ${item?.priceperDay}
                            <span>
                                <button onClick={()=>handleAddCar(item)}>Add</button>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
              ))
            }
        </>
    );
};

export default Car;

import "./Flight.css";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Car = () => {

  const carDataToMap = useSelector(
        (state) => state.Trippy.trippyCarData
    );
    console.log('Car data is ready to be mapped', carDataToMap);

  return (
    <>
      <div className="HotelPopUpSearchItem1">
                <div className="HotelPopUpItem1A">
                    <img src="" alt="" />
                </div>
                <div className="HotelPopUpItem1B">
                    <h3>Toyota Corolla</h3>
                    <div className="HotelPopUpItem1BTop">
                        <CiLocationOn />
                        <p>
                            Color <span>Seat 4</span>
                        </p>
                    </div>
                    <div className="HotelPopUpItem1BMid">
                        <CiLocationOn />
                        <p>3 days</p>
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
  )
}

export default Car
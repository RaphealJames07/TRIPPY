// import "./Flight.css";
// import { FaPlaneDeparture } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";
// import { useSelector } from "react-redux/es/hooks/useSelector";

// const Flight = () => {
//     const flightDataToMap = useSelector(
//         (state) => state.Trippy.trippyFlightData
//     );
//     console.log('flight data is ready to be mapped', flightDataToMap);

//     return (
//         <>
//             <div className="FlightPopUpSearchItem1">
//                 <div className="FlightPopUpSearchItem1A">
//                     <CiLocationOn />
//                     <FaPlaneDeparture />
//                     <CiLocationOn />
//                 </div>
//                 <div className="FlightPopUpSearchItem1B">
//                     <h4>Lagos NG</h4>
//                     <h3>Athens GR</h3>
//                 </div>
//                 <div className="FlightPopUpSearchItem1C">
//                     <p>21st Jan 2023</p>
//                     <p>21st Jan 2023</p>
//                 </div>
//                 <div className="FlightPopUpSearchItem1D">
//                     <h3>$200</h3>
//                     <button>Add</button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Flight;

import { FaPlaneDeparture } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";

const Flight = () => {
    const flightDataToMap = useSelector(
        (state) => state.Trippy.trippyFlightData
    );
    // console.log(flightDataToMap);
    return (
        <>
            {flightDataToMap?.map((item, index) => (
                <div className="FlightPopUpSearchItem1" key={index}>
                    <div className="FlightPopUpSearchItem1A">
                        <CiLocationOn />
                        <FaPlaneDeparture />
                        <CiLocationOn />
                    </div>
                    <div className="FlightPopUpSearchItem1B">
                        <h4>{item?.from} NG</h4>
                        <h3>{item?.to} KY</h3>
                    </div>
                    <div className="FlightPopUpSearchItem1C">
                        <p>{item?.departureTime}</p>
                        <p>{item?.arrivalTime}</p>
                    </div>
                    <div className="FlightPopUpSearchItem1D">
                        <h3>{item?.priceFlex}</h3>
                        <h3>{item?.priceStandard}</h3>
                        <img src={item?.airlineLogo} alt="" />
                        <button>Add</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Flight;

// import { FaPlaneDeparture } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { bookingData } from "../Redux/Features";

// const Flight = () => {
//   const dispatch = useDispatch()

//     const flightDataToMap = useSelector(
//         (state) => state.Trippy.trippyFlightData
//     );

//     const handleAddFlight = () =>{
//       const selectedFlightData = {
//         type: 'flight',
//         _id: flightDataToMap._id,
//         flightData: flightDataToMap,
//       }
//       dispatch(bookingData(selectedFlightData))
//     }

//     return (
//         <>
//             {flightDataToMap?.map((item, index) => (
//                 <div className="FlightPopUpSearchItem1" key={index}>
//                     <div className="FlightPopUpSearchItem1A">
//                         <CiLocationOn />
//                         <FaPlaneDeparture />
//                         <CiLocationOn />
//                     </div>
//                     <div className="FlightPopUpSearchItem1B">
//                         <h4>{item?.from} NG</h4>
//                         <h3>{item?.to} KY</h3>
//                     </div>
//                     <div className="FlightPopUpSearchItem1C">
//                         <p>{item?.departureTime}</p>
//                         <p>{item?.arrivalTime}</p>
//                     </div>
//                     <div className="FlightPopUpSearchItem1D">
//                         <h3>{item?.priceFlex}</h3>
//                         <h3>{item?.priceStandard}</h3>
//                         <img src={item?.airlineLogo} alt="" />
//                         <button onClick={handleAddFlight}>Add</button>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default Flight;

import { FaPlaneDeparture } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bookingData } from "../Redux/Features";

const Flight = () => {
    const dispatch = useDispatch();

    const flightDataToMap = useSelector(
        (state) => state.Trippy.trippyFlightData
    );

    const handleAddFlight = (selectedFlight) => {
        const selectedFlightData = {
            type: "flight",

            flightData: selectedFlight,
        };
        dispatch(bookingData(selectedFlightData));
        // alert("Flight added successfully");
    };

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
                        <button onClick={() => handleAddFlight(item)}>
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Flight;

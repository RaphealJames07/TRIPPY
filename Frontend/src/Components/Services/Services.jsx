import "./Services.css";
import { MdFlightTakeoff } from "react-icons/md";

const Services = () => {
    return (
        <>
            <div className="ServicesBody">
                <div className="ServicesWrapper">
                    <div className="ServicesHeader">
                        <h1>Our Services</h1>
                    </div>
                    <div className="ServicesBox">
                        <div className="ServicesBoxWrap">
                            <div className="ServiceItem1Box">
                                <div className="ServiceItem1BoxWrap">
                                    <div className="ServiceImgHeaderText">
                                        <MdFlightTakeoff className="MdFlightTakeoff" />
                                        <h2>Flight</h2>
                                    </div>
                                    <div className="ServicesDetails">
                                        <ul>
                                            <li>
                                                Find and book flights to your
                                                desired destinations worldwide.
                                            </li>
                                            <li>
                                                Choose from a wide selection of
                                                airlines, flight classes, and
                                                flexible travel dates.
                                            </li>
                                            <li>
                                                Get the best deals and
                                                flexibility that suites your
                                                budget plan
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="ServiceItem2Box">
                                <div className="ServiceItem2BoxWrap">
                                    <div className="ServiceImgHeaderText">
                                        <MdFlightTakeoff className="MdFlightTakeoff" />
                                        <h2>Hotels</h2>
                                    </div>
                                    <div className="ServicesDetails">
                                        <ul>
                                            <li>
                                                Discover a range of hotels from
                                                luxury resorts to
                                                budget-friendly accommodations.
                                            </li>
                                            <li>
                                                Access to amenities like free
                                                Wi-Fi, swimming pools, and
                                                24-hour room service.
                                            </li>
                                            <li>
                                                Get the best deals and
                                                flexibility that suites your
                                                budget plan
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="ServiceItem3Box">
                                <div className="ServiceItem3BoxWrap">
                                    <div className="ServiceImgHeaderText">
                                        <MdFlightTakeoff className="MdFlightTakeoff" />
                                        <h2>Cars</h2>
                                    </div>
                                    <div className="ServicesDetails">
                                        <ul>
                                            <li>
                                                Rent cars for exploring
                                                destinations at your own pace.
                                            </li>
                                            <li>
                                                Select from various car types,
                                                including sedans, SUVs, and
                                                luxury vehicles.
                                            </li>
                                            <li>
                                                Enjoy features like GPS
                                                navigation, child seats, and
                                                roadside assistance.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="ServiceItem4Box">
                                <div className="ServiceItem4BoxWrap">
                                    <div className="ServiceImgHeaderText">
                                        <MdFlightTakeoff className="MdFlightTakeoff" />
                                        <h2>Other</h2>
                                    </div>
                                    <div className="ServicesDetails">
                                        <ul>
                                            <li>
                                                Customizable itineraries with
                                                accommodation, flights, and
                                                activities included.
                                            </li>
                                            <li>
                                                Read
                                                genuine reviews and ratings for
                                                hotels, flights, and car
                                                rentals.
                                            </li>
                                            <li>
                                                Reach out to our dedicated
                                                customer support team for
                                                assistance.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;

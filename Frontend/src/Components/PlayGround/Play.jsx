import "./Play.css";
import TourImg from "../../assets/home_slider.jpg.webp";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Play = () => {
    return (
        <>
            <div className="CocoBody">
                <div className="CocoBodyWrap">
                    <div className="CocoTop">
                        <div className="CocoTopImgDiv">
                            <img src={TourImg} alt="" />
                        </div>
                        <div className="CocoTopTourDetailsDiv">
                            <div className="CocoTopTourDetailsDivOne">
                                <h2>
                                    Tour Name: Nairobi Safari
                                    <span style={{ marginLeft: "30px" }}>
                                        City: Nairobi
                                    </span>
                                </h2>
                                <h3>Country: Kenya</h3>
                                <div className="CocoTopTourDetailsDivStar">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                            </div>
                            <div className="CocoTopTourDetailsDivTwo">
                                <div className="CocoTopTourDetailsDivTwoSpan1">
                                    <h2>Tour Info:</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Alias adipisci
                                        cupiditate earum consequatur, dolores
                                        aut veniam, in nobis nostrum quos omnis
                                        iure ad fugiat culpa placeat, sequi
                                        facilis ipsam eos!
                                    </p>
                                </div>
                                <div className="CocoTopTourDetailsDivTwoSpan2">
                                    <h2>Amenities</h2>
                                    <p>
                                        Restaurants and Cafés , Guided Tours
                                        Events and Exhibitions, Wild Life
                                    </p>
                                </div>
                                <div className="CocoTopTourDetailsDivInputs">
                                    <h3>
                                        Price Per Person: 13000{" "}
                                        <span>Total Tour Price: 20000</span>
                                    </h3>
                                    <div className="CocoTopTourDetailsDivInputsNum">
                                        <label htmlFor="Name">
                                            No Of Tickets
                                        </label>
                                        <input type="number" min={0} />
                                    </div>
                                    <div className="CocoTopTourDetailsDivInputsName">
                                        <label htmlFor="Name">
                                            Name of Tourist(1)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Input Name"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="CocoDown">
                        <div className="CocoLeft">
                            <div className="CocoTourFlightDiv">
                                <div className="CocoTourFlightDivLeft">
                                    <div className="CocoTourFlightDivLeftImgDiv">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="CocoTourFlightDivLeftDetailsDiv">
                                        <h3>To Flight Detail</h3>
                                        <p>Flight Name</p>
                                        <p>
                                            Fron Lagos to <span>Nairobi</span>{" "}
                                        </p>
                                        <p>Depature Time</p>
                                        <p>Arrival Time</p>
                                        <p>
                                            date <input type="date" />
                                        </p>
                                        <select name="" id="">
                                            <option value="">
                                                Select Price
                                            </option>
                                            <option value="priceFlex">
                                                PriceFlex
                                            </option>
                                            <option value="priceStandard">
                                                PriceStandard
                                            </option>
                                        </select>
                                        <p>Return Price</p>
                                    </div>
                                </div>
                                <div className="CocoTourFlightDivRight">
                                    <div className="CocoTourFlightDivRightImgDiv">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="CocoTourFlightDivRightDetailsDiv">
                                        <h3>From Flight Detail</h3>
                                        <p>Flight Name</p>
                                        <p>
                                            Fron Lagos to <span>Nairobi</span>{" "}
                                        </p>
                                        <p>Depature Time</p>
                                        <p>Arrival Time</p>
                                        <p>
                                            date <input type="date" />
                                        </p>
                                        <select name="" id="">
                                            <option value="">
                                                Select Price
                                            </option>
                                            <option value="priceFlex">
                                                PriceFlex
                                            </option>
                                            <option value="priceStandard">
                                                PriceStandard
                                            </option>
                                        </select>
                                        <p>Return Price</p>
                                    </div>
                                </div>
                                {/* <p>Total Flight Price</p> */}
                            </div>
                            <div className="CocoTourHotelDiv">
                                <div className="CocoTourHotelDivImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="CocoTourHotelDivDetailsDiv">
                                    <h3>
                                        Hotel Name <span>Kenya</span>
                                    </h3>
                                    <p>12 kokoyi street</p>
                                    <p>
                                        CheckIn <span>CheckOut</span>
                                    </p>
                                    <p>
                                        Price per night
                                        <span>max per room (2)</span>
                                    </p>
                                    <p>
                                        Nights
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            min={0}
                                        />
                                        <span>No of Guest</span>
                                    </p>
                                    <p>Total Hotel Price</p>
                                </div>
                            </div>
                            <div className="CocoTourCarDiv">
                                <div className="CocoTourCarDivImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="CocoTourCarDivDetailsDiv">
                                    <h3>
                                        Car Name <span>Model</span>
                                    </h3>
                                    <p>
                                        Seats <span>Color</span>
                                    </p>
                                    <p>Max Passenger</p>
                                    <p>Location</p>
                                    <p>
                                        PricePerDaR{" "}
                                        <input type="number" name="" id="" />{" "}
                                        <span>No of days</span>
                                    </p>
                                    <p>Regno</p>
                                    <p>Total Price</p>
                                </div>
                            </div>
                        </div>
                        <div className="CocoRight">
                            <div className="CocoPayment">
                                <div className="CocoPaymentFigures">
                                    <p>
                                        Total Tour Price <span>20000</span>
                                    </p>
                                    <p>
                                        Total Flight Price <span>20000</span>
                                    </p>
                                    <p>
                                        Total Car Price <span>20000</span>
                                    </p>
                                    <p>
                                        Total Hotel Price <span>20000</span>
                                    </p>
                                    <p>
                                        SubTotal Booking Price{" "}
                                        <span>20000</span>
                                    </p>
                                    <p>
                                        Service Charge <span>20000</span>
                                    </p>
                                    <h3>
                                        Total Booking Fee <span>20000</span>
                                    </h3>
                                </div>
                                    <div className="CocoPaymentActionBtns">
                                        <button className="CocoPaymentActionBtnsCancel">Cancel Booking</button>
                                        <button className="CocoPaymentActionBtnsPay">Pay Now</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Play;

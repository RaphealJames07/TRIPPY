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
                            <div>
                                <h2>
                                    Tour Name: Nairobi Safari
                                    <span>City: Nairobi</span>
                                </h2>
                                <h2>Country: Kenya</h2>
                                <div>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                            </div>
                            <div>
                                <h2>Tour Details:</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Totam id quasi ut
                                    repudiandae recusandae sint veniam fugit,
                                    inventore animi impedit iure explicabo.
                                    Nobis praesentium voluptates officia
                                    quibusdam, labore sit aut?
                                </p>
                                <h2>Amenities</h2>
                                <p>
                                    Restaurants and Cafés , Guided Tours
                                    Events and Exhibitions, Wild Life
                                </p>
                                <h2>Price Per Person: 13000</h2>
                                <div>
                                    <label htmlFor="Name">No Of People  Going For This Trip</label>
                                    <input type='number' min={0} />
                                    <label htmlFor="Name">Name of Tourist </label>
                                    <input type="text" />
                                    <label htmlFor="Name">Name of Tourist (2) </label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="CocoDown">
                        <div className="CocoLeft">
                            <div className="CocoTourFlightDiv">
                                
                            </div>
                            <div className="CocoTourHotelDiv"></div>
                            <div className="CocoTourCarDiv"></div>
                        </div>
                        <div className="CocoRight">
                            <div className="CocoPayment"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Play;

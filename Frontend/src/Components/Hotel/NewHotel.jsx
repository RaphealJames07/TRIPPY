import "./NewHotel.css";

const NewHotel = () => {
    return (
        <>
            <div className="NewHotelBody">
                <div className="NewHotelHead">
                    <h1>Compare Hotels from all around the world</h1>
                </div>
                <div className="NewHotelContent">
                    <div className="NewHotelContentInput">
                        <select name="OriginAirport" id="OriginAirport">
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
                                value="accra"
                                onChange={(e) => e.target.value}
                            >
                                Accra
                            </option>
                        </select>

                        <button>Search</button>
                    </div>
                    <div className="NewHotelContentResults">
                        <div className="NewHotelResultItem1">
                            <div className="NewHotelResultItem1Left">
                                <div className="NewHotelResultItem1ImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="NewHotelResultItem1Desc">
                                    <div className="NewHotelResultItem1DescTop">
                                        <span>
                                            <h1>Comfort Suites</h1>
                                            <p>
                                                star <span>City</span>
                                            </p>
                                        </span>
                                        <span>
                                            <span></span>
                                            <p>1 reviews</p>
                                            <p>max per room</p>
                                        </span>
                                    </div>
                                    <div className="NewHotelResultItem1DescDown">
                                        <p>
                                            <span>Gym</span>
                                            <span>Pool</span>
                                            <span>Free wifi</span>
                                            <span>bar</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="NewHotelResultItem1Right">
                                <div className="NewHotelResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Suite</p>
                                    <p>regular</p>
                                </div>

                                <div className="NewHotelResultItem1RightDown">
                                    <button>Add Hotel</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewHotelResultItem1">
                            <div className="NewHotelResultItem1Left">
                                <div className="NewHotelResultItem1ImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="NewHotelResultItem1Desc">
                                    <div className="NewHotelResultItem1DescTop">
                                        <span>
                                            <h1>Comfort Suites</h1>
                                            <p>
                                                star <span>City</span>
                                            </p>
                                        </span>
                                        <span>
                                            <span></span>
                                            <p>1 reviews</p>
                                            <p>max per room</p>
                                        </span>
                                    </div>
                                    <div className="NewHotelResultItem1DescDown">
                                        <p>
                                            <span>Gym</span>
                                            <span>Pool</span>
                                            <span>Free wifi</span>
                                            <span>bar</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="NewHotelResultItem1Right">
                                <div className="NewHotelResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Suite</p>
                                    <p>regular</p>
                                </div>

                                <div className="NewHotelResultItem1RightDown">
                                    <button>Add Hotel</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewHotelResultItem1">
                            <div className="NewHotelResultItem1Left">
                                <div className="NewHotelResultItem1ImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="NewHotelResultItem1Desc">
                                    <div className="NewHotelResultItem1DescTop">
                                        <span>
                                            <h1>Comfort Suites</h1>
                                            <p>
                                                star <span>City</span>
                                            </p>
                                        </span>
                                        <span>
                                            <span></span>
                                            <p>1 reviews</p>
                                            <p>max per room</p>
                                        </span>
                                    </div>
                                    <div className="NewHotelResultItem1DescDown">
                                        <p>
                                            <span>Gym</span>
                                            <span>Pool</span>
                                            <span>Free wifi</span>
                                            <span>bar</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="NewHotelResultItem1Right">
                                <div className="NewHotelResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Suite</p>
                                    <p>regular</p>
                                </div>

                                <div className="NewHotelResultItem1RightDown">
                                    <button>Add Hotel</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewHotelResultItem1">
                            <div className="NewHotelResultItem1Left">
                                <div className="NewHotelResultItem1ImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="NewHotelResultItem1Desc">
                                    <div className="NewHotelResultItem1DescTop">
                                        <span>
                                            <h1>Comfort Suites</h1>
                                            <p>
                                                star <span>City</span>
                                            </p>
                                        </span>
                                        <span>
                                            <span></span>
                                            <p>1 reviews</p>
                                            <p>max per room</p>
                                        </span>
                                    </div>
                                    <div className="NewHotelResultItem1DescDown">
                                        <p>
                                            <span>Gym</span>
                                            <span>Pool</span>
                                            <span>Free wifi</span>
                                            <span>bar</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="NewHotelResultItem1Right">
                                <div className="NewHotelResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Suite</p>
                                    <p>regular</p>
                                </div>

                                <div className="NewHotelResultItem1RightDown">
                                    <button>Add Hotel</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewHotelResultItem1">
                            <div className="NewHotelResultItem1Left">
                                <div className="NewHotelResultItem1ImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="NewHotelResultItem1Desc">
                                    <div className="NewHotelResultItem1DescTop">
                                        <span>
                                            <h1>Comfort Suites</h1>
                                            <p>
                                                star <span>City</span>
                                            </p>
                                        </span>
                                        <span>
                                            <span></span>
                                            <p>1 reviews</p>
                                            <p>max per room</p>
                                        </span>
                                    </div>
                                    <div className="NewHotelResultItem1DescDown">
                                        <p>
                                            <span>Gym</span>
                                            <span>Pool</span>
                                            <span>Free wifi</span>
                                            <span>bar</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="NewHotelResultItem1Right">
                                <div className="NewHotelResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Suite</p>
                                    <p>regular</p>
                                </div>

                                <div className="NewHotelResultItem1RightDown">
                                    <button>Add Hotel</button>
                                </div>
                            </div>
                        </div>
                        <div className="NewHotelResultItem1">
                            <div className="NewHotelResultItem1Left">
                                <div className="NewHotelResultItem1ImgDiv">
                                    <img src="" alt="" />
                                </div>
                                <div className="NewHotelResultItem1Desc">
                                    <div className="NewHotelResultItem1DescTop">
                                        <span>
                                            <h1>Comfort Suites</h1>
                                            <p>
                                                star <span>City</span>
                                            </p>
                                        </span>
                                        <span>
                                            <span></span>
                                            <p>1 reviews</p>
                                            <p>max per room</p>
                                        </span>
                                    </div>
                                    <div className="NewHotelResultItem1DescDown">
                                        <p>
                                            <span>Gym</span>
                                            <span>Pool</span>
                                            <span>Free wifi</span>
                                            <span>bar</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="NewHotelResultItem1Right">
                                <div className="NewHotelResultItem1RightTop">
                                    <h3>$544 / per person</h3>
                                    <p>Suite</p>
                                    <p>regular</p>
                                </div>

                                <div className="NewHotelResultItem1RightDown">
                                    <button>Add Hotel</button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <button className="CancelSearchBtn">Cancel Search</button>
            </div>
        </>
    );
};

export default NewHotel;

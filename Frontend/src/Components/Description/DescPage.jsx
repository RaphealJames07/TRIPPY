import "./DescPage.css";
import { GrLocation } from "react-icons/gr";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const DescPage = () => {
    const [description, setDescription] = useState(false);
    const [amenities, setAmenities] = useState(false);
    const [reviews, setReviews] = useState(false);

    return (
        <>
            <div className="DescBody">
                <div className="DescTop">
                    <img src="" alt="" />
                </div>
                <div className="DescDown">
                    <div className="DescDownWrap">
                        <div className="DescDownInitials">
                            <div className="DescDownHeadText">
                                <h1>Mykonos</h1>
                            </div>
                            <div className="DescDownHeaderInfo">
                                <span>
                                    <GrLocation />
                                    <h2>Greece</h2>
                                </span>
                                <span>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </span>
                            </div>
                        </div>
                        <div className="DescNav">
                            <ul>
                                <li
                                    onClick={() => {
                                        setDescription(true);
                                        setAmenities(false);
                                        setReviews(false);
                                    }}
                                >
                                    Description
                                </li>
                                <li
                                    onClick={() => {
                                        setDescription(false);
                                        setAmenities(true);
                                        setReviews(false);
                                    }}
                                >
                                    Amenities
                                </li>
                                <li
                                    onClick={() => {
                                        setDescription(false);
                                        setAmenities(false);
                                        setReviews(true);
                                    }}
                                >
                                    Reviews
                                </li>
                            </ul>
                        </div>
                        <div className="DescBoard">
                            {description ? (
                                <>
                                    <p>
                                        Mykonos is an island in the Cyclades
                                        group in the Aegean Sea. It is popularly
                                        known for its summer party atmosphere.
                                        Beaches such as Paradise and Super
                                        Paradise have bars that blare thumping
                                        music. Massive dance clubs attract
                                        world-renowned DJs and typically stay
                                        open well past dawn. Iconic landmarks
                                        include a row of 16th-century windmills,
                                        which sit on a hill above Mykonos town.
                                    </p>
                                </>
                            ) : reviews ? (
                                <>
                                    <div className="ReviewContainer">
                                        <div className="ReviewBody">
                                            <div className="ReviewsHeader">
                                                <h2>What People Say</h2>
                                            </div>
                                            <div className="ReviewCommentsSec">
                                                <div className="ReviewComment1">
                                                    <div className="ReviewComment1Info">
                                                        <div className="ReviewComment1Pfp">
                                                            <img
                                                                src=""
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ReviewComment1Details">
                                                            <h5>
                                                                Carlos Medina
                                                            </h5>
                                                            <p>
                                                                May 31 2016,
                                                                4:42 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ReviewComment1Text">
                                                        <p>
                                                            Beautiful Place to
                                                            visit, i loved the
                                                            ocean view and the
                                                            hotel resort.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ReviewComment1">
                                                    <div className="ReviewComment1Info">
                                                        <div className="ReviewComment1Pfp">
                                                            <img
                                                                src=""
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ReviewComment1Details">
                                                            <h5>
                                                                Carlos Medina
                                                            </h5>
                                                            <p>
                                                                May 31 2016,
                                                                4:42 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ReviewComment1Text">
                                                        <p>
                                                            Beautiful Place to
                                                            visit, i loved the
                                                            ocean view and the
                                                            hotel resort.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ReviewComment1">
                                                    <div className="ReviewComment1Info">
                                                        <div className="ReviewComment1Pfp">
                                                            <img
                                                                src=""
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ReviewComment1Details">
                                                            <h5>
                                                                Carlos Medina
                                                            </h5>
                                                            <p>
                                                                May 31 2016,
                                                                4:42 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ReviewComment1Text">
                                                        <p>
                                                            Beautiful Place to
                                                            visit, i loved the
                                                            ocean view and the
                                                            hotel resort.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ReviewComment1">
                                                    <div className="ReviewComment1Info">
                                                        <div className="ReviewComment1Pfp">
                                                            <img
                                                                src=""
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ReviewComment1Details">
                                                            <h5>
                                                                Carlos Medina
                                                            </h5>
                                                            <p>
                                                                May 31 2016,
                                                                4:42 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ReviewComment1Text">
                                                        <p>
                                                            Beautiful Place to
                                                            visit, i loved the
                                                            ocean view and the
                                                            hotel resort.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ReviewComment1">
                                                    <div className="ReviewComment1Info">
                                                        <div className="ReviewComment1Pfp">
                                                            <img
                                                                src=""
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ReviewComment1Details">
                                                            <h5>
                                                                Carlos Medina
                                                            </h5>
                                                            <p>
                                                                May 31 2016,
                                                                4:42 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ReviewComment1Text">
                                                        <p>
                                                            Beautiful Place to
                                                            visit, i loved the
                                                            ocean view and the
                                                            hotel resort.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="ReviewComment1">
                                                    <div className="ReviewComment1Info">
                                                        <div className="ReviewComment1Pfp">
                                                            <img
                                                                src=""
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ReviewComment1Details">
                                                            <h5>
                                                                Carlos Medina
                                                            </h5>
                                                            <p>
                                                                May 31 2016,
                                                                4:42 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ReviewComment1Text">
                                                        <p>
                                                            Beautiful Place to
                                                            visit, i loved the
                                                            ocean view and the
                                                            hotel resort.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="CommentBody">
                                            <h3>Had an interesting trip?</h3>
                                            <p>
                                                Let others know about your trip
                                                in the comment box below
                                            </p>
                                            <div className="CommentFields">
                                                <label htmlFor="Rating">
                                                    Star Rating
                                                </label>
                                                <input
                                                    type="number"
                                                    max={5}
                                                    min={0}
                                                    className="CommentFieldStar"
                                                />
                                                <br />
                                                <label htmlFor="Comment">
                                                    Comment
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Write your comments..."
                                                    className="CommentFieldText"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : amenities ? (
                                <>
                                    <p>Sky Diving</p>
                                    <p>Sky Diving</p>
                                    <p>Sky Diving</p>
                                    <p>Sky Diving</p>
                                </>
                            ) : null}
                        </div>
                        <div className="DescButtonBook">
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescPage;

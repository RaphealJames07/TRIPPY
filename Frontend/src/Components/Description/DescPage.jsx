import "./DescPage.css";
import { GrLocation } from "react-icons/gr";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateOneTourData } from "../Redux/Features";
import { Link, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { bookingData } from "../Redux/Features";
import { useNavigate } from "react-router-dom";
// import ClearBookingModal from "../ExitModal/Modal";

const DescPage = () => {
    const { tourId } = useParams();
    const [description, setDescription] = useState(true);
    const [amenities, setAmenities] = useState(false);
    const [reviews, setReviews] = useState(false);

    const [rating, setRating] = useState();
    const [comment, setComment] = useState("");
    const nav = useNavigate();

    const findOne = useSelector((state) => state.Trippy.findOneTourData);
    console.log(findOne);
    // const tourId = findOne._id;

    // const updatedFindOne = useSelector((state) => state.Trippy.findOneTourData);
    // console.log(findOne);
    // console.log("new data", updatedFindOne);

    const userToken = useSelector((state) => state.Trippy.trippyUser.token);
    // console.log(userToken);
    const dispatch = useDispatch();

    const handleCommentUpload = () => {
        const token = userToken;
        const requestData = { star: rating, comment: comment };
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
            .put(
                `https://trippyapiv1.onrender.com/trippy/rate-tour/${tourId}`,
                requestData,
                { headers }
            )
            .then((res) => {
                console.log("Comment posted", res);
                const updatedTourData = {
                    ...findOne,
                    comments: res.data.comments,
                };
                dispatch(updateOneTourData(updatedTourData));
                setDescription(true);
                setAmenities(false);
                setReviews(true);
                setRating("");
                setComment("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const HandleBookNow = () => {
        const selectedTourData = {
            type: "tour",
            tourData: findOne,
        };

        dispatch(bookingData(selectedTourData));
        nav("/Booking");
        // console.log('two added');
    };



    return (
        <>
            <div className="DescriptionBody">
                <Header />
                
                {findOne ? (
                    <div className="DescBody">
                        <div className="DescTop">
                            <img src={findOne?.images} alt="" />
                        </div>
                        <div className="DescDown">
                            <div className="DescDownWrap">
                                <div className="DescDownInitials">
                                    <div className="DescDownHeadText">
                                        <h1>{findOne?.tourName}</h1>
                                    </div>
                                    <div className="DescDownHeaderInfo">
                                        <span>
                                            <GrLocation />
                                            <h2>{findOne?.country}</h2>
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
                                            <p>{findOne?.info}</p>
                                        </>
                                    ) : reviews ? (
                                        <>
                                            <div className="ReviewContainer">
                                                <div className="ReviewBody">
                                                    <div className="ReviewsHeader">
                                                        <h2>What People Say</h2>
                                                    </div>
                                                    <div className="ReviewCommentsSec">
                                                        {findOne?.ratings.map(
                                                            (item) => (
                                                                <div
                                                                    className="ReviewComment1"
                                                                    key={
                                                                        item.id
                                                                    }
                                                                >
                                                                    <div className="ReviewComment1Info">
                                                                        <div className="ReviewComment1Pfp">
                                                                            <img
                                                                                src={
                                                                                    item
                                                                                        .postedBy
                                                                                        .profilePicture
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="ReviewComment1Details">
                                                                            <h5>
                                                                                {
                                                                                    item
                                                                                        .postedBy
                                                                                        ?.lastName
                                                                                }
                                                                                <span
                                                                                    style={{
                                                                                        marginLeft:
                                                                                            "5px",
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        item
                                                                                            .postedBy
                                                                                            ?.firstName
                                                                                    }
                                                                                </span>
                                                                            </h5>
                                                                            <p>
                                                                                {
                                                                                    item.postedTime
                                                                                }
                                                                                <span
                                                                                    style={{
                                                                                        marginLeft:
                                                                                            "80px",
                                                                                    }}
                                                                                >
                                                                                    <AiFillStar />
                                                                                    <AiFillStar />
                                                                                    <AiFillStar />
                                                                                    <AiOutlineStar />
                                                                                    <AiOutlineStar />
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ReviewComment1Text">
                                                                        <p>
                                                                            {
                                                                                item.comment
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="CommentBody">
                                                    <h3>
                                                        Had an interesting trip?
                                                    </h3>
                                                    <p>
                                                        Let others know about
                                                        your trip in the comment
                                                        box below
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
                                                            value={rating}
                                                            onChange={(e) =>
                                                                setRating(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <br />
                                                        <label htmlFor="Comment">
                                                            Comment
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Write your comments..."
                                                            className="CommentFieldText"
                                                            value={comment}
                                                            onChange={(e) =>
                                                                setComment(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <button
                                                            onClick={
                                                                handleCommentUpload
                                                            }
                                                        >
                                                            <Link>Post</Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : amenities ? (
                                        <>{findOne?.amenities}</>
                                    ) : null}
                                </div>
                                <div className="DescButtonBook">
                                    <button onClick={HandleBookNow}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>No Data available</h1>
                )}
                <Footer />
            </div>
        </>
    );
};

export default DescPage;

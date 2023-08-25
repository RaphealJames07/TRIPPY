import "./DescPage.css";
import { GrLocation } from "react-icons/gr";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { SpinnerCircular } from "spinners-react";
import { useState } from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { findOneTour } from "../Redux/Features";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { bookingData } from "../Redux/Features";
import { useNavigate } from "react-router-dom";
// import ClearBookingModal from "../ExitModal/Modal";
// import { useComments } from '../Redux/Context';

const DescPage = () => {
    const { tourId } = useParams();
    const [description, setDescription] = useState(true);
    const [amenities, setAmenities] = useState(false);
    const [reviews, setReviews] = useState(false);
    const [loadingComment, setLoadingComment] = useState(false);
    const [rating, setRating] = useState();
    const [comment, setComment] = useState("");
    const nav = useNavigate();
    // const { comments, updateComments } = useComments();

    const findOneTourData = useSelector(
        (state) => state.Trippy.findOneTourData
    );

    // const updatedFindOne = useSelector((state) => state.Trippy.findOneTourData);
    // console.log("new data", updatedFindOne);

    const userToken = useSelector((state) => state.Trippy.trippyUser?.token);
    // console.log(userToken);

    const dispatch = useDispatch();
    // const [comments, setComments] = useState([]);


      const handleCommentUpload = () => {
        setLoadingComment(true);
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
                console.log("Comment posted", res.data);
                const newComment = {
                    id: res.data.commentId,
                    star: rating,
                    comment: comment,
                    postedBy: {

                        firstName: res?.data?.ratings[0],
                        lastName: res?.data?.ratings[0],
                    },
                };
                const updatedComments = [...findOneTourData.comments, newComment];
                const updatedTourData = {
                    ...findOneTourData,
                    comments: updatedComments,
                };

                dispatch(findOneTourData(updatedTourData));
                setDescription(true);
                setAmenities(false);
                setReviews(true);
                setRating("");
                setComment("");
                setLoadingComment(false)

            })
            .catch((err) => {
                console.log(err);
                setLoadingComment(false)
            });
    };

    // const handleCommentUpload = () => {
    //     setLoadingComment(true);
    //     const token = userToken;
    //     const requestData = { star: rating, comment: comment };
    //     const headers = {
    //         Authorization: `Bearer ${token}`,
    //     };

    //     axios
    //         .put(
    //             `https://trippyapiv1.onrender.com/trippy/rate-tour/${tourId}`,
    //             requestData,
    //             { headers }
    //         )
    //         .then((res) => {
    //             console.log("Comment posted", res.data);

    //             // Get the index of the most recent comment
    //             const mostRecentCommentIndex = res.data.ratings.length - 1;

    //             const newComment = {
    //                 id: res.data.commentId,
    //                 star: rating,
    //                 comment: comment,
    //                 postedBy: {
    //                     firstName:
    //                         res.data.ratings[mostRecentCommentIndex].postedBy
    //                             .firstName,
    //                     lastName:
    //                         res.data.ratings[mostRecentCommentIndex].postedBy
    //                             .lastName,
    //                 },
    //             };

    //             const updatedComments = [
    //                 ...findOneTourData.ratings,
    //                 newComment,
    //             ];
    //             const updatedTourData = {
    //                 ...findOneTourData,
    //                 comments: updatedComments,
    //             };

    //             dispatch(findOneTour(updatedTourData));
    //             setDescription(true);
    //             setAmenities(false);
    //             setReviews(true);
    //             setRating("");
    //             setComment("");
    //             setLoadingComment(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setLoadingComment(false);
    //         });
    // };
    const [showLoginModal, setShowLoginModal] = useState(false);

    const HandleBookNow = () => {
        if (userToken === undefined) {
            setShowLoginModal(true);
            console.log("Modal clicked");
        } else {
            const selectedTourData = {
                tourData: findOneTourData,
            };

            dispatch(bookingData(selectedTourData));
            nav("/BookingFlight");
        }
    };

    if (userToken === undefined) {
        return (
            <>
                {showLoginModal ? (
                    <div
                        className="modal-overlay"
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                backgroundColor: "white",
                                width: "600px",
                                height: "200px",
                                borderRadius: "8px",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                                cursor: "pointer",
                            }}
                        >
                            <h2>
                                Dear user, you have to Log In to book a tour
                            </h2>
                            <button
                                onClick={() => setShowLoginModal(false)}
                                style={{ padding: "15px", cursor: "pointer" }}
                            >
                                Continue Viewing
                            </button>
                            <button
                                style={{ padding: "15px", cursor: "pointer" }}
                                onClick={() => {
                                    setShowLoginModal(false);
                                    nav("/Login");
                                }}
                            >
                                Proceed to Log In
                            </button>
                        </div>
                    </div>
                ) : null}

                <div className="DescriptionBody">
                    {findOneTourData ? (
                        <div className="DescBody">
                            <div className="DescTop">
                                <img src={findOneTourData?.images[0]} alt="" />
                            </div>
                            <div className="DescDown">
                                <div className="DescDownWrap">
                                    <div className="DescDownInitials">
                                        <div className="DescDownHeadText">
                                            <h1>{findOneTourData?.tourName}</h1>
                                        </div>
                                        <div className="DescDownHeaderInfo">
                                            <span>
                                                <GrLocation />
                                                <h2>
                                                    {findOneTourData?.country}
                                                </h2>
                                            </span>
                                            <span>
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
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
                                                <p>{findOneTourData?.info}</p>
                                            </>
                                        ) : reviews ? (
                                            <>
                                                <div className="ReviewContainer">
                                                    <div className="ReviewBody">
                                                        <div className="ReviewsHeader">
                                                            <h2>
                                                                What People Say
                                                            </h2>
                                                        </div>
                                                        <div className="ReviewCommentsSec">
                                                            {findOneTourData?.ratings?.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        className="ReviewComment1"
                                                                        key={
                                                                            index
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
                                                                                <h5
                                                                                    style={{
                                                                                        textTransform:
                                                                                            "uppercase",
                                                                                    }}
                                                                                >
                                                                                    {
                                                                                        item
                                                                                            .postedBy
                                                                                            ?.lastName
                                                                                    }
                                                                                    <span
                                                                                        style={{
                                                                                            marginLeft:
                                                                                                "5px",
                                                                                            textTransform:
                                                                                                "uppercase",
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
                                                            Had an interesting
                                                            trip?
                                                        </h3>
                                                        <p>
                                                            Let others know
                                                            about your trip in
                                                            the comment box
                                                            below
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
                                                            <button disabled>
                                                                {loadingComment ? (
                                                                    <SpinnerCircular />
                                                                ) : (
                                                                    "Post"
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : amenities ? (
                                            <>{findOneTourData?.amenities}</>
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
                </div>
            </>
        );
    }

    if (userToken !== undefined) {
        return (
            <>
                <div className="DescriptionBody">
                    {findOneTourData ? (
                        <div className="DescBody">
                            <div className="DescTop">
                                <img src={findOneTourData?.images[0]} alt="" />
                            </div>
                            <div className="DescDown">
                                <div className="DescDownWrap">
                                    <div className="DescDownInitials">
                                        <div className="DescDownHeadText">
                                            <h1>{findOneTourData?.tourName}</h1>
                                        </div>
                                        <div className="DescDownHeaderInfo">
                                            <span>
                                                <GrLocation />
                                                <h2>
                                                    {findOneTourData?.country}
                                                </h2>
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
                                                <p>{findOneTourData?.info}</p>
                                            </>
                                        ) : reviews ? (
                                            <>
                                                <div className="ReviewContainer">
                                                    <div className="ReviewBody">
                                                        <div className="ReviewsHeader">
                                                            <h2>
                                                                What People Say
                                                            </h2>
                                                        </div>
                                                        {findOneTourData?.ratings.map(
                                                            (item, index) => (
                                                                <div
                                                                    className="ReviewComment1"
                                                                    key={index}
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
                                                                            <h5
                                                                                style={{
                                                                                    textTransform:
                                                                                        "uppercase",
                                                                                }}
                                                                            >
                                                                                {
                                                                                    item
                                                                                        .postedBy
                                                                                        ?.lastName
                                                                                }
                                                                                <span
                                                                                    style={{
                                                                                        marginLeft:
                                                                                            "5px",
                                                                                        textTransform:
                                                                                            "uppercase",
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
                                                            Had an interesting
                                                            trip?
                                                        </h3>
                                                        <p>
                                                            Let others know
                                                            about your trip in
                                                            the comment box
                                                            below
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
                                                                {loadingComment ? (
                                                                    <SpinnerCircular />
                                                                ) : (
                                                                    "Post"
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                
                                            </>
                                        ) : amenities ? (
                                            <>{findOneTourData?.amenities}</>
                                        ) : null}
                                    </div>
                                    <div className="DescButtonBook">
                                        <button onClick={HandleBookNow}>
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                                <div className="BackButton">
                    <button onClick={() => nav(-1)}>Back</button>
                </div>
                            </div>
                        </div>
                    ) : (
                        <h1>No Data available</h1>
                    )}
                </div>
            </>
        );
    }
};

export default DescPage;

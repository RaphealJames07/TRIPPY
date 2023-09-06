import "./DescPage.css";
// import {GrLocation} from "react-icons/gr";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {SpinnerCircular} from "spinners-react";
import {useState, useEffect} from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import axios from "axios";
import {useDispatch} from "react-redux";
import {clearNewCommentRating, findOneTour} from "../Redux/Features";
import {Link, useParams} from "react-router-dom";
// import { Link } from "react-router-dom";
import {bookingData} from "../Redux/Features";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import {Input, InputNumber} from "antd";
// import ClearBookingModal from "../ExitModal/Modal";
// import { useComments } from '../Redux/Context';
// import { useNavigate } from 'react-router-dom';

const DescPage = () => {
    const {tourId} = useParams();
    const [loadingComment, setLoadingComment] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const nav = useNavigate();

    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(false);


    const findOneTourData = useSelector(
        (state) => state.Trippy.findOneTourData
    );
    console.log(findOneTourData);
    const imageArr = findOneTourData.images;
    console.log("Image Array", imageArr);



    useEffect(() => {
       window.scrollTo(0, 0);
    }, []);

    // const updatedFindOne = useSelector((state) => state.Trippy.findOneTourData);
    // console.log("new data", updatedFindOne);

    const userToken = useSelector((state) => state.Trippy.trippyUser?.token);
    // console.log(userToken);

    const dispatch = useDispatch();
    // const [comments, setComments] = useState([]);

    const handleCommentUpload = () => {
        if (rating === 0){
            alert('Please select a rating');
            return
        }
        if (!comment){
            alert('Please Write a comment')
            return
        }
        setLoadingComment(true);
        console.log("Waiting comment");
        const token = userToken;
        const requestData = {star: rating, comment: comment};
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
            .put(
                `https://trippyapiv1.onrender.com/trippy/rate-tour/${tourId}`,
                requestData,
                {headers}
            )
            .then((res) => {
                console.log("New posted", res.data);
                const newCommentData = res.data;
                console.log(newCommentData);
                dispatch(findOneTour(newCommentData));
                setRating("");
                setComment("");
                setLoadingComment(false);
            })
            .catch((err) => {
                console.log(err);
                setLoadingComment(false);
            });
    };

    const newCommentDey = useSelector((state) => state.Trippy.newCommentData);
    console.log("new Comment Clear", newCommentDey);

    const [showLoginModal, setShowLoginModal] = useState(false);

    const HandleBookNow = () => {
        // setLoading(true);
        
        // setTimeout(() => {
        //     // After loading is complete, navigate to the desired page
        //     setLoading(false);
        //     // Perform the navigation logic here
        //   }, 2000);


        if (userToken === undefined) {
            setShowLoginModal(true);
            console.log("Modal clicked");
        } else {
            const selectedTourData = {
                tourData: findOneTourData,
            };

            dispatch(bookingData(selectedTourData));
            nav("/NewFlight");
            dispatch(clearNewCommentRating());
            console.log("new comment reset to []");
        }
    };

    const handleBackToTour = () => {
        navigate(-1);
    };

    const StarRating = ({ rating }) => {
        const filledStars = Array.from({ length: rating }).fill(null);
        const emptyStars = Array.from({ length: 5 - rating }).fill(null);

        return (
            <div className="Rating">
                {filledStars.map((_, index) => (
                    <AiFillStar
                        style={{ width: "15%", height: "100%" }}
                        key={`filled-${index}`}
                    />
                ))}
                {emptyStars.map((_, index) => (
                    <AiOutlineStar
                        style={{ width: "15%", height: "100%" }}
                        key={`empty-${index}`}
                    />
                ))}
            </div>
        );
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
                                style={{padding: "15px", cursor: "pointer"}}
                            >
                                Continue Viewing
                            </button>
                            <button
                                style={{padding: "15px", cursor: "pointer"}}
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
                            <div className="DescBodyWrap">
                                <div className="DescTop">
                                    <img
                                        src={findOneTourData?.images[0]}
                                        alt=""
                                    />
                                </div>
                                <div className="DescDown">
                                    <div className="DescDownWrap">
                                        <div className="DescDownDetails">
                                            <div className="DescDownDetailsInitials">
                                                <div className="DescDownDetailsInitialsTop">
                                                    <h1>
                                                        {
                                                            findOneTourData?.tourName
                                                        }
                                                    </h1>
                                                    <p>
                                                        
                                                        <span>
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiOutlineStar />
                                                            <AiOutlineStar />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="DescDownDetailsInitialsMid">
                                                    {findOneTourData.amenities}
                                                </div>
                                                <div className="DescDownDetailsInitialsMid2">
                                                    <p>
                                                        {findOneTourData.info}{" "}
                                                        See more
                                                    </p>
                                                </div>
                                                <div className="DescDownDetailsInitialsDown">
                                                    <h3>Make Your Review</h3>
                                                    {userToken ? (
                                                        <>
                                                            <div className="DescDownDetailsInitialsDownBox">
                                                                <input
                                                                    type="number"
                                                                    min={0}
                                                                    max={5}
                                                                    placeholder="0"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    placeholder="Your Comment"
                                                                    className="DescDownDetailsInitialsDownCmt"
                                                                />
                                                                <button>
                                                                    Post
                                                                </button>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {" "}
                                                            <Link
                                                                to="/Login"
                                                                style={{
                                                                    textDecoration:
                                                                        "none",
                                                                    color: "blue",
                                                                    margin: "10px",
                                                                }}
                                                            >
                                                                <h3>
                                                                    Log In to
                                                                    Make a
                                                                    review
                                                                </h3>
                                                            </Link>{" "}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="DescDownDetailsCommentSec">
                                                <div className="ReviewContainer">
                                                    <div className="ReviewsHeader">
                                                        <h2>What People Say</h2>
                                                    </div>

                                                    <div className="ReviewDetOver">
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
                                                                                        ?.postedBy
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
                                                                                        ?.postedBy
                                                                                        .firstName
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
                                                                                            .lastName
                                                                                    }
                                                                                </span>
                                                                            </h5>
                                                                            <p>
                                                                                {
                                                                                    item?.postedTime
                                                                                }
                                                                                <span
                                                                                    style={{
                                                                                        marginLeft:
                                                                                            "80px",
                                                                                    }}
                                                                                >
                                                                                    {/* <AiFillStar />
                                                                                    <AiFillStar />
                                                                                    <AiFillStar />
                                                                                    <AiOutlineStar />
                                                                                    <AiOutlineStar /> */}
                                        <StarRating rating={item?.star} />

                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ReviewComment1Text">
                                                                        <p>
                                                                            {
                                                                                item?.comment
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>

                                        <div className="DescButtonBook">
                                            <button>Back</button>
                                            <button onClick={HandleBookNow}>
                                                Book Now
                                            </button>
                                        </div>
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
                            <div className="DescBodyWrap">
                                <div className="DescTop">
                                    <img
                                        src={findOneTourData?.images[0]}
                                        alt=""
                                    />
                                </div>
                                <div className="DescDown">
                                    <div className="DescDownWrap">
                                        <div className="DescDownDetails">
                                            <div className="DescDownDetailsInitials">
                                                <div className="DescDownDetailsInitialsTop">
                                                    <h1>
                                                        {
                                                            findOneTourData?.tourName
                                                        }
                                                    </h1>
                                                    <p>
                                                        
                                                        <span>
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiOutlineStar />
                                                            <AiOutlineStar />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="DescDownDetailsInitialsMid">
                                                    {findOneTourData.amenities}
                                                </div>
                                                <div className="DescDownDetailsInitialsMid2">
                                                    <p>
                                                        {findOneTourData.info}{" "}
                                                        See more
                                                    </p>
                                                </div>
                                                <div className="DescDownDetailsInitialsDown">
                                                    <h3>Make Your Review</h3>
                                                    {userToken ? (
                                                        <>
                                                            <div className="DescDownDetailsInitialsDownBox">
                                                                <InputNumber
                                                                    min={0}
                                                                    max={5}
                                                                    placeholder="0"
                                                                    value={
                                                                        rating
                                                                    }
                                                                    onChange={(
                                                                        value
                                                                    ) =>
                                                                        setRating(
                                                                            value
                                                                        )
                                                                    }
                                                                    size="large"
                                                                    style={{
                                                                        width: "70px",
                                                                    }}
                                                                />
                                                                <Input
                                                                    placeholder="Your Comment"
                                                                    className="DescDownDetailsInitialsDownCmt"
                                                                    value={
                                                                        comment
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setComment(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                />
                                                                <Button
                                                                    type="primary"
                                                                    onClick={
                                                                        handleCommentUpload
                                                                    }
                                                                    
                                                                >
                                                                    {loadingComment ? (
                                                                        <SpinnerCircular
                                                                            size={
                                                                                20
                                                                            }
                                                                        />
                                                                    ) : (
                                                                        "Post"
                                                                    )}
                                                                </Button>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {" "}
                                                            <Link
                                                                to="/Login"
                                                                style={{
                                                                    textDecoration:
                                                                        "none",
                                                                    color: "blue",
                                                                    margin: "10px",
                                                                }}
                                                            >
                                                                <h3>
                                                                    Log In to
                                                                    Make a
                                                                    review
                                                                </h3>
                                                            </Link>{" "}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="DescDownDetailsCommentSec">
                                                <div className="ReviewContainer">
                                                    <div className="ReviewsHeader">
                                                        <h2>What People Say</h2>
                                                    </div>

                                                    <div className="ReviewDetOver">
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
                                                                                        ?.postedBy
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
                                                                                        ?.postedBy
                                                                                        .firstName
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
                                                                                            .lastName
                                                                                    }
                                                                                </span>
                                                                            </h5>
                                                                            <p>
                                                                                {
                                                                                    item?.postedTime
                                                                                }
                                                                            </p>
                                                                            <span>
                                                                                {/* <AiFillStar />
                                                                                <AiFillStar />
                                                                                <AiFillStar />
                                                                                <AiOutlineStar />
                                                                                <AiOutlineStar /> */}
                                                                                <StarRating rating={item?.star} />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ReviewComment1Text">
                                                                        <p>
                                                                            {
                                                                                item?.comment
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>

                                        <div className="DescButtonBook">

                                            <button onClick={handleBackToTour}>Back</button>
                                            <button onClick={HandleBookNow} disabled={isLoading}>
                                            {isLoading ? 'Loading...' : 'Book Now'}
                                                {/* Book Now */}
                                            </button>

                                        </div>
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
};

export default DescPage;

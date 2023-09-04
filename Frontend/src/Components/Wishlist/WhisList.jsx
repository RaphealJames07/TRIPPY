import {useEffect, useState} from "react";
import HeaderLone from "../Header/HeaderLone";
import Footer from "../Footer/Footer";
import "./WishList.css";
import axios from "axios";
import {useSelector} from "react-redux";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {PulseLoader} from "react-spinners";
import {useDispatch} from "react-redux";
import {findOneTour} from "../Redux/Features";
import {useNavigate} from "react-router";
import {Modal} from "antd";


const WishList = () => {
    const userToken = useSelector((state) => state.Trippy.trippyUser.token);
    const [wishlistRes, setWishListRes] = useState([]);
    const Dispatch = useDispatch();
    const nav = useNavigate();

    const handleGetWishList = () => {
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        console.log("Getting WishList...");
        const url = "https://trippyapiv1.onrender.com/trippy/wishlist";
        axios
            .get(url, {headers})
            .then((res) => {
                console.log("response", res);
                setWishListRes(res.data.wishlist);
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    };

    useEffect(() => {
        handleGetWishList();
    }, []);

    const [loadingStates, setLoadingStates] = useState({});

    const handleViewMore = (tourId) => {
        setLoadingStates((prevLoadingStates) => ({
            ...prevLoadingStates,
            [tourId]: true,
        }));

        axios
            .get(
                `https://trippyapiv1.onrender.com/trippy/findone-tour/${tourId}`
            )
            .then((res) => {
                const tourData = res.data.tour;

                Dispatch(findOneTour(tourData));
                setLoadingStates((prevLoadingStates) => ({
                    ...prevLoadingStates,
                    [tourId]: false,
                }));
                nav(`/BookingNew/${tourId}`);
            })
            .catch((error) => {
                console.error("Error fetching tour data:", error);
                setLoadingStates((prevLoadingStates) => ({
                    ...prevLoadingStates,
                    [tourId]: false,
                }));
            });
    };

    console.log(wishlistRes);

    
    // const [heartColor, setHeartColor] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);
    const [addingWish, setAddingWish] = useState(false);
    
    const data = {};
    const removeFromWhislist = (tourId) => {
        setModalVisible(true);
        setAddingWish(true);
        
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
            .put(
                `https://trippyapiv1.onrender.com/trippy/wishlist/${tourId}`,
                data,
                {headers}
            )
            .then((res) => {
                console.log(res);
                handleGetWishList()
                setAddingWish(false)
                setAddSuccess(true);
            })
            .catch((err) => {
                console.log(err);
                setAddSuccess(false);
            })
            .finally(() => {
                setTimeout(() => {
                    setAddingWish(false);
                    setModalVisible(false);
                    setAddSuccess(false);
                }, 3000); // Close modal after 3 seconds
            });
    };

    
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>

<Modal
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                className="HeroModalBody"
            >
                {addingWish ? (
                    <p>Removing From Wishlist...</p>
                ) : (
                    <p>
                        {addSuccess
                            ? "Tour Removed Successfully"
                            : "Failed To Remove Tour"}
                    </p>
                )}
            </Modal>

            <div className="WishListBody">
                <HeaderLone />
                <div className="WishListContents">
                    <div className="WishListTop">
                        <h1>My Wish List</h1>
                    </div>
                    <div className="WishListDown">
                        <div className="WishListDownWrap">
                            {wishlistRes?.map((item, index) => (
                                <div className="WishListItem1" key={index}>
                                    <div className="WishListItem1ImgTop">
                                        <img src={item.images[0]} alt="" />
                                    </div>
                                    <div className="WishListItem1ItemDetails">
                                        <p>{item?.tourName} </p>
                                        <p>
                                            {item?.city}{" "}
                                            <span>{item?.country}</span>
                                        </p>
                                        <div className="WishListItem1StarBox">
                                            <div className="WishListItem1StarRate">
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiOutlineStar />
                                                <AiOutlineStar />
                                                <span>
                                                    {item?.starRating}
                                                     {' '}Review
                                                </span>
                                            </div>
                                            <div className="WishListItem1ButtonViewMore">
                                                <button
                                                    onClick={() =>
                                                        removeFromWhislist(item._id)
                                                    }
                                                >
                                                    {loadingStates[
                                                        findOneTour
                                                    ] ? (
                                                        <PulseLoader color="#36d7b7" />
                                                    ) : (
                                                        "Remove"
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleViewMore(item._id)
                                                    }
                                                >
                                                    {loadingStates[item._id] ? (
                                                        <PulseLoader color="#36d7b7" />
                                                    ) : (
                                                        "View More"
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default WishList;

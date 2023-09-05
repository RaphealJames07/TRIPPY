// import "./Continental.css";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { useState } from "react";
// import Europe from "../Continents/Europe";
// import America from "../Continents/America";
// import AllContinent from "../Continents/All";
// import Asia from "../Continents/Asia";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
// import { findOneTour } from "../Redux/Features";
// // import ContentLoader from "react-content-loader";
// import {PulseLoader} from 'react-spinners'

// const Continental = () => {
//     const [africa, setAfrica] = useState(true);
//     const [europe, setEurope] = useState(false);
//     const [asia, setAsia] = useState(false);
//     const [america, setAmerica] = useState(false);
//     const [all, setAll] = useState(false);
//     const nav = useNavigate();
//     const Dispatch = useDispatch();

//     const toursApiData = useSelector((state) => state.Trippy.allApiData);
//     // console.log(toursApiData);

//     const africaPlaces = toursApiData
//         .filter((obj) => obj.continent === "africa")
//         .map((obj) => obj.places)
//         .flat();

//     // const user = useSelector((state) => state.Trippy.trippyUser);
//     const [loading, setLoading] = useState(false)

//     const handleViewMore = (tourId) => {
//         setLoading(true)
//         axios
//             .get(
//                 `https://trippyapiv1.onrender.com/trippy/findone-tour/${tourId}`
//             )
//             .then((res) => {
//                 const tourData = res.data.tour;
//                 console.log(tourData);
//                 Dispatch(findOneTour(tourData));
//                 setLoading(false)
//                 nav(`/BookingNew/${tourId}`);
//             })
//             .catch((error) => {
//                 console.error("Error fetching tour data:", error);
//                 setLoading(false)
//             });
//     };

//     return (
//         <>
//             <div className="ContiBody">
//                 <div className="ContiWrapper">
//                     <div className="ContiTop">
//                         <div className="ContiHeadetTextDiv">
//                             <h1>Continental Category</h1>
//                         </div>
//                         <div className="ContiNav">
//                             <ul>
//                                 <li
//                                     className={africa ? "active" : null}
//                                     onClick={() => {
//                                         setAfrica(true);
//                                         setEurope(false);
//                                         setAsia(false);
//                                         setAmerica(false);
//                                         setAll(false);
//                                     }}
//                                 >
//                                     Africa
//                                 </li>
//                                 <li
//                                     className={asia ? "active" : null}
//                                     onClick={() => {
//                                         setAfrica(false);
//                                         setEurope(false);
//                                         setAsia(true);
//                                         setAmerica(false);
//                                         setAll(false);
//                                     }}
//                                 >
//                                     Asia
//                                 </li>
//                                 <li
//                                     className={europe ? "active" : null}
//                                     onClick={() => {
//                                         setAfrica(false);
//                                         setEurope(true);
//                                         setAsia(false);
//                                         setAmerica(false);
//                                         setAll(false);
//                                     }}
//                                 >
//                                     Europe
//                                 </li>
//                                 <li
//                                     className={america ? "active" : null}
//                                     onClick={() => {
//                                         setAfrica(false);
//                                         setEurope(false);
//                                         setAsia(false);
//                                         setAmerica(true);
//                                         setAll(false);
//                                     }}
//                                 >
//                                     Americans
//                                 </li>
//                                 <li
//                                     className={all ? "active" : null}
//                                     onClick={() => {
//                                         setAfrica(false);
//                                         setEurope(false);
//                                         setAsia(false);
//                                         setAmerica(false);
//                                         setAll(true);
//                                     }}
//                                 >
//                                     All Places
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="ContiDown">
//                         {africa ? (
//                             <>
//                                 {africaPlaces?.map((item, index) => (
//                                     <div className="ContiImgBox" key={index}>
//                                         <div className="ContiImgDiv">
//                                             <img
//                                                 src={item.images[0]}
//                                                 alt=""
//                                                 draggable="false"
//                                             />
//                                             {/* <ContentLoader/> */}
//                                             <div className="ContiAddToFav"></div>
//                                         </div>
//                                         <div className="ContiCTA">
//                                             {item?.tourName}
//                                             <span>
//                                                 <h4>{item?.country}</h4>
//                                             </span>
//                                             <h4>{item.city}</h4>
//                                             <div className="ContiCTABtnRev">
//                                                 <div className="ContiCTAREV">
//                                                     <AiFillStar />
//                                                     <AiFillStar />
//                                                     <AiFillStar />
//                                                     <AiOutlineStar />
//                                                     <AiOutlineStar />
//                                                     <span>
//                                                         {item.ratings.length}{" "}
//                                                         Review
//                                                     </span>
//                                                 </div>
//                                                 <button
//                                                     onClick={() =>
//                                                         handleViewMore(
//                                                             item?._id
//                                                         )
//                                                     }
//                                                 >
//                                                     {
//                                                         loading? <><PulseLoader color="#36d7b7" /> </> : 'View More'
//                                                     }
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </>
//                         ) : europe ? (
//                             <Europe />
//                         ) : asia ? (
//                             <Asia />
//                         ) : america ? (
//                             <America />
//                         ) : all ? (
//                             <AllContinent />
//                         ) : null}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Continental;

import "./Continental.css";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {FaHeart} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";
import {useState, useEffect} from "react";
import Europe from "../Continents/Europe";
import America from "../Continents/America";
import AllContinent from "../Continents/All";
import Asia from "../Continents/Asia";
import {useSelector} from "react-redux/es/hooks/useSelector";
import axios from "axios";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {findOneTour} from "../Redux/Features";

import {PulseLoader} from "react-spinners";
import { Link } from "react-router-dom";
import {Modal} from "antd";

const Continental = () => {
    const [africa, setAfrica] = useState(true);
    const [africaVisibleCount, setAfricaVisibleCount] = useState(4);
    const [europe, setEurope] = useState(false);
    const [asia, setAsia] = useState(false);
    const [america, setAmerica] = useState(false);
    const [all, setAll] = useState(false);
    const [showNextIcon, setShowNextIcon] = useState(true);
    console.log(showNextIcon);
    const nav = useNavigate();
    const Dispatch = useDispatch();

    const toursApiData = useSelector((state) => state.Trippy.allApiData);

    const africaPlaces = toursApiData
        .filter((obj) => obj.continent === "africa")
        .map((obj) => obj.places)
        .flat();

    const [loadingStates, setLoadingStates] = useState({});

    useEffect(() => {
        // Check if there are more items to display
        setShowNextIcon(africaVisibleCount < africaPlaces.length);
    }, [africaVisibleCount, africaPlaces]);

    const loadMoreAfricaItems = () => {
        setAfricaVisibleCount(africaVisibleCount + 4); // Increase the number of visible items
    };

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
    const [addWishList, setAddWishList] = useState([]);
    // const [heartColor, setHeartColor] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);
    const [addingWish, setAddingWish] = useState(false);
    const user = useSelector((state) => state.Trippy.trippyUser);
    const userToken  = user ? user.token : null;
    const data = {};

    const handleAddToWishList = (tourId) => {
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
                setAddWishList([...addWishList, tourId]); // Add tourId to addWishList
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

    console.log(addWishList);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <Modal
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                className="HeroModalBody"
            >
                {addingWish ? (
                    <p>Adding to Wishlist...</p>
                ) : (
                    <p>
                        {addSuccess
                            ? "Tour Added Successfully"
                            : "Failed To Add Tour"}
                    </p>
                )}
            </Modal>

            <div className="ContiBody">
                <div className="ContiWrapper">
                    <div className="ContiTop">
                        <div className="ContiHeadetTextDiv">
                            <h1>Continental Category</h1>
                        </div>
                        <div className="ContiNav">
                            <ul>
                                <li
                                    className={africa ? "active" : null}
                                    onClick={() => {
                                        setAfrica(true);
                                        setEurope(false);
                                        setAsia(false);
                                        setAmerica(false);
                                        setAll(false);
                                    }}
                                >
                                    Africa
                                </li>
                                <li
                                    className={asia ? "active" : null}
                                    onClick={() => {
                                        setAfrica(false);
                                        setEurope(false);
                                        setAsia(true);
                                        setAmerica(false);
                                        setAll(false);
                                    }}
                                >
                                    Asia
                                </li>
                                <li
                                    className={europe ? "active" : null}
                                    onClick={() => {
                                        setAfrica(false);
                                        setEurope(true);
                                        setAsia(false);
                                        setAmerica(false);
                                        setAll(false);
                                    }}
                                >
                                    Europe
                                </li>
                                <li
                                    className={america ? "active" : null}
                                    onClick={() => {
                                        setAfrica(false);
                                        setEurope(false);
                                        setAsia(false);
                                        setAmerica(true);
                                        setAll(false);
                                    }}
                                >
                                    Americans
                                </li>
                                <li
                                    className={all ? "active" : null}
                                    onClick={() => {
                                        setAfrica(false);
                                        setEurope(false);
                                        setAsia(false);
                                        setAmerica(false);
                                        setAll(true);
                                    }}
                                >
                                    All Places
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ContiDown">
                        <div className="ContiMore"></div>
                        {africa ? (
                            <>
                                {africaPlaces?.map((item, index) => (
                                    <div className="ContiImgBox" key={index}>
                                        <div className="ContiImgDiv">
                                            <img
                                                src={item.images[0]}
                                                alt=""
                                                draggable="false"
                                            />
                                            {/* <ContentLoader/> */}
                                            <div className="ContiAddToFav">
                                                <FaHeart
                                                    style={{
                                                        color: `${
                                                            addWishList.includes(
                                                                item._id
                                                            )
                                                                ? "red"
                                                                : "#00B4D8"
                                                        }`,
                                                    }}
                                                    className="heartIcon"
                                                    onClick={() =>
                                                        handleAddToWishList(
                                                            item._id
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="ContiCTA">
                                            {item?.tourName}

                                            <h4>
                                                {item.city}{" "}
                                                <span>{item?.country}</span>
                                            </h4>
                                            <div className="ContiCTABtnRev">
                                                <div className="ContiCTAREV">
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                    <span>
                                                        {item.ratings.length}{" "}
                                                        Review
                                                    </span>
                                                </div>
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
                                ))}
                                {africaPlaces?.length > africaVisibleCount && (
                                    <div className="LoadMore">
                                        <IoIosArrowForward
                                            className="nextIcon"
                                            onClick={loadMoreAfricaItems}
                                            size={50}
                                        />
                                    </div>
                                )}
                            </>
                        ) : europe ? (
                            <Europe />
                        ) : asia ? (
                            <Asia />
                        ) : america ? (
                            <America />
                        ) : all ? (
                            <AllContinent />
                        ) : null}
                    </div>
                    <div className="ContiMore">
                        <p>
                            Want to see more Tours? click the button below to
                            explore more
                        </p>
            
                        <Link to="/Explore" className="button">
                            <button>Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Continental;

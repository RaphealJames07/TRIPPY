import "./Continental.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaHeart } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { useState, useEffect} from "react";
import Europe from "../Continents/Europe";
import America from "../Continents/America";
import AllContinent from "../Continents/All";
import Asia from "../Continents/Asia";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { findOneTour } from "../Redux/Features";

const Continental = () => {
    const [africa, setAfrica] = useState(true);
    const [africaVisibleCount, setAfricaVisibleCount] = useState(4); 
    const [europe, setEurope] = useState(false);
    const [asia, setAsia] = useState(false);
    const [america, setAmerica] = useState(false);
    const [all, setAll] = useState(false);
    const [showNextIcon, setShowNextIcon] = useState(true);
    const nav = useNavigate();
    const Dispatch = useDispatch()

    const toursApiData = useSelector((state) => state.Trippy.allApiData);
    console.log(toursApiData);

    const africaPlaces = toursApiData
        .filter((obj) => obj.continent === "africa")
        .map((obj) => obj.places)
        .flat();


        useEffect(() => {
            // Check if there are more items to display
            setShowNextIcon(africaVisibleCount < africaPlaces.length);
        }, [africaVisibleCount, africaPlaces]);


        const loadMoreAfricaItems = () => {
            setAfricaVisibleCount(africaVisibleCount + 4); // Increase the number of visible items
          };

    const handleViewMore = (tourId) => {
        axios
            .get(
                `https://trippyapiv1.onrender.com/trippy/findone-tour/${tourId}`
            )
            .then((res) => {
                const tourData = res.data.tour;
                // console.log(tourData);
                Dispatch(findOneTour(tourData))
                nav(`/DescPage/${tourId}`);
            })
            .catch((error) => {
                console.error("Error fetching tour data:", error);
            });
    };

    return (
        <>
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
                        {africa ? (
                            <>
                                {africaPlaces?.slice(0, africaVisibleCount).map((item) => (
                                      <div className="ContiImgBox" key={item?.id}>
                                        <div className="ContiImgDiv">
                                            <img
                                                src={item.images[0]}
                                                alt=""
                                                draggable="false"
                                            />
                                            {/* <ContentLoader/> */}
                                            <div className="ContiAddToFav">
                                                <FaHeart className="heartIcon" />
                                            </div>
                                        </div>
                                        <div className="ContiCTA">
                                            {item?.tourName}
                                            <span>
                                                <h4>{item?.country}</h4>
                                            </span>
                                            <h4>{item.city}</h4>
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
                                                        handleViewMore(
                                                            item?._id
                                                        )
                                                    }
                                                >
                                                    View More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {africaPlaces?.length > africaVisibleCount && (
                                <div className="LoadMore">
                                    <IoIosArrowForward className="nextIcon" onClick={loadMoreAfricaItems} size={50} />
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
                </div>
            </div>
        </>
    );
};

export default Continental;

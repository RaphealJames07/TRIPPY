import "./Continental.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
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
    const [europe, setEurope] = useState(false);
    const [asia, setAsia] = useState(false);
    const [america, setAmerica] = useState(false);
    const [all, setAll] = useState(false);
    const nav = useNavigate();
    const Dispatch = useDispatch()

    const toursApiData = useSelector((state) => state.Trippy.allApiData);
    // console.log(toursApiData);

    const africaPlaces = toursApiData
        .filter((obj) => obj.continent === "africa")
        .map((obj) => obj.places)
        .flat();

    // console.log("Africa places are", africaPlaces);

    // const tourId = africaPlaces[0]._id;
    // console.log("Tour is", tourId);

    // const url = `https://trippyapiv1.onrender.com/trippy/findone-tour/:id`;

    const handleViewMore = (tourId) => {
        axios
            .get(
                `https://trippyapiv1.onrender.com/trippy/findone-tour/${tourId}`
            )
            .then((res) => {
                const tourData = res.data.tour;
                // console.log(tourData);
                Dispatch(findOneTour(tourData))
                nav(`/DescPage`);
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
                                {africaPlaces?.map((item) => (
                                    <div className="ContiImgBox" key={item?.id}>
                                        <div className="ContiImgDiv">
                                            <img
                                                src={item.images[0]}
                                                alt=""
                                                draggable="false"
                                            />
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

import {Fade} from "react-reveal";
import "./Hero.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {SpinnerDotted} from "spinners-react";
import {Button, Modal} from "antd";
import {useDispatch} from "react-redux";
import {clearHeroSearch, heroSearchRes} from "../Redux/Features";
// import { useSelector } from "react-redux";
import {useNavigate} from "react-router";
import {findOneTour} from "../Redux/Features";

import {PulseLoader} from "react-spinners";

const Hero = () => {
    const words = [
        "together",
        "forever",
        "unforgettable",
        "joyfully",
        "always",
    ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    //FUNCTION FOR SEARCH INPUTS

    const [city, setCity] = useState(undefined);
    const [country, setCountry] = useState(undefined);
    const [continent, setContinent] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const data = {country, city};
    const url = "https://trippyapiv1.onrender.com/trippy/find-tours";
    const [modalVisible, setModalVisible] = useState(false);
    const [searchResultStatus, setSearchResultStatus] = useState(null);
    const dispatch = useDispatch();
    const [heroDataresult, setHeroDataresult] = useState([]);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const [emptyResult, setSetEmptyResult] = useState(false);

    const handleHeroSearch = (e) => {
        if (city === '') {
            setModalTwoVisible(true);
            return
        }
        if (country === '') {
            setModalTwoVisible(true);
            return
        }
        e.preventDefault();

        if (error === "Maybe") {
            setError("Please fill in all fields");
        } else {
            setError("");
            setModalVisible(true);
            setSearchResultStatus(null);

            axios
                .get(url, {params: data})
                .then((res) => {
                    console.log("response: ", res.data);
                    const empty = res.data.tours 
                    if(empty.length === 0){
                        setSetEmptyResult(true)
                        setModalVisible(false)
                        return
                    }
                    setSearchResultStatus("success");
                    dispatch(heroSearchRes(res.data));
                    setHeroDataresult(res.data.tours);
                })
                .catch((err) => {
                    console.log(err);
                    setSearchResultStatus("failed");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    // const heroData = useSelector((state) => state.Trippy.heroSearchData.tours);
    // console.log('Hero Data is Here',heroData);

    const [loadingStates, setLoadingStates] = useState({});
    const nav = useNavigate();
    const Dispatch = useDispatch();

    const handleViewMore = (tourId) => {
        setLoadingStates((prevLoadingStates) => ({
            ...prevLoadingStates,
            [tourId]: true,
        }));
        dispatch(clearHeroSearch());

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

    return (
        <>
            <Modal
                open={emptyResult}
                onCancel={() => setSetEmptyResult(false)}
                onOk={() => setSetEmptyResult(false)}
            >
                <div>
                    <p>
                        No Results Found, try searching again
                    </p>
                </div>
            </Modal>
            <Modal
                open={modalTwoVisible}
                onCancel={() => setModalTwoVisible(false)}
                onOk={() => setModalTwoVisible(false)}
            >
                <div>
                    <p>
                        Please Input Country And City
                    </p>
                </div>
            </Modal>
            <Modal
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                className="HeroModalBody"
                onOk={() => setModalVisible(false)}
            >
                {searchResultStatus === "success" ? (
                    <>
                        <div className="HeroPlayBody">
                            <div className="HeroPlayCard">
                                <div className="HeroPlayCardHead">
                                    Search Results
                                </div>
                                <div className="HeroPlayCardResults">
                                    {heroDataresult?.map((item, index) => (
                                        <div
                                            className="HeroPlayCardItem1"
                                            key={index}
                                        >
                                            <div className="HeroPlayCardImgDiv">
                                                <img
                                                    src={item?.images[0]}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="HeroPlayCardDetailsDiv">
                                                <div className="HeroPlayCardDetails1">
                                                    {item?.tourName}
                                                </div>
                                                <div className="HeroPlayCardDetails2">
                                                    {item?.city}{" "}
                                                    <span>{item?.country}</span>
                                                </div>
                                                <div className="HeroPlayCardDetails3">
                                                    Tour Price:{" "}
                                                    {item?.pricePerPerson}{" "}
                                                    <span>
                                                        Rating:{" "}
                                                        {item?.starRating}
                                                    </span>
                                                </div>
                                                <div className="HeroPlayCardDetails4">
                                                    <Button
                                                        onClick={() =>
                                                            handleViewMore(
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        {loadingStates[
                                                            item._id
                                                        ] ? (
                                                            <PulseLoader color="#36d7b7" />
                                                        ) : (
                                                            "View More"
                                                        )}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : searchResultStatus === "failed" ? (
                    <p>Search failed</p>
                ) : (
                    <p>Searching...</p>
                )}
            </Modal>

            <div className="HeroBody">
                <div className="HeroWrapper">
                    <div className="HeroTexth1">
                        <Fade left cascade>
                            <h1>
                                Let us make memories{" "}
                                <span>{words[currentWordIndex]}</span>
                            </h1>
                        </Fade>
                    </div>
                    <div className="HeroSearchDiv">
                        <div className="HeroSearchDivWrapper">
                            <div className="HeroSearchDivText">
                                <p>Search For Your Trip</p>
                            </div>
                            <div className="HeroSearchDivInputs">
                                <nav className="HeroSearchDivInputsNav">
                                    <input
                                        type="text"
                                        className="SelectTag"
                                        placeholder="Enter City"
                                        value={city}
                                        onChange={(e) =>
                                            setCity(e.target.value)
                                        }
                                    />
                                    <input
                                        type="text"
                                        className="SelectTag"
                                        placeholder="Enter Country"
                                        value={country}
                                        onChange={(e) =>
                                            setCountry(e.target.value)
                                        }
                                    />
                                    <select
                                        name="continent"
                                        id=""
                                        className="SelectTag"
                                        value={continent}
                                        onChange={(e) =>
                                            setContinent(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Select Continent
                                        </option>
                                        <option
                                            value="africa"
                                            onChange={(e) => e.target.value}
                                        >
                                            Africa
                                        </option>
                                        <option
                                            value="europe"
                                            onChange={(e) => e.target.value}
                                        >
                                            Europe
                                        </option>
                                        <option
                                            value="asia"
                                            onChange={(e) => e.target.value}
                                        >
                                            Asia
                                        </option>
                                        <option
                                            value="americans"
                                            onChange={(e) => e.target.value}
                                        >
                                            Americans
                                        </option>
                                    </select>
                                </nav>
                                <div className="HeroSearchDivInputsBtnDiv">
                                    <button onClick={handleHeroSearch}>
                                        {loading ? <SpinnerDotted /> : "Search"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HeroSearchDivMobile">
                    <h3>Search For your Trip</h3>
                    <div className="HeroSearchDivInputsMobile">
                        <nav className="HeroSearchDivInputsNav">
                            <input
                                type="text"
                                placeholder="Enter City"
                                className="SelectTag"
                            />
                            <input
                                type="text"
                                placeholder="Enter Country"
                                className="SelectTag"
                            />

                            <select
                                name="continent"
                                id=""
                                className="SelectTag"
                            >
                                <option value="">Select Continent</option>
                                <option value="africa">Africa</option>
                                <option value="europe">Europe</option>
                                <option value="asia">Asia</option>
                                <option value="americans">Americans</option>
                            </select>
                        </nav>
                        <button onClick={handleHeroSearch}>
                            {loading ? <SpinnerDotted /> : "Search"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

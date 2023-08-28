
import {Fade} from "react-reveal";
import "./Hero.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {SpinnerDotted} from "spinners-react";
import {Modal} from "antd";

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
    const data = { country, city};
    const url = "https://trippyapiv1.onrender.com/trippy/find-tours";
    const [modalVisible, setModalVisible] = useState(false);
    const [searchResultStatus, setSearchResultStatus] = useState(null); 

    const handleHeroSearch = (e) => {
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
                    setSearchResultStatus("success");
                    
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

    return (
        <>
            <Modal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
            >
                {searchResultStatus === "success" ? (
                    <p>Search successful</p>
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

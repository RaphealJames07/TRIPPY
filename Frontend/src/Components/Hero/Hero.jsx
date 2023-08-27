
import {Fade} from "react-reveal";
import "./Hero.css";
import {useState, useEffect} from "react";

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

    return (
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
                                
                                <input type="text" className="SelectTag" placeholder="Enter City"/>
                                <input type="text" className="SelectTag" placeholder="Enter Country"/>
                                <select name="continent" id="" className="SelectTag">
                                    <option value="">Select Continent</option>
                                    <option value="africa">Africa</option>
                                    <option value="europe">Europe</option>
                                    <option value="asia">Asia</option>
                                    <option value="americans">Americans</option>
                                </select>
                            </nav>
                            <div className="HeroSearchDivInputsBtnDiv">
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="HeroSearchDivMobile">
                <h3>Search For your Trip</h3>
                <div className="HeroSearchDivInputsMobile">
                <nav className="HeroSearchDivInputsNav">
                                
                                    <input type="text" placeholder="Enter City" className="SelectTag"/>
                                    <input type="text" placeholder="Enter Country" className="SelectTag"/>
                               
                                <select name="continent" id="" className="SelectTag">
                                    <option value="">Select Continent</option>
                                    <option value="africa">Africa</option>
                                    <option value="europe">Europe</option>
                                    <option value="asia">Asia</option>
                                    <option value="americans">Americans</option>
                                </select>
                            </nav>
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

import "./Hero.css";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
    return (
        <>
            <div className="HeroBody">
                <div className="HeroWrapper">
                        <div className="HeroTexth1">
                    <Fade left cascade className="HeroFade">
                            <h1>Let us take you there</h1>
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
                                            type="search"
                                            placeholder="City"
                                        />
                                        <input
                                            type="search"
                                            placeholder="Departure"
                                        />
                                        <input
                                            type="search"
                                            placeholder="Arrival"
                                        />
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
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Departure" />
                        <input type="text" placeholder="Arrival" />
                        <input type="text" placeholder="Budget" />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

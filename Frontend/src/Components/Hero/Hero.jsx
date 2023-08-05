import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="HeroBody">
                <div className="HeroWrapper">
                    <div className="HeroTexth1">
                        <h1>Let Us Take You Away</h1>
                    </div>
                    <div className="HeroSearchDiv">
                        <div className="HeroSearchDivWrapper">
                            <div className="HeroSearchDivText">
                                <p>Search For Your Trip</p>
                            </div>
                            <div className="HeroSearchDivInputs">
                                <nav className="HeroSearchDivInputsNav">
                                    <input type="search" placeholder="City" />
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
            </div>
        </>
    );
};

export default Hero;

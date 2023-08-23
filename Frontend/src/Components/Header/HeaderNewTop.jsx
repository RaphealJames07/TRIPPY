import "./HeaderNew.css";
import "./HeaderNewMedia.css";
import { Fade } from "react-awesome-reveal";
import Logo from "../../assets/Logo.png";
import Ham from "../../assets/hamburger.png";
import { useState, useEffect } from "react";


const HeaderNewTop = () => {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showHelloWorld, setShowHelloWorld] = useState(false);
    const [popUp, setPopUp] = useState(false);


    const toggleCollapse = () => {
        setOpen(!open);
    };

    const togglePopUp = () => {
        setPopUp(!popUp);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 500) {
            setShowHelloWorld(true);
        } else {
            setShowHelloWorld(false);
        }
    }, [scrollPosition]);

    return (
        <>
            <div className="HeaderNewTopDivWrap">
                <div className="HeaderNewTopDivLeft">
                    <img
                        src={Ham}
                        alt=""
                        onClick={toggleCollapse}
                        className="Ham"
                    />

                    <img src={Logo} alt="" />
                </div>
                <div
                    className="HeaderNewHelloWorld"
                    // style={{
                    //     display: showHelloWorld ? "flex" : "none",
                    // }}
                >
                    {showHelloWorld ? (
                        <Fade className="FadeBody">
                            <>
                                <input type="text" placeholder="Flights" />
                                <input type="text" placeholder="Hotels" />
                                <input type="text" placeholder="Car" />
                                <button>Search</button>
                            </>
                        </Fade>
                    ) : (
                        <>
                            <Fade cascade={true}>
                                <h2>Good Morning Mr Koko</h2>
                            </Fade>
                        </>
                    )}
                </div>
                <div className="HeaderNewTopDivRight">
                    <div
                        className="HeaderNewTopDivRightCircle"
                        onClick={() => togglePopUp(!popUp)}
                    >
                        RJ
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNewTop;

import "./HeaderNew.css";
import { useState, useEffect } from "react";
import Icon from "../../assets/bag.png";
import NewFlight from "../Flight/NewFlight";
import NewHotel from "../Hotel/NewHotel";
import NewCar from "../Car/NewCar";
import NewExplore from "../Explore/NewExplore";
import NewBookings from "../Bookings/NewBookings";
import NewFavorites from "../Favorites/NewFavorites";
import NewAbout from "../About/NewAbout";
import { Fade } from "react-awesome-reveal";
import Hero from "../Hero/Hero";
import Continental from "../Continental/Continental";
import Footer from "../Footer/Footer";

const HeaderNew = () => {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showHelloWorld, setShowHelloWorld] = useState(false);
    const [home, setHome] = useState(true);
    const [flight, setFlight] = useState(false);
    const [hotel, setHotel] = useState(false);
    const [car, setCar] = useState(false);
    const [explore, setExplore] = useState(false);
    const [bookings, setBookings] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const [about, setAbout] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
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
            <div className="HeaderNewBody">
                <div className="HeaderNewTopDiv">
                    <div className="HeaderNewTopDivWrap">
                        <div className="HeaderNewTopDivLeft">
                            <div
                                className="HeaderNewTopDivLeftHamburger"
                                onClick={toggleCollapse}
                            ></div>
                            <h1>Trippy</h1>
                        </div>
                        <div
                            className="HeaderNewHelloWorld"
                            // style={{
                            //     display: showHelloWorld ? "flex" : "none",
                            // }}
                        >
                            {showHelloWorld & home ? (
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
                                        <h2>
                                            Good Morning Mr Koko
                                        </h2>
                                    </Fade>
                                </>
                            )}
                        </div>
                        <div className="HeaderNewTopDivRight">
                            <div className="HeaderNewTopDivRightCircle">RJ</div>
                            <p>
                                raphealjuniro07@gmail.com <span>V</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="HeaderNewNavdiv">
                    <div
                        id="example-collapse-text"
                        className={`collapse ${open ? "show" : ""}`}
                    >
                        <ul>
                            <li
                                onClick={() => {
                                    setHome(true);
                                    setFlight(false);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Home</p>
                            </li>
                            <li
                                onClick={() => {
                                    setHome(false);
                                    setFlight(true);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Flight</p>
                            </li>
                            <li
                                onClick={() => {
                                    setHome(false);
                                    setFlight(false);
                                    setHotel(true);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Hotel</p>
                            </li>
                            <li
                                onClick={() => {
                                    setHome(false);
                                    setFlight(false);
                                    setHotel(false);
                                    setCar(true);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Car</p>
                            </li>
                            <li
                                onClick={() => {
                                    setHome(false);
                                    setFlight(false);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(true);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Explore</p>
                            </li>
                            <li
                                onClick={() => {
                                    setHome(false);
                                    setFlight(false);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(true);
                                    setFavorites(false);
                                    setAbout(false);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Bookings</p>
                            </li>
                            <li
                                onClick={() => {
                                    setHome(false);
                                    setFlight(false);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(true);
                                    setAbout(false);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Favorites</p>
                            </li>
                            <li
                                onClick={() => {
                                    setHome(false);
                                    setFlight(false);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(true);
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p> About Us</p>
                            </li>
                        </ul>
                    </div>
                    <div className="HeaderNewNavdivMain">
                        <div className="HeaderNewNavdivMainWrap">
                            {home ? (
                                <>
                                    <Hero/>
                                    <Continental />
                                </>
                            ) : flight ? (
                                <NewFlight />
                            ) : hotel ? (
                                <NewHotel />
                            ) : car ? (
                                <NewCar />
                            ) : explore ? (
                                <NewExplore />
                            ) : bookings ? (
                                <NewBookings />
                            ) : favorites ? (
                                <NewFavorites />
                            ) : about ? (
                                <NewAbout />
                            ) : null}
                        
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNew;

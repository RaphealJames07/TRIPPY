import "./HeaderNew.css";
import { useState, useEffect } from "react";
import Icon from "../../assets/bag.png";
import { MdOutlineCancel } from "react-icons/md";
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
import Logo from "../../assets/Logo.png";
import Ham from "../../assets/hamburger.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { trippyUserLogOut } from "../Redux/Features";
import { useDispatch } from "react-redux";
import { BiUser } from "react-icons/bi";
// import HeaderNewTop from "./HeaderNewTop";

const HeaderNew = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);
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
    const [popUp, setPopUp] = useState(false);
    const [moveContent, setMoveContent] = useState(true);

    const toggleCollapse = () => {
        setOpen(!open);
        setMoveContent(!moveContent);
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

    const user = useSelector((state) => state.Trippy.trippyUser);

    const getCurrentTimePeriod = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 0 && currentHour < 12) {
            return "Morning";
        } else if (currentHour >= 12 && currentHour < 16) {
            return "Afternoon";
        } else {
            return "Evening";
        }
    };

    return (
        <>
            <div className="HeaderNewBody">
                <div className="HeaderNewTopDiv">
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
                            {showHelloWorld & home ? (
                                <Fade className="FadeBody">
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Flights"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Hotels"
                                        />
                                        <input type="text" placeholder="Car" />
                                        <button>Search</button>
                                    </>
                                </Fade>
                            ) : (
                                <>
                                    <Fade cascade={true}>
                                        <h2
                                            style={{
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {user ? (
                                                <>
                                                    Good{" "}
                                                    {getCurrentTimePeriod()}{" "}
                                                    {user.firstName}{" "}
                                                </>
                                            ) : (
                                                "Welcome To Trippy"
                                            )}
                                        </h2>
                                    </Fade>
                                </>
                            )}
                        </div>
                        <div className="HeaderNewTopDivRight">
                            <div
                                className="HeaderNewTopDivRightCircle"
                                onClick={() => togglePopUp(!popUp)}
                                style={{
                                    textTransform: "capitalize",
                                    border: user
                                        ? "2px solid green"
                                        : "2px solid red",
                                }}
                            >
                                {user ? (
                                    <>
                                        {user.firstName.charAt(0)}{" "}
                                        {user.lastName.charAt(0)}
                                    </>
                                ) : (
                                    <>
                                        <BiUser className="BiUserCircle" />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {popUp ? (
                        <>
                            <div className="HeaderAccPopUp">
                                <div className="HeaderAccPopUpTop">
                                    <div
                                        className="HeaderAccPopUpTopIcon"
                                        style={{ textTransform: "capitalize" }}
                                    >
                                        {user ? (
                                            <>
                                                {user.firstName.charAt(0)}{" "}
                                                {user.lastName.charAt(0)}
                                            </>
                                        ) : (
                                            "No"
                                        )}
                                    </div>
                                    <div className="HeaderAccPopUpTopText">
                                        <h3
                                            style={{
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {user ? (
                                                <>
                                                    {user.firstName}{" "}
                                                    {user.lastName}
                                                </>
                                            ) : (
                                                "Sign Up Please"
                                            )}
                                        </h3>
                                        <p>{user ? <>{user.email}</> : null}</p>
                                    </div>
                                </div>
                                <div className="HeaderAccPopUpDown">
                                    <ul>
                                        <li>WishList</li>
                                        <li>Profile</li>
                                        <li>Help/FAQ</li>
                                    </ul>
                                    <div className="HeaderAccPopUpDownBtns">
                                        {user ? (
                                            <>
                                                <div className="HeaderAccPopUpDownBtns1">
                                                    <button
                                                        onClick={() => {
                                                            dispatch(
                                                                trippyUserLogOut()
                                                            );
                                                            // alert("User LogOut Successfully");
                                                        }}
                                                    >
                                                        SignOut
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="HeaderAccPopUpDownBtns2">
                                                <Link to="/Login">
                                                    <button>Log In</button>
                                                </Link>
                                                <Link to="/SignUp">
                                                    <button>Sign Up</button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
                <div className="HeaderNewNavdiv">
                    <div className={`collapse ${open ? "show" : ""}`}>
                        <div className="MobileNavDropHeader">
                            <img src={Logo} alt="" />
                            <MdOutlineCancel
                                className="CancelNavDrop"
                                onClick={toggleCollapse}
                            />
                        </div>
                        <ul>
                            <li
                                onClick={() => {
                                    toggleCollapse(true);
                                    setHome(true);
                                    setFlight(false);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                    toggleCollapse(false)
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Home</p>
                            </li>
                            <li
                                onClick={() => {
                                    toggleCollapse(true);
                                    setHome(false);
                                    setFlight(true);
                                    setHotel(false);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                    toggleCollapse(false)
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Flight</p>
                            </li>
                            <li
                                onClick={() => {
                                    toggleCollapse(false);
                                    setHome(false);
                                    setFlight(false);
                                    setHotel(true);
                                    setCar(false);
                                    setExplore(false);
                                    setBookings(false);
                                    setFavorites(false);
                                    setAbout(false);
                                    toggleCollapse(false)
                                }}
                            >
                                <span>
                                    <img src={Icon} alt="" />
                                </span>
                                <p>Hotel</p>
                            </li>
                            <li
                                onClick={() => {
                                    toggleCollapse(false);
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
                                    toggleCollapse(false);
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
                                    toggleCollapse(false);
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
                                    toggleCollapse(false);
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
                                    toggleCollapse(false);
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
                    <div
                        className={`HeaderNewNavdivMain ${
                            moveContent ? "" : "Less"
                        }`}
                    >
                        <div className="HeaderNewNavdivMainWrap">
                            {home ? (
                                <>
                                    <Hero />
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
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNew;

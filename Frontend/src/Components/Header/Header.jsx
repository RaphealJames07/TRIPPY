import "./Header.css";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { trippyUserLogOut } from "../Redux/Features";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePlus } from "react-icons/hi";
import ClearBookingModal from "../ExitModal/Modal";


const Header = () => {
    const [toggleUser, setToggleUser] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const Dispatch = useDispatch();
    const nav = useNavigate()

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const bookingCart = useSelector((state) => state.Trippy.trippyBookingCart);


    const handleHomeButtonClick = () => {
        if (bookingCart.length > 0) {
            setModalIsOpen(true);
        } else {
            nav('/Home')
        }
    };

    const user = useSelector((state) => state.Trippy.trippyUser);
    // if (user) {
    //     console.log("User is Available: ", user);
    // } else {
    //     console.log("User is Unavailable");
    // }

    const handleDropdown = () => {
        document.querySelector(".HeaderBodyMobile").classList.remove("active");
        setToggleDropdown(!toggleDropdown);
    };
    const handleRomoveDropdown = () => {
        document.querySelector(".HeaderBodyMobile").classList.add("active");
        setToggleDropdown(!toggleDropdown);
    };

    return (
        <>
            <div className="HeaderBody">
                <div className="HeaderWrapper">
                    <div className="HeaderLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="HeaderNavDiv">
                        <nav>
                            <ul>
                                <li  onClick={handleHomeButtonClick}>
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        to="/Home"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>Booking</li>
                                <li>Explore</li>
                                <li>About Us</li>
                                <ClearBookingModal
                                    isOpen={modalIsOpen}
                                    onRequestClose={() => setModalIsOpen(false)}
                                />
                            </ul>
                        </nav>
                    </div>
                    <div className="HeaderAccDiv">
                        {user ? (
                            <div
                                className="UserCircle"
                                onMouseEnter={() => setToggleUser(!toggleUser)}
                            ></div>
                        ) : (
                            <div
                                className="NoUserCircle"
                                onMouseEnter={() => setToggleUser(!toggleUser)}
                            ></div>
                        )}
                    </div>
                </div>
            </div>
            {toggleUser ? (
                <div
                    className="UserMobileDropDown"
                    onMouseLeave={() => setToggleUser(!toggleUser)}
                >
                    {user ? (
                        <button
                            className="UserMobileDropDownSignoutBtn"
                            onClick={() => {
                                Dispatch(trippyUserLogOut());
                                // alert("User LogOut Successfully");
                            }}
                        >
                            SignOut
                        </button>
                    ) : (
                        <>
                            <Link className="LinkTag" to="/Login">
                                <button>Login</button>
                            </Link>
                            <Link className="LinkTag" to="/SignUp">
                                <button>SignUp</button>
                            </Link>
                        </>
                    )}
                </div>
            ) : null}
            <div className="HeaderBodyMobile active">
                <div className="HeaderLogoMobileDiv">
                    <img src={Logo} alt="" />
                </div>
                <div className="HeaderDropBoxMobileDiv">
                    <div className="Togglebox">
                        <GiHamburgerMenu
                            className="GiHamburgerMenu"
                            onClick={handleDropdown}
                        />
                    </div>

                    <div className="HeaderAccDivMobile">
                        {user ? (
                            <div
                                className="UserCircleMobile"
                                onClick={() => setToggleUser(!toggleUser)}
                            ></div>
                        ) : (
                            <div
                                className="NoUserCircleMobile"
                                onClick={() => setToggleUser(!toggleUser)}
                            ></div>
                        )}
                    </div>
                </div>
            </div>
            {toggleDropdown && (
                <div className="HeaderMobileDropDown">
                    <HiOutlinePlus
                        className="HiOutlinePlus"
                        onClick={handleRomoveDropdown}
                    />

                    <div>Home</div>
                    <div>Booking</div>
                    <div>Explore</div>
                    <div>About Us</div>
                </div>
            )}
        </>
    );
};

export default Header;

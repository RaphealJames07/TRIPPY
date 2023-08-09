import "./Header.css";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { trippyUserLogOut } from "../Redux/Features";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePlus } from "react-icons/hi";

const Header = () => {
    const [toggleUser, setToggleUser] = useState(false);
    const Dispatch = useDispatch();
    const user = useSelector((state) => state.Trippy.trippyUser);
    if (user) {
        console.log("User is Available: ", user);
    } else {
        console.log("User is Unavailable");
    }
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
                                <li>Home</li>
                                <li>Booking</li>
                                <li>Explore</li>
                                <li>About Us</li>
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
                    className="UserDropDown"
                    onMouseLeave={() => setToggleUser(!toggleUser)}
                >
                    {user ? (
                        <button
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
            <div className="HeaderBodyMobile">
                <div className="HeaderLogoMobileDiv">
                    <img src={Logo} alt="" />
                </div>
                <div className="HeaderDropBoxMobileDiv">
                    <GiHamburgerMenu />
                    <HiOutlinePlus />
                </div>
            </div>
        </>
    );
};

export default Header;

import Logo from "../../assets/Logo.png";
// import {Fade} from "react-awesome-reveal";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {trippyUserLogOut} from "../Redux/Features";
import {useDispatch} from "react-redux";
import { BiUser } from "react-icons/bi";
import {useState} from "react";
import './HeaderNew.css'


const HeaderLone = () => {
  const dispatch = useDispatch();
  
  const [popUp, setPopUp] = useState(false);
    const [hoverUp, setHoverUp] = useState(false);

  const toggleHoverNav = () => {
    setHoverUp(!hoverUp);
};

const togglePopUp = () => {
    setPopUp(!popUp);
};


const user = useSelector((state) => state.Trippy.trippyUser);


  return (
    <>
      <div className="HeaderNewTopDiv">
                    <div className="HeaderNewTopDivWrap">
                        <div className="HeaderNewTopDivLeft">
                            <Link><img src={Logo} alt="" /></Link>
                        </div>
                        <nav>
                            <ul>
                                <Link to='/HeaderNew' className="NavLink">
                                    <li>Home</li>
                                </Link>
                                <Link to='/Explore' className="NavLink">
                                    <li>Explore</li>
                                </Link>
                                <Link className="NavLink">
                                    {" "}
                                    <li>My Bookings</li>
                                </Link>
                                <Link
                                    className="NavLink Itinerary"
                                    onClick={() => toggleHoverNav(true)}
                                    
                                >
                                    <li>Itinerary <span> &#9660;</span></li>
                                </Link>
                                <Link className="NavLink" to='/About'>
                                    <li>About Us</li>
                                </Link>
                            </ul>
                            {hoverUp ? (
                                <>
                                    <div className="ItineraryPopUp" onMouseLeave={()=>toggleHoverNav(false)}>
                                        <ul>
                                            <Link to='/NewFlight' className="NavLink">
                                                <li>Flights</li>
                                            </Link>
                                            <Link to='/NewHotel' className="NavLink">
                                                <li>Hotels</li>
                                            </Link>
                                            <Link to='/NewCar' className="NavLink">
                                                <li>Cars</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </>
                            ) : null}
                        </nav>

                       
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
                            <div className="HeaderAccPopUp" onMouseLeave={() => togglePopUp(!popUp)}>
                                <div className="HeaderAccPopUpTop">
                                    <div
                                        className="HeaderAccPopUpTopIcon"
                                        style={{textTransform: "capitalize"}}
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
    </>
  )
}

export default HeaderLone
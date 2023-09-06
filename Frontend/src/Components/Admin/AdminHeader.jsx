import Logo from "../../assets/Logo.png";
// import {Fade} from "react-awesome-reveal";
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {trippyUserLogOut} from "../Redux/Features";
import {useDispatch} from "react-redux";
import { BiUser } from "react-icons/bi";
import {useState} from "react";
import '../Header/HeaderNew.css'
import {GiHamburgerMenu} from "react-icons/gi";
// import {TbLetterX} from 'react-icons/tb'
import { Button, Modal } from 'antd';
import { Menu, Drawer } from 'antd';



const AdminHeader = () => {
    const dispatch = useDispatch();

    const [popUp, setPopUp] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const toggleLogoutModal = () => {
        setLogoutModalVisible(!logoutModalVisible);
    };

    const handleLogout = () => {
        dispatch(trippyUserLogOut());
        toggleLogoutModal();
    };


    const togglePopUp = () => {
        setPopUp(!popUp);
    };

   

    const user = useSelector((state) => state.Trippy.trippyUser);

     // State to control the visibility of the mobile menu
     const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

     // Handle opening and closing the mobile menu
     const toggleMobileMenu = () => {
         setMobileMenuVisible(!mobileMenuVisible);
     };
 
     // Mobile menu content
     const mobileMenu = (
         <Menu>
             <Menu.Item key="1">
                 <Link to="/HeaderNew" className="HeaderLoneNavDownLinks">
                     Home
                 </Link>
             </Menu.Item>
             <Menu.Item key="2">
                 <Link to="/Explore" className="HeaderLoneNavDownLinks">
                     Explore
                 </Link>
             </Menu.Item>
             <Menu.Item key="3">
                 <Link to='/MyBookings' className="HeaderLoneNavDownLinks">
                     My Bookings
                 </Link>
             </Menu.Item>
             <Menu.Item key="4">
                 <Link to='/NewHotel' className="HeaderLoneNavDownLinks">
                     Hotels
                 </Link>
             </Menu.Item>
             <Menu.Item key="5">
                 <Link to='/NewCar' className="HeaderLoneNavDownLinks">
                     Cars
                 </Link>
             </Menu.Item>
             <Menu.Item key="6">
                 <Link to='/NewFlight' className="HeaderLoneNavDownLinks">
                     Flights
                 </Link>
             </Menu.Item>
             <Menu.Item key="7">
                 <Link to="/About" className="HeaderLoneNavDownLinks">
                     About Us
                 </Link>
             </Menu.Item>
         </Menu>
     );
 

    return (
        <>
            <div className="HeaderNewTopDiv">
                <div className="HeaderNewTopDivWrap">
                    <div className="HeaderNewTopDivLeft">
                        <Link>
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <nav>
                        <h3>Admin</h3>
                    </nav>

                    <div className="HeaderNewTopNavs">
                    <div className="HeaderNewTopHamBurgerMobile">
                <GiHamburgerMenu className="GiHamburgerMenu" onClick={toggleMobileMenu} />
            </div>


            <Drawer
                title="Menu"
                placement="left"
                closable={true}
                onClose={toggleMobileMenu}
                visible={mobileMenuVisible}
                width={200}
            >
                {mobileMenu}
            </Drawer>

                        <div className="HeaderNewTopDivRight">
                            <div
                                className="HeaderNewTopDivRightCircle"
                                onClick={() => togglePopUp(!popUp)}
                                style={{
                                    textTransform: "capitalize",
                                    border: user
                                        ? "2px solid green"
                                        : "2px solid grey",
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
                </div>

                {popUp ? (
                    <>
                        <div
                            className="HeaderAccPopUp"
                            onMouseLeave={() => togglePopUp(!popUp)}
                        >
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
                                        ""
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
                                                {user.firstName} {user.lastName}
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
                                    <NavLink className='li' style={{textDecoration:'none', color:'#000'}} to='/WishList'><li>WishList</li></NavLink>
                                    <NavLink className='li' style={{textDecoration:'none', color:'#000'}} to='/Account'><li>Account</li></NavLink>
                                    <li>Help/FAQ</li>
                                </ul>
                                <div className="HeaderAccPopUpDownBtns">
                                    {user ? (
                                        <>
                                            <div className="HeaderAccPopUpDownBtns1">
                                            <button onClick={toggleLogoutModal}>Logout</button>
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
            <Modal
                visible={logoutModalVisible}
                onCancel={toggleLogoutModal}
                footer={null}
            >
                <div>
                    <h2>Confirm Logout</h2>
                    <p>Are you sure you want to logout?</p>
                    <div>
                        <Button type="default" onClick={toggleLogoutModal} size="large" style={{margin:'10px', width:'80px'}}>No</Button>
                        <Button type="primary"  onClick={handleLogout} size="large" style={{margin:'10px', width:'80px'}}>Yes</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AdminHeader
import "./Account.css";
import {AiFillSetting} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md";
import {HiInformationCircle} from "react-icons/hi";
import {useState} from "react";
import Personal from "./Personal";
import Settings from "./Settings";
import Inquiry from "./Inquiry";
import ProfilePfp from "./UserProfile";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { trippyUserLogOut } from "../Redux/Features";

const Account = () => {
    const [personal, setPersonal] = useState(true);
    const [settings, setSettings] = useState(false);
    const [inquiry, setInquiry] = useState(false);
    const [profilePfp, setProfilePfp] = useState(false);

    const user = useSelector((state) => state.Trippy.trippyUser);
    const userArr = [];
    userArr.push(user);
    console.log(userArr);

    const TogglePersonal = () => {
        setPersonal(true);
        setSettings(false);
        setInquiry(false);
        setProfilePfp(false);
    };
    const ToggleSettings = () => {
        setPersonal(false);
        setSettings(true);
        setInquiry(false);
        setProfilePfp(false);
    };
    const ToggleInquiry = () => {
        setPersonal(false);
        setSettings(false);
        setInquiry(true);
        setProfilePfp(false);
    };

    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleBackHome = () => {
        nav("/HeaderNew");
    };

    const handleSignOut = () =>{
      dispatch(trippyUserLogOut())
      nav('/Login')
    }

    return (
        <>
            <div className="AccountBody">
                <div className="AccountBodyWrap">
                    <div className="AccountLeft">
                        <div className="AccountLeftTop">
                            <div className="AccountLeftTopPfpDiv">
                                {userArr?.map((item, index) => (
                                    <>
                                        <div
                                            className="AccountLeftTopPfpDivImgDiv"
                                            key={index}
                                        >
                                            <img
                                                src={item?.profilePicture}
                                                alt=""
                                            />
                                        </div>
                                        <p>
                                            {item?.firstName} {item?.lastName}
                                        </p>
                                    </>
                                ))}
                            </div>
                            <div className="AccountLeftTopNavs">
                                <ul>
                                    <li onClick={TogglePersonal}>
                                        <span>
                                            <MdAccountCircle
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </span>{" "}
                                        Personal Information
                                    </li>
                                    <li onClick={ToggleSettings}>
                                        <span>
                                            <AiFillSetting
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </span>{" "}
                                        Settings
                                    </li>
                                    <li onClick={ToggleInquiry}>
                                        <span>
                                            <HiInformationCircle
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </span>
                                        Inquiry / Information
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="AccountLeftDown">
                            <button onClick={handleBackHome}>Back Home</button>
                            <button onClick={handleSignOut}>SignOut</button>
                        </div>
                    </div>
                    <div className="AccountRight">
                        {personal ? (
                            <>
                                <Personal />
                            </>
                        ) : settings ? (
                            <>
                                <Settings />
                            </>
                        ) : inquiry ? (
                            <>
                                <Inquiry />
                            </>
                        ) : profilePfp ? (
                            <>
                                <ProfilePfp />
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;

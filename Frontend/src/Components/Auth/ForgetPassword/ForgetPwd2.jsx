import "./ForgetPwdSucc.css";
import { BsInfoCircle } from "react-icons/bs";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";

const ForgetPwd = () => {



    
    return (
        <>
            <div className="ForgetPwdSuccBody">
                <div className="ForgetPwdSuccWrapper">
                    <div className="ForgetPwdSuccLogo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ForgetPwdSuccContainer">
                        <div className="ForgetPwdSuccContWrap">
                            <BsInfoCircle className="BsInfoCircle"/>
                            <p>
                                Dear User a link has been sent to your email,
                                Folow the link to change your password
                            </p>
                            <p className="BLGN">
                                <Link
                                    to="/Login"
                                    style={{ textDecoration: "none" }}
                                >
                                    Back to Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPwd;

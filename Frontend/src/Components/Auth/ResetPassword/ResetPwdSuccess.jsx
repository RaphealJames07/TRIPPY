import "./ResetPwdSuccess.css";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";

const ResetPwdSuccess = () => {
    return (
        <>
            <div className="ResetSuccessPwdBody">
                <div className="ResetSuccessPwdWrapper">
                    <div className="ResetSuccessPwdLogo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ResetSuccessPwdContainer">
                        <div className="ResetSuccessPwdContWrap">
                            <h1>
                                Dear User your password has been changed
                                successfully, Please proceed to Login below
                            </h1>
                            <p>
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

export default ResetPwdSuccess;

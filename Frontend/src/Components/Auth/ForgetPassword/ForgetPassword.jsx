import "./ForgetPassword1.css";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { SpinnerDotted } from "spinners-react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    // const [message, setMessage] = useState({
    //     error: false,
    //     value: "",
    //     msg: "",
    // });
    const [loading, setLoading] = useState(false);
    const data = { email };
    const url = "https://trippyapiv1.onrender.com/trippy/forgot-password";

    const handleForgetPassword = (e) => {
        e.preventDefault();

        // setMessage("");
        setLoading(true);

        axios
            .post(url, data)
            .then((res) => {
                console.log(res);
                nav("/ForgetPasswordConfirm");
            })
            .catch((err) => {
                console.log("Error:", err.response);
                // const errorMsg = err.response?.data?.error;
                // setMessage({ error: true, value: "email", msg: errorMsg });
                setLoading(false);
            });
    };

    return (
        <>
            <div className="ForgetPwdBody">
                <div className="ForgetPwdWrapper">
                    <div className="ForgetPwdLogo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ForgetPwdContainer">
                        <div className="ForgetPwdContWrap">
                            <h1>Forgot your password</h1>
                            <p>
                                Please enter your email address, a reset
                                information will be sent to the email provided
                            </p>
                            <label htmlFor="forgetpassword">
                                Enter email address
                            </label>
                            <input
                                type="email"
                                placeholder="enter email here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <button onClick={(e) => handleForgetPassword(e)}>
                                {loading ? (
                                    <SpinnerDotted size={30} color="white" />
                                ) : (
                                    "Request Email"
                                )}
                            </button>
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

export default ForgetPassword;

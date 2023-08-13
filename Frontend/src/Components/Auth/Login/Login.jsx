import "./Login.css";
import { Link } from "react-router-dom";
import LoginImg from "../../../assets/LoginImg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { trippyUserLogin } from "../../Redux/Features";
import axios from "axios";
import NetworkError from "../../Functions/NetworkError";

const Login = () => {
    const nav = useNavigate();
    const Dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [networkErr, setNetworkErr] = useState(false);
    const [message, setMessage] = useState({
        error: false,
        value: "",
        msg: "",
    });
    const [inputHasError, setInputHasError] = useState(false);
    const data = { email, password };
    const url = "https://trippyapiv1.onrender.com/trippy/signin";

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        if (networkErr) {
            setNetworkErr(false); // Reset networkErr to false
        }

        axios
            .post(url, data)
            .then((res) => {
                console.log(res.data.user);
                const { email, firstName, lastName, token } = res.data.user;
                Dispatch(
                    trippyUserLogin({ email, firstName, lastName, token })
                );
                nav("/Home");
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                const Neterror = err.message;
                if (Neterror === "Network Error") {
                    console.log(Neterror);
                    setNetworkErr(true);
                }
                const badError = err.response.data.message;
                if (badError === "invalid credentials") {
                    setInputHasError(true); // Set input error state to true
                }
                setMessage({
                    error: true,
                    value: "email",
                    msg: err.response.data.error,
                });
            });
    };

    return (
        <>
            {/* Elements for Desktop */}
            <div className="LoginBody">
                <div className="LoginLeft">
                    <img src={LoginImg} alt="" />
                </div>

                <div className="LoginRight">
                    <div className="LoginWrapper">
                        <h1>Login</h1>
                        <div className="InputDivs">
                            <div className="EmailDiv">
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="email"
                                    placeholder="Input Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p>{message.msg}</p>
                            </div>
                            <div className="PasswordDiv">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    placeholder="Input Your Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <p>{message.msg}</p>
                            </div>
                            <p className="ForgetPwd">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        color: "blue",
                                        cursor: "pointer",
                                    }}
                                    to="/ForgetPassword"
                                >
                                    Forget Password ?
                                </Link>
                            </p>
                            <div className="LoginDiv">
                                <button onClick={(e) => handleLogin(e)}>
                                    {loading ? "Loading..." : "Login"}
                                </button>
                            </div>
                            <p className="DontAcc">
                                Dont Have an account?{" "}
                                <span
                                    style={{
                                        color: "purple",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Link
                                        to="/SignUp"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Sign Up
                                    </Link>
                                </span>
                            </p>
                            <div className="ExploreDiv">
                                <Link to="/Home">
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Elements for Desktop */}

            {/* Elements for Tablet */}
            <div className="LoginBodyTablet">
                <div className="LoginLeftTablet">
                    <div className="LoginRightTablet">
                        <div className="LoginWrapperTablet">
                            <h1>Login</h1>
                            <div className="InputDivsTablet">
                                <div className="EmailDivTablet">
                                    <label htmlFor="Email">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Input Your Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <p>{message.msg}</p>
                                </div>
                                <div className="PasswordDivTablet">
                                    <label htmlFor="Password">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Input Your Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <p>{message.msg}</p>
                                </div>
                                <p className="ForgetPwdTablet">
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            cursor: "pointer",
                                        }}
                                        to="/ForgetPassword"
                                    >
                                        Forget Password ?
                                    </Link>
                                </p>
                                <div className="LoginDivTablet">
                                    <button onClick={(e) => handleLogin(e)}>
                                        {loading ? "Loading..." : "Login"}
                                    </button>
                                </div>
                                <p className="DontAccTablet">
                                    Dont Have an account?{" "}
                                    <span
                                        style={{
                                            color: "purple",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Link
                                            to="/SignUp"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Sign Up
                                        </Link>
                                    </span>
                                </p>
                                <div className="ExploreDivTablet">
                                    <Link to="/Home">
                                        <button>Explore</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Elements for Tablet */}

            {/* Elements for Mobile */}
            <div className="LoginBodyMobile">
                <div className="LoginLeftMobile">
                    <div className="NetworkBox">
                        {networkErr ? <NetworkError /> : null}
                    </div>
                    <div className="LoginRightMobile">
                        <div className="LoginWrapperMobile">
                            <h1>Login</h1>
                            <div className="InputDivsMobile">
                                <div className="EmailDivMobile">
                                    <label htmlFor="Email">Email</label>
                                    <input
                                        style={{
                                            borderColor: inputHasError
                                                ? "red"
                                                : "initial",
                                        }}
                                        type="email"
                                        placeholder="Input Your Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <p>{message.msg}</p>
                                </div>
                                <div className="PasswordDivMobile">
                                    <label htmlFor="Password">Password</label>
                                    <input
                                        style={{
                                            borderColor: inputHasError
                                                ? "red"
                                                : "initial",
                                        }}
                                        type="password"
                                        placeholder="Input Your Password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <p>{message.msg}</p>
                                </div>
                                <p className="ForgetPwdMobile">
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                            cursor: "pointer",
                                        }}
                                        to="/ForgetPassword"
                                    >
                                        Forget Password ?
                                    </Link>
                                </p>
                                <div className="LoginDivMobile">
                                    <button onClick={(e) => handleLogin(e)}>
                                        {loading ? "Loading..." : "Login"}
                                    </button>
                                </div>
                                <p className="DontAccMobile">
                                    Dont Have an account?{" "}
                                    <span
                                        style={{
                                            color: "purple",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Link
                                            to="/SignUp"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Sign Up
                                        </Link>
                                    </span>
                                </p>
                                <div className="ExploreDivMobile">
                                    <Link to="/Home">
                                        <button>Explore</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Elements for Mobile */}
        </>
    );
};

export default Login;

import { Link } from "react-router-dom";
import "./Login.css";
import LoginImg from "../../../assets/LoginImg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { trippyUserLogin } from "../../Redux/Features";
import axios from "axios";

const Login = () => {
    const nav = useNavigate();
    const Dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        error: false,
        value: "",
        msg: "",
    });
    const data = { email, password };
    const url = "https://trippyapiv1.onrender.com/trippy/signin";

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        axios
            .post(url, data)
            .then((res) => {
                console.log(res.data.user);
                const { email, firstName, lastName, token } = res.data.user
                Dispatch(trippyUserLogin({ email, firstName, lastName, token }));
                nav("/Home");
            })
            .catch((err) => {
                console.log(err);
                setMessage({
                    error: true,
                    value: "email",
                    msg: err.response.data.error,
                });
                setLoading(false);
            });
    };

    return (
        <>
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
                            <p className="ForgetPwd">Forgot Password?</p>
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
        </>
    );
};

export default Login;

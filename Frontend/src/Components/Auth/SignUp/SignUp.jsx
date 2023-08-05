import "./SignUp.css";
import SIgnUpImg from "../../../assets/SignUp.jpg";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import { useState } from "react";

const SignUp = () => {
    const nav = useNavigate();
    // const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState({
        error: false,
        value: "",
        msg: "",
    });
    const [loading, setLoading] = useState(false);
    const data = { firstName, lastName, email, password };
    const url = "https://trippyapiv1.onrender.com/trippy/signup";
    

    const signUp = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        axios
            .post(url, data)
            .then((res) => {
                console.log(res);
                nav("/Verify");
            })
            .catch((err) => {
                console.log("Error:", err.response.data.message); // Log the entire error response
                const errorMsg = err.response?.data?.error;
                setMessage({ error: true, value: "email", msg: errorMsg });
                setLoading(false);
            });
    };

    return (
        <>
            <div className="SignUpBody">
                <div className="SignUpLeft">
                    <img src={SIgnUpImg} alt="" />
                </div>
                <div className="SignUpRight">
                    <div className="SignUpWrapper">
                        <h1>Sign Up</h1>
                        <div className="SignUpDiv">
                            <div className="SignUpNameDiv">
                                <div className="SignUpNameDivLabel">
                                    <label htmlFor="Name">First Name</label>
                                    <label htmlFor="Name"> Last Name</label>
                                </div>
                            </div>
                            <div className="SignUpNameDivInput">
                                <input
                                    type="text"
                                    placeholder="Enter your First Name"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                .
                                {message.type === "firstName" ? (
                                    <p
                                        style={{
                                            color: "red",
                                            fontSize: "10px",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        {message.msg}
                                    </p>
                                ) : null}
                                <input
                                    type="text"
                                    placeholder="Enter your Last Name"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                                {message.type === "lastName" ? (
                                    <p
                                        style={{
                                            color: "red",
                                            fontSize: "10px",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        {message.msg}
                                    </p>
                                ) : null}
                            </div>
                            <div className="SignUpEmailDiv">
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="email"
                                    placeholder="Input Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {message.type === "email" ? (
                                    <p
                                        style={{
                                            color: "red",
                                            fontSize: "10px",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        {message.msg}
                                    </p>
                                ) : null}
                            </div>
                            <div className="SignUpPasswordDiv">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    placeholder="Input Your Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {message.type === "password" ? (
                                    <p
                                        style={{
                                            color: "red",
                                            fontSize: "10px",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        {message.msg}
                                    </p>
                                ) : null}
                            </div>
                            <div className="SignUpPasswordDiv">
                                <label htmlFor="Password">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Your Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                                {message.type === "confirmPassword" ? (
                                    <p
                                        style={{
                                            color: "red",
                                            fontSize: "10px",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        {message.msg}
                                    </p>
                                ) : null}
                            </div>
                            <div className="SignUpBtnDiv">
                                <button onClick={(e) => signUp(e)}>
                                    {loading ? (
                                        <SpinnerDotted size={30} />
                                    ) : (
                                        "SIGNUP"
                                    )}
                                </button>
                            </div>
                            <p className="DontAcc">
                                Already have an account?
                                <span
                                    style={{
                                        color: "purple",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Link
                                        to="/Login"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Log In
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

    import "./Login.css";
    import {Link} from "react-router-dom";
    // import LoginImg from "../../../assets/LoginImg.jpg";
    import {useState} from "react";
    import {useNavigate} from "react-router-dom";
    import {useDispatch} from "react-redux";
    import {trippyUserLogin} from "../../Redux/Features";
    import axios from "axios";
    import NetworkError from "../../Functions/NetworkError";
    import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Button, Modal } from "antd";

    const Login = () => {
        const nav = useNavigate();
        const Dispatch = useDispatch();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [loading, setLoading] = useState(false);
        const [networkErr, setNetworkErr] = useState(false);
        const [emailErrorMessage, setEmailErrorMessage] = useState("");
        const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
        const [showPassword, setShowPassword] = useState(false);
        const [message, setMessage] = useState({
            error: false,
            value: "",
            msg: "",
        });
        const [inputHasError, setInputHasError] = useState(false);
        const [mailInputError, setMailInputerror] = useState(false);
        const [incoPwd, setIncoPwd] = useState(false);
        const data = {email, password};
        const url = "https://trippyapiv1.onrender.com/trippy/signin";
        const [popErr, setPopErr] = useState(false)


        const handleLogin = (e) => {
            e.preventDefault();

            if (networkErr) {
                setNetworkErr(false); // Reset networkErr to false
                setLoading(false);
                setInputHasError(true);
            } else if (!email) {
                setEmailErrorMessage("Input your email");
                setLoading(false);
                setMailInputerror(true);
            } else if (!email.includes("@")) {
                setEmailErrorMessage("Email should contain @");
                setLoading(false);
                setMailInputerror(true);
            } else if (!password) {
                setPasswordErrorMessage("Enter Password");
                setLoading(false);
                setInputHasError(true);
            } else {
                setMessage("");
                setInputHasError(false);
                setLoading(true);
                axios
                    .post(url, data)
                    .then((res) => {
                        console.log(res.data.user);
                        const userData = res.data.user;
                        Dispatch(trippyUserLogin(userData));
                        localStorage.setItem('loginSuccess', 'true');
                        if (res.data.user.isAdmin === true) {
                            nav("/AdminPage");
                        } else {
                            nav("/HeaderNew");
                          }
                    })
                    .catch((err) => {
                        setLoading(false);
                        console.log(err);
                        const noUser = err.response.data.message
                        if (noUser === 'invalid email, please enter a registered email.'){
                            setPopErr(true)
                        }
                        console.log('No User', noUser);
                        const Neterror = err.message;
                        if (Neterror === "Network Error") {
                            console.log(Neterror);
                            setNetworkErr(true);
                        }
                        const incorectPwd = err.response.data.message;
                        console.log("Nah worng pwd", incorectPwd);
                        if (incorectPwd === "invalid password") {
                            setIncoPwd(true);
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
            }
        };

    // const [imageLoaded, setImageLoaded] = useState(false);

    // const handleImageLoad = () => {
    //     setImageLoaded(true);
    // };

    // const handleImageError = () => {
    //     setImageLoaded(false);
    // };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
        <Modal
                        title="Successful!"
                        visible={popErr}
                        onCancel={() => setPopErr(false)}
                        footer={[
                            <Button
                                key="ok"
                                type="primary"
                                onClick={() => setPopErr(false)}
                            >
                                OK
                            </Button>,
                        ]}
                    >
                        Invalid email, please enter a registered email.
                    </Modal>
            {/* Elements for Desktop */}
            <div className="LoginBody">
                <div className="LoginLeft">
                    <div className="LoginRight">
                        <div className="NetworkBox">
                            {networkErr ? <NetworkError /> : null}
                        </div>
                        <div className="LoginWrapper">
                            <h1>Login</h1>
                            <div className="InputDivs">
                                <div className="EmailDiv">
                                    <label htmlFor="Email">
                                        Email{" "}
                                        <span>
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                    marginLeft: "5px",
                                                }}
                                            >
                                                {emailErrorMessage}
                                            </p>
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Input Your Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailErrorMessage("");
                                        }}
                                        onFocus={() => {
                                            setMailInputerror(false);
                                        }}
                                        style={{
                                            border: `${
                                                mailInputError
                                                    ? "2px solid red"
                                                    : null
                                            }`,
                                        }}
                                    />
                                </div>
                                <div className="PasswordDiv">
                                    <label htmlFor="Password">
                                        Password{" "}
                                        <span onFocus={()=>setIncoPwd(false)}>
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                    marginLeft: "5px",
                                                }}
                                            >
                                                {passwordErrorMessage}
                                                {incoPwd
                                                    ? `Incorrect Password`
                                                    : null}
                                            </p>
                                        </span>
                                    </label>
                                    <div className="PwdInputDiv">
                                        <input
                                            className="PwdInput"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Input Your Password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setPasswordErrorMessage("");
                                                setInputHasError(false);
                                            }}
                                            onFocus={() => {
                                                setInputHasError(false);
                                            }}
                                            style={{
                                                border: `${
                                                    inputHasError
                                                        ? "2px solid red"
                                                        : null
                                                }`,
                                            }}
                                        />
                                        <div
                                            className="TogglePasswordButton"
                                            onClick={handleTogglePassword}
                                        >
                                            {showPassword ? (
                                                <AiOutlineEyeInvisible className="AiOutlineEyeInvisible" />
                                            ) : (
                                                <AiOutlineEye className="AiOutlineEye" />
                                            )}
                                        </div>
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
                                </div>
                                <div className="LoginDiv">
                                    <button
                                        onClick={(e) => handleLogin(e)}
                                        disabled={inputHasError || loading}
                                    >
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
                                            style={{textDecoration: "none"}}
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
                                    <button
                                        onClick={(e) => handleLogin(e)}
                                        disabled={inputHasError || loading}
                                    >
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
                                            style={{textDecoration: "none"}}
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
                                    <label htmlFor="Email">Email
                                    <span>
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                    marginLeft: "5px",
                                                }}
                                            >
                                                {emailErrorMessage}
                                            </p>
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Input Your Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailErrorMessage("");
                                            setInputHasError(false);
                                        }}
                                    />
                                    <p>{message.msg}</p>
                                </div>
                                <div className="PasswordDivMobile">
                                    <label htmlFor="Password">Password
                                    <span onFocus={()=>setIncoPwd(false)}>
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                    marginLeft: "5px",
                                                }}
                                            >
                                                {passwordErrorMessage}
                                                {incoPwd
                                                    ? `Incorrect Password`
                                                    : null}
                                            </p>
                                        </span>
                                    </label>
                                    <div className="PwdInputDiv">
                                        <input
                                            className="PwdInput"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Input Your Password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setPasswordErrorMessage("");
                                                setInputHasError(false);
                                            }}
                                            onFocus={() => {
                                                setInputHasError(false);
                                            }}
                                            style={{
                                                border: `${
                                                    inputHasError
                                                        ? "2px solid red"
                                                        : null
                                                }`,
                                            }}
                                        />
                                        <div
                                            className="TogglePasswordButtonM"
                                            onClick={handleTogglePassword}
                                        >
                                            {showPassword ? (
                                                <AiOutlineEyeInvisible className="AiOutlineEyeInvisible" />
                                            ) : (
                                                <AiOutlineEye className="AiOutlineEye" />
                                            )}
                                        </div>
                                    </div>
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
                                    <button
                                        onClick={(e) => handleLogin(e)}
                                        disabled={inputHasError || loading}
                                    >
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
                                            style={{textDecoration: "none"}}
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

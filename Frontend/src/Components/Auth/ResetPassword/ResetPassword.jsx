// import "./ResetPassword.css";
// import Logo from "../../../assets/Logo.png";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { SpinnerDotted } from "spinners-react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ResetPassword = () => {
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const token = searchParams.get("token");
//     const [resetStatus, setSetResetStatus] = useState("");

//     useEffect(() => {
//         if (token) {
//           handleResetPassword(token);
//         }
//     }, [token]);

//     const handleResetPassword = (token) => {
//         axios
//             .put(`https://trippyapiv1.onrender.com/trippy/reset-password/${token}`)
//             .then((res) => {
//                 console.log(res);
//                 setSetResetStatus("Password reset successful");
//             })
//             .catch((err) => {
//                 console.log("Error response:", err);
//                 resetStatus("error resetting password");
//             });
//     };

//     return (
//         <>
//             <div className="ResetPwdBody">
//                 <div className="ResetPwdWrapper">
//                     <div className="ResetPwdLogo">
//                         <img src={Logo} alt="" />
//                     </div>
//                     <div className="ResetPwdContainer">
//                         <div className="ResetPwdContWrap">
//                             <h1>Reset your password</h1>

//                             <label htmlFor="Resetpassword">
//                                 Input Password
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="input your password"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <label htmlFor="Resetpassword">
//                                 Confirm Password
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="confirm your password"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />

//                             <button onClick={(e) => handleResetPassword(e)}>
//                                 {loading ? (
//                                     <SpinnerDotted size={30} color="white" />
//                                 ) : (
//                                     "SEND"
//                                 )}
//                             </button>
//                             <p>
//                                 <Link
//                                     to="/Login"
//                                     style={{ textDecoration: "none" }}
//                                 >
//                                     Back to Login
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ResetPassword;

import "./ResetPassword.css";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { SpinnerDotted } from "spinners-react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    // console.log(token);
    const nav = useNavigate();

    // Create separate state variables for new password and confirmation
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    // Create a state for loading state of the button
    const [loading, setLoading] = useState(false);

    // Create a state for reset status

    const handleResetPassword = () => {
        setLoading(true); // Start loading state
        // Prepare the request data
        const requestData = {
            password: newPassword,
            confirmPassword: confirmNewPassword
        };

        // Make a PUT request to the backend endpoint
        axios
            .put(
                `https://trippyapiv1.onrender.com/trippy/reset-password/${token}`,
                requestData
            )
            .then((res) => {
                console.log(res);
                nav("/ResetPwdSuccess");
            })
            .catch((err) => {
                console.log("Error response:", err);
            })
            .finally(() => {
                setLoading(false); // Set loading state back to false
            });
    };

    return (
        <>
            <div className="ResetPwdBody">
                <div className="ResetPwdWrapper">
                    <div className="ResetPwdLogo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ResetPwdContainer">
                        <div className="ResetPwdContWrap">
                            <h1>Reset password</h1>

                            <label htmlFor="newPassword">
                                Input New Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />

                            <label htmlFor="confirmPassword">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm your new password"
                                value={confirmNewPassword}
                                onChange={(e) =>
                                    setConfirmNewPassword(e.target.value)
                                }
                            />

                            <button onClick={handleResetPassword}>
                                {loading ? (
                                    <SpinnerDotted size={30} color="white" />
                                ) : (
                                    "SEND"
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

export default ResetPassword;

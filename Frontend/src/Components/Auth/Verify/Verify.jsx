// import './Verify.css'

// import {BsInfoCircle} from 'react-icons/bs'

// const Verify = () => {
//   return (
//     <>
//       <div className="VerifyBody">
//         <div className='VerifyBox'>
//           <BsInfoCircle style={{width:'100px', height:'70px', color:'white'}}/>
//           <h3>Dear User, thank you for signing up on Trippy.</h3>
//           <p>A link was sent to you at the email address provided</p>
//           <p>Please verify your email address to complete the registration process</p>
//           <p>Didnt get email? click <span style={{color:'purple', cursor:'pointer'}}>here</span> to resend email</p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Verify

import { useEffect, useState } from "react";
import "./Verify.css";
import { BsInfoCircle } from "react-icons/bs";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Verify = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    const [verificationStatus, setVerificationStatus] = useState("");

    useEffect(() => {
        if (token) {
            // Only initiate verification if the token is present in the URL
            verifyUser(token);
        }
    }, [token]);

    const verifyUser = (token) => {
        axios
            .put(`https://trippyapiv1.onrender.com/trippy/verify/${token}`)
            .then((res) => {
                console.log(res);
                setVerificationStatus("user verified");
            })
            .catch((err) => {
                console.log("Error response:", err);
                setVerificationStatus("error verifying user, try again");
            });
    };

    return (
        <>
            <div className="VerifyBody">
                <div className="VerifyBox">
                    <BsInfoCircle
                        style={{
                            width: "100px",
                            height: "70px",
                            color: "white",
                        }}
                    />
                    <h3>Dear User, thank you for signing up on Trippy.</h3>
                    {verificationStatus === "user verified" ? (
                        <p>
                            Email verification successful! Click{" "}
                            <Link to="/Login">
                                <span>Here</span>
                            </Link>{" "}
                            to Login
                        </p>
                    ) : (
                        <>
                            <p>
                                A link was sent to you at the email address
                                provided
                            </p>
                            <p>
                                Please verify your email address to complete the
                                registration process
                            </p>
                            <p>
                                Didnt get the email? Click{" "}
                                <span
                                    style={{
                                        color: "purple",
                                        cursor: "pointer",
                                    }}
                                >
                                    here
                                </span>{" "}
                                to resend email
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Verify;

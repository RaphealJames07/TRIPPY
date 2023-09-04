import "./Account.css";
import {useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {trippyUserLogin} from "../Redux/Features";
import {Button} from "antd";
import {BsPlusLg} from "react-icons/bs";
import UserProfile from "./UserProfile";

const Personal = () => {
    const [hoverEffect, setHoverEffect] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // Add image preview state

    const toggleHoverEffect = () => {
        setHoverEffect(!hoverEffect);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);

        // Create a preview of the selected image
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const formData = new FormData();
    formData.append("profilePicture", profilePicture);

    const url = "https://trippyapiv1.onrender.com/trippy/add-profile-image";
    const userToken = useSelector((state) => state.Trippy.trippyUser.token);
    const user = useSelector((state) => state.Trippy.trippyUser);
    const dispatch = useDispatch();

    const handleUploadPfp = () => {
        if (!profilePicture) {
            console.error("No profile picture selected");
            alert("Please attach an Image before uploading");
            return;
        }

        console.log("Uploading Image...");
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
            .put(url, formData, {headers})
            .then((res) => {
                console.log("success", res);
                const updatedUserDetails = res.data.data;
                dispatch(trippyUserLogin(updatedUserDetails));
                setImagePreview(null);
                setProfilePicture(null);
            })
            .catch((err) => {
                console.error(`Error uploading image`, err);
            });
    };

    return (
        <>
            <div className="PersonalBody">
                <div className="PersonalBodyWrap">
                    <div className="PersonalTop">
                        <div className="PersonalUserDiv">
                            <label
                                className="PersonalUserImgDiv"
                                onMouseEnter={toggleHoverEffect}
                                onMouseLeave={toggleHoverEffect}
                            >
                                {imagePreview ? ( // Show the image preview if available
                                    <>
                                        <span className="PersonalImagePreview">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                            />
                                            <p>Preview</p>
                                        </span>
                                    </>
                                ) : (
                                    <img src={user?.profilePicture} alt="" />
                                )}
                                {hoverEffect ? (
                                    <>
                                        <BsPlusLg className="Plus" />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            style={{display: "none"}}
                                        />
                                    </>
                                ) : null}
                            </label>
                        </div>
                        <div className="PersonalPfpBtnUpload">
                            <Button type="primary" onClick={handleUploadPfp}>
                                Upload
                            </Button>
                        </div>
                    </div>
                    <div className="PersonalDown">
                        <div className="PersonalDownTop">
                            <h3>User Profile</h3>
                        </div>
                        <div className="PersonalDownDown">
                            <UserProfile />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Personal;

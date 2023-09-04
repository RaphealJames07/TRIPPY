// // import "./Account.css";

// // const UserProfile = () => {
// //     return (
// //         <>
// //             <div className="UserprofileBody">

// //             </div>
// //         </>
// //     );
// // };

// // export default UserProfile;

// import {useState} from "react";
// import {Input, Form, Button} from "antd";
// import {AiFillEdit} from "react-icons/ai";

// const UserProfile = () => {
//     const [firstName, setFirstName] = useState("John");
//     const [lastName, setLastName] = useState("Doe");
//     const [email, setEmail] = useState("test@gmail.com");
//     const [userStatus, setUserStatus] = useState("Verified");
//     const [password, setPassword] = useState("*********");

//     const handleFirstNameChange = (e) => {
//         setFirstName(e.target.value);
//     };

//     const handleLastNameChange = (e) => {
//         setLastName(e.target.value);
//     };
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };
//     const handleUserStatusChange = (e) => {
//         setUserStatus(e.target.value);
//     };
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     return (
//         <div className="UserProfileBody">
//             <div className="UserProfileBodyWrap">
//                 <Form labelCol={{span: 10}} wrapperCol={{span: 15}}>
//                     <div className="UserProfileNameDiv">
//                         <div className="UserProfileFNameDiv">
//                             <Form.Item label="FirstName">
//                                 <Input
//                                     value={firstName}
//                                     onChange={handleFirstNameChange}
//                                 />
//                             </Form.Item>
//                         </div>
//                         <div className="UserProfileLNameDiv">
//                             <Form.Item label="LastName">
//                                 <Input
//                                     value={lastName}
//                                     onChange={handleLastNameChange}
//                                 />
//                             </Form.Item>
//                         </div>
//                     </div>
//                     <div className="UserProfileNameDiv">
//                         <div className="UserProfileFNameDiv">
//                             <Form.Item label="Email">
//                                 <Input
//                                     value={email}
//                                     onChange={handleEmailChange}
//                                 />
//                             </Form.Item>
//                         </div>
//                         <div className="UserProfileLNameDiv">
//                             <Form.Item label="UserStatus">
//                                 <Input
//                                     value={userStatus}
//                                     onChange={handleUserStatusChange}
//                                 />
//                             </Form.Item>
//                         </div>
//                     </div>
//                     <div className="UserProfilePwdDiv">
//                         <div className="UserProfilePwdDivBox">
//                             <Form.Item label="Password" className="FormPwdDiv">
//                                 <Input
//                                     value={password}
//                                     onChange={handlePasswordChange}
//                                     className="YouMf"
//                                 />
//                             </Form.Item>
//                         </div>
//                         <AiFillEdit className="AiFillEdit" />
//                     </div>
//                 </Form>
//             </div>
//                 <div className="UserProfileEditBtn">
//                     <Button type="primary">Edit Initials</Button>
//                 </div>
//         </div>
//     );
// };

// export default UserProfile;

import {useState} from "react";
import {Input, Form, Button, Modal} from "antd";
import {AiFillEdit} from "react-icons/ai";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {trippyUserLogin} from "../Redux/Features";
// import {trippyUserLogin} from "../Redux/Features";

const UserProfile = () => {
    const user = useSelector((state) => state.Trippy.trippyUser);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState("test@gmail.com");
    const [userStatus, setUserStatus] = useState("Verified");
    const [password, setPassword] = useState("*********");
    const [editMode, setEditMode] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUserStatusChange = (e) => {
        setUserStatus(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const userToken = useSelector((state) => state.Trippy.trippyUser.token);
    console.log(userToken);
    const dispatch = useDispatch();
    const url = "https://trippyapiv1.onrender.com/trippy/update-user";
    const data = {firstName, lastName};

    const handleSaveInitials = () => {
        console.log("Updating Profile...");
        if (!firstName || !lastName) {
            alert("Please fill in all fields");
        }
        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .put(url, data, {headers})
            .then((res) => {
                console.log("Evian", res);
                const newProfileData = res.data.updatedUser;
                dispatch(trippyUserLogin(newProfileData));
            })
            .catch((err) => {
                console.error(`Error updating profile`, err);
            });

        toggleEditMode();
    };

    const handleEditPassword = () => {
        setShowPasswordModal(true);
    };

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const requestData = {
      password: newPassword,
      confirmPassword: confirmNewPassword
  };

    const handlePasswordSave = () => {
      if(newPassword !== confirmNewPassword){
        alert('passwords do not match');
        return
      }

      console.log('Changing Password...');
      const token = userToken
        // Handle password change and close the modal
        axios
            .put(
                `https://trippyapiv1.onrender.com/trippy/reset-password/${token}`,
                requestData
            )
            .then((res) => {
                console.log(res);
                setConfirmNewPassword('')
                setNewPassword('')
            })
            .catch((err) => {
                console.log("Error response:", err);
                setConfirmNewPassword('')
                setNewPassword('')
                return
            })
            .finally(() => {
                setShowPasswordModal(false);
                setConfirmNewPassword('')
                setNewPassword('')
            });
    };

    return (
        <div className="UserProfileBody">
            <div className="UserProfileBodyWrap">
                <Form labelCol={{span: 10}} wrapperCol={{span: 15}}>
                    <div className="UserProfileNameDiv">
                        <div className="UserProfileFNameDiv">
                            <Form.Item label="FirstName">
                                <Input
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    disabled={!editMode}
                                    style={{
                                        color: "#000",
                                        textTransform: "capitalize",
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="UserProfileLNameDiv">
                            <Form.Item label="LastName">
                                <Input
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    disabled={!editMode}
                                    style={{
                                        color: "#000",
                                        textTransform: "capitalize",
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="UserProfileNameDiv">
                        <div className="UserProfileFNameDiv">
                            <Form.Item label="Email">
                                <Input
                                    value={email}
                                    onChange={handleEmailChange}
                                    disabled={true}
                                    style={{color: "#000"}}
                                />
                            </Form.Item>
                        </div>
                        <div className="UserProfileLNameDiv">
                            <Form.Item label="UserStatus">
                                <Input
                                    value={userStatus}
                                    onChange={handleUserStatusChange}
                                    disabled={true}
                                    style={{color: "#000"}}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="UserProfilePwdDiv">
                        <div className="UserProfilePwdDivBox">
                            <Form.Item label="Password" className="FormPwdDiv">
                                <Input
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="YouMf"
                                    type="password"
                                    disabled={true}
                                    style={{color: "#000"}}
                                />
                            </Form.Item>
                        </div>
                        <AiFillEdit
                            className="AiFillEdit"
                            onClick={handleEditPassword}
                        />
                    </div>
                </Form>
            </div>
            <div className="UserProfileEditBtn">
                {editMode ? (
                    <Button type="primary" onClick={handleSaveInitials}>
                        Save Initials
                    </Button>
                ) : (
                    <Button type="primary" onClick={toggleEditMode}>
                        Edit Initials
                    </Button>
                )}
            </div>

            {/* Password Change Modal */}
            <Modal
                title="Change Password"
                open={showPasswordModal}
                onOk={handlePasswordSave}
                onCancel={() => setShowPasswordModal(false)}
            >
                <Form>
                    <Form.Item label="New Password">
                        <Input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Confirm New Password">
                        <Input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) =>
                                setConfirmNewPassword(e.target.value)
                            }
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default UserProfile;

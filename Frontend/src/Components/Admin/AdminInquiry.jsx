// import {Button} from "antd";
// import TextArea from "antd/es/input/TextArea";
// import axios from "axios";
// import {useEffect, useState} from "react";
// import {useSelector} from "react-redux";
// import "./AdminInquiry.css";

// const AdminInquiry = () => {
//     const user = useSelector((state) => state.Trippy.trippyUser);

//     const userToken = user.token;

//     const [inquiryData, setInquiryData] = useState([])

//     const enquiryToMap = inquiryData

//     const handleGetInquiry = () => {
//         const token = userToken;

//         const headers = {
//             Authorization: `Bearer ${token}`,
//         };
//         axios
//             .get(
//                 `https://trippyapiv1.onrender.com/trippy/get-enquiries`,

//                 {
//                     headers,
//                 }
//             )
//             .then((res) => {
//                 console.log(res.data);
//                 setInquiryData(res.data.enquiries)
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     const handleSelectUser = () =>{

//     }

//     const [adminComment, setAdminComment] = useState('')

//     const data = {adminComment}

//     const handleRespond = () => {
//         const token = userToken;

//         const headers = {
//             Authorization: `Bearer ${token}`,
//         };
//         axios
//         .put(
//           `https://trippyapiv1.onrender.com/trippy/wishlist/${enquiryId}`,
//           data,
//           {headers}
//       )
//             .then((res) => {
//                 console.log(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     useEffect(() => {
//         handleGetInquiry();
//     }, []);

//     return (
//         <>
//             <div className="AdminInquiryBody">
//                 <div className="AdminInquiryLeft">
//                     <div className="AdminInquiryLeftWrap">
//                         <h3>List Of Inquiries</h3>
//                         {
//                           enquiryToMap?.map((item, index)=>(
//                             <div className="AdminInquiryUser1" onClick={handleSelectUser} key={index}>
//                             <div className="AdminInquiryUser1Pfp">
//                               <img src={item?.user.profilePicture} alt="" />
//                             </div>
//                             <div className="AdminInquiryUser1Details">
//                                 <nav>
//                                     <p>
//                                         {item?.user.firstName} <span>{item?.user.lastName}</span>
//                                     </p>
//                                     <p>{item?.time}</p>
//                                 </nav>
//                                 <p className="AdminInquiryUser1P">{item?.enquiry}</p>
//                             </div>
//                         </div>
//                           ))
//                         }
//                     </div>
//                 </div>
//                 <div className="AdminInquiryRight">
//                     <div className="AdminInquiryRightTop">
//                         <h3>
//                             User FirstName <span>LastName</span>
//                         </h3>
//                         <p>Comments</p>
//                         <p>Email <span>UserId</span></p>
//                     </div>
//                     <div className="AdminInquiryRightDown">
//                         <TextArea
//                             rows={4}
//                             placeholder="Write your inquiry here"
//                             style={{marginBottom: "16px"}}
//                             className="AdminInquiryRightDownTextArea"
//                             onChange={(e)=>setAdminComment(e.target.value)}
//                             value={adminComment}
//                         />
//                         <Button type="primary" onClick={handleRespond}>Send</Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AdminInquiry;


import { Button, Input, List, Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./AdminInquiry.css";

const AdminInquiry = () => {
  const user = useSelector((state) => state.Trippy.trippyUser);
  const userToken = user.token;

  const [inquiryData, setInquiryData] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);
  const [adminComment, setAdminComment] = useState("");
  const [noUserSelectedMessage, setNoUserSelectedMessage] = useState(
    "Please select a user to respond to."
  );

  // State to control the confirmation modal
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(
    false
  );

  const handleGetInquiry = () => {
    const token = userToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`https://trippyapiv1.onrender.com/trippy/get-enquiries`, {
        headers,
      })
      .then((res) => {
        console.log(res.data);
        setInquiryData(res.data.enquiries);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectUser = (enquiryId) => {
    const selectedUser = inquiryData.find((item) => item._id === enquiryId);
    setSelectedEnquiry(enquiryId);
    setSelectedUserData(selectedUser);
    setNoUserSelectedMessage("");
  };

  const data = { adminComment };

  const handleRespond = () => {
    const token = userToken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (selectedEnquiry) {
      axios
        .put(
          `https://trippyapiv1.onrender.com/trippy/respond-enquiry/${selectedEnquiry}`,
          data,
          { headers }
        )
        .then((res) => {
          console.log(res.data);
          // Close the confirmation modal after responding
          setConfirmationModalVisible(false);
          handleGetInquiry()
          setSelectedUserData(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    handleGetInquiry();
  }, []);

  return (
    <>
      <div className="AdminInquiryBody">
        <div className="AdminInquiryLeft">
          <div className="AdminInquiryLeftWrap">
            <h3>List Of Inquiries</h3>
            <List
              dataSource={inquiryData.filter((item) => !item.responded)}
              renderItem={(item, index) => (
                <div
                  className={`AdminInquiryUser1 ${
                    item._id === selectedEnquiry ? "selected" : ""
                  }`}
                  onClick={() => handleSelectUser(item._id)}
                  key={index}
                >
                  <div className="AdminInquiryUser1Pfp">
                    <img src={item.user.profilePicture} alt="" />
                  </div>
                  <div className="AdminInquiryUser1Details">
                    <nav>
                      <p>
                        {item.user.firstName} <span>{item.user.lastName}</span>
                      </p>
                      <p>{item.time}</p>
                    </nav>
                    <p className="AdminInquiryUser1P">{item.enquiry}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
        <div className="AdminInquiryRight">
          <div className="AdminInquiryRightTop">
            {noUserSelectedMessage && (
              <p>{noUserSelectedMessage}</p>
            )}
            {selectedUserData && (
              <>
                <h3>
                  {selectedUserData.user.firstName}{" "}
                  <span>{selectedUserData.user.lastName}</span>
                </h3>
                <p>Comments: {selectedUserData.enquiry}</p>
                <p>
                  Email {''} {selectedUserData.user.email} <span>{selectedUserData.user._id}</span>
                </p>
              </>
            )}
          </div>
          <div className="AdminInquiryRightDown">
            <Input.TextArea
              rows={4}
              placeholder="Write your response here"
              style={{ marginBottom: "16px" }}
              className="AdminInquiryRightDownTextArea"
              onChange={(e) => setAdminComment(e.target.value)}
              value={adminComment}
            />
            <Button type="primary" onClick={() => setConfirmationModalVisible(true)}>
              Send
            </Button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        title="Confirmation"
        visible={isConfirmationModalVisible}
        onOk={handleRespond}
        onCancel={() => setConfirmationModalVisible(false)}
        okText="Proceed"
        cancelText="Cancel"
      >
        <p>Are you sure you want to send this response?</p>
      </Modal>
    </>
  );
};

export default AdminInquiry;

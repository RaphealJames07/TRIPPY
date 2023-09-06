
import {Typography, Input, Button, Modal} from "antd";
import axios from "axios";
import {useState} from "react";
import {useSelector} from "react-redux";

const {Title, Paragraph} = Typography;

const Inquiry = () => {
    const {TextArea} = Input;

    const user = useSelector((state) => state.Trippy.trippyUser);

    const userToken = user.token;

    const [inquirytext, setInquiryText] = useState("");

    const data = {
      enquiry: inquirytext}
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSendInquiry = () => {
        const token = userToken;

        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .post(
                `https://trippyapiv1.onrender.com/trippy/create-enquiry`,
                data,
                {
                    headers
                }
            )
            .then((res) => {
                console.log(res.data);
                setShowSuccessModal(true);

                // Automatically close the modal after 6 seconds
                setTimeout(() => {
                    setShowSuccessModal(false);
                }, 6000);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Modal
                title="Inquiry Sent Successfully"
                visible={showSuccessModal}
                onCancel={() => setShowSuccessModal(false)}
                footer={null}
            >
                <p>Message sent ! An admin will respond to you shortly.</p>
            </Modal>
            <div style={{maxWidth: "400px", margin: "0 auto"}}>
                <Title level={2}>Have an enquiry?</Title>
                <Paragraph>Write to an admin:</Paragraph>
                <TextArea
                    rows={4}
                    placeholder="Write your inquiry here"
                    style={{marginBottom: "16px"}}
                    onChange={(e) => setInquiryText(e.target.value)}
                    value={inquirytext}
                />
                <Button type="primary" onClick={handleSendInquiry}>
                    Send
                </Button>
            </div>
        </>
    );
};

export default Inquiry;

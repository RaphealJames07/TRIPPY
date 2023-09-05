import "./HeaderNew.css";
import {useEffect} from "react";
import HeaderLone from "./HeaderLone";
import Hero from "../Hero/Hero";
import Continental from "../Continental/Continental";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import {Modal} from "antd";
import {useState} from "react";
import {useSelector} from "react-redux";


const HeaderNew = () => {
    const user = useSelector((state) => state.Trippy.trippyUser);
    const userName = user ? user.firstName : null;
    
    const loginSuccess = localStorage.getItem("loginSuccess");
    const [successModalVisible, setSuccessModalVisible] = useState(
        loginSuccess === "true"
    );

    useEffect(() => {
        if (successModalVisible) {
            setTimeout(() => {
                // Set the success modal visibility to false
                setSuccessModalVisible(false);

                // Clear the flag in local storage
                localStorage.removeItem("loginSuccess");
            }, 4000);
        }
    }, [successModalVisible]);

    return (
        <>
            <div className="HeaderNewBody">
                <HeaderLone />
                <div className="HeaderNewNavdiv">
                    <div className="HeaderNewNavdivWrap">
                        <Hero />
                        <Continental />
                        <Services />
                        <Footer />
                    </div>
                </div>
            </div>
            <Modal
                open={successModalVisible}
                onCancel={() => setSuccessModalVisible(false)}
                footer={null}
            >
                <div>
                    <h1>Login Successful</h1>
                    <p style={{textTransform:'capitalize'}}>Welcome, {userName}</p>
                    <p>Your login was successful.</p>
                </div>
            </Modal>
        </>
    );
};

export default HeaderNew;

import "../Header/HeaderNew.css";
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import "./ThreeSum.css";
// import { Collapse } from "antd";
// import Faq from "../About/AboutColl";
import {Button} from "antd";

import TheThreeAD from "./TheThreeAD";

const ThreeSum = () => {
    return (
        <>
            <div className="HeaderNewBody">
                <HeaderLone />
                <div className="HeaderNewNavdiv">
                    <div className="HeaderNewNavdivWrap">
                        <div className="ThreeBody">
                            <div className="ThreeBodyWrap">
                                <div className="ThreeBodyTop">
                                    <h2>
                                        Please make a selection to begin your
                                        booking process
                                    </h2>
                                </div>
                                <div className="ThreeBodyDown">
                                    <TheThreeAD />
                                </div>
                                <div className="ThreeSearchButtons">
                                    <Button size="large">Back</Button>
                                    <Button type="primary" size="large">Proceed</Button>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThreeSum;

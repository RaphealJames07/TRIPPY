import "./HeaderNew.css";

import HeaderLone from "./HeaderLone";
import Hero from "../Hero/Hero";
import Continental from "../Continental/Continental";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
// import HeaderNewTop from "./HeaderNewTop";

const HeaderNew = () => {


    return (
        <>
            <div className="HeaderNewBody">
                <HeaderLone/>
                <div className="HeaderNewNavdiv">
                    <div className="HeaderNewNavdivWrap">
                        <Hero />
                        <Continental/>
                        <Services/>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNew;

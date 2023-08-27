import "./Description.css";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DescPage from "./DescPage";
import HeaderLone from "../Header/HeaderLone";

const Description = () => {
    return (
        <>
            <div className="DescriptionBody">
                <HeaderLone />
                <DescPage />
                <Footer />
            </div>
        </>
    );
};

export default Description;

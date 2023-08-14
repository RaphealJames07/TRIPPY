import "./Description.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DescPage from "./DescPage";

const Description = () => {
    return (
        <>
            <div className="DescriptionBody">
                <Header />
                <DescPage />
                <Footer />
            </div>
        </>
    );
};

export default Description;

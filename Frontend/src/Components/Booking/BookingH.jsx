import "../Header/HeaderNew.css";

import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import DescPage from "../Description/DescPage";

const BookingNew = () => {
    
    return (
        <>
            <div className="HeaderNewBody">
                <HeaderLone />
                <div className="HeaderNewNavdiv">
                    <div className="HeaderNewNavdivWrap">
                        <DescPage />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingNew;

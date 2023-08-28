import "../Header/HeaderNew.css";
import NewFlight from "../Flight/NewFlight";

import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";

const BookingHotel = () => {
    return (
        <>
            <div className="HeaderNewBody">
                <HeaderLone />
                <div className="HeaderNewNavdiv">
                    <div className="HeaderNewNavdivMain">
                        <NewFlight />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingHotel;

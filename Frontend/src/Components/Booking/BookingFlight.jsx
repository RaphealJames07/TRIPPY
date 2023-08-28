import "../Header/HeaderNew.css";

import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import NewFlight from "../Flight/NewFlight";


const BookingFlight = () => {

    return (
        <>
           <div className="HeaderNewBody">
                <HeaderLone/>
                <div className="HeaderNewNavdiv">
                   
                    <div className="HeaderNewNavdivMain">
                        <NewFlight/>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingFlight;

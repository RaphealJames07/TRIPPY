import "../Header/HeaderNew.css";



import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import NewCar from "../Car/NewCar";




const BookingCar = () => {

   


    return (
        <>
            <div className="HeaderNewBody">
                <HeaderLone/>
                <div className="HeaderNewNavdiv">
                   
                    <div className="HeaderNewNavdivMain">
                        <NewCar/>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingCar;

import "../Continental/Continental.css";
import Kilimanjaro from "../../assets/Mount-Kilimanjaro-Tanzania 1.png";
import { AiFillStar } from "react-icons/ai";

const Africa = () => {
    return (
        <>
            <div className="ContiImgBox">
                <div className="ContiImgDiv">
                    <img src={Kilimanjaro} alt="" draggable="false" />
                </div>
                <div className="ContiCTA">
                    <h3>Kilimanjaro</h3>
                    <h4>Africa</h4>
                    <div className="ContiCTABtnRev">
                        <div className="ContiCTAREV">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span>(20 Review)</span>
                        </div>
                        <button>View More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Africa;

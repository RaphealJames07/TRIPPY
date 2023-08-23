import "./Famous.css";
import FamousCard from "../Functions/FamousCard";

const Famous = () => {
    return (
        <>
            <div className="FamousBody">
                <div className="FamousBodyWrap">
                    <div className="FamousBodyText">
                        <h1>Famous Attractions</h1>
                        <p>Take a look at famous site from around the world</p>
                    </div>
                    <div className="FamousImgDiv">
                        <FamousCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Famous;

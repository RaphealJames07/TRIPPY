import "./Special.css";
import SpecialCard from "./SpecialCard";

const Special = () => {
    return (
        <>
            <div className="SpecialBody">
                <div className="SpecialBodyWrap">
                    <div className="SpecialBodyText">
                        <h1>Special Attractions</h1>
                        <p>
                        Some special offers that are handpicked for you
                        </p>
                    </div>
                    <div className="SpecialImgDiv">
                        <SpecialCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Special;

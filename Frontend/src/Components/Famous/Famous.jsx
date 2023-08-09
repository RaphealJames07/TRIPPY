import "./Famous.css";
import Paris from "../../assets/pexels-photo-2675268 1.png";
import Rome from "../../assets/rome-colleseum 1.png";
import Burj from "../../assets/dubai-tower-arab-khalifa-162031 1.png";

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
                        <div className="FamousImgDivItem1">
                            <img src={Paris} alt="" />
                        </div>
                        <div className="FamousImgDivItem1">
                            <img src={Rome} alt="" />
                        </div>
                        <div className="FamousImgDivItem1">
                            <img src={Burj} alt="" />
                        </div>
                        <div className="FamousImgDivItem1">
                            <img src={Paris} alt="" />
                        </div>
                       <div className="FamousImgDivItem1">
                            <img src={Rome} alt="" />
                        </div>
                        <div className="FamousImgDivItem1">
                            <img src={Burj} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Famous;

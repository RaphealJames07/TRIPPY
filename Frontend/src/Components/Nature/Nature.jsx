import "./Nature.css";
import Nile from "../../assets/shutterstock_307772993 1.png";
import Zuma from "../../assets/images 1.png";
import Victoria from "../../assets/images 2.png";

const Nature = () => {
    return (
        <>
            <div className="NatureBody">
                <div className="NatureBodyWrap">
                    <div className="NatureBodyText">
                        <h1>Nature</h1>
                        <p>
                            Over the years nature has been a good source of
                            tourist attraction explore some top picks from
                            nature’s most visited places around the world
                        </p>
                    </div>
                    <div className="NatureImgDiv">
                        <div className="NatureImgDivItem1">
                            <img src={Nile} alt="" />
                        </div>
                        <div className="NatureImgDivItem1">
                            <img src={Zuma} alt="" />
                        </div>
                        <div className="NatureImgDivItem1">
                            <img src={Victoria} alt="" />
                        </div>
                        <div className="NatureImgDivItem1">
                            <img src={Nile} alt="" />
                        </div>
                        <div className="NatureImgDivItem1">
                            <img src={Zuma} alt="" />
                        </div>
                        <div className="NatureImgDivItem1">
                            <img src={Victoria} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nature;

import "./Continental.css";
import Kilimanjaro from '../../assets/Mount-Kilimanjaro-Tanzania 1.png'
import Pyramid from '../../assets/Pyramids-of-Egypt-2048x1024 1.png'
import Zanibar from '../../assets/Zanzibar-Tanzania-1 1.png'
import VictoriaFalls from '../../assets/images 2.png'





const Continental = () => {
  

    return (
        <>
            <div className="ContiBody">
                <div className="ContiWrapper">
                    <div className="ContiTop">
                        <div className="ContiHeadetTextDiv">
                            <h1>Continental Category</h1>
                        </div>
                        <div className="ContiNav">
                            <ul>
                                <li>Africa</li>
                                <li>Europe</li>
                                <li>Asia</li>
                                <li>North / South America</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ContiDown">
                        <div className="ContiImgBox">
                            <img src={Kilimanjaro} alt="" draggable="false"/>
                            <div className="ContiCTA"></div>
                        </div>
                        <div className="ContiImgBox">
                            <img src={Pyramid} alt="" draggable="false"/>
                            <div className="ContiCTA"></div>
                        </div>
                        <div className="ContiImgBox">
                            <img src={Zanibar} alt="" draggable="false"/>
                            <div className="ContiCTA"></div>
                        </div>
                        <div className="ContiImgBox">
                            <img src={VictoriaFalls} alt="" draggable="false"/>
                            <div className="ContiCTA"></div>
                        </div>
                        <div className="ContiImgBox">
                            <img src={Kilimanjaro} alt="" draggable="false"/>
                            <div className="ContiCTA"></div>
                        </div>
                        <div className="ContiImgBox">
                            <img src={Pyramid} alt="" draggable="false"/>
                            <div className="ContiCTA"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Continental;

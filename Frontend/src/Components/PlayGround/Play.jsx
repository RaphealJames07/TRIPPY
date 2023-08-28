import {Button} from "antd";
import "./Play.css";

const Play = () => {
    return (
        <>
            <div className="PlayBody">
                <div className="PlayCard">
                    <div className="PlayCardHead">Search Results</div>
                    <div className="PlayCardResults">
                        <div className="PlayCardItem1">
                            <div className="PlayCardImgDiv">img here</div>
                            <div className="PlayCardDetailsDiv">
                                <div className="PlayCardDetails1">TourName</div>
                                <div className="PlayCardDetails2">
                                    Tour City <span>Tour Country</span>
                                </div>
                                <div className="PlayCardDetails3">
                                    Tour Price <span>Tour Ratings</span>
                                </div>
                                <div className="PlayCardDetails4">
                                    <Button>View More</Button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Play;

import "./Intro.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { useDispatch } from "react-redux";
import { trippyUserLogOut } from "../Redux/Features";

import { Link } from "react-router-dom";


const Intro = () => {
    const dispatch = useDispatch();
    return (
        <div className="IntroBody">
       
            <div className="IntroWrapper">
                <div className="CenterDiv">
                    <Zoom>
                        <h1>Trippy</h1>
                    </Zoom>
                    <Fade left>
                        <h3>Explore the world, get Trippy.</h3>
                    </Fade>
                    <Link
                        to="/HeaderNew"
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <Flip right>
                            <button
                                onClick={() => {
                                    dispatch(trippyUserLogOut());
                                }}
                            >
                                Explore
                            </button>
                        </Flip>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;

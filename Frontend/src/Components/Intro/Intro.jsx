import "./Intro.css";

import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="IntroBody">
            <div className="IntroWrapper">
                <div className="CenterDiv">
                    <h1>Trippy</h1>
                    <h3>Explore the world, get Trippy.</h3>
                    <Link
                        to="/Home"
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <button>Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;

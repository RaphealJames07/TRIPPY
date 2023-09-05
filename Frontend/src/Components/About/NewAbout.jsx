
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import "./NewAbout.css";
import Faq from "./AboutColl";

const NewAbout = () => {
    return (
        <>
            <div className="NewAboutBody">
                <HeaderLone />
                <div className="NewAboutBodyDiv">
                    <div className="NewABoutContent">
                        <div className="NewABoutContentHeaderText">
                            <h1>About Trippy</h1>
                        </div>
                        <div className="NewABoutContentBoxes">
                            <div className="NewABoutContent1">
                                <p>
                                    Trippy transcends being a mere travel app;
                                    its an open door to transformative
                                    journeys. With an unwavering passion for
                                    exploration, were committed to turning your
                                    travel dreams into tangible memories. At
                                    Trippy, each adventure is meticulously
                                    curated to ensure a seamless, unforgettable
                                    experience that takes you beyond the
                                    ordinary and into the extraordinary realms
                                    of the world.
                                    At Trippy, we're not just building a website; we're building a community of adventurers.
                                </p>
                            </div>
                            <div className="NewABoutContent1">
                                <p>
                                    Welcome to the heart of Trippys offerings,
                                    a realm where more than deals await. Our
                                    offers are pathways to a world of
                                    personalized flights, accommodations, and
                                    moments. Theyre meticulously crafted to
                                    grant you not just a place to stay or a
                                    flight to catch, but the chance to immerse
                                    yourself in unique experiences that define
                                    your journey. At Trippy, every offer is an
                                    opportunity to create memories that linger
                                    long after the journey ends.
                                </p>
                            </div>
                            <div className="NewABoutContent1">
                                <p>
                                    Trippys inception sprang from a shared love
                                    of exploration. Envisioned by fellow
                                    travelers, our commitment is woven into each
                                    aspect of our service. From effortless
                                    booking to exceptional support, we endeavor
                                    to make your journey seamless. We believe in
                                    the magic of travel, in its ability to
                                    reshape perspectives and broaden horizons.
                                    As we chart paths across the world, our goal
                                    remains unwavering: to craft a community of
                                    explorers who find solace in the vast
                                    landscapes of the unknown.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="NewAboutFaqs">
                        <h1>Frequently Asked Questions</h1>
                        <Faq />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewAbout;

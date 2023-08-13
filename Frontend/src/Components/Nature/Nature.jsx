import "./Nature.css";
import NatureCard from "./NatureCard";

const Nature = () => {
    return (
        <>
            <div className="NatureBody">
                <div className="NatureBodyWrap">
                    <div className="NatureBodyText">
                        <h1>Nature Attractions</h1>
                        <p>
                            Over the years nature has been a good source of
                            tourist attraction explore some top picks from
                            nature’s most visited places around the world
                        </p>
                    </div>
                    <div className="NatureImgDiv">
                        <NatureCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nature;

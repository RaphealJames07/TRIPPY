import Famous from "../Famous/Famous";
import Nature from "../Nature/Nature";
import Special from "../Special/Special";
import "./NewExplore.css";

const NewExplore = () => {
    return (
        <>
            <div className="NewExploreBody">
              <div className="NewExploreHeader">
                <h1>Explore</h1>
                <p>Explore the world of varieties and different tourist centers all over the world, popular places that keeps you up to date, Natural sites that nature has incoporated for years which gives you the feel and sense of natue, Some special categories have been selected for you just to, and inclusion of Famous and Natural sites for your pleasure. Dont hesitate to explore the world with Trippy </p>
              </div>
              <div className="NewExploreContents">
              <Famous/>
                <Nature/>
                <Special/>
              </div>
            </div>
        </>
    );
};

export default NewExplore;

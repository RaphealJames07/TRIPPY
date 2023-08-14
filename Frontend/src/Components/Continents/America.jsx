import "../Continental/Continental.css";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";

const America = () => {
    const toursApiData = useSelector((state) => state.Trippy.allApiData);
    // console.log(toursApiData);

    const americaPlaces = toursApiData
        .filter((obj) => obj.continent === "north-and-south-america")
        .map((obj) => obj.places)
        .flat();

    console.log("Asia places are", americaPlaces);

    return (
        <>
            {americaPlaces?.map((item) => (
                <div className="ContiImgBox" key={item?.id}>
                    <div className="ContiImgDiv">
                        <img src={item.images[4]} alt="" draggable="false" />
                    </div>
                    <div className="ContiCTA">
                        <h3>
                            {item?.tourName}
                            <span>
                                <h4>{item?.country}</h4>
                            </span>
                        </h3>

                        <h4>{item?.city}</h4>
                        <div className="ContiCTABtnRev">
                            <div className="ContiCTAREV">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <span>{item?.ratings.length} Review</span>
                            </div>
                            <button>View More</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default America;

import "../Continental/Continental.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";

const AllContinent = () => {
    const toursApiData = useSelector((state) => state.Trippy.allApiData);
    console.log(toursApiData);

    const allPlaces = toursApiData.reduce((accumulator, currentObject) => {
        return accumulator.concat(currentObject.places);
    }, []);

    // console.log(allPlaces);

    return (
        <>
            {allPlaces?.map((item) => (
                <div className="ContiImgBox" key={item?.id}>
                    <div className="ContiImgDiv">
                        <img src={item.images[0]} alt="" draggable="false" />
                    </div>
                    <div className="ContiCTA">
                        {item?.tourName}
                        <span>
                            <h4>{item?.country}</h4>
                        </span>
                        <h4>{item.city}</h4>
                        <div className="ContiCTABtnRev">
                            <div className="ContiCTAREV">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <span>{item.ratings.length} Review</span>
                            </div>
                            <button>View More</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AllContinent;

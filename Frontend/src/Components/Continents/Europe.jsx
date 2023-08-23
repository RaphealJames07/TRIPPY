import "../Continental/Continental.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Europe = () => {

  const toursApiData = useSelector((state) => state.Trippy.allApiData);
    // console.log(toursApiData);

    const europePlaces = toursApiData
        .filter((obj) => obj.continent === "europe")
        .map((obj) => obj.places)
        .flat();

    console.log("Europe places are", europePlaces);

    return (
        <>
            {
              europePlaces?.map((item)=>(
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
              ))
            }
        </>
    );
};

export default Europe;

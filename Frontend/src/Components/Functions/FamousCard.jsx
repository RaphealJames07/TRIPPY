import "./FamousCard.css";
// import Beach from "../../assets/beachpics.jpg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";

const FamousCard = () => {
    const toursApiData = useSelector((state) => state.Trippy.allApiData);
    // console.log('All API', toursApiData);

    const famousPlaces = toursApiData
        .filter((e) => e.category === "famous-attractions")
        .map((item) => item.places)
        .reduce((accumulator, placesArray) => {
            return accumulator.concat(placesArray);
        }, []);

    // console.log(famousPlaces);

    const StarRating = ({ rating }) => {
        const filledStars = Array.from({ length: rating }).fill(null);
        const emptyStars = Array.from({ length: 5 - rating }).fill(null);

        return (
            <div className="Rating">
                {filledStars.map((_, index) => (
                    <AiFillStar
                        style={{ width: "15%", height: "100%" }}
                        key={`filled-${index}`}
                    />
                ))}
                {emptyStars.map((_, index) => (
                    <AiOutlineStar
                        style={{ width: "15%", height: "100%" }}
                        key={`empty-${index}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            {famousPlaces?.map((item) => (
                <div className="section_our_solution" key={item?.id}>
                    <div className="row">
                        <div className="our_solution_category">
                            <div className="solution_cards_box">
                                <div className="solution_card">
                                    <div className="hover_color_bubble"></div>
                                    <div className="so_top_icon">
                                        <img src={item?.images[0]} alt="" />
                                    </div>
                                    <div className="solu_title">
                                        <div>
                                            {item?.city}{" "}
                                            <span className="CountryMove">
                                                {item?.country}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="SmallP">{item?.tourName}</p>
                                    <div className="solu_description">
                                        <StarRating rating={item?.starRating} />

                                        <div className="ViewMoreBtnDiv">
                                            <button
                                                className="read_more_btn"
                                                type="button"
                                            >
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FamousCard;

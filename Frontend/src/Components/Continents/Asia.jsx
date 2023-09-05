import axios from "axios";
import "../Continental/Continental.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Modal } from "antd";
import { useState } from "react";


const Asia = () => {

  const toursApiData = useSelector((state) => state.Trippy.allApiData);
    // console.log(toursApiData);

    const asiaPlaces = toursApiData
        .filter((obj) => obj.continent === "asia")
        .map((obj) => obj.places)
        .flat();

    console.log("Asia places are", asiaPlaces);

    const [addWishList, setAddWishList] = useState([]);
    // const [heartColor, setHeartColor] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);
    const [addingWish, setAddingWish] = useState(false);
    const user = useSelector((state) => state.Trippy.trippyUser);
    const [modalVisible, setModalVisible] = useState(false);

    const userToken  = user ? user.token : null;
    const data = {};

    const handleAddToWishList = (tourId) => {
        setModalVisible(true);
        setAddingWish(true);

        const token = userToken;
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
            .put(
                `https://trippyapiv1.onrender.com/trippy/wishlist/${tourId}`,
                data,
                {headers}
            )
            .then((res) => {
                console.log(res);
                setAddWishList([...addWishList, tourId]); // Add tourId to addWishList
                setAddingWish(false)
                setAddSuccess(true);
            })
            .catch((err) => {
                console.log(err);
                setAddSuccess(false);
            })
            .finally(() => {
                setTimeout(() => {
                    setAddingWish(false);
                    setModalVisible(false);
                    setAddSuccess(false);
                }, 3000); // Close modal after 3 seconds
            });
    };

    return (
        <>

<Modal
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                className="HeroModalBody"
            >
                {addingWish ? (
                    <p>Adding to Wishlist...</p>
                ) : (
                    <p>
                        {addSuccess
                            ? "Tour Added Successfully"
                            : "Failed To Add Tour"}
                    </p>
                )}
            </Modal>

            {
              asiaPlaces?.map((item)=>(
                <div className="ContiImgBox" key={item?.id}>
                    <div className="ContiImgDiv">
                        <img src={item.images[0]} alt="" draggable="false" />
                        <div className="ContiAddToFav">
                                                <FaHeart
                                                    style={{
                                                        color: `${
                                                            addWishList.includes(
                                                                item._id
                                                            )
                                                                ? "red"
                                                                : "#00B4D8"
                                                        }`,
                                                    }}
                                                    className="heartIcon"
                                                    onClick={() =>
                                                        handleAddToWishList(
                                                            item._id
                                                        )
                                                    }
                                                />
                                            </div>
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

export default Asia;

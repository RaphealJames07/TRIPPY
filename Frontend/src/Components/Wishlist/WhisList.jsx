import { useState } from "react";
import HeaderLone from "../Header/HeaderLone";
import Footer from "../Footer/Footer";
import "./WishList.css";
import axios from "axios";
import { useSelector } from "react-redux";

const WishList = () => {



  const userToken = useSelector((state) => state.Trippy.trippyUser.token);
  const [wishlistRes, setWishListRes] = useState([])

    const handleGetWishList = () => {
      const token = userToken
      const headers = {
        Authorization: `Bearer ${token}`,
    };
      console.log('Getting WishList...');
        const url = "https://trippyapiv1.onrender.com/trippy/wishlist"
        console.log(headers);
        axios
            .get(url, {headers})
            .then((res) => {
                console.log("response", res);
                setWishListRes(res.data.wishlist)
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    };

    console.log(wishlistRes);

    return (
        <>
            <div className="WishListBody">
                <HeaderLone />
                <div className="WishListContents">
                    <div className="WishListTop">
                        <h1>My Wish List</h1>
                    </div>
                    <div className="WishListDown">
                        <div className="WishListDownWrap">
                            <div className="WishListItem1">
                              <button onClick={handleGetWishList}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default WishList;

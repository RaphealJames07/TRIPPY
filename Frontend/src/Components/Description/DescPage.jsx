import "./DescPage.css";
import { GrLocation } from "react-icons/gr";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Reviews from "./Reviews";
import Amenities from "./Amenities";
import { BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi';


const DescPage = () => {
    const [description, setDescription] = useState(false);
    const [amenities, setAmenities] = useState(false);
    const [reviews, setReviews] = useState(false);
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get("https://trippyapiv1.onrender.com/trippy/find-categories");
            setImages(response.data.categories);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        if (images.length === 0) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, [images]);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    

    return (
        <>
            <div className="DescBody">
                <div className="DescTop">
                    <div className="leftarrow" onClick={goToPreviousImage}>
                        <div className="theleftarrowicon"><BiSolidLeftArrow/></div>
                    </div>
                    <div className="rightarrow" onClick={goToNextImage}>
                        <div className="therightarrowicon"><BiSolidRightArrow/></div>
                    </div>
                </div>
                <div className="DescDown">
                    <div className="DescDownWrap">
                        <div className="DescDownInitials">
                            <div className="DescDownHeadText">
                                <h1>Mykonos</h1>
                            </div>
                            <div className="DescDownHeaderInfo">
                                <span>
                                    <GrLocation />
                                    <h2>Greece</h2>
                                </span>
                                <span>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </span>
                            </div>
                        </div>
                        <div className="DescNav">
                            <ul>
                                <li
                                    onClick={() => {
                                        setDescription(true);
                                        setAmenities(false);
                                        setReviews(false);
                                    }}
                                >
                                    Description
                                </li>
                                <li
                                    onClick={() => {
                                        setDescription(false);
                                        setAmenities(true);
                                        setReviews(false);
                                    }}
                                >
                                    Amenities
                                </li>
                                <li
                                    onClick={() => {
                                        setDescription(false);
                                        setAmenities(false);
                                        setReviews(true);
                                    }}
                                >
                                    Reviews
                                </li>
                            </ul>
                        </div>
                        <div className="DescBoard">
                            {description ? (
                                <>
                                    <p>
                                        Mykonos is an island in the Cyclades
                                        group in the Aegean Sea. It is popularly
                                        known for its summer party atmosphere.
                                        Beaches such as Paradise and Super
                                        Paradise have bars that blare thumping
                                        music. Massive dance clubs attract
                                        world-renowned DJs and typically stay
                                        open well past dawn. Iconic landmarks
                                        include a row of 16th-century windmills,
                                        which sit on a hill above Mykonos town.
                                    </p>
                                </>
                            ) : amenities ? (
                                <Amenities />
                            ) : reviews ? (
                                <Reviews />
                            ) : null}
                        </div>
                        <div className="DescButtonBook">
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescPage;

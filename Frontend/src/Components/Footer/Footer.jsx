import "./Footer.css";
import Logo from "../../assets/Logo.png";

const Footer = () => {
    return (
        <>
            <div className="FooterBody">
                <div className="FooterWrapper">
                    <div className="FooterHeader">
                        <div className="FooterLogoDiv">
                            <div className="FooterLogoImgDiv">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="FooterAddy">
                                <p>
                                    5th flora, 700/D kings road, greenlane New
                                    York-1782+10 367 826 2567
                                    contact@carpenter.com
                                </p>
                            </div>
                            <div className="FooterRights">
                                <p>
                                    Copyright ©2023 All rights reserved | This
                                    template is made with love by Bad man KoKo
                                </p>
                            </div>
                        </div>
                        <div className="Demma">
                            <div className="FooterCompanyDiv">
                                <div className="FooterCompanyHeaderText">
                                    <h2>Company</h2>
                                </div>
                                <div className="FooterCompanyNav">
                                    <ul>
                                        <li>Pricing</li>
                                        <li>About</li>
                                        <li>Explore</li>
                                        <li>Bookings</li>
                                        <li>Account</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="FooterTagsDiv">
                                <div className="FooterTagHeaderText">
                                    <h2>Tags</h2>
                                </div>
                                <div className="TagsSocials">
                                    <div className="TagSocialIconDiv">
                                        <div className="TagSocialIcon"></div>
                                        <div className="TagSocialIcon"></div>
                                        <div className="TagSocialIcon"></div>
                                        <div className="TagSocialIcon"></div>
                                    </div>
                                    <div className="TagSocialsText">
                                        <p>Facebook</p>
                                        <p>Instagram</p>
                                        <p>Twitter</p>
                                        <p>LinkedIn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="FooterDown">
                        <div className="FooterLine"></div>
                        <div className="FooterCopyRight">
                            Copyright ©2023 All rights reserved | This template
                            is made with love by Bad man KoKo
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

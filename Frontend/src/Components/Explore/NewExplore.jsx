import Famous from "../Famous/Famous";
import Footer from "../Footer/Footer";
import HeaderLone from "../Header/HeaderLone";
import Nature from "../Nature/Nature";
import Services from "../Services/Services";
import Special from "../Special/Special";
import "./NewExplore.css";

const NewExplore = () => {
    return (
        <>
            <div className="HeaderNewBody">
                <HeaderLone />
                <div className="HeaderNewNavdiv">
                    <div className="HeaderNewNavdivWrap">
                        <Famous />
                        <Nature />
                        <Special />
                        <Services />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewExplore;

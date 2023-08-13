import Header from "../Header/Header";
import Hero from "../Hero/Hero";
// import Flight from "../Flight/Flight";
import "./Home.css";
import Footer from "../Footer/Footer";
import Continental from "../Continental/Continental";
import Famous from "../Famous/Famous";
import Nature from "../Nature/Nature";
import Special from "../Special/Special";
import Services from "../Services/Services";

const Home = () => {
    return (
        <>
            <div className="HomeBody">
                <Header />
                <Hero />
                <Continental />
                <Famous />
                <Nature/>
                <Special/>
                <Services/>
                <Footer />
            </div>
        </>
    );
};

export default Home;

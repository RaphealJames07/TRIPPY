import Header from "../Header/Header";
import Hero from "../Hero/Hero";
// import Flight from "../Flight/Flight";
import "./Home.css";
import Footer from "../Footer/Footer";
import Continental from "../Continental/Continental";

const Home = () => {
    return (
        <>
            <div className="HomeBody">
                <Header />
                <Hero />
                <Continental />
                <Footer />
            </div>
        </>
    );
};

export default Home;

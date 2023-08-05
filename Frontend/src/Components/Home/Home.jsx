import Header from "../Header/Header";
// import Hero from "../Hero/Hero";
import Flight from "../Flight/Flight";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="HomeBody">
                <Header />
                <Flight />
                {/* <Hero /> */}
            </div>
        </>
    );
};

export default Home;

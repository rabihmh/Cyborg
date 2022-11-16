import './Home.css';
import Hero from "../../Sections/Hero/Hero";
import MostPopular from "../../Sections/MostPopular/MostPopular";
import GamingLibrary from "../../Sections/GamingLibrary/GamingLibrary";

const Home = () => {
    return (<>
            <Hero/>
            <MostPopular/>
            <GamingLibrary/>
        </>);
};

export default Home;

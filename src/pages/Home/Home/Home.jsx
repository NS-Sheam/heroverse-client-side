import FeedBack from "../../FeedBack/FeedBack";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import TabSection from "../TabSection/TabSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <TabSection />
            <FeedBack />
        </div>
    );
};

export default Home;
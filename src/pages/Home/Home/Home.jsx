import FeedBack from "../../FeedBack/FeedBack";
import Banner from "../Banner/Banner";
import Collection from "../Collection/Collection";
import Gallery from "../Gallery/Gallery";
import TabSection from "../TabSection/TabSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <TabSection />
            <Collection />
            <FeedBack />
        </div>
    );
};

export default Home;
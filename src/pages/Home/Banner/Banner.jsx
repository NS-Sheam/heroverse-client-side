import Marquee from "react-fast-marquee";
import bannerImg from "../../../assets/banner.jpg"
import superheros from "../../../assets/superhero.png"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div
            style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#606060",
                backgroundBlendMode: "overlay"
            }}
            className="min-h-screen px-6 py-6"
        >
            <div className="container mx-auto my-auto lg:flex justify-between items-center space-y-4 lg:space-y-0">
                {/* left div  */}
                <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                className="lg:w-1/2 space-y-3">
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Welcome to Heroverse-</h1>
                    <h3 className="text-xl lg:text-3xl font-bold text-orange-secondary">Your Ultimate Destination for Action Figure Collectibles!</h3>
                    <p className="text-xl lg:text-2xl text-white font-bold">
                        <Marquee
                        gradient={true}
                        gradientColor={[255, 247, 219]}
                        gradientWidth={100}
                        className="rounded-md"
                        >
                            Explore a world of legendary heroes and iconic characters at Heroverse. We offer a vast collection of high-quality action figures and collectibles inspired by your favorite superheroes and villains. Whether you are a passionate collector or a fan looking to add a touch of heroism to your space, Heroverse is your go-to online store. Discover the power of imagination and bring your favorite characters to life with our meticulously crafted action figures. Start your heroic journey today and unlock a universe of adventure and nostalgia at Heroverse
                        </Marquee>
                    </p>
                </div>
                {/* right div  */}
                <div className="lg:w-1/2">
                    <img src={superheros} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
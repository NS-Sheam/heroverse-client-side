import { useEffect, useState } from "react";
const Gallery = () => {
    const [toyData, setToyData] = useState([]);

    useEffect(() => {
        fetch("https://toy-marketplace-server-chi-seven.vercel.app/allData")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToyData(data);
            })
    }, [])

    return (
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-easing="linear"
        data-aos-duration="200"
        data-aos-offset="50"
            className="container mx-auto px-10 my-5">
            <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">Explore Our Gallery</h1>
            <div className="flex flex-wrap gap-5 mx-auto justify-center items-center">
                {
                    toyData?.slice(0, 8).map((data, i) => {
                        return (
                            <div key={i} className="relative">
                                <img
                                    className={`${i % 2 === 0 ? "w-16 lg:w-72 h-24 lg:h-72" : "w-20 lg:w-48 h-24 lg:h-60"}  rounded-md shadow-2xl`}
                                    src={data.image}
                                    alt="" />
                                <div className='flex justify-center items-center bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 p-4 transform duration-200'>
                                    <h2 className='text-center text-2xl text-white font-bold'>{data.toyName}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const Collection = () => {
    const [alltoys, setAlltoys] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/allData`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
            })
    }, [])

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setSlidesPerView(4);
            }
            else if ((width >= 768)) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(1);
            }
        };
        handleResize(); // call the function once on mount
        window.addEventListener('resize', handleResize); // listen for resize events

        return () => window.removeEventListener('resize', handleResize); // remove the event listener on unmount
    }, []);
    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-easing="linear"
            data-aos-duration="200"
            className='container mx-auto px-10 my-5'>
            <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">Our Exclusive Toy Collection</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation={true}
                // pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {Array.isArray(alltoys) &&
                    alltoys.map(toy => (
                        <SwiperSlide key={toy._id}>
                            <div className="card w-full h-96 bg-base-100 shadow-xl p-5 my-5">
                                <figure className='h-1/2'>
                                    <img src={toy.image} className='h-full w-full' alt="Shoes" />
                                </figure>
                                <div className="flex flex-col gap-5 pt-5">
                                    <h2 className="card-title">{toy.toyName}</h2>
                                    <p>Price: {toy.price}</p>
                                    <div>
                                        <span> Rating: {toy.rating}
                                            <Rating
                                                style={{ maxWidth: 100 }}
                                                value={toy.rating} readOnly
                                            />
                                        </span>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/singledata/${toy._id}`}>
                                            <button className="px-4 py-2 rounded-full text-white bg-orange-primary hover:bg-orange-secondary">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Collection;
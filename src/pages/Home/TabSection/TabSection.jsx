import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import 'react-tabs/style/react-tabs.css';


const TabSection = () => {
    const [dollData, setDollData] = useState([]);
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const dollD = data.filter(d => d.category === "doll")
                const card = data.filter(d => d.category === "car")
                setDollData(dollD);
                setCarData(card);
            })
    }, [])
    return (
        <div className='container mx-auto my-5 lg:my-8 px-6'>
            <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">Choose your favourite toy</h1>
            <Tabs className="w-4/5 mx-auto">
                <TabList className="border-none outline-none">
                    <Tab><p className='text-xl font-bold bg-orange-primary px-6 py-2 rounded-full text-white'>Doll</p></Tab>
                    <Tab><p className='text-xl font-bold bg-orange-primary px-6 py-2 rounded-full text-white'>Car</p></Tab>
                </TabList>
                <TabPanel>
                <div className="flex flex-col lg:flex-row my-5 gap-5">
                        {
                            dollData?.slice(0, 3).map((data) => {
                                return (
                                    <div key={data._id} className="card lg:w-1/3 bg-base-100 shadow-xl p-5">
                                        <figure className='h-1/2'>
                                            <img src={data.image} className='h-full w-full' alt="Shoes" />
                                        </figure>
                                        <div className="flex flex-col gap-5 pt-5">
                                            <h2 className="card-title">{data.toyName}</h2>
                                            <p>Price: {data.price}</p>
                                            <div>
                                                <span> Rating: {data.rating}
                                                    <Rating
                                                        style={{ maxWidth: 100 }}
                                                        value={data.rating} readOnly
                                                    />
                                                </span>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <button className="px-4 py-2 rounded-full text-white bg-orange-primary hover:bg-orange-secondary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col lg:flex-row my-5 gap-5">
                        {
                            carData?.slice(0, 3).map((data) => {
                                return (
                                    <div key={data._id} className="card lg:w-1/3 bg-base-100 shadow-xl p-5">
                                        <figure className='h-1/2'>
                                            <img src={data.image} className='h-full w-full' alt="Shoes" />
                                        </figure>
                                        <div className="flex flex-col gap-5 pt-5">
                                            <h2 className="card-title">{data.toyName}</h2>
                                            <p>Price: {data.price}</p>
                                            <div>
                                                <span> Rating: {data.rating}
                                                    <Rating
                                                        style={{ maxWidth: 100 }}
                                                        value={data.rating} readOnly
                                                    />
                                                </span>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <button className="px-4 py-2 rounded-full text-white bg-orange-primary hover:bg-orange-secondary">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;
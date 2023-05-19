import { useLoaderData, useNavigation } from "react-router-dom";
import AllToysRows from "./AllToysRows";
import SingleToy from "../../components/SingleToy/SingleToy";
import { useState } from "react";

const AllToys = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    const allToys = useLoaderData();
    const [singleToyData, setSingleToyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleSingleToyData = id => {
        fetch(`http://localhost:5000/alldata/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleToyData(data);
                setLoading(false);
            })
    }
    return (
        <div className="container mx-auto px-10 my-5">
            <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">Explore Our Gallery</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <td>Toy Name price</td>
                            <td>Category</td>
                            <td>Seller</td>
                            <td>Available Quantity</td>
                            <td>View Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* table row */}
                        {
                            allToys?.map(toy => {
                                return (
                                    <AllToysRows
                                        key={toy._id}
                                        toy={toy}
                                        handleSingleToyData={handleSingleToyData}
                                    />
                                )
                            })
                        }
                        {/* table row finished */}
                    </tbody>
                </table>
            </div>
            {
                !setLoading ? <p>loaaaaadiiing....</p> : <SingleToy
                singleToyData={singleToyData}
            />
            }
        </div>
    );
};

export default AllToys;
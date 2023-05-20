
import AllToysRows from "./AllToysRows";
import SingleToy from "../../components/SingleToy/SingleToy";
import { useEffect, useState } from "react";

const AllToys = () => {
    const [allToys, setAlltoys] = useState([]) ;
    const [singleToyData, setSingleToyData] = useState([]);
    const [filterOption, setFilterOption] = useState("all");
    useEffect(()=> {
        fetch(`http://localhost:5000/allData?filter=${filterOption}`)
        .then(res => res.json())
        .then(data => {
            setAlltoys(data);
        })
    }, [filterOption])
    const handleSingleToyData = id => {
        fetch(`http://localhost:5000/alldata/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleToyData(data);
            })
    }
    const handleFilterOption = event =>{
        const filter = event.target.value;
        setFilterOption(filter);
    }
    return (
        <div className="container mx-auto px-10 my-5">
            <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">All Toys</h1>
            <div className="overflow-x-auto w-full">
                <div className="my-4 flex items-end justify-end">
                <select onClick={handleFilterOption} className="select select-bordered max-w-xs">
                    <option selected>All</option>
                    <option>Price</option>
                    <option>Recent post</option>
                </select>
                </div>
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
            <SingleToy
                singleToyData={singleToyData}
            />
        </div>
    );
};

export default AllToys;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SingleToy from "../../components/SingleToy/SingleToy";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [singleToyData, setSingleToyData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allData?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user]);
    const handleUpdata = id => {
        fetch(`http://localhost:5000/alldata/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleToyData(data);
            })
    }

    return (
        <div className="container mx-auto px-10 my-5">
            <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">My Toys</h1>
            <div className="overflow-x-auto w-full">
                <div className="my-4 flex items-end justify-end">
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
                            myToys?.map(toy => {
                                return (
                                    <MyToysRow
                                        key={toy._id}
                                        toy={toy}
                                        handleUpdata={handleUpdata}
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

export default MyToys;
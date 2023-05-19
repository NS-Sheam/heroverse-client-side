import { useLoaderData } from "react-router-dom";
import AllToysRows from "./AllToysRows";

const AllToys = () => {
    const allToys = useLoaderData();
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
                            allToys.map(toy => (<AllToysRows
                                key={toy._id}
                                toy={toy}
                            />))
                        }
                        {/* row */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;
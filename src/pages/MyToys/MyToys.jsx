import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
    document.title=("Heroverse||My Toys")
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allData?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(toy => toy._id !== id)
                            setMyToys(remaining);
                        }
                    })
            }
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
                            <td>Toy Name</td>
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
                                        handleDelete={handleDelete}
                                    />
                                )
                            })
                        }
                        {/* table row finished */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
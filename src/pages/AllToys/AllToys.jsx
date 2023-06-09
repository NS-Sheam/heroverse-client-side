
import AllToysRows from "./AllToysRows";
import SingleToy from "../../components/SingleToy/SingleToy";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const AllToys = () => {
    document.title = ("Heroverse||All Toys")
    const [allToys, setAlltoys] = useState([]);
    // const [itemsPerPage, setItemPerPage] = useState(5);
    // const [currentPage, setCurrentPage] = useState(0);
    const [singleToyData, setSingleToyData] = useState([]);
    const [filterOption, setFilterOption] = useState("all");
    const [showAll, setShowAll] = useState(false)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // const totalPages = Math.ceil(allToys.length / itemsPerPage)
    // const pageNumbers = [...Array(totalPages).keys()];
    useEffect(() => {
        fetch(`http://localhost:5000/allData?filter=${filterOption}`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
            })
    }, [filterOption])
    // http://localhost:5000/
    // useEffect(() => {
    //     // fetch(`http://localhost:5000/allData?page=${currentPage}&limit=${itemsPerPage}`)

    // }, [])
    const handleAllToys = () => {
        fetch(`http://localhost:5000/allData?limit=all`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
                setShowAll(!showAll);
                return;
            })
    }

    const handleSingleToyData = id => {
        if (!user) {
            navigate("/login", { state: { from: location } })
        }
        fetch(`http://localhost:5000/alldata/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleToyData(data);
            })

    }
    const handleFilterOption = event => {
        const filter = event.target.value;
        setFilterOption(filter);
    }
    const handleSearch = event => {
        event.preventDefault();
        const searchValue = event.target.value;
        fetch(`http://localhost:5000/alldata?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAlltoys(data);
            })
    }
    // const options = [5, 10, 20];
    // function handleSelectChange(event) {
    //     setItemPerPage(parseInt(event.target.value));
    //     setCurrentPage(0);
    // }
    return (
        <div className="container mx-auto px-10 my-5">
            <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">All Toys</h1>
            <div className="overflow-x-auto w-full">
                <div className="my-4 flex items-center justify-between">
                    <form onChange={handleSearch} className="flex gap-2">
                        <input type="text" name="search" placeholder="Toy Name" className="input input-bordered w-full max-w-xs" />
                        <button type="submit" className="bg-orange-primary hover:bg-orange-secondary text-white font-bold py-3 px-3 rounded-md">Search</button>
                    </form>
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
            {
                !showAll &&
                <div className="my-4 flex items-end justify-end">
                    <button onClick={handleAllToys} className="py-2 px-4 bg-orange-primary hover:bg-orange-secondary text-white font-bold rounded-md">See all</button>
                </div>
            }
            {/* <div className="pagination text-center space-x-4">
                {
                    pageNumbers.map(number => <button
                        key={number}
                        className={currentPage === number ?
                            "btn btn-xs bg-blue-dark-light hover:bg-orange-secondary rounded-full border-none mx-2" :
                            'btn btn-xs bg-orange-primary hover:bg-orange-secondary rounded-full border-none mx-2'}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div> */}
        </div>
    );
};

export default AllToys;
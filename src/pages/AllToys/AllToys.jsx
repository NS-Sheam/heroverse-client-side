
import AllToysRows from "./AllToysRows";
import SingleToy from "../../components/SingleToy/SingleToy";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const AllToys = () => {
    document.title = ("Heroverse||All Toys")
    const [allToys, setAlltoys] = useState([]);
    const [itemsPerPage, setItemPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [singleToyData, setSingleToyData] = useState([]);
    const [filterOption, setFilterOption] = useState("all");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    console.log(allToys.length);
    const totalPages = Math.ceil(allToys.length / itemsPerPage)
    const pageNumbers = [...Array(totalPages).keys()];
    console.log(totalPages);
    console.log(pageNumbers);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-chi-seven.vercel.app/allData?filter=${filterOption}`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
            })
    }, [filterOption])
    useEffect(() => {
        fetch(`https://toy-marketplace-server-chi-seven.vercel.app/allData?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
                return;
            })
    }, [currentPage, itemsPerPage])

    const handleSingleToyData = id => {
        if (!user) {
            navigate("/login", { state: { from: location } })
        }
        fetch(`https://toy-marketplace-server-chi-seven.vercel.app/alldata/${id}`)
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
        fetch(`https://toy-marketplace-server-chi-seven.vercel.app/alldata?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAlltoys(data);
            })
    }
    const options = [5, 10, 20];
    function handleSelectChange(event) {
        setItemPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }
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
            <div className="pagination text-center space-x-4">
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
            </div>
        </div>
    );
};

export default AllToys;
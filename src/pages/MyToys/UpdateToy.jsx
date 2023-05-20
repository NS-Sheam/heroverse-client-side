import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const singleToyData = useLoaderData();
    const { _id, toyName, seller, category, rating, subCategory,details, image, price, quantity } = singleToyData;
    console.log(singleToyData);
    const navigate = useNavigate();
    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const seller = form.seller.value;
        const toyName = form.toyname.value;
        const image = form.image.value;
        const category = form.category.value.toLowerCase();
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updatedToyDetails = {
            seller,
            toyName,
            image,
            category,
            subCategory,
            price,
            rating,
            quantity,
            details
        };
        console.log(updatedToyDetails);
        fetch(`http://localhost:5000/updatetoy/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToyDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/mytoys");
                }

            })
    }
    return (

        <div className="hero bg-base-200 min-h-screen px-4 lg:px-10 py-5">
            <div className="">
                <div className="text-center my-10 space-x-4">
                    <h1 className="text-2xl lg:text-4xl font-bold text-center text-orange-primary">Update Toy</h1>
                    <p className=" text-blue-dark">Attention Toy Sellers! Start showcasing your amazing collection of toys on our platform and connect with toy enthusiasts from all over the world. Adding your toys to our website is quick and easy.</p>
                </div>
                <form onSubmit={handleUpdateToy} className="card w-4/5 shadow-2xl bg-base-100 mx-auto my-4 ">
                    <div className="card-body grid lg:grid-cols-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" placeholder="Seller Name" name="seller" defaultValue={seller} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" placeholder="Toy Name" name="toyname" defaultValue={toyName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Image URL</span>
                            </label>
                            <input type="url" placeholder="Toy Image URL" name="image" defaultValue={image} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="select w-full">
                                <option selected>Category: {category}</option>
                                <option>Doll</option>
                                <option>Car</option>
                                <option>Robot</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" placeholder="Sub Category" name="subcategory" defaultValue={subCategory} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" placeholder="Rating" step="0.01" name="rating" defaultValue={rating} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" name="quantity" defaultValue={quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control lg:col-span-3">
                            <label className="label">
                                <span className="label-text">Toy Details</span>
                            </label>
                            <textarea placeholder="Toy Details" name="details" defaultValue={details} className="textarea textarea-bordered textarea-md w-full" ></textarea>
                        </div>
                        <div className="form-control mt-6 lg:col-span-3 lg:w-1/5 lg:ms-auto">
                            <button type="submit" className="btn bg-orange-primary hover:bg-orange-secondary border-none font-bold">Update Toy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;
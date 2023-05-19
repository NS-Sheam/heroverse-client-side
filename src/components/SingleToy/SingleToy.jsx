import { Rating } from "@smastrom/react-rating";

const SingleToy = ({ singleToyData }) => {
    const { toyName, seller, image, details, price, quantity, rating } = singleToyData;
    return (
        
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl lg:h-[calc(70vh)] flex items-center">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                        <div className="w-3/4 lg:w-1/2 rounded-lg flex">
                            <img className="rounded-lg w-full lg:w-3/6" src={image} alt="" />
                        </div>
                        <div className="w-3/4 lg:w-1/2 lg:text-right">
                            <h2 className="text-2xl lg:text-4xl font-bold text-orange-primary">{toyName}</h2>
                            <h3 className="text-xl lg:text-2xl font-bold text-orange-primary">Seller: <span className="text-blue-dark">{seller}</span></h3>
                            <p>{details}</p>
                            <p className="text-orange-primary font-bold">{price}</p>
                            <p className="text-red-500">{quantity} pcs. availbale</p>
                            <div className="flex lg:justify-end">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating} readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2 bg-orange-primary hover:bg-orange-secondary border-none">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
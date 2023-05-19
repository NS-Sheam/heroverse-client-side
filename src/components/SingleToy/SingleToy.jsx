import { Rating } from "@smastrom/react-rating";

const SingleToy = ({ singleToyData }) => {
    const { toyName, seller, email, image, details, price, quantity, rating } = singleToyData;
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal overflow-hidden">
                <div className="modal-box w-11/12 max-w-5xl h-[calc(70vh)]">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="w-1/2 rounded-lg">
                            <img className="rounded-lg w-full" src={image} alt="" />
                        </div>
                        <div className="w-1/2 text-right">
                            <h2 className="text-2xl lg:text-4xl font-bold text-orange-primary">{toyName}</h2>
                            <h3 className="text-xl lg:text-2xl font-bold text-blue-dark">{seller}</h3>
                            <p>{details}</p>
                            <p className="text-orange-primary font-bold">{price}</p>
                            <p className="text-red-500">{quantity} pcs. availbale</p>
                            <div className="flex justify-end">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating} readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
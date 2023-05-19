
const AllToysRows = ({ toy, handleSingleToyData }) => {
    const { _id, toyName, seller, email, image, price, quantity } = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50 text-yellow-500">Price: {price}</div>
                    </div>
                </div>
            </td>
            <td>
                {seller}
                <br />
                <span className="badge badge-ghost badge-sm">Email: {email}</span>
            </td>
            <td>{price}</td>
            <td>{quantity} pcs. availbale</td>
            <th>
                <label
                    onClick={() => handleSingleToyData(_id)}
                    htmlFor="my-modal-5"
                    className="btn btn-xs border-none text-white bg-orange-primary hover:bg-orange-secondary"
                >
                    Details
                </label>
            </th>
        </tr>
    );
};

export default AllToysRows;
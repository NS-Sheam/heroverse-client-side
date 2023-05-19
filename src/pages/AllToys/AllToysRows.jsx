
const AllToysRows = ({toy}) => {
    const { _id, toyName, seller, email, category, image, price, quantity, details } = toy;
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
            <td>{quantity} pcs. available</td>
            <td>Purple</td>
            <th>
                <button className="btn btn-xs border-none text-white bg-orange-primary hover:bg-orange-secondary">Details</button>
            </th>
        </tr>
    );
};

export default AllToysRows;
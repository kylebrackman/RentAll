import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface UserItemCardProps {
    id: number;
    itemName: string;
    image: string;
    price: number;
    description: string;
}

const UserItemCard: React.FC<UserItemCardProps> = ({
    id,
    itemName,
    image,
    price,
    description
}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <Link to={`/item/${id}`}>
                <div className="relative overflow-hidden h-64"> {/* Set a fixed height for the container */}
                    <img className="object-cover w-full h-full" src={image} alt={description} />
                </div>
            </Link>
            <div className="px-6 py-4 bg-gray-800">
                <div className="font-bold text-xl mb-2 text-white">{itemName}</div>
                <p className="text-gray-700 text-base"></p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-800">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${price} Per Day</span>
                <br />
                <Link to={`/item/${id}`}>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rent</span>
                </Link>
            </div>
        </div>
    );
};

export default UserItemCard;

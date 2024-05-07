import React from 'react';
import { Link } from 'react-router-dom';

const AllItemCard = ({ itemName, itemId, image, itemPrice, description }) => {
    return (
        <Link to={`/item/${itemId}`}>
            <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden h-80 w-full"> {/* Set a fixed height and width for the container */}
                    <img class="object-cover w-full h-full" src={image} alt="Product" />
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">{itemName}</h3>
                <p class="text-gray-500 text-sm mt-2">{description}</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-gray-900 font-bold text-lg">${itemPrice} Per Day</span>
                    <Link to={`/item/${itemId}`}>
                        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">View Item</button>
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default AllItemCard;

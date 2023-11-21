import React from 'react';
import { Link } from 'react-router-dom'


const AllItemCard = ({ itemName, itemId, image, itemPrice, description }) => {

    return (
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg ">
            <Link to={`/item/${itemId}`}>
                <img class="w-full h-80" src={image}style={{color: "white"}} alt={description}/>
            </Link>
            <div class="px-6 py-4 bg-gray-800" >
                <div class="font-bold text-xl mb-2 text-white">{itemName}</div>
                <p class="text-gray-700 text-base">
                </p>
            </div>
            <div class="px-6 pt-4 pb-2 bg-gray-800">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${itemPrice} Per Day</span>
                <br />
                <Link to={`/item/${itemId}`}>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rent</span>
                </Link>
            </div>
        </div>
    )
}

export default AllItemCard

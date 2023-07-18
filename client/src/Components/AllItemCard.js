import React from 'react';
import { Link } from 'react-router-dom'


const AllItemCard = ({ itemName, itemId, image, itemPrice }) => {

    return (
        // <div >

        //     <Link to={`/item/${itemId}`}>
        //         <div >
        //             <div>
        //                 <h1 className="item-card-name">{itemName}</h1>
        //                 <img src={image} className='item-image' alt={itemName}></img>
        //                 <p>${itemPrice} Per Day</p>
        //             </div>
        //             <hr />
        //         </div>
        //     </Link>
        // </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Link to={`/item/${itemId}`}>
                <img class="w-full" src={image} alt="Sunset in the mountains" />
            </Link>
            <div class="px-6 py-4 bg-gray-800">
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

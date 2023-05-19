import React from 'react';
import { Link } from 'react-router-dom'


const AllItemCard = ({ itemName, itemId, condition, image, description, itemPrice }) => {
    // how can i remove the underline from my link?
    //aL 
    return (
        <div className='item-card'>

            <Link to={`/item/${itemId}`}>
                <div >
                    <div>
                        <h1 className="item-card-name">{itemName}</h1>
                        <img src={image} className='item-image' alt={itemName}></img>
                        <p>${itemPrice} Per Day</p>
                    </div>
                    <hr />
                </div>
            </Link>
        </div>

    )
}

export default AllItemCard

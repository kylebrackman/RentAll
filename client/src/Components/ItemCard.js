import React from 'react';
import {Link} from 'react-router-dom'


const ItemCard = ( { id, itemName, itemType, condition, image, description, itemPrice } ) => {

    return (
        <div >
            <div className='card'>
                    <div>
                        <h1>{itemName}</h1>
                        <h2>{condition}</h2>
                        <h2></h2>
                        <img src={image} className='item-image'></img>
                        <h2></h2>
                        <p>${itemPrice} Per Day</p>
                    </div>
                    <p>{description}</p>
                    <hr />
            </div>
        </div>
    )
}

export default ItemCard

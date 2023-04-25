import React from 'react';
import {Link} from 'react-router-dom'


const ItemCard = ( { id, itemName, type, condition, image, description } ) => {

    return (
        <div >
            <div className='card'>
                    <div>
                        <h1>{itemName}</h1>
                        <h2>{condition}</h2>
                        <h2></h2>
                        <img src={image} className='item-image'></img>
                        <p></p>
                    </div>
                    <p>{description}</p>
                    <hr />
            </div>
        </div>
    )
}

export default ItemCard

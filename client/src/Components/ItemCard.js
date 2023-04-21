import React from 'react';
import {Link} from 'react-router-dom'


const ItemCard = ( { id, itemName, type, condition, image, description } ) => {

    return (
        <div className="row">
            <div className="block">
                    <div>
                        <h1>{itemName}</h1>
                        <img src={image} ></img>
                        <p></p>
                    </div>
                    <p>{description}</p>
                    <hr />
            </div>
        </div>
    )
}

export default ItemCard

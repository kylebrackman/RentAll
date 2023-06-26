import React from 'react';
import { Link } from 'react-router-dom'


const UserItemCard = ({ id, itemName, image, price }) => {

    return (
        <div className='item-card'>

            <Link to={`/item/${id}`}>
                <div >
                    <div>
                        <h1 className="item-card-name">{itemName}</h1>
                        <img src={image} className='item-image' alt={itemName}></img>
                        <p>${price} Per Day</p>
                    </div>
                    <hr />
                </div>
            </Link>
        </div>
    )
}

export default UserItemCard
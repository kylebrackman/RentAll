import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/user';


const AllItemCard = ({ id, itemName, itemType, condition, image, description, itemPrice, ownerId }) => {

    const { user } = useContext(UserContext)

    if (user.id !== ownerId) {
        return (
            <Link to={`/item/${id}`}>
                <div >
                    <div className='card' >
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
            </Link>
        )
    } else {
        return (
            <Link to={`/item/${id}`}>
                <div >
                    <div className='card' >
                        <div>
                            <h1>{itemName}</h1>
                            <h2>{condition}</h2>
                            <h2></h2>
                            <img src={image} className='item-image'></img>
                            <h2></h2>
                            <p>${itemPrice} Per Day</p>
                        </div>
                        <p>{description}</p>
                        <div>EDIT</div>
                        <hr />
                    </div>
                </div>
            </Link>
        )
    }
}
    export default AllItemCard

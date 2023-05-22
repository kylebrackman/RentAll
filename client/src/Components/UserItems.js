import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const UserItems = () => {
    
    const { userItems } = useContext(UserContext)
    const userItemsList = userItems.map(i => {
        return <UserItemCard
            key={i.id}
            id={i.owner_id}
            itemName={i.name}
            type={i.type}
            condition={i.condition}
            image={i.image}
            description={i.description}
            itemPrice={i.price}
            itemId={i.id}
        />
    })

    return (
        <div>
            <br />
            <div>
                <h1>Your Items</h1>
            </div>
            <div className="item-card-container">
                {userItemsList}
            </div>

        </div>
    )

}

export default UserItems
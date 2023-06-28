import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const UserItems = () => {

    const { userItems, user, loggedIn } = useContext(UserContext)

    const userItemsList = userItems.map(i => {
        return <UserItemCard
            key={i.id}
            id={i.id}
            itemName={i.name}
            type={i.type}
            condition={i.condition}
            image={i.image}
            description={i.description}
            itemPrice={i.price}
            itemId={i.id}
            price={i.price}
        />
    })

    if (loggedIn && user && user.profile) {
        return (
            <div>
                <br />
                <div style={{ textAlign: 'left', paddingLeft: 25 }} >
                    <h1>Your Items</h1>
                </div>
                <div className="item-card-container">
                    {userItemsList}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>
                    Please Log In or Sign Up
                </h1>
            </div>
        )
    }
}

export default UserItems
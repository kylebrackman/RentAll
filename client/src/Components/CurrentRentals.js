import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const CurrentRentals = () => {
    const { currentRentals } = useContext(UserContext)

    const currentRentalsList = currentRentals.map(r => {
        return <UserItemCard
            key={r.id}
            itemName={r.item.name}
            type={r.item.type}
            condition={r.item.condition}
            image={r.item.image}
            description={r.item.description}
            id={r.item.id}
            price={r.item.price}
        />
    })

    return (
        <div>
            <br />
            <div style={{ textAlign: 'left', paddingLeft: 25 }}>
                <h1>Current Rentals</h1>
            </div>
            <div className="item-card-container">
                {currentRentals.length > 0 ? currentRentalsList : "You have no current rentals"}
            </div>
        </div>
    )
}

export default CurrentRentals
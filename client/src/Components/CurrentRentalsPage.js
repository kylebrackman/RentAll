import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const CurrentRentalsPage = () => {
    const { currentRentals } = useContext(UserContext)
    console.log(currentRentals)

    const currentRentalsList = currentRentals.map(r => {
        return <UserItemCard
            key={r.id}
            itemName={r.item.name}
            type={r.item.type}
            condition={r.item.condition}
            image={r.item.image}
            description={r.item.description}
            id={r.item.id}
        />
    })

    return (
        <div>
            <br />
            <div>
                <h1>Current Rentals</h1>
            </div>
            <div className="item-card-container">
                {currentRentalsList}
            </div>

        </div>
    )

}

export default CurrentRentalsPage
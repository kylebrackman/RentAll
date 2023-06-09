import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const UpcomingRentals = () => {
    const { upcomingRentals } = useContext(UserContext)

    const upcomingRentalsList = upcomingRentals.map(r => {
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
                <h1>Upcoming Rentals</h1>
            </div>
            <div className="item-card-container">
                {upcomingRentals.length > 0 ? upcomingRentalsList : "You have no upcoming rentals"}
            </div>
        </div>
    )
}

export default UpcomingRentals
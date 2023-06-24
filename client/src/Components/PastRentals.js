import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const PastRentals = () => {
    const { pastRentals } = useContext(UserContext)

    const pastRentalsList = pastRentals.map(r => {
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
            <div style={{ textAlign: 'left', paddingLeft: 25 }}>
                <h1>Past Rentals</h1>
            </div>
            <div className="item-card-container">
                {pastRentals.length > 0 ? pastRentalsList : "You have no past rentals"}
            </div>
        </div>
    )
}

export default PastRentals
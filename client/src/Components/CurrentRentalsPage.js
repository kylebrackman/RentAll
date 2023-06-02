import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const CurrentRentalsPage = () => {
    const { currentRentals, user, loggedIn } = useContext(UserContext)
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

    if (loggedIn && user && user.profile) {
        return (
            <div>
                <br />
                <div style={{ textAlign: 'left', paddingLeft: 25 }}>
                    <h1>Current Rentals</h1>
                </div>
                <div className="item-card-container">
                { currentRentals ? currentRentalsList : "You have no current rentals" }
                </div>
    
            </div>
        )
    } else {
        return (
            <div>
                <h1>
                    Please Log In  
                </h1>            
            </div>
        )
    }


}

export default CurrentRentalsPage
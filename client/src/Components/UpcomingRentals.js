import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';

const UpcomingRentalsPage = () => {


    const { upcomingRentals, user, loggedIn } = useContext(UserContext);

    if (!loggedIn || !user || !user.profile) {
        return (
            <div>
                <h1>Please Log In</h1>
            </div>
        );
    }

    return (
        <div>
            <br />
            <div style={{ textAlign: 'left', paddingLeft: 25 }}>
                <h1>Upcoming Rentals</h1>
            </div>
            <div className="item-card-container">
                {upcomingRentals.length > 0 ? (
                    upcomingRentals.map(r => (
                        <UserItemCard
                            key={r.id}
                            itemName={r.item.name}
                            type={r.item.type}
                            condition={r.item.condition}
                            image={r.item.image}
                            description={r.item.description}
                            id={r.item.id}
                            itemPrice={r.item.price}
                        />
                    ))
                ) : (
                    <div>You have no upcoming rentals</div>
                )}
            </div>
        </div>
    );
};

export default UpcomingRentalsPage;
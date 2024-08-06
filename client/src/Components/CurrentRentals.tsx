import React, { useContext } from 'react';
import { UserContext, UserContextType } from '../Context/user.tsx';
import UserItemCard from './UserItemCard.tsx';

const CurrentRentals: React.FC = () => {
    const { currentRentals } = useContext<UserContextType>(UserContext);
    
    const currentRentalsList = currentRentals.map(r => {
        return <UserItemCard
            key={r.id}
            itemName={r.item.name}
            image={r.item.image}
            description={r.item.description}
            id={r.item.id}
            price={r.item.price}
        />
    })

    return (
        <div>
            <br />
            <div >
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Current Rentals</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 mx-auto text-white">
                {currentRentals.length > 0 ? currentRentalsList : "You have no current rentals"}
            </div>
        </div>
    )
}

export default CurrentRentals
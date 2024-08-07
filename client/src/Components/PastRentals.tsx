import React, { useContext } from 'react';
import { UserContext } from '../Context/user.tsx';
import UserItemCard from './UserItemCard.tsx';

const PastRentals = () => {
    const { pastRentals } = useContext(UserContext)

    const pastRentalsList = pastRentals.map(r => {
        return <UserItemCard
            key={r.id}
            itemName={r.name}
            image={r.image}
            description={r.description}
            id={r.id}
            price={r.price}
        />
    })

    return (
        <div>
            <br />
            <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Past Rentals</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 mx-auto text-white">
                {pastRentals.length > 0 ? pastRentalsList : "You have no past rentals"}
            </div>
        </div>
    )
}

export default PastRentals
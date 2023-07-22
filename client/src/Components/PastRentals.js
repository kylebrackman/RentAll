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
            price={r.item.price}
        />
    })

    return (
        <div>
            <br />
            <div>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-black">Past Rentals</h1>
            </div>
            <div class="grid grid-cols-4 gap-4 mx-auto">
                {pastRentals.length > 0 ? pastRentalsList : "You have no past rentals"}
            </div>
        </div>
    )
}

export default PastRentals
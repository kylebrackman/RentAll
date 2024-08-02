import React, { useContext } from 'react';
import { UserContext } from '../Context/user.tsx';
import UserItemCard from './UserItemCard.tsx';

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
        <div >
            <br />
            <div >
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Upcoming Rentals</h1>
            </div>
            <div class="grid grid-cols-4 gap-4 mx-auto text-white" >
                {upcomingRentals.length > 0 ? upcomingRentalsList : "You have no upcoming rentals"}
            </div>
        </div>
    )
}

export default UpcomingRentals
import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UserItemCard from './UserItemCard';
import RentalRequestApproval from './RentalRequestApproval';

const PendingRentals = () => {
    const { pendingRentals, allItems } = useContext(UserContext)

    const matchedItems = allItems.filter(item => pendingRentals.some(rental => rental.item_id === item.id));

    const matchedItemsList = matchedItems.map(r => {
        return <RentalRequestApproval
            key={r.id}
            itemName={r.name}
            type={r.type}
            condition={r.condition}
            image={r.image}
            description={r.description}
            id={r.id}
            price={r.price}
        />
    })
    return (
        <div>
            <br />
            <div >
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Pending Rentals</h1>
            </div>
            <div class="grid grid-cols-4 gap-4 mx-auto text-white">
                {pendingRentals.length > 0 ? matchedItemsList : "You have no current rentals"}
            </div>
        </div>
    )
}

export default PendingRentals
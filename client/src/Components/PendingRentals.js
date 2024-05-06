import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import RentalRequestApproval from './RentalRequestApproval';

const PendingRentals = () => {
    const { pendingRentals, user } = useContext(UserContext);

    // Filter pendingRentals to only include items where the owner_id matches the user.id
    const filteredPendingRentals = pendingRentals.filter(rental => rental.status === "pending" && rental.item.owner_id === user.id);
    // console.log(filteredPendingRentals)
    const pendingRequestsList = filteredPendingRentals.map(request => {
        return <RentalRequestApproval
            key={request.id}
            itemName={request.item.name}
            type={request.item.type}
            condition={request.item.condition}
            image={request.item.image}
            description={request.item.description}
            id={request.id}
            price={request.item.price}   
        />
    });

    return (
        <div style={{paddingLeft: "12%"}}>
            <br />
            <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Your Requested Items</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 mx-auto">
                {filteredPendingRentals.length > 0? pendingRequestsList : "None of your items have been requested."}
            </div>
        </div>
    );
}

export default PendingRentals;

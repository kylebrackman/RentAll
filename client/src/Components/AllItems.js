import React, { useContext } from 'react';
import { UserContext } from '../Context/user.tsx';
import AllItemCard from './AllItemCard';
import { NavLink } from "react-router-dom";

const AllItems = () => {
    const { allItems } = useContext(UserContext);
    // console.log(pendingRentals)
    const items = Array.isArray(allItems) ? allItems : [];


    const allItemsList = items.map((i) => (
        <AllItemCard
            key={i.id}
            id={i.owner_id}
            itemId={i.id}
            itemName={i.name}
            type={i.type}
            condition={i.condition}
            image={i.image}
            description={i.description}
            itemPrice={i.price}
            ownerId={i.owner_id}
        />
    ));

    return (
        <div class="bg-gray-900 py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-white mb-8">All Items</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.length > 0 ? (
                        <div>
                            {allItemsList}
                        </div>
                    ) : (
                        <p className="text-white">No items uploaded.</p>
                    )}

                </div>

            </div>
        </div>
    );
};

export default AllItems;
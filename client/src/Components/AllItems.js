import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import AllItemCard from './AllItemCard';
import { NavLink } from "react-router-dom";

const AllItems = () => {
    const { allItems } = useContext(UserContext);

    const allItemsList = allItems.map((i) => (
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
        <section class="flex flex-col items-center px-6 py-8 bg-white min-h-screen">
            <br />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto">{allItemsList}</div>
        </section>
    );
};

export default AllItems;
import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import AllItemCard from './AllItemCard';
import { NavLink } from "react-router-dom";

const AllItems = () => {
    const { allItems, loggedIn, user } = useContext(UserContext);

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
        <div className='bg-slate-950' >
            <br />
            <div style={{paddingLeft: "12%"}}>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Items For Rent</h1>
            </div>
            {/* grid here */}
            <div class="grid grid-cols-4 gap-4 w-3/4 mx-auto">{allItemsList}</div>
        </div>
    );
};

export default AllItems;
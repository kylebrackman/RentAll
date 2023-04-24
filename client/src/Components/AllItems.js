import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import ItemCard from './ItemCard';

const AllItems = () => {
    const { allItems } = useContext(UserContext)

    const allItemsList = allItems.map(i => {
        return <ItemCard
            key={i.id}
            id={i.owner_id}
            itemName={i.name}
            type={i.type}
            condition={i.condition}
            image={i.image}
            description={i.description}
        />
    })

    return (
        <div>
            <h2>Submit a New Item!</h2>
            <br />
            <h1>All Items!</h1>
            {allItemsList}
        </div>
    )

}

export default AllItems
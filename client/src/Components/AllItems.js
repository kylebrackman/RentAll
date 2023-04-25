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
            itemPrice={i.price}
        />
    })
// q: why is the All Items text overlapping with the ItemCard?
// a:   

    return (
        <div>
            <br />
            <div>
                <h1>All Items!</h1>
            </div>
            <div className="item-card-container">
                {allItemsList}
            </div>

        </div>
    )

}

export default AllItems
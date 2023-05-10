import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import AllItemCard from './AllItemCard';

const AllItems = () => {
    const { allItems } = useContext(UserContext)
    console.log(allItems)

    const allItemsList = allItems.map(i => {
        return <AllItemCard
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
    }) 

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
import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import AllItemCard from './AllItemCard';

const AllItems = () => {
    const { allItems, loggedIn } = useContext(UserContext)

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

    if (loggedIn) {
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
    } else {
        return (
            <div>
                <h1>
                    Please Log In  
                </h1>            
            </div>
        )
    }


}

export default AllItems
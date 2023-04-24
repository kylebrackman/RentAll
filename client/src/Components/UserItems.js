import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import ItemCard from './ItemCard';
import UploadItem from './UploadItem';


const UserItems = () => {
    const { userItems } = useContext(UserContext)

    const userItemsList = userItems.map(i => {
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
            {userItemsList}
        </div>
    )

}

export default UserItems
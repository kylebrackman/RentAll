import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/user';

const RentItemCard = () => {

    const { id } = useParams()
    const { allItems } = useContext(UserContext)

    const item = allItems.find(i => i.id === parseInt(id))

    if (!item) {
        return (
            <div>
                Item not found
            </div>
        )
    } else {
        return (
            <div>
                <h2>{item.name}</h2>
                <h3>{item.item_type}</h3>
            </div>
        )
    }
}

export default RentItemCard
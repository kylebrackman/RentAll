import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom'



const UploadItem = () => {
    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("")
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    // create addNewItem function in global state
    const { addNewItem, errors } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewItem({
            name: itemName,
            type: itemType,
        })
        navigate('/allitems')
        setItemName("")
        setItemType("")
    }

    return (
        <form className='add-item-submission-form' onSubmit={handleSubmit}>
            <label> Item Name: </label>
            <input
                type="text"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            /> <br />
            <label> Description: </label>
            <textarea
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /> <br />
            <label> Item type: </label>
            <select
                id="itemType"
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
            >
                <option>Select</option>
                <option>Hardware</option>
                <option>Winter Sport</option>
                <option>Sport (General)</option>
                <option>Fishing</option>
                <option>Camping</option>
                <option>Musical</option>
                <option>Beach</option>
                <option>Climb</option>
                <option>Outdoor Game</option>
            </ select >
            <br />
            <label> Condition: </label>
            <select
                id="itemCondition"
                value={itemType}
                onChange={(e) => setCondition(e.target.value)}
            >
                <option>Select</option>
                <option>New</option>
                <option>Like New</option>
                <option>Light Use</option>
                <option>Medium Use</option>
                <option>Heavy Use</option>
            </ select >
            <br />
            <input className='submit-item-button' type="submit" />
            <>
                {errors}
            </>
        </form>
    )
}

export default UploadItem
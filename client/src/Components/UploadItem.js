import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom'



const UploadItem = () => {
    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("")
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
        <form className='add-beta-submission-form' onSubmit={handleSubmit}>
            <label> Item Name: </label>
            <input
                type="text"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            /> <br />
            <label> Item type: </label>
            <input
                type="text"
                id="itemType"
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
            /> <br />
            <input className='submit-info-button' type="submit" />
            <>
                {errors}
            </>
        </form>
    )
}

export default UploadItem
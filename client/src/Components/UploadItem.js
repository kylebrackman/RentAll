import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom'



const UploadItem = () => {
    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("")
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    const [image, setImage] = useState("")
    const { addNewItem, errors, user } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newItemData = new FormData()

        newItemData.append("name", itemName)
        newItemData.append("owner_id", user.id)
        newItemData.append("item_type", itemType)
        newItemData.append("description", description)
        newItemData.append("condition", condition)
        newItemData.append("image", image)

        addNewItem(newItemData)
        navigate('/allitems')
        setItemName("")
        setItemType("")
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     addNewItem({
    //         owner_id: user.id,
    //         name: itemName,
    //         item_type: itemType,
    //         image: image,
    //         description: description,
    //     })
    //     navigate('/allitems')
    //     setItemName("")
    //     setItemType("")
    // }

    return (
        <form className='add-item-submission-form' onSubmit={handleSubmit}>
            <label> Item Name: </label>
            <input
                type="text"
                id="name"
                name="name"
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
            <label> Item Type: </label>
            <select
                id="type"
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
                value={condition}
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
            <label> Image: </label>
            <input type="file" name="image" id="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])}/>
            <br />
            <input className='submit-item-button' type="submit" />
            <>
                {errors}
            </>
        </form>
    )
}

export default UploadItem
import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/user';
import GeoItem from './GeoItem';


const UploadItem = () => {
    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("")
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    const [image, setImage] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [itemPosition, setItemPosition] = useState({ lat: 0, lng: 0 })

    const { addNewItem, errors, user, loggedIn } = useContext(UserContext)

    const handleSetItemLocation = (itemPosition) => {
        setItemPosition(itemPosition);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const newItemData = new FormData()

        newItemData.append("name", itemName)
        newItemData.append("owner_id", user.id)
        newItemData.append("item_type", itemType)
        newItemData.append("description", description)
        newItemData.append("condition", condition)
        newItemData.append("image", image)
        newItemData.append("price", itemPrice)
        newItemData.append("lat", itemPosition.lat)
        newItemData.append("lng", itemPosition.lng)

        addNewItem(newItemData)
    }

    if (loggedIn && user && user.profile) {
        return (
            <div className='upload-item-container'>
                <form className='upload-item-card' >
                    <h1>Upload Item</h1>
                    <label style={{ marginRight: "30px" }}> Item Name </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    /> <br />
                    <label style={{ marginRight: "10px" }}> Description: </label>
                    <textarea

                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /> <br />
                    <label style={{ marginRight: "37px" }}> Item Type </label>
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
                    <label style={{ marginRight: "26px" }}> Condition: </label>
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
                    <label> Price Per Day </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                    /> <br />
                    <label style={{ marginRight: "64px" }}> Image: </label>
                    <input type="file" name="image" id="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                    <br />
                    <br />
                    <h2>Item Location</h2>
                    <GeoItem onSetItemLocation={handleSetItemLocation} />
                    <button onClick={handleSubmit} className='sign-up-button'>Upload Item</button>
                    <>
                        {errors && errors.length > 0 && (
                            <ul className="error-list">{errors}</ul>
                        )}
                    </>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Please Log In or Sign Up</h1>
            </div>
        )
    }
}

export default UploadItem
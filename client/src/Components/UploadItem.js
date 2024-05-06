import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/user';
import GeoItem from './GeoItem';


const UploadItem = () => {
    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("")
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    const [image, setImage] = useState(null)
    const [itemPrice, setItemPrice] = useState("")
    const [itemPosition, setItemPosition] = useState({ lat: 0, lng: 0 })

    const { addNewItem, errors, user, loggedIn, resetErrors } = useContext(UserContext)

    const handleSetItemLocation = (itemPosition) => {
        setItemPosition(itemPosition);
    };

    useEffect(() => {
        resetErrors();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()

        const newItemData = new FormData()

        newItemData.append("name", itemName)
        newItemData.append("owner_id", user.id)
        newItemData.append("item_type", itemType)
        newItemData.append("description", description)
        newItemData.append("condition", condition)
        newItemData.append("price", itemPrice)
        newItemData.append("lat", itemPosition.lat)
        newItemData.append("lng", itemPosition.lng)

        if (image) {
            newItemData.append("image", image);
        }

        addNewItem(newItemData)
    }

    if (loggedIn && user && user.profile) {
        // return (
        //     <div className='upload-item-container'>
        //         <form className='upload-item-card' >
        //             <h1>Upload Item</h1>
        //             <label style={{ marginRight: "30px" }}> Item Name </label>
        //             <input
        //                 type="text"
        //                 id="name"
        //                 name="name"
        //                 value={itemName}
        //                 onChange={(e) => setItemName(e.target.value)}
        //             /> <br />


        //             <label style={{ marginRight: "10px" }}> Description: </label>
        //             <textarea

        //                 type="text"
        //                 id="description"
        //                 value={description}
        //                 onChange={(e) => setDescription(e.target.value)}
        //             /> <br />



        //             <label style={{ marginRight: "37px" }}> Item Type </label>
        //             <select
        //                 id="type"
        //                 value={itemType}
        //                 onChange={(e) => setItemType(e.target.value)}
        //             >
        //                 <option>Select</option>
        //                 <option>Hardware</option>
        //                 <option>Winter Sport</option>
        //                 <option>Sport (General)</option>
        //                 <option>Fishing</option>
        //                 <option>Camping</option>
        //                 <option>Musical</option>
        //                 <option>Beach</option>
        //                 <option>Climb</option>
        //                 <option>Outdoor Game</option>
        //             </ select >
        //             <br />



        //             <label style={{ marginRight: "26px" }}> Condition: </label>
        //             <select
        //                 id="itemCondition"
        //                 value={condition}
        //                 onChange={(e) => setCondition(e.target.value)}
        //             >
        //                 <option>Select</option>
        //                 <option>New</option>
        //                 <option>Like New</option>
        //                 <option>Light Use</option>
        //                 <option>Medium Use</option>
        //                 <option>Heavy Use</option>
        //             </ select >
        //             <br />



        //             <label> Price Per Day </label>
        //             <input
        //                 type="text"
        //                 id="price"
        //                 name="price"
        //                 value={itemPrice}
        //                 onChange={(e) => setItemPrice(e.target.value)}
        //             /> <br />



        //             <label style={{ marginRight: "64px" }}> Image: </label>
        //             <input type="file" name="image" id="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
        //             <br />
        //             <br />
        //             <h2>Item Location</h2>
        //             <GeoItem onSetItemLocation={handleSetItemLocation} />
        //             <button onClick={handleSubmit} className='sign-up-button'>Upload Item</button>
        //             <>
        //                 {errors && errors.length > 0 && (
        //                     <ul className="error-list">{errors}</ul>
        //                 )}
        //             </>
        //         </form>
        //     </div>

        return (
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 " >
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-20 h-15 mr-2" src={process.env.PUBLIC_URL + "/favicon.ico"} alt="logo" style={{ borderRadius: 10, marginTop: 20 }} />
                        GearUp
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 max-w-sm rounded overflow-hidden" style={{marginBottom: 10}}>
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Upload a New Item
                            </h1>
                            <form class="space-y-4 md:space-y-6" >
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Item Name</label>
                                    <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item Name"       required=""
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea placeholder="Description" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                    <select
                                        id="itemType"
                                        value={itemType}
                                        onChange={(e) => setItemType(e.target.value)}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition</label>
                                    <select
                                        id="itemCondition"
                                        value={condition}
                                        onChange={(e) => setCondition(e.target.value)}
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Select</option>
                                        <option>New</option>
                                        <option>Like New</option>
                                        <option>Light Use</option>
                                        <option>Medium Use</option>
                                        <option>Heavy Use</option>
                                    </ select >
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Price</label>
                                    <input
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required=""
                                        type="text"
                                        id="price"
                                        name="price"
                                        value={itemPrice}
                                        onChange={(e) => setItemPrice(e.target.value)}
                                    />
                                </div>

                                <input style={{ color: "white" }} id="file_input" type="file" name="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                                <GeoItem onSetItemLocation={handleSetItemLocation} />
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Enter</button>
                                <ul style={{ color: "white" }}>
                                    {errors}
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
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
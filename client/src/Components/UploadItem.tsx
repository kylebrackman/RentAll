import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/user.tsx';
import GeoItem from './GeoItem.js';
import '../App.css';

interface ItemPosition {
    lat: number;
    lng: number;
}

const UploadItem = () => {
    const [itemName, setItemName] = useState("")
    const [itemType, setItemType] = useState("")
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState("")
    const [image, setImage] = useState<File | null>(null)
    const [itemPrice, setItemPrice] = useState("")
    const [itemPosition, setItemPosition] = useState({ lat: 0, lng: 0 })

    const { addNewItem, errors, user, loggedIn, resetErrors } = useContext(UserContext)

    const handleSetItemLocation = (itemPosition: ItemPosition) => {
        setItemPosition(itemPosition);
    };

    useEffect(() => {
        resetErrors();
    }, []);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newItemData = new FormData()

        newItemData.append("name", itemName)
        newItemData.append("owner_id", user.id.toString())
        newItemData.append("item_type", itemType)
        newItemData.append("description", description)
        newItemData.append("condition", condition)
        newItemData.append("price", itemPrice)
        newItemData.append("lat", itemPosition.lat.toString())
        newItemData.append("lng", itemPosition.lng.toString())

        if (image) {
            newItemData.append("image", image);
        }

        addNewItem(newItemData)
    }


    if (loggedIn && user && user.profile) {

        return (
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-8 mb-8">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Upload an Item</h1>
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200">Item Name</label>
                            <input
                                value={itemName} onChange={(e) => setItemName(e.target.value)} id="itemName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Price</label>
                            <input value={itemPrice}
                                onChange={(e) => setItemPrice(e.target.value)} placeholder='$' id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Description</label>
                            <textarea value={description}
                                onChange={(e) => setDescription(e.target.value)} id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">Type</label>
                            <select value={itemType}
                                onChange={(e) => setItemType(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option>Select</option>
                                <option>Hardware</option>
                                <option>Winter Sport</option>
                                <option>Sport (General)</option>
                                <option>Water Sport</option>
                                <option>Fishing</option>
                                <option>Camping</option>
                                {/* <option>Musical</option> */}
                                <option>Beach</option>
                                <option>Climb</option>
                                <option>Outdoor Game</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">Condition</label>
                            <select value={condition}
                                onChange={(e) => setCondition(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option>Select</option>
                                <option>New</option>
                                <option>Like New</option>
                                <option>Light Use</option>
                                <option>Medium Use</option>
                                <option>Heavy Use</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span id="file_input"
                                                onChange={(e) => {
                                                    const target = e.target as HTMLInputElement;
                                                    if (target.files && target.files[0]) {
                                                        setImage(target.files[0]);
                                                    }
                                                }}>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                                onChange={(e) => {
                                                    const target = e.target as HTMLInputElement;
                                                    if (target.files && target.files[0]) {
                                                        setImage(target.files[0]);
                                                    }
                                                }} />
                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">
                                        PNG, JPG, GIF up to 5MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button onClick={handleSubmit} className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Upload</button>
                    </div>
                    <GeoItem onSetItemLocation={handleSetItemLocation} />
                    <ul style={{ color: "white" }}>
                        {errors}
                    </ul>
                </form>
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
import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/user';

const EditItemForm = ({ item, handleEditItem }) => {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [condition, setCondition] = useState(item.condition);

    const { user, loggedIn, errors } = useContext(UserContext)

    const handleSubmit = (e) => {

        e.preventDefault();

        const editedItem = {
            id: item.id,
            name,
            description,
            price,
            condition,
        };
        handleEditItem(editedItem);
    };

    const errorLis = errors.map((e) => {
        return (
            <li>
                {e}
            </li>
        )
    })

    if (loggedIn && user && user.profile) {
        return (
            <div >
                <form style={{ color: "white" }}>
                    Name
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    Description
                    <textarea name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    Price
                    <input
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    Condition
                    <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
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
                    <span type="submit" class="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2" onClick={handleSubmit}>Save</span>

                    {errorLis}
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h1> You must be logged in to edit an item </h1>
            </div>
        );
    }
};

export default EditItemForm;
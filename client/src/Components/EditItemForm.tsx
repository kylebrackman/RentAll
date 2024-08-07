import { useContext, useState } from 'react';
import { UserContext, Item, EditableItem } from '../Context/user.tsx';

interface EditItemFormProps {
    item: Item;
    handleEditItem: (editedItem: EditableItem) => void;
  }

const EditItemForm: React.FC<EditItemFormProps> = ({ item, handleEditItem }) => {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [condition, setCondition] = useState(item.condition);

    const { user, loggedIn, errors } = useContext(UserContext)
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const editedItem: EditableItem = {
            id: item.id,
            name,
            description,
            price,
            condition,
        };
        handleEditItem(editedItem); // Now editedItem conforms to EditableItem
    };

    const errorLis = errors.map((e) => {
        return (<li>{e}</li>)
    })

    if (loggedIn && user && user.profile) {
        return (
            <div >
                <form style={{ color: "white" }}>
                    Name
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    Description
                    <textarea name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    Price
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                    />
                    <br />
                    Condition
                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
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
                    <button type="submit" onClick={handleSubmit} className="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                        Save
                    </button>
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
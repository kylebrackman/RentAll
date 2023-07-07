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
    console.log(errors)
    const errorLis = errors.map((e) => {
        return (
            <li>
                {e}
            </li>
        )
    })
    
    console.log(errorLis)

    if (loggedIn && user && user.profile) {
        return (
            <div >
                <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
                    <label >
                        Item Name
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ marginLeft: "37px" }}
                        />
                    </label>
                    <br />
                    <label>
                        Description
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ marginLeft: "22px" }}
                        />
                    </label>
                    <br />
                    <label>
                        Price
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{ marginLeft: "74px" }}
                        />
                    </label>
                    <br />
                    <label>
                        Condition
                        <select
                            id="itemCondition"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                            style={{ marginLeft: "37px" }}
                        >
                            <option>Select</option>
                            <option>New</option>
                            <option>Like New</option>
                            <option>Light Use</option>
                            <option>Medium Use</option>
                            <option>Heavy Use</option>
                        </ select >
                    </label>
                    <br />
                    <button type="submit">Save</button>
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
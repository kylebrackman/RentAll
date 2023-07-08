import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import AllItemCard from './AllItemCard';
import { NavLink } from "react-router-dom";

const AllItems = () => {
    const { allItems, loggedIn, user } = useContext(UserContext);

    const allItemsList = allItems.map((i) => (
        <AllItemCard
            key={i.id}
            id={i.owner_id}
            itemId={i.id}
            itemName={i.name}
            type={i.type}
            condition={i.condition}
            image={i.image}
            description={i.description}
            itemPrice={i.price}
            ownerId={i.owner_id}
        />
    ));

    if (loggedIn && user && user.profile) {
        return (
            <div>
                <br />
                <div style={{ textAlign: 'left', paddingLeft: 25 }}>
                    <h1>Items For Rent</h1>
                </div>
                <div className="item-card-container">{allItemsList}</div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Please Log In or Sign Up</h1>
                <div>
                    <NavLink to="/login" >
                        <button className='sign-up-button' >Login</button>
                    </NavLink>
                </div>
                <NavLink to="/signup" >
                    <button className='sign-up-button' >Sign Up</button>
                </NavLink>

            </div>
        );
    }
};

export default AllItems;
import React, { useContext } from 'react';
import { UserContext } from '../Context/user.tsx';
import UserItemCard from './UserItemCard';
import PendingRentals from './PendingRentals';

const UserItems = () => {

    const { userItems, user, loggedIn } = useContext(UserContext)

    const userItemsList = userItems.map(i => {
        return <UserItemCard
            key={i.id}
            id={i.id}
            itemName={i.name}
            type={i.type}
            condition={i.condition}
            image={i.image}
            description={i.description}
            itemPrice={i.price}
            itemId={i.id}
            price={i.price}
        />
    })

    if (loggedIn && user && user.profile) {
        return (
            <section className="flex flex-col px-6 py-8 bg-white min-h-screen">
                <br />
                <div style={{ paddingLeft: "12%", display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                    <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Your Items</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto">
                    {
                        userItemsList.length > 0 ? userItemsList :
                        <div>
                            <h1 style={{ color: "white" }}>You have no items</h1>
                            <br />
                            <h1 style={{ color: "white" }}>
                                Upload a new item to get started!
                            </h1>
                        </div>
                    }
                    
                </div>
                <PendingRentals />
            </section>
        )
    } else {
        return (
            <div>
                <h1>
                    Please Log In or Sign Up
                </h1>
            </div>
        )
    }
}

export default UserItems;

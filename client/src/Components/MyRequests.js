import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { useNavigate } from 'react-router-dom';
import MyRequestCard from './MyRequestCard';

const MyRequests = () => {

    const { loggedIn, user, userRentalRequests } = useContext(UserContext);

    console.log(userRentalRequests);

    const userRentalRequestsGrid = userRentalRequests.map((r) => (
        <div class="grid">
            <MyRequestCard
                key={r.id}
                id={r.id}
                itemId={r.item.id}
                itemName={r.item.name}
                itemImage={r.item.image}
                itemPrice={r.item.price}
                itemCondition={r.item.condition}
            />
        </div>
    ));
    

    if (loggedIn) {
        return (
            <div className='bg-slate-950' >
                <br />
                <div style={{ paddingLeft: "12%" }}>
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl gap-8 text-white">Pending Requests...</h1>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto">{userRentalRequestsGrid}</div>
            </div>
        )
    } else {
        return (
            <div className='bg-slate-950' >
                <br />
                <div style={{ paddingLeft: "12%" }}>
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl gap-8 text-white">My Requests</h1>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto">
                    <p1 style={{ color: "black" }}>You must be logged in to view this page.</p1>
                </div>
            </div>
        );
    }

};

export default MyRequests;
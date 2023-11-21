import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { Link } from 'react-router-dom';

const MyRequestCard = ( {itemId, itemName, itemImage, itemPrice, itemCondition} ) => {

    const { loggedIn,  } = useContext(UserContext);
    console.log(itemCondition)
    if (loggedIn) {
        return (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/item/${itemId}`}>
                    <img class="rounded-t-lg" src={itemImage} alt="" />
                </Link>
                <div class="p-5">
                    <a href="#">
                        {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{itemName}</h5> */}
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        See Item
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
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

export default MyRequestCard;


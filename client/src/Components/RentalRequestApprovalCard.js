import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../Context/user';

const RentalRequestApprovalCard = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { errors, resetErrors, loggedIn, pendingRentals, approveRequest } = useContext(UserContext);
    const request = pendingRentals.find((request) => request.id === parseInt(id));
    console.log(request);
    const errorList = errors.map((error) => (
        <li key={error.index} style={{ color: "white" }}>{error}</li>
    ));

    useEffect(() => {
        resetErrors();
        // eslint-disable-next-line
    }, []);

    if (!request.item) {
        return <div>Item not found</div>;
    } else if (!loggedIn) {
        return (
            <section class="flex flex-col items-center px-6 py-8 bg-slate-950 min-h-screen">
                <div class="rounded shadow-lg md:w-2/6 sm:w-3/6 min-h-screen">
                    <img class="w-full" src={request.item.image} alt="Sunset in the mountains" />
                    <div class="px-6 py-4 bg-gray-800">
                        <div class="font-bold text-xl mb-2 text-white">{request.item.name}</div>
                        <p class="text-gray-700 text-base">
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 bg-gray-800" style={{ color: "white" }}>
                        <p style={{ color: "white" }}>
                            {request.item.description}
                        </p>
                        <br />
                        <span class="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">${request.item.price} Per Day</span>
                        <br />
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{request.item.condition}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{request.item.item_type}</span>
                        <br />

                        <h2>
                            <span onClick={() => navigate('/signup')} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
                                Sign Up</span> to rent this item!
                        </h2>
                    </div>
                </div>
            </section>
        )
    }

    else {
        return (
            <section className="flex flex-col items-center px-6 py-8 bg-slate-950 min-h-screen">
                {/* Parent container for the two divs */}
                <div className="flex space-x-4"> {/* Adjust space-x-* value as needed */}
                    <div className="rounded-lg shadow-lg md:w-2/6 sm:w-3/6">
                        <img className="w-full rounded-lg" src={request.item.image} alt="Sunset in the mountains" />
                        <div className="rounded-lg px-6 py-4 bg-gray-800 h-auto w-auto flex items-center justify-between">
                            <div className="font-bold text-xl mb-2 text-white">{request.item.name}</div>
                            <Link to={`/profiles/${request.item?.owner_id}`}>
                                <p className="text-white text-base">
                                    Owner: {request.item.owner_first_name} {request.item.owner_last_name}
                                </p>
                            </Link>
                        </div>
                        <div className="rounded-lg px-6 pt-4 pb-2 bg-gray-800" style={{ color: "white" }}>
                            <p style={{ color: "white" }}>
                                {request.item.description}
                            </p>
                            <span className="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">${request.item.price} Per Day</span>
                            <br />
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{request.item.condition}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{request.item.item_type}</span>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-lg md:w-2/6 sm:w-3/6">
                        <img className="w-64 h-64 rounded-lg" src={request.owner_profile.image} alt="Owner Profile Image" />
                        <div className="rounded-lg px-6 py-4 bg-gray-800 h-auto w-auto flex items-center justify-between w-64 h-64 rounded-lg">
                            <div className="font-bold text-xl mb-2 text-white">{request.item.name}</div>
                            <Link to={`/profiles/${request.renter_profile.id}`}>
                                <p className="text-white text-base">
                                    Requestor:
                                </p>
                                <p className="text-white text-base">
                                    {request.renter.first_name} {request.renter.last_name}
                                </p>
                                <p>
                                    Dates: {request.start_date} - {request.end_date}
                                </p>
                            </Link>
                        </div>
                        <div className="rounded-lg px-6 pt-4 pb-2 bg-gray-800 w-64 h-24 rounded-lg" style={{ color: "white" }}>
                            <p style={{ color: "white" }}>
                                GearUp Rating: COMING SOON
                            </p>
                            <p style={{ color: "white" }}>
                                Location
                            </p>
                            <button onClick={() => approveRequest(parseInt(id))}>
                                Approve
                            </button>
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        );

    }
};

export default RentalRequestApprovalCard;
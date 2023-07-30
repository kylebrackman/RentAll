import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/user';
import { useParams } from 'react-router-dom';

// import ProfileGeo from './ProfileGeo';

const ProfileOtherUser = () => {
    const { user, loggedIn } = useContext(UserContext);
    const { otherUserId } = useParams();

    const [otherUser, setOtherUser] = useState(null);
    // const defaultImageUrl = 'https://raw.githubusercontent.com/kylebrackman/RentAll/main/client/public/User%20Default%20Pic.png';


    // try fetching for the user, then compete the front end below using otherUser.profile ...?
    useEffect(() => {
        fetch(`/api/profiles/${otherUserId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('API response:', data);
                setOtherUser(data);
            });
            
    }, []);

    console.log(otherUser)

    if (!otherUser) {
        return <div>
            <h1 className="text-3xl font-bold underline">
                Loading...
            </h1>
        </div>;
    }

    if (loggedIn && user && user.profile) {
        return (
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h2 class="text-3xl font-extrabold dark:text-white">{otherUser.user.first_name}</h2>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {/* <a  class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> */}
                                <img class="w-20 h-15 mr-2" src={otherUser.image} style={{ borderRadius: 10 }} />
                            {/* </a> */}
                            <p class="text-2xl dark:text-white">
                                {otherUser.bio}
                            </p>

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
};

export default ProfileOtherUser;
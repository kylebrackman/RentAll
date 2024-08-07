import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user.tsx';

import Geo from './Geo';

const CreateProfile = () => {
    const [nickname, setNickname] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState(null);
    const [position, setPosition] = useState({ lat: 0, lng: 0 });

    const { newProfile, errors } = useContext(UserContext);

    const handleSetLocation = (newPosition) => {
        setPosition(newPosition);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProfileData = new FormData();

        newProfileData.append('bio', bio);
        newProfileData.append('name', nickname);
        newProfileData.append('lat', position.lat);
        newProfileData.append('lng', position.lng);

        if (image) {
            newProfileData.append('image', image);
        }

        newProfile(newProfileData);
    };


    return (
        <section class="bg-gray-50 dark:bg-gray-900 ">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 ">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-20 h-15 mr-2" src={process.env.PUBLIC_URL + "/favicon.ico"} alt="logo" style={{ borderRadius: 10, marginTop: 20 }} />
                    GearMate
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 max-w-sm rounded overflow-hidden">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your profile
                        </h1>
                        <form class="space-y-4 md:space-y-6" >
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Nickname (displayed on your profile)</label>
                                <input id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nickname" required=""
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                                <textarea type="password" name="password" id="password" placeholder="Bio" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)} />
                            </div>
                            <input id="file_input" type="file" name="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                            <Geo onSetLocation={handleSetLocation} />
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Enter</button>
                            <ul style={{ color: "white" }}>
                                {errors}
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreateProfile;
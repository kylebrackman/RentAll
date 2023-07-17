import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';

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
        // <div className="signup-card">
        //     <div className="signup-card-body">
        //         <h2>Create Profile</h2>
        //         <form onSubmit={handleSubmit}>
        //             <input
        //                 className='create-profile-input'
        //                 placeholder='Nickname'
        //                 type="text"
        //                 id="nickName"
        //                 value={nickname}
        //                 onChange={(e) => setNickname(e.target.value)}
        //             />
        //             <br />
        //             <br />
        //             <input
        //                 className='create-profile-input'
        //                 placeholder='Bio'
        //                 type="text"
        //                 id="bio"
        //                 value={bio}
        //                 onChange={(e) => setBio(e.target.value)}
        //             />
        //             <br />
        //             <br />
        //             <label className='profile-picture-label'>Profile Picture:</label>
        //             <br />
        //             <input type="file" name="image" id="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
        //             <br />
        //             <br />
        //             <br />
        //             <h2>Location</h2>
        //             <Geo onSetLocation={handleSetLocation} />

        //             <input type="submit" value="Submit" className="primary-button" />
        //         </form>
        //         {errors && errors.length > 0 && (
        //             <ul className="error-list">{errors}</ul>
        //         )}
        //     </div>
        // </div>
        <div class="container mx-auto">
            <div class="w-full max-w-xs">
                <form class="w-full max-w-lg" style={{ marginTop: 30 }} onSubmit={handleSubmit}>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="nickname" >
                            Nickname
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="nickname"
                            value={nickname}
                            onChange={e => setNickname(e.target.value)}
                            placeholder="Nickname" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname" >
                            Bio
                        </label>
                        <textarea
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="bio"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                            placeholder="Bio" />
                    </div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname" >
                        Upload Profile Picture
                    </label>
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400"
                        id="file_input"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    <Geo onSetLocation={handleSetLocation} />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                        Create Profile!
                    </button>
                </form>
                {errors && errors.length > 0 && (
                    <ul className="error-list">{errors}</ul>
                )}
                <p class="text-center text-gray-500 text-xs">
                    &copy;2023 RentAll. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default CreateProfile;
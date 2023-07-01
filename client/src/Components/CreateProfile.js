import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { useNavigate } from 'react-router-dom';

import Geo from './Geo';

const CreateProfile = () => {
    const [nickname, setNickname] = useState('');
    const [bio, setBio] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState(null);
    const [position, setPosition] = useState({ lat: 0, lng: 0 });

    const navigate = useNavigate();
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
        <div className="signup-card">
            <div className="signup-card-body">
                <h2>Create Profile</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className='create-profile-input'
                        placeholder='Nickname'
                        type="text"
                        id="nickName"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <br />
                    <br />
                    <input
                        className='create-profile-input'
                        placeholder='Bio'
                        type="text"
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <br />
                    <br />
                    <label className='profile-picture-label'>Profile Picture:</label>
                    <br />
                    <input type="file" name="image" id="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                    <br />
                    <br />
                    <br />
                    <h2>Location</h2>
                    <Geo onSetLocation={handleSetLocation} />

                    <input type="submit" value="Submit" className="primary-button" />
                </form>
                {errors && errors.length > 0 && (
                    <ul className="error-list">{errors}</ul>
                )}
            </div>
        </div>
    );
};

export default CreateProfile;
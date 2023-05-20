import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { useNavigate } from 'react-router-dom';

import SignupGeo from './SignupGeo';

const CreateProfile = () => {
    const [profileName, setProfileName] = useState('');
    const [bio, setBio] = useState('');
    const [error, setError] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const { newProfile } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProfileData = new FormData();

        newProfileData.append('bio', bio);
        newProfileData.append('name', profileName);
        newProfileData.append('image', image);

        newProfile(newProfileData);

        if (!error) {
            navigate('/home');
            setBio('');
            setProfileName('');
        }
    };


    return (
        <div className="signup-card">
            <div className="signup-card-body">
                <h2>Create Profile</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className='create-profile-input'
                        placeholder='Profile Name'
                        type="text"
                        id="profileName"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
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
                    <button
                        className='choose-file-button'
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}>
                        Choose Photo
                    </button>


                    <br />
                    <br />
                    <br />
                    <SignupGeo />

                    <input type="submit" value="Submit" className="primary-button" />
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default CreateProfile;
import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { useNavigate } from 'react-router-dom'

const CreateProfile = () => {
    const [profileName, setProfileName] = useState("")
    const [bio, setBio] = useState("")
    const [error, setError] = useState("")
    const [image, setImage] = useState("")  
    const navigate = useNavigate()
    const { newProfile } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProfileData = new FormData()

        newProfileData.append("bio", bio)
        newProfileData.append("name", profileName)
        newProfileData.append("image", image)

        newProfile(newProfileData)

        if (!error) {
            navigate('/home')
            setBio("")
            setProfileName("")
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Profile Name</label>
                <input
                    type="text"
                    id="profileName"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                /> <br />
                <label>Bio</label>
                <input
                    type="bio"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                /> <br />
                <label> Profile Picture: </label>
                <input type="file" name="image" id="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                <br />
                <input type="submit" />
            </form>
            <>
                {error}
            </>
        </div>
    )
}

export default CreateProfile
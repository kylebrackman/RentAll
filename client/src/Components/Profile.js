import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import ProfileGeo from './ProfileGeo';

const Profile = () => {
  const { user, loggedIn } = useContext(UserContext);
  const defaultImageUrl = 'https://raw.githubusercontent.com/kylebrackman/RentAll/main/client/public/User%20Default%20Pic.png';

  if (!user || !user.profile) {
    return <div>Loading...</div>;
  }

  if (loggedIn && user && user.profile) {
    return (
      <div>
        <div>
          {user.profile.image ? (
            <img src={user.profile.image} alt="Profile" className='profile-image' />
          ) : (
            <img src={defaultImageUrl} alt="Default Profile" className='profile-image' />
          )}
          <h2>{user.profile.name}</h2>
          <h3>{user.profile.bio}</h3>
        </div>
        <ProfileGeo />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Please Log In or Sign Up</h1>
      </div>
    )
  }
};

export default Profile;
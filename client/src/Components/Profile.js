import React, { useContext } from 'react';
import { UserContext } from '../Context/user';

const Profile = () => {
  const { user } = useContext(UserContext);

  const defaultImageUrl = 'https://i.imgur.com/2d8Z3hF.png';

  return (
    <div>
      <h1>Profile</h1>
      {user.profile_image ? (
        <img src={user.profile_image} alt="Profile" />
      ) : (
        <img src={defaultImageUrl} alt="Default Profile" />
      )}
    </div>
  );
};

export default Profile;
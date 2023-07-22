import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import ProfileGeo from './ProfileGeo';

const Profile = () => {
  const { user, loggedIn } = useContext(UserContext);
  const defaultImageUrl = 'https://raw.githubusercontent.com/kylebrackman/RentAll/main/client/public/User%20Default%20Pic.png';

  if (!user || !user.profile) {
    return <div>
      <h1 className="text-3xl font-bold underline">
        Loading...
      </h1>
    </div>;
  }

  if (loggedIn && user && user.profile) {
    return (
      // <div>
      //   <div>
      //     {user.profile.image ? (
      //       <img src={user.profile.image} alt="Profile" className='profile-image' />
      //     ) : (
      //       <img src={defaultImageUrl} alt="Default Profile" className='profile-image' />
      //     )}
      //     <h2>{user.profile.name}</h2>
      //     <h3>{user.profile.bio}</h3>
      //   </div>
      //   <ProfileGeo />
      // </div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h2 class="text-3xl font-extrabold dark:text-white">{user.profile.name}</h2>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-20 h-15 mr-2" src={user.profile.image} style={{ borderRadius: 10 }} />
              </a>
              <p class="text-2xl dark:text-white">
                {user.profile.bio}
              </p>
              <ProfileGeo />
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

export default Profile;
import React, { useContext } from 'react';
import { UserContext } from '../context/user';

function Home() {
    const { user, loggedIn } = useContext(UserContext)
    console.log(user)

    if (loggedIn && user) {
        return (
            <div>
                <h1>Welcome to RentAll {user.username} !</h1>
            </div>
        )
    } else {
        return (<h3> Please Login or Signup </h3>)
    }
}

export default Home

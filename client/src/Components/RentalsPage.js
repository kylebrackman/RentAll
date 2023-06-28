import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UpcomingRentals from './UpcomingRentals';
import PastRentals from './PastRentals';
import CurrentRentals from './CurrentRentals';

const RentalsPage = () => {
    const { user, loggedIn } = useContext(UserContext)


    if (loggedIn && user && user.profile) {
        return (
            <div>
                <br />
                <div style={{ textAlign: 'left', paddingLeft: 25 }}>
                </div>
                <CurrentRentals />
                <br />
                <UpcomingRentals />
                <br />
                <PastRentals />

            </div>
        )
    } else {
        return (
            <div>
                <h1>
                    Please Log In
                </h1>
            </div>
        )
    }
}

export default RentalsPage
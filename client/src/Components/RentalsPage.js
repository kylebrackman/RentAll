import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import UpcomingRentals from './UpcomingRentals';
import PastRentals from './PastRentals';
import CurrentRentals from './CurrentRentals';
import PendingRentals from './PendingRentals';

const RentalsPage = () => {
    const { user, loggedIn } = useContext(UserContext)


    if (loggedIn && user && user.profile) {
        return (
            <div class="bg-slate-950 h-screen">

                <div className='container mx-auto'>
                    <div >
                        <CurrentRentals />
                    </div>
                    <br />
                    <div >
                        <UpcomingRentals />
                    </div>
                    <br />
                    <div >
                        <PastRentals />
                    </div>
                    <div>
                        {/* <PendingRentals /> */}
                    </div>



                </div>
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
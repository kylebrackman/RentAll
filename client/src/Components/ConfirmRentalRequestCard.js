import React, { useContext } from 'react';
import { UserContext } from '../Context/user';
import { useParams } from 'react-router-dom';


const ConfirmRentalRequestCard = () => {

    const { id } = useParams();
    const { allItems } = useContext(UserContext);
    const item = allItems.find((i) => i.id === parseInt(id));

    return (
        <div class="h-sreen">
            <section class="bg-gray-50 dark:bg-gray-900 h-screen">
                <h1 style={{color: "white"}}>
                    TEST
                </h1>
            </section>
        </div>
    )
}

export default ConfirmRentalRequestCard;
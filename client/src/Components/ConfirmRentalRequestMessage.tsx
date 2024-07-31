import React, { useContext } from 'react';
import { UserContext, UserContextType } from '../Context/user.tsx';
import { useParams } from 'react-router-dom';

const ConfirmRentalRequestMessage: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const { allItems } = useContext<UserContextType>(UserContext);
    // eslint-disable-next-line
    const item = allItems.find((i) => i.id === parseInt(id));

    return (
        <div class="h-sreen">
            <section class="bg-gray-50 dark:bg-gray-900 h-screen">
                <h1 style={{color: "white"}}>
                    Your request has been sent to the owner of this item. You will be notified when they accept or decline your request.
                </h1>
            </section>
        </div>
    )
}

export default ConfirmRentalRequestMessage;
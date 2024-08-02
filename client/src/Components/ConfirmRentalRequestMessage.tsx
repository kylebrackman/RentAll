import React from 'react';

const ConfirmRentalRequestMessage: React.FC = () => {

    return (
        <div className="h-sreen">
            <section className="bg-gray-50 dark:bg-gray-900 h-screen">
                <h1 style={{color: "white"}}>
                    Your request has been sent to the owner of this item. You will be notified when they accept or decline your request.
                </h1>
            </section>
        </div>
    )
}

export default ConfirmRentalRequestMessage;
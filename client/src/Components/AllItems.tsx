import React, { useContext } from 'react';
import { UserContext, UserContextType, Item } from '../Context/user.tsx';
import AllItemCard from './AllItemCard.js';

const AllItems: React.FC = () => {
    const { allItems } = useContext<UserContextType>(UserContext);

    // Ensure allItems is an array
    const items: Item[] = Array.isArray(allItems) ? allItems : [];

    const allItemsList = items.map((i) => (
        <AllItemCard
            key={i.id}
            itemId={i.id}
            itemName={i.name}
            image={i.image}
            description={i.description}
            itemPrice={i.price}
        />
    ));

    return (
        <div className="bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8">All Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.length > 0 ? (
                        <div>
                            {allItemsList}
                        </div>
                    ) : (
                        <p className="text-white">No items uploaded.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllItems;

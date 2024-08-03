import { Link } from 'react-router-dom';

// Tried to convert to tsx however the css was not working properly. Revisit later.
const AllItemCard = ({ itemName, itemId, image, itemPrice, description }) => {
    return (
        <Link to={`/item/${itemId}`}>
            <div className="bg-white rounded-lg shadow-lg p-8">
               <div className="relative overflow-hidden h-[50vh] w-full">
 {/* Set a fixed height and width for the container */}
                    <img className="object-cover w-full h-full" src={image} alt="Product" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{itemName}</h3>
                <p className="text-gray-500 text-sm mt-2">{description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">${itemPrice} Per Day</span>
                    <Link to={`/item/${itemId}`}>
                        <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">View Item</button>
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default AllItemCard;



// tsx version below

// interface AllItemCardProps {
//     id: number; 
//     itemName: string; 
//     itemId: number;
//     image: string; 
//     description: string; 
//     itemPrice: number; 
//     ownerId: number;
//     type: string;
//     condition: string;
//   }

// // Tried to conver to tsx however the css was not working properly. Revisit later.
// const AllItemCard: React.FC<AllItemCardProps> = ({ itemName, itemId, image, itemPrice, description }) => {
//     return (
//         <a href={`/item/${itemId}`}>
//             <div className="bg-white rounded-lg shadow-lg p-8">
//                <div className="relative overflow-hidden h-[50vh] w-full">
//  {/* Set a fixed height and width for the container */}
//                     <img className="object-cover w-full h-full" src={image} alt="Product" />
//                     <div className="absolute inset-0 bg-black opacity-40"></div>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                     </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mt-4">{itemName}</h3>
//                 <p className="text-gray-500 text-sm mt-2">{description}</p>
//                 <div className="flex items-center justify-between mt-4">
//                     <span className="text-gray-900 font-bold text-lg">${itemPrice} Per Day</span>
//                     <a href={`/item/${itemId}`}>
//                         <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">View Item</button>
//                     </a>
//                 </div>
//             </div>
//         </a>
//     );
// };

// export default AllItemCard;
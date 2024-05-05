import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-blue-500">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center py-4">
                    <div className="w-full md:w-1/2">
                        <p className="text-sm text-center md:text-left">
                            © 2024 RentAll. All rights reserved.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end md:justify-start">
                        <div className="flex space-x-4">
                            <a href="/about" className="hover:text-blue-600">About</a>
                            <a href="/news" className="hover:text-blue-600">News</a>
                            <a href="/support" className="hover:text-blue-600">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 text-blue-500 fixed bottom-0 w-full">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-wrap justify-between items-center py-4">
//                     <div className="w-full md:w-1/2">
//                         <p className="text-sm text-center md:text-left">
//                             © 2024 RentAll. All rights reserved.
//                         </p>
//                     </div>
//                     <div className="w-full md:w-1/2 flex justify-end md:justify-start">
//                         <div className="flex space-x-4">
//                             <a href="/about" className="hover:text-blue-600">About</a>
//                             <a href="/news" className="hover:text-blue-600">News</a>
//                             <a href="/support" className="hover:text-blue-600">Support</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


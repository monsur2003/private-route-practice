import React from "react";
import "./Order.css";
const Orders = () => {
   return (
      <div className="bg-gray-100">
         {/* Hero section */}
         <section className="relative bg-gradient-to-br from-blue-500 to-purple-500 h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 opacity-75"></div>
            <div className="absolute inset-0 z-0">
               <img
                  className="object-cover w-full h-full"
                  src="https://source.unsplash.com/random/1920x1080"
                  alt="Hero Background"
               />
            </div>
            <div className="relative z-10 text-white text-center">
               <h1 className="text-5xl font-bold leading-tight tracking-wide mb-4">
                  Welcome to My Website
               </h1>
               <p className="text-lg font-medium mb-8">
                  This is a demo of an animated page using Tailwind CSS and
                  React.
               </p>
               <button className="bg-white text-blue-500 py-2 px-6 rounded-full font-medium tracking-wide hover:bg-blue-500 hover:text-white transition duration-300">
                  Learn More
               </button>
            </div>
         </section>

         {/* Cards section */}
         <section className="container mx-auto py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
               Our Services
            </h2>
            <div className="grid grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                     className="w-full h-64 object-cover"
                     src="https://source.unsplash.com/random/800x600"
                     alt="Service 1"
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-50 transition duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100">
                     <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-2">
                           Service 1
                        </h3>
                        <p className="text-sm text-white">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Suspendisse varius enim in eros elementum
                           tristique. Duis cursus, mi quis viverra ornare, eros
                           dolor interdum nulla.
                        </p>
                     </div>
                  </div>
               </div>
               {/* Card 2 */}
               <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                     className="w-full h-64 object-cover"
                     src="https://source.unsplash.com/random/800x601"
                     alt="Service 2"
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-50 transition duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100">
                     <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-2">
                           Service 2
                        </h3>
                        <p className="text-sm text-white">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Suspendisse
                        </p>
                     </div>
                  </div>
               </div>{" "}
               <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                     className="w-full h-64 object-cover"
                     src="https://source.unsplash.com/random/800x602"
                     alt="Service 3"
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-50 transition duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100">
                     <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-2">
                           Service 3
                        </h3>
                        <p className="text-sm text-white">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Suspendisse varius enim in eros elementum
                           tristique. Duis cursus, mi quis viverra ornare, eros
                           dolor interdum nulla.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Orders;

"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const servicesStraight = [
  "Grow Quickly ",
  "Services",
  "Grow Quickly ",
  "Services",

  "Grow Quickly ",

  "Services",
];

const servicesDiagonal = [
  "Grow Quickly ",
  "Services",
  "Services ",
  "Grow Quickly ",
  "Services",
  "Grow Quickly ",
  "info@growquickly.ca",

];

const CarsouleServices = () => {
  return (
    <div className="relative mt-">
         <div className="bg-[#48287A] py-4 mb-1 overflow-hidden">
           <div className="animate-marquee whitespace-nowrap">
             {[...servicesStraight, ...servicesStraight].map((service, index) => (
               <div
                 key={index}
                 className="inline-flex items-center gap-3 text-white text-base md:text-lg max-lg:ml-2  ml-12 font-medium"
               >
                 <FaStar className="text-white w-4 h-4" />
                 {service}
               </div>
             ))}
           </div>
         </div>
   
         <div className="absolute -rotate-6 w-full -top-3 left-6 max-lg:hidden">
           <div className="bg-[#8C52FF] py-4 overflow-hidden">
             <div className="animate-marquee whitespace-nowrap">
               {[...servicesDiagonal, ...servicesDiagonal].map((service, index) => (
                 <div
                   key={index}
                   className="inline-flex items-center gap-3 text-white text-base md:text-lg ml-10 font-medium"
                 >
                   <FaStar className="text-white w-4 h-4" />
                   {service}
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
  );
};

export default CarsouleServices;

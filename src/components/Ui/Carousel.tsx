"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const services = [
  "✦ Websites that Work ",
  "✦ Social Media that Sells ",
  "✦ SEO that Delivers ",
  "✦ Digital Marketing Made Easy ",
  "✦ Grow Quickly Grow Confidently",
];

const Carousel = () => {
  return (
    <div className="bg-[#8c52ff] py-6">
      <Marquee speed={60} gradient={false}>
        <div className="flex space-x-8 items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center text-white text-lg max-lg:ml-2 font-medium"
            >
              {service}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;

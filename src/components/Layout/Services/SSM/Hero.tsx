"use client";
import React from "react";
import Digitalcrsouse from "../DigitalMarkting/CarsouleServices";

const Hero = () => {
  return (
    <div>
      <div className="relative bg-[#8C52FF] border-white border-2 m-0 p-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/bgcontact.png')" }}
        ></div>

        <div className="text-white overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center my-40">
            <h1 className="text-6xl max-lg:text-3xl  font-bold text-yellow-400">
              Social <span className="text-white"> Media Marketing</span>
            </h1>
            <p className="mt-4 text-xl text-white">
              Home <span className="text-yellow-400">* Our Services</span>
            </p>
          </div>

          <Digitalcrsouse />
        </div>
      </div>
    </div>
  );
};

export default Hero;

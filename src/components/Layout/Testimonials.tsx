"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import Carouself from "../Ui/Carosule2";
import { Button } from "../Ui/button";

const testimonials = [
  {
    id: 1,
    feedback:
      "Working with GrowQuickly has been a game-changer for us. Their digital marketing expertise and strategic approach have significantly boosted our online presence and lead generation.",
    name: "Joe",
    position: "Preon Cloud",
    image: "/images/img3.jpg",
  },
  {
    id: 2,
    feedback:
      "GrowQuickly's SEO and digital marketing services have helped us scale our brand faster than we imagined. Their data-driven strategies and execution are top-notch!",
    name: "Abdul Basit",
    position: "The Rank AI",
    image: "/images/img4.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="py-16 px-4 sm:px-8 md:px-16 max-w-7xl max-lg:w-auto mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="space-y-3">
            <p className="text-purple-600 font-medium text-sm sm:text-lg">
              ━ Come Lets Grow Quickly
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What Our Customers Say
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-lg">
            Real Stories, Real Success: See How We’ve Helped Businesses Like
            Yours Thrive
          </p>
        </div>
      </div>

      <div className="py-16 px-6 max-lg:py-6 m-4 text-center bg-white p-6 sm:p-10 shadow-lg rounded-2xl max-w-3xl mx-auto relative">
        <motion.div
          className="text-purple-600 text-5xl mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-5">
            <Image
              src="/icons/lk.svg"
              width={20}
              height={20}
              alt="quotation"
              priority // disables lazy loading
            />
          </div>
        </motion.div>

        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {testimonials[currentIndex].feedback}
        </motion.p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="rounded-full p-2 bg-white shadow-md hover:bg-gray-100 transition duration-200"
          >
            <FaChevronLeft className="w-5 h-5" />
          </Button>

          {testimonials.map((testimonial, index) => (
            <Image
              key={testimonial.id}
              src={testimonial.image}
              alt={testimonial.name}
              width={50}
              height={50}
              priority={index === 0} // Load first image eagerly for LCP
              className={`rounded-full border-2 transition-all aspect-square object-cover cursor-pointer ${
                index === currentIndex
                  ? "border-purple-500 p-0.5"
                  : "border-gray-300 opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="mt-4">
          <p className="font-semibold text-lg">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-sm text-gray-500">
            {testimonials[currentIndex].position}
          </p>
        </div>
      </div>

      {/* Our Clients */}
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] w-16 md:w-64 bg-gray-300"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Our Clients
          </h2>
          <div className="h-[2px] w-16 md:w-64 bg-gray-300"></div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-10">
          <Image
            src="/images/preon23.png"
            alt="Preon Cloud"
            width={128}
            height={64}
            priority // disable lazy loading for above-the-fold
            className="w-20 sm:w-24 md:w-32 h-10 sm:h-12 md:h-16 rounded-lg bg-black p-2 object-contain"
          />
          <Image
            src="/images/logo23.jpg"
            alt="The Rank AI"
            width={128}
            height={64}
            priority
            className="w-20 sm:w-24 md:w-32 h-10 sm:h-12 md:h-16 rounded-lg object-contain"
          />
        </div>
      </div>

      {/* Optional carousel below the fold */}
      <Carouself />
    </div>
  );
};

export default Testimonials;

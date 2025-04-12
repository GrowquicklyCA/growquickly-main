"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24 bg-[#F5F5FF] flex flex-col sm:flex-row items-center justify-between gap-10">
      <div className="space-y-6 max-w-xl">
        <div className="flex items-center gap-2 text-[#8C52FF] font-medium">
          <Image src="/icons/Vector.svg" width={20} height={20} alt="Icon" />
          <span>Why Choose Us</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          At Grow Quickly, We Deliver Results That Matter.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          From boosting your online presence with expert SEO to streamlining
          operations with AI and custom software, we provide tailored solutions
          to help your business thrive.
        </p>
        <Link href="/contact" passHref>
          <button className="mt-4 px-6 py-3 bg-[#8C52FF] text-white rounded-full flex items-center gap-2 shadow-lg hover:bg-purple-700 transition duration-300">
            Schedule a Call
            <FaArrowRight />
          </button>
        </Link>
      </div>

      <div>
        <Image src="/images/img3h.png" width={500} height={300} alt="Team" />
      </div>
    </div>
  );
};

export default WhyChooseUs;

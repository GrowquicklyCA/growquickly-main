"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Inovate = () => {
  const stats = [
    { number: "25k+", description: "Happy Customers Around the World" },
    { number: "25k+", description: "Best client support award achieved" },
    { number: "25k+", description: "Trusted best partners and sponsors" },
    { number: "25k+", description: "Active users using our best services" },
  ];

  return (
    <section className="relative bg-white py-2 md:py-16 overflow-hidden">
      <motion.div
        className="absolute bottom-10 left-0 opacity-80 max-lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/bird (2).png"
          alt="Decorative Bird"
          width={190}
          height={190}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-2">
            <motion.span
              className="text-[#8c52ff] font-semibold uppercase tracking-wide text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              ━ Our Approach
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-poppins text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Experts in <span className="text-[#8c52ff]">digital</span> <br />
              brand innovation
            </motion.h2>
            <motion.p
              className="text-base text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We specialize in transforming brands through cutting-edge digital
              strategies, blending creativity with technology to drive growth,
              enhance engagement, and deliver memorable experiences.
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`w-[228px] h-[228px] max-lg:w-auto bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-xl p-4 max-lg:p-2 shadow-lg flex flex-col relative ${
                index % 2 === 0 ? "" : "mt-10 max-lg:w-auto "
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 + index * 0.2 }}
            >
              <div className="absolute top-4 right-4">
                <Image
                  src="/icons/Vector (2).svg"
                  alt="Stat Icon"
                  width={34}
                  height={34}
                />
              </div>

              <div className="mt-20">
                <motion.h3
                  className="text-4xl max-lg:text-xl font-bold mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  className="text-base max-lg:text-sm mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {stat.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inovate;

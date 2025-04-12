"use client";

import React from "react";
import { motion } from "framer-motion";

const Digitalap = () => {
  return (
    <section className="bg-[#8C52FF] text-white py-12 px-6 sm:px-8 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-10">
      <div className="space-y-4 md:w-1/2 text-center md:text-left">
        <motion.p
          className="text-white font-medium text-sm uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          ━ Our Approach
        </motion.p>
        <motion.h2
          className="text-xl sm:text-5xl md:text-3xl lg:text-4xl font-semibold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Experts in <span className="text-white font-bold">digital</span> brand <br /> innovation
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 md:w-1/2 w-full ">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg flex items-center justify-center h-12 md:h-16 lg:h-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Digitalap;

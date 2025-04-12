"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="py-16 mx-1 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-b from-[rgba(137,118,253,0.9)] to-[#7833FF] text-white text-center py-12 rounded-2xl shadow-lg max-w-4xl mx-auto px-6 md:px-12"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold leading-tight"
        >
          Ready to Boost Your Sales?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-base md:text-lg max-lg:text-base max-w-lg mx-auto leading-relaxed"
        >
          Did you know that <span className="font-bold">76% of customers</span> research online before making a decision?
          Make sure your business stands out with <span className="font-bold">expert digital marketing</span> designed for growth.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-2 text-base md:text-lg max-lg:text-base max-w-lg mx-auto leading-relaxed"
        >
          Turn your online presence into <span className="font-bold">real revenue</span> today.
        </motion.p>
        <Link href="/contact" passHref>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-[#8c52ff] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-md"
          >
            Book Your Free Strategy Call
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CTA;

"use client"
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#8976FD]/90 to-[#7833FF] py-12 max-lg:pb-40 md:py-20">
      <div className="max-w-6xl mx-auto px-3 md:px-12 flex flex-col md:flex-row items-center justify-center gap-96 max-lg:gap-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-poppins text-white text-3xl md:text-4xl lg:text-5xl font-medium  leading-snug"
          >
            Come Grow Quickly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-nunito text-white text-base md:text-lg leading-relaxed max-w-2xl max-lg:w-auto"
          >
            GrowQuickly is your leading partner for digital solutions to help Kamloops businesses thrive online.
            Our strengths lie in  Web/Mobile Design and Development, Digital Marketing, SEO, Content Marketing,            
            and Social Media Marketing.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-r from-[#8C52FF] via-[#9166fe] to-purple-400 opacity-50 blur-xl"></div>
          <div className="absolute w-[220px] h-[220px] md:w-[270px] md:h-[270px] rounded-full bg-gradient-to-r from-[#b38cff] to-[#b38cff] opacity-40 border border-purple-300"></div>
          <div className="absolute w-[180px] h-[180px] md:w-[216px] md:h-[216px] rounded-full bg-[#9166fe] opacity-60 border-2 border-[white]"></div>
          <div className="absolute w-[120px] h-[120px] md:w-[143px] md:h-[143px] rounded-full bg-[#8c52ff]"></div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[180px] h-[180px] md:w-[270px] md:h-[270px] bg-cover bg-center z-10"
            style={{
              backgroundImage: "url('/images/bird.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

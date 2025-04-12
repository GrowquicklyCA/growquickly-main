"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Research",
    description:
      "At Grow Quickly, we start with in-depth market research to uncover opportunities, analyze competitors, and understand your audience. Our data-driven insights form the foundation for strategies that maximize your online visibility, improve engagement, and boost conversions.",
    image1: "/images/work2.png",
    image2: "/images/work1.png",
    color: "#03c58d",
  },
  {
    title: "Ideate to Elevate",
    description:
      "Your competitors are growing online—are you? At Grow Quickly, we deeply understand your customers, competitors, and market opportunities. Our powerful insights craft strategies that turn clicks into customers. Imagine greater visibility, stronger engagement, and accelerated growth—your business thriving beyond expectations.Don’t wait. Your growth starts here.",
    image1: "/images/work1.png",
    image2: "/images/work2.png",
    color: "#fc5454",
  },
  {
    title: "Start Strong",
    description:
      "Growth waits for no one—are you ready to take charge? We begin by uncovering exactly what your audience wants and what your competitors overlook. This insight drives powerful strategies that amplify your online visibility. Picture your business thriving with more visibility, deeper customer connections, and increased conversions. Your journey to growth starts now.",
    image1: "/images/work2.png",
    image2: "/images/work1.png",
    color: "#5c54ff",
  },
  {
    title: "Reach Your Target",
    description:
      "Your ideal customers are waiting—make sure they find you first. At Grow Quickly, our precise strategies put your business directly in front of those who matter most. We use targeted insights to maximize visibility and deepen engagement. Imagine easily connecting with your perfect audience, turning interest into action, and growth into reality. Start reaching your target audience today.",
    image1: "/images/work1.png",
    image2: "/images/work2.png",
    color: "#ffb730",
  },
];

const Features = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-12 sm:py-16 px-1 sm:px-6 lg:px-20">
        <div className="flex justify-center items-center">
          <div className="max-w-screen-lg flex max-lg:flex-col max-lg:text-center justify-between items-center px-4 md:px-0 w-full">
            <div className="space-y-2 sm:space-y-4 text-left max-lg:text-center">
              <p className="text-[#8C52FF] font-semibold text-sm sm:text-lg">
                Grow Quickly. Grow Confidently ━ Lets Grow Quickly
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Our Work Process
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg text-left max-w-md">
              From initial strategy to final delivery, our clear, results-driven
              approach is designed to maximize your success.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-2 sm:p-3 rounded-lg flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 cursor-pointer`}
              style={{ backgroundColor: step.color }}
              onClick={() => setCurrentStep(index)}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={`/icons/v${index + 1}.svg`}
                alt={`Icon ${index + 1}`}
                width={56}
                height={56}
                className="w-10 h-10 sm:w-14 sm:h-14"
                loading="eager" // 👈 add this
                priority={index < 3} // 👈 add this
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            <div className="bg-green-100 p-4 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <div className="w-full sm:w-48 md:w-56 h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={steps[currentStep].image1}
                  alt="Step 1"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-48 md:w-56 h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-lg sm:mt-16">
                <Image
                  src={steps[currentStep].image2}
                  alt="Step 2"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-[#8c52ff] font-medium text-sm sm:text-base">
                Step {currentStep + 1}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {steps[currentStep].description}
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#8c52ff] text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md mt-4 sm:mt-6"
                >
                  Get Started Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;

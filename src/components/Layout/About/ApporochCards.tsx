"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const OurApproach = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#8C52FF1A] p-10 max-lg:p-2 rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-between mx-32 max-lg:mx-0 max-lg:flex-col"
      >
        <div className="max-w-screen-lg">
          <div className="space-y-2 sm:space-y-4 text-center md:text-left">
            <p className="text-purple-600 font-medium text-sm sm:text-lg">
              ━ Our Approach
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Crafting <span className="text-[#8C52FF]">impactful digital</span>
              <br />
              experiences
            </h2>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center md:text-left">
          We blend creativity, strategy, and technology to <br /> design digital
          experiences that connect, engage, and <br />
          inspire. 
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <Card title="Our Mission" />
        <Card title="Our Vision" />
        <Card title="Our Value" />
      </motion.div>
    </motion.div>
  );
};

const Card = ({ title }: { title: string }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="border border-purple-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow flex flex-col w-[320px] h-[350px]"
    >
      <Image
        src="/images/aboutap.png"
        alt="Team Discussion"
        width={280}
        height={180}
        className="rounded-xl w-full h-auto object-cover"
      />
      <h3 className="text-xl font-semibold mt-4 text-purple-900">{title}</h3>
      <p className="text-gray-700 text-base mt-2 leading-snug">
        Delivering transformative digital solutions that elevate brand
        connections.
      </p>
    </motion.div>
  );
};

export default OurApproach;
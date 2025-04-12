"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const infoItems = [
  {
    title: "Your Success is Our Mission",
    content:
      "We measure our success by yours. Our team is dedicated to delivering digital solutions that drive meaningful, measurable results—every time.",
  },
  {
    title: "Our Mission",
    content:
      "Empower brands with transformative digital strategies to create lasting connections through impactful online experiences.",
  },
  {
    title: "Why Choose GrowQuickly?",
    content:
      "25K+ satisfied clients worldwide, award-winning customer support, and proven strategies that power global growth.",
  },
];

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-white py-6 md:py-16 overflow-hidden mb-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 opacity-80 max-lg:hidden"
      >
        <Image src="/images/bird (2).png" alt="Decorative Bird" width={190} height={190} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-3 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 lg:space-y-8"
        >
          <div className="space-y-2">
            <span className="text-[#8c52ff] font-semibold uppercase tracking-wide text-sm">
              ━ About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins leading-snug text-gray-900">
              Digital Experiences that <span className="text-[#8c52ff]">Elevate Your Brand</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Your brand deserves more than visibility—it deserves memorable experiences. We blend
              creativity, technology, and strategic insights to help your business connect, engage, and
              inspire.
            </p>
          </div>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-6 px-6 md:px-8 py-3 bg-[#8C52FF] text-white text-lg rounded-full shadow-lg hover:bg-[#7135e9] transition-all"
            >
              Schedule a Call →
            </motion.button>
          </Link>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gray-300 max-lg:hidden"></div>

          <motion.div
            className="space-y-10 md:space-y-12 pl-2 md:pl-12"
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
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4"
              >
                <div className="max-lg:hidden absolute -left-4 md:-left-7 top-3 md:top-12 flex flex-col items-center space-y-2">
                  <Image src="/icons/circab.svg" alt="Decorative Icon" width={24} height={24} />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <Image src="/icons/mab.svg" alt="Icon" width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

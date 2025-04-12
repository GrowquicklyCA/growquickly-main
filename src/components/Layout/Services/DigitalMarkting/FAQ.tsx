"use client";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FAQSection() {
  const faqs = [
    {
      question: "Why is an SEO audit important for my website?",
      answer:
        "An SEO audit helps identify technical issues, keyword gaps, and optimization opportunities to improve your search engine rankings.",
    },
    {
      question: "How can digital marketing benefit my business?",
      answer:
        "Digital marketing enhances your brand presence, drives targeted traffic, and increases conversions through strategic online campaigns.",
    },
    {
      question: "What results can I expect from social media marketing?",
      answer:
        "With the right strategy, social media marketing can increase brand awareness, boost engagement, and generate high-quality leads.",
    },
    {
      question: "Do you offer custom web development services?",
      answer:
        "Yes! We design and develop responsive, high-performance websites tailored to your business needs, ensuring scalability and efficiency.",
    },
    {
      question: "What kind of AI solutions do you provide?",
      answer:
        "We offer AI-powered automation tools, chatbots, and analytics solutions customized to streamline your business operations.",
    },
    {
      question: "Can you develop mobile apps for both iOS and Android?",
      answer:
        "Absolutely! We build cross-platform and native mobile apps with intuitive designs and seamless user experiences.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 mb-2"
        >
          <Image src="/icons/Vector.svg" alt="new" width={5} height={5} />
          <span className="text-[#8C52FF] font-semibold text-lg">FAQs</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Got Queries? <br /> We Got Answers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border-2 border-[#8C52FF] rounded-xl shadow-sm"
            >
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-gray-800 font-medium">{faq.question}</p>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <AiOutlineMinus className="w-6 h-6 text-[#8C52FF]" />
                  ) : (
                    <AiOutlinePlus className="w-6 h-6 text-[#8C52FF]" />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-6 pt-0 text-gray-600"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

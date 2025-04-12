import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Carousel = dynamic(() => import("../Ui/Carousel"), { ssr: false });

const services = [
  { title: "SEO Audit", image: "/images/svimg1.png", link: "/services/seo" },
  {
    title: "Digital Marketing",
    image: "/images/svimg2.png",
    link: "/services/digital",
  },
  {
    title: "Social Media Marketing",
    image: "/images/svimg3.png",
    link: "/services/socialmedia",
  },
  {
    title: "Web Development",
    image: "/images/svimg4.png",
    link: "/services/web",
  },
  {
    title: "Custom AI Solution",
    image: "/images/svimg5.png",
    link: "/services/ai",
  },
  {
    title: "App Development",
    image: "/images/svimg6.png",
    link: "/services/app",
  },
];

const Services = () => {
  return (
    <div>
      <div className="py-10 px-4 sm:px-8 lg:px-20 flex justify-center items-center max-w-screen-xl mx-auto">
        <section className="space-y-8">
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-screen-xl flex max-lg:flex-col justify-between items-center px-4 md:px-0 w-full">
              {/* Left Content */}
              <div className="space-y-2 sm:space-y-4 text-left">
                <p className="text-[#8C52FF] font-semibold text-sm sm:text-lg">
                  ━ Grow Quickly. Grow Locally.
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  What We Offer
                </h2>
              </div>

              {/* Right Content */}
              <p className="text-gray-600 text-base sm:text-lg text-left max-w-md">
                Personalized digital marketing. Real results.
              </p>
            </div>
          </motion.div>

          <div className="pt-6 sm:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={service.link} passHref>
                    <div className="cursor-pointer relative group overflow-hidden rounded-2xl shadow-lg bg-white">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      <div className="absolute m-3 bottom-0 left-0 rounded-xl right-0 border-white border-2 bg-white bg-opacity-10 backdrop-blur-lg flex justify-between items-center p-3 sm:p-4">
                        <p className="text-white text-sm sm:text-lg font-semibold">
                          {service.title}
                        </p>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white flex items-center justify-center rounded-full shadow-lg">
                          <FaArrowRight className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Carousel />
    </div>
  );
};

export default Services;

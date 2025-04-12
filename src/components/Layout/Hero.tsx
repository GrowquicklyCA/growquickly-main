"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../Ui/avatar";
import { Button } from "../Ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const teamMembers = [
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img4.jpg",
  ];

  return (
    <div className="py-10 flex justify-center items-center mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 ml-20 max-lg:ml-0">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#8C52FF] font-semibold text-sm sm:text-base">
            - 77% of consumers check businesses online first. Can they find you?
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            Grow Quickly
            <span className="text-[#8C52FF]"> Get Seen</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Over 77% of your customers check you out online first. We make sure
            you’re their first and best impression. <br />
            SEO that works. <br />
            AI that simplifies. <br />
            Growth you can measure. <br />
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <Link href="/contact">
              <Button
                size="default"
                className="bg-[#8C52FF] px-6 py-6 rounded-lg hover:bg-[#7b45e6] text-white text-base font-semibold gap-2"
              >
                Schedule a Call
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center md:ml-20 max-lg:ml-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-3 items-start max-lg:items-center relative">
            <div>
              <Image
                src="/images/Vector.png"
                alt="Fiber Background"
                width={180}
                height={80}
                className="absolute -top-5 left-28 max-lg:hidden"
                priority
              />
            </div>
            <div className="space-y-5">
              <motion.div
                className="relative mt-10 w-full sm:w-48 bg-[#8c52ff] rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/imgh1.png"
                  alt="Business Growth"
                  width={200}
                  height={250}
                  className="w-full sm:w-auto h-48 max-lg:h-auto sm:h-64 object-cover"
                />
                <p className="absolute bottom-3 left-2 bg-white px-4 py-1 rounded-md  text-sm w-11/12">
                  <span className="font-semibold">Maximising ROI</span> <br />
                  For Kamloops Clients
                </p>
              </motion.div>

              <div className="flex items-center space-x-[-10px] border-2 p-2 rounded-xl relative ">
                {teamMembers.map((img, i) => (
                  <Avatar key={i} className="w-10 h-10 border-2 border-white">
                    <AvatarImage src={img} alt={`Team Member ${i + 1}`} />
                    <AvatarFallback>TM</AvatarFallback>
                  </Avatar>
                ))}
                <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full text-xs font-medium border-2 border-white">
                  +100
                </div>
                <Image
                  src="/images/dots@2x.png"
                  alt="Dots Background"
                  width={80}
                  height={40}
                  className="absolute -bottom-5 -left-5"
                />
              </div>
            </div>

            <div className="space-y-4 mt-6 sm:mt-0">
              <motion.div
                className="relative flex border-2 border-[#8c52ff] rounded-xl px-4 py-2 w-full sm:w-48"
                whileHover={{ scale: 1.05 }}
              >
                {/* Text Section */}
                <div className="flex flex-col mt-8">
                  <p className="text-3xl font-bold text-[#8c52ff]">100+</p>
                  <p className="text-sm text-gray-600">
                    Business Growing With Us
                  </p>
                </div>

                {/* Bird Icon in Top Right */}
                <div className="absolute top-2 right-2">
                  <Image
                    src="/icons/Visual.svg"
                    alt="Visual Icon"
                    width={54} // Matches w-6 (6 * 4px = 24px in Tailwind)
                    height={54} // Matches h-6
                    className="w-10 h-10"
                  />
                </div>
              </motion.div>

              <motion.div
                className="relative w-full sm:w-48 bg-[#8c52ff] rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/imgh2.png"
                  alt="Global Team"
                  width={200}
                  height={250}
                  className="w-full sm:w-auto h-48 max-lg:h-auto  sm:h-64 object-cover"
                />
                <p className="absolute bottom-3 left-2 bg-white py-2 rounded-md text-sm   w-11/12">
                  <span className="font-semibold">Qualified Global Team</span>{" "}
                  <br />
                  Deliver High Performance
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

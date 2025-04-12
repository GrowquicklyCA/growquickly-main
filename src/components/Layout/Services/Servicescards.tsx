import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

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
    link: "/services/social",
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

const ServicesCard = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-20 flex justify-center items-center max-w-screen-xl mx-auto">
      <section className="space-y-8 text-center">
        <h2 className="text-2xl leading-tight text-gray-800">
          GrowQuickly is your{" "}
          <span className="text-[#8C52FF] font-bold">Leading Partner</span> for
          Digital Solutions to
          <br />
          help{" "}
          <span className="text-[#8C52FF] font-bold">
            Kamloops Businesses Thrive Online.
          </span>
        </h2>
        <div className="pt-6 sm:pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="relative group overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCard;

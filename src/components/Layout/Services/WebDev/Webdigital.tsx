import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function WebDevelopmentSection() {
  return (
    <section className="bg-white py-12 px-6 lg:px-12 flex justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl leading-tight text-gray-800 mb-8 sm:mb-10">
          GrowQuickly is your{" "}
          <span className="text-[#8C52FF] font-bold">Trusted Partner</span> for
          <br className="hidden md:block" />
          <span className="text-[#8C52FF] font-bold">
            Professional Web Development
          </span>{" "}
          that drives business success.
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-y-10 lg:gap-y-16">
          <div className="relative flex justify-center items-center w-full lg:w-[55%]">
            <Image
              src="/images/web1.png"
              alt="Web Development"
              width={600}
              height={400}
              className="rounded-lg object-contain"
            />
          </div>

          <div className="text-center max-lg:text-left lg:text-left w-full max-w-lg lg:w-[45%]">
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              We specialize in{" "}
              <span className="font-semibold">custom web solutions</span> that
              enhance user experience, improve performance, and ensure
              scalability.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="text-[#8C52FF]">Web Development Services</span>
            </h2>

            <ul className="text-base sm:text-lg text-gray-700 space-y-4 font-bold">
              <span className="py-1 block text-[#8C52FF]">We Offer</span>
              {[
                "Custom Website Development",
                "E-commerce Solutions",
                "Responsive & Mobile-Friendly Design",
                "SEO-Optimized Websites",
              ].map((item, index) => (
                <li key={index} className="flex  space-x-3">
                  <Image
                    src="/icons/Group (1).svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mr-3"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="">
              <button className="flex items-center gap-2 mt-6 px-6 md:px-8 py-3 bg-[#8C52FF] text-white text-base sm:text-lg rounded-full shadow-lg hover:bg-[#7135e9] transition-all">
                Get a Free Consultation <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

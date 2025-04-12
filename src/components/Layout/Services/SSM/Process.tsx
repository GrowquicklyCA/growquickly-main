"use client";

import Image from "next/image";

export default function SocialMediaProcessSection() {
  return (
    <section className="bg-white py-12 px-2 lg:px-12 flex justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#8C52FF]">Process</span> Of Social Media
          Marketing
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Our social media marketing process starts with understanding your
          brand, followed by strategic implementation and continuous
          collaboration to drive engagement and results.
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: 1,
              title: "Discovery Phase",
              description:
                "Initial consultation to understand your brand, goals, and target audience. Conducting research.",
            },
            {
              step: 2,
              title: "Content Strategy",
              description:
                "Planning and curating high-quality content to engage your audience and enhance brand awareness.",
            },
            {
              step: 3,
              title: "Execute & Enhance",
              description:
                "Publishing content, monitoring engagement, and refining strategies for continuous growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg flex flex-col justify-between "
              style={{
                background:
                  "linear-gradient(137.21deg, rgba(140, 82, 255, 0.01) -55.28%, #8C52FF 81.41%)",
                color: "white",
                textAlign: "left",
                position: "relative",
              }}
            >
              <div className="absolute top-4 left-4">
                <Image src="/icons/nbc.svg" alt="Icon" width={24} height={24} />
              </div>

              <div className="absolute flex flex-col top-2 right-4 text-xl font-semibold">
                Step{" "}
                <span className="text-yellow-300 text-3xl">{item.step}</span>
              </div>
              <div className="mt-20">
                {/* Content */}
                <h3 className="text-3xl font-bold mt-8">{item.title}</h3>
                <p className="text-base mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

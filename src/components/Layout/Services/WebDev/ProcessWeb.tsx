"use client";

import Image from "next/image";

export default function WebDevProcess() {
  return (
    <section className="bg-white py-12 px-2 lg:px-12 flex justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#8C52FF]">Process</span> Of Web Development
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Our web development process ensures a streamlined and efficient
          workflow, from initial concept to final deployment, focusing on
          performance, scalability, and user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: 1,
              title: "Requirement Analysis",
              description:
                "Understanding your business needs, goals, and technical requirements to create a solid development plan.",
            },
            {
              step: 2,
              title: "Design & Development",
              description:
                "Crafting user-friendly UI/UX designs and building a responsive, high-performance website tailored to your needs.",
            },
            {
              step: 3,
              title: "Testing & Deployment",
              description:
                "Ensuring quality assurance, testing functionality, and deploying the website for optimal performance.",
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

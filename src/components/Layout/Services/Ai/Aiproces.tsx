"use client";
import Image from "next/image";

export default function AiProcessSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business, target audience, and goals. Through in-depth research, we develop a data-driven strategy to position your brand effectively in the digital space.",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 2",
      title: "Implementation & Optimization",
      description:
        "Our experts execute AI-powered digital marketing strategies across multiple channels, ensuring maximum reach and engagement. We continuously analyze data to optimize performance and improve conversions.",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 3",
      title: "Collaboration & Growth",
      description:
        "We work closely with you, providing regular insights and reports to refine our strategies. With AI-driven automation and human expertise, we help your business achieve sustained digital growth.",
      iconPath: "/icons/pcs.svg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <Image
            src="/icons/Vector.svg"
            width={20}
            height={20}
            alt="Indicator"
          />
          <span className="text-purple-600 font-semibold text-lg">
            Our Process
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 leading-tight max-w-2xl">
          AI-Powered Digital Marketing for Smarter Business Growth
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-white rounded-xl shadow-xl p-6 sm:p-8 w-full lg:w-[32%] flex flex-col justify-center bg-gradient-to-tr from-[rgba(140,82,255,0.6)] to-[#8C52FF]"
            >
              <div className="absolute top-6 left-6">
                <Image
                  src={step.iconPath}
                  alt={`${step.title} Icon`}
                  width={40}
                  height={40}
                />
              </div>
              <span className="absolute top-6 right-6 text-3xl sm:text-4xl font-bold">
                {step.step}
              </span>
              <div className="mt-16">
                <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

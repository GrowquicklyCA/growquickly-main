import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Requirement Analysis",
      description:
        "Understanding your app idea, defining key features, and researching target users to create a strong foundation.",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 2",
      title: "UI/UX Design",
      description:
        "Crafting a seamless and user-friendly app interface with wireframes, prototypes, and engaging visuals.",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 3",
      title: "Development Phase",
      description:
        "Writing high-quality code for frontend and backend, integrating APIs, and building core app functionalities.",
      iconPath: "/icons/pcs.svg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-12">
        <div className="flex items-center space-x-2 mb-6">
          <Image src='/icons/Vector.svg' alt="new" width={20} height={20} />
          <span className="text-purple-600 font-semibold text-lg">
            Our Mobile App Development Process
          </span>
        </div>

        <h2 className="text-xl text-gray-900 mb-12 leading-tight max-w-96">
          Our Step-by-Step Process Ensures a High-Performing and Scalable Mobile App.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-white rounded-xl shadow-xl p-8 flex flex-col justify-center bg-gradient-to-tr from-[rgba(140,82,255,0.6)] to-[#8C52FF] h-[300px]"
            >
              <div className="absolute top-6 left-6 flex items-center">
                <Image
                  src={step.iconPath}
                  alt={`${step.title} Icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <span className="absolute top-6 right-6 text-4xl font-bold">
                {step.step}
              </span>
              <div className="mt-12">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed">
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

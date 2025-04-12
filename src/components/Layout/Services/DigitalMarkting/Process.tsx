import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Discovery Phase",
      description:
        "Initial consultation to understand your brand, goals, and target audience. Conducting research.",
      imagePath: "/images/dis.svg",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 2",
      title: "Implementation",
      description:
        "Initial consultation to understand your brand, goals, and target audience. Conducting research.",
      imagePath: "/images/imp.svg",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 3",
      title: "Collaboration",
      description:
        "Initial consultation to understand your brand, goals, and target audience. Conducting research.",
      imagePath: "/images/img2h.png",
      iconPath: "/icons/pcs.svg",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl max-lg:w-auto mx-auto px-2 sm:px-12 ma">
        <div className="flex items-center space-x-2 mb-6">
          <Image src="/icons/Vector.svg" alt="new" width={20} height={20} />

          <span className="text-purple-600 font-semibold text-lg">
            Our Process
          </span>
        </div>

        <h2 className="text-xl  text-gray-900 mb-12 leading-tight max-w-96">
          Our Digital Marketing Process Begins With Discovery And Research To
          Understand Your Goals.
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between mx-10 max-lg:mx-0`}
            >
              <div className="relative text-white rounded-xl shadow-xl p-8 w-full lg:w-[540px] h-[346px] flex flex-col justify-center bg-gradient-to-tr from-[rgba(140,82,255,0.6)] to-[#8C52FF]">
                <div className="absolute top-8 left-6 flex items-center">
                  <Image
                    src={step.iconPath}
                    alt={`${step.title} Icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </div>
                <span className="absolute top-7  right-5 text-4xl  text-[#332C5C] font-bold">
                  {step.step}
                </span>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold mt-8">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative lg:w-[540px] w-full h-[346px] mt-8 lg:mt-0">
                <Image
                  src={step.imagePath}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function ProcessSectionSeo() {
  const steps = [
    {
      step: "Step 1",
      title: "SEO Audit & Strategy",
      description:
        "We start with a comprehensive SEO audit, analyzing your website's strengths and weaknesses. Based on this, we create a tailored strategy to improve your search rankings.",
      imagePath: "/images/seo3.png",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 2",
      title: "On-Page & Technical Optimization",
      description:
        "Our experts optimize your website’s structure, content, and technical SEO to enhance user experience and search engine visibility.",
      imagePath: "/images/seo21.png",
      iconPath: "/icons/pcs.svg",
    },
    {
      step: "Step 3",
      title: "Content & Link Building",
      description:
        "We craft high-quality, SEO-optimized content and implement authoritative link-building strategies to boost domain authority and drive organic traffic.",
      imagePath: "/images/seo1.png",
      iconPath: "/icons/pcs.svg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl max-lg:w-auto mx-auto px-2 sm:px-12">
        <div className="flex items-center space-x-2 mb-6">
          <Image
            src="/icons/Vector.svg"
            alt="new
          "
            width={20}
            height={20}
          />
          <span className="text-purple-600 font-semibold text-lg">
            Our SEO Process
          </span>
        </div>

        <h2 className="text-xl text-gray-900 mb-12 leading-tight max-w-96">
          Our Proven SEO Process Helps Your Business Achieve Higher Rankings and
          Increased Organic Traffic.
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
                <span className="absolute top-7 right-5 text-4xl  font-bold">
                  {step.step}
                </span>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold mt-8">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative lg:w-[540px] w-full h-auto mt-8 lg:mt-0">
                <Image
                  src={step.imagePath}
                  alt={step.title}
                  width={540}
                  height={346}
                  className="rounded-xl object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

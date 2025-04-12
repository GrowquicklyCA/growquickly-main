import Image from "next/image";
import { Button } from "../../Ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-12">
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-3xl">
        <Image
          src="/images/backcta.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />

        <div className="absolute inset-0 bg-[#8c52ff]/70 backdrop-blur-sm rounded-3xl"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Have An Idea?
            <br />
            Let’s Talk
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-lg max-w-lg">
            From Boosting Your Online Presence With Expert SEO To Streamlining
            Operations With AI
          </p>

          <Link href="/contact">
            <Button className="mt-6 px-6 py-4 sm:px-8 sm:py-6 bg-white text-[#8c52ff] text-sm sm:text-base rounded-full font-semibold hover:bg-purple-100 flex items-center gap-2">
              <Image
                src="/icons/clander.svg"
                alt="Calendar Icon"
                width={20}
                height={20}
              />
              Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Button } from "../../Ui/button";
import { PhoneCall, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#8C52FF] text-white px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-[#8C52FF]/80 to-[#8C52FF]/20" />
      <div className="relative text-center max-w-2xl">
        <button className="mb-4 px-4 py-2 text-sm font-semibold uppercase tracking-wide bg-white/10 rounded-full">
          Get Started
        </button>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Ready to <span className="text-white">Elevate</span> Your Digital
          Marketing?
        </h1>
        <p className="mt-4 text-gray-100 text-base">
          Unlock your business potential with a personalized audit or a strategy
          call with our experts. Lets create a roadmap for your growth.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center max-lg:items-center">
          <Link href="/contact">
            <Button className="bg-white text-[#8C52FF] hover:bg-gray-200 px-6 py-7 rounded-full text-lg flex items-center gap-2">
              <PhoneCall className="w-5 h-5" />
              Get Free Consultation Call
            </Button>
          </Link>
          <Link href="/services">
            <Button className="border-white border-2 px-6 py-7 max-lg:px-20 rounded-full text-lg flex items-center gap-2">
              Our Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

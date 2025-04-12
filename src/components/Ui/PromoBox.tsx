"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./button";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // Hide banner when dismissed

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full flex items-center p-4  max-w-full border border-gray-200">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center  rounded-full">
        <Image src="/images/promo.png" alt="Growth Icon" width={40} height={40} />
      </div>

      {/* Content */}
      <div className="ml-4 flex-1">
        <h3 className="font-semibold text-3xl text-gray-900">Grow your business with us!</h3>
        <p className="text-gray-600 text-sm">
          Our expert digital marketing team at <span className="font-medium">GrowQuickly</span> helps you scale with SEO, social media, and AI-driven strategies. Let’s talk today!
        </p>
      </div>

      {/* CTA Button */}
      <Button className="bg-[#8c52ff] text-white flex items-center gap-2 px-5 py-2 rounded-full">
        Get in touch <span>📩</span>
      </Button>

      {/* Close Button */}
      <button onClick={() => setVisible(false)} className="ml-2 text-gray-400 hover:text-gray-600">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

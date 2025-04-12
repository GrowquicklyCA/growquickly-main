import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useToast } from "../../hooks/use-toast"; // This is the hook

const Footer = () => {
  const { toast } = useToast();
  const emailRef = useRef<HTMLInputElement>(null); // Using ref to access the email input value
  const [email, setEmail] = useState(""); // State for storing email value

  const handleSubscribe = () => {
    // Check if email is empty
    if (!email || email.trim() === "") {
      toast({
        title: "Email is required",
        description: "Please enter a valid email address.",
        variant: "destructive", // To indicate an error
      });
      return;
    }

    // Optional: Basic email format validation (you can add more robust validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast({
        title: "Invalid email format",
        description: "Please enter a valid email address.",
        variant: "destructive", // To indicate an error
      });
      return;
    }

    // If validation passes, show the success toast
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    // Clear input field after successful submission
    setEmail("");
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left">
        <div className="w-full flex flex-col items-start">
          <Image
            src="/images/logo1.jpg"
            alt="Grow Quickly Logo"
            width={150}
            height={50}
            className="w-40 h-auto"
          />
          <div className="mt-6 space-y-4 text-gray-600">
            <p className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#8C52FF] w-5 h-5" />
              <span>+1 778 538 2109</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-[#8C52FF] w-5 h-5" />
              <span>info@growquickly.ca</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mt-5">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mt-5">Our Services</h3>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>
              <Link href="/services/digital">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/services/socialmedia">Social Media Marketing</Link>
            </li>
            <li>
              <Link href="/services/seo">SEO</Link>
            </li>
            <li>
              <Link href="/services/web">Web Development</Link>
            </li>
            <li>
              <Link href="/services/app">App Development</Link>
            </li>
            <li>
              <Link href="/services/ai">AI Solutions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mt-5">Support</h3>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog/bloghome">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-6 w-60 max-lg:w-auto">
          <h3 className="text-lg font-semibold text-gray-800">Subscribe to our newsletter</h3>
          <div className="mt-6 flex flex-col sm:flex-row items-start">
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state with the email
              className="flex-grow w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#8C52FF] text-white px-6 py-3 mt-4 sm:mt-0 sm:ml-2 rounded-md font-medium w-full sm:w-auto"
            >
              Subscribe
            </button>
          </div>
          <div className="flex justify-start space-x-6 mt-6 text-[#8C52FF]">
  <Link href="https://www.instagram.com/growquickly_/" target="_blank" aria-label="Visit our Instagram">
    <FaInstagram className="w-6 h-6 hover:text-[#8C52FF] transition" />
  </Link>
  <Link href="https://www.facebook.com/profile.php?id=61563940404636" target="_blank" aria-label="Visit our Facebook">
    <FaFacebookF className="w-6 h-6 hover:text-[#8C52FF] transition" />
  </Link>
  <Link href="https://www.linkedin.com/company/growquickly/?viewAsMember=true" target="_blank" aria-label="Visit our LinkedIn">
    <FaLinkedinIn className="w-6 h-6 hover:text-[#8C52FF] transition" />
  </Link>
</div>

        </div>
      </div>

      <div className="text-left text-gray-500 mt-6 px-6">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

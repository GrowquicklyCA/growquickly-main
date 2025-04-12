"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;

      const targetElement = event.target as HTMLElement;

      if (dropdownRef.current && !dropdownRef.current.contains(targetElement)) {
        setIsOpen(false);
      }

      if (
        navbarRef.current &&
        menuOpen &&
        !navbarRef.current.contains(targetElement)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const closeMenus = () => {
    setIsOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/50 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between py-4 px-6 md:px-10">
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/images/logo11.png"
              alt="GrowQuickly"
              layout="intrinsic"
              width={120}
              height={40}
            />
          </div>
        </Link>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Menu */}
        <nav
          ref={navbarRef}
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-start md:justify-center items-start md:items-center p-4 md:p-0 transition-all duration-300 z-50 ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Home */}
          <Link href="/" passHref>
            <span
              className={`block md:inline  rounded-full hover:bg-[#8C52FF]/10 text-gray-700 hover:text-[#8c52ff] py-2 md:py-0 relative ${
                pathname === "/"
                  ? "after:content-[''] after:block after:h-1 after:bg-[#8C52FF] after:rounded-full after:mx-auto after:w-3/4"
                  : ""
              }`}
              onClick={closeMenus}
            >
              Home
            </span>
          </Link>

          <Link href="/about" passHref>
            <span
              className={`block md:inline text-gray-700 hover:text-black py-2 md:py-0 relative ${
                pathname === "/about"
                  ? "after:content-[''] after:block after:h-1 after:bg-[#8C52FF] after:rounded-full after:mx-auto after:w-3/4"
                  : ""
              }`}
              onClick={closeMenus}
            >
              About us
            </span>
          </Link>

          <div
            className="relative w-full md:w-auto"
            ref={dropdownRef}
            onMouseEnter={() => {
              if (window.innerWidth >= 768) setIsOpen(true);
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) setIsOpen(false);
            }}
          >
            <button
              className="w-full md:w-auto text-gray-600 hover:text-black flex items-center gap-1 md:justify-start py-2 md:py-0"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              <span className="text-base font-medium">Services</span>
              <FaChevronDown className="text-sm mt-[1px]" />
            </button>
            <div
              className={`${
                isOpen
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-95"
              } absolute md:absolute left-0 mt-2 md:mt-0 w-full md:w-max py-4 bg-white shadow-xl rounded-xl p-2 z-50 transition-all duration-200 ease-in-out`}
            >
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-1/2">
                  {[
                    { name: "Our Services", path: "/services" },
                    { name: "Digital Marketing", path: "/services/digital" },
                    {
                      name: "Social Media Marketing",
                      path: "/services/socialmedia",
                    },
                    { name: "SEO", path: "/services/seo" },
                  ].map(({ name, path }) => (
                    <Link key={name} href={path} passHref>
                      <span
                        className="block px-6 py-2 hover:text-[#8C52FF] rounded-full hover:bg-[#8C52FF]/10"
                        onClick={closeMenus}
                      >
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="w-full md:w-1/2">
                  {[
                    { name: "Web Development", path: "/services/web" },
                    { name: "App Development", path: "/services/app" },
                    { name: "AI Solutions", path: "/services/ai" },
                  ].map(({ name, path }) => (
                    <Link key={name} href={path} passHref>
                      <span
                        className="block px-6 py-2  hover:text-[#8C52FF] rounded-full hover:bg-[#8C52FF]/10"
                        onClick={closeMenus}
                      >
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog/bloghome" passHref>
            <span
              className={`block md:inline text-gray-700 hover:text-black py-2 md:py-0 relative ${
                pathname === "/blog/bloghome"
                  ? "after:content-[''] after:block after:h-1 after:bg-[#8C52FF] after:rounded-full after:mx-auto after:w-3/4"
                  : ""
              }`}
              onClick={closeMenus}
            >
              Blogs
            </span>
          </Link>
        </nav>

        <div className="hidden md:flex justify-end md:justify-center">
          <Link href="/contact" passHref>
            <Button
              onClick={closeMenus}
              className="bg-[#8C52FF] hover:bg-[#7A3EFF] text-white px-6 py-6 rounded-full font-medium text-lg flex items-center gap-3"
            >
              Get in Touch
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

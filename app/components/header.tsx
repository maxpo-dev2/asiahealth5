"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const navBarContents = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about-us" },
  {
    title: "Exhibition",
    link: "/exhibition",
    subLinks: [
      { label: "Exhibition Overview", link: "/exhibition" },
      { label: "Exhibitor Info", link: "/exhibition/info" },
    ],
  },
  {
    title: "Conference",
    link: "/conference",
    subLinks: [
      { label: "Agenda", link: "/conference/agenda" },
      { label: "Speakers", link: "/conference/speakers" },
    ],
  },
  {
    title: "Sponsors",
    link: "/sponsors",
    subLinks: [{ label: "2025 Sponsors", link: "/sponsors" }],
  },
  {
    title: "More",
    link: "/more",
    subLinks: [{ label: "FAQs", link: "/more/faqs" }],
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <header className="relative bg-neutral-900 shadow-md  z-50 overflow-visible ">
      {/* Overlapping Logo */}
      <div className="absolute top-0 left-0 md:left-40 z-50 h-full w-1/3 md:w-auto">
        <div className="bg-white w-" style={{ borderRadius: "50px 0px 50px 0px" }}>
          <Image
            src="/logo/healthlogo.png" // Change to your actual path
            alt="Asia Health Logo"
            width={320}
            height={70}
            
            className="object-contain p-5 md:px-10 md:pb-2 md:pt-7"
          />
        </div>
      </div>

      {/* Top bar with button */}
      <div className="container mx-auto px-4 py-4 flex justify-end">
        <Button className="text-sm font-semibold bg-transparent hover:bg-cyan-500 text-cyan-400 border-2 border-cyan-400 rounded-none">
          REGISTER NOW
        </Button>
      </div>

      {/* Navigation */}
      <nav className="  bg-[linear-gradient(to_right,_#00FCFF_0%,_#3EAEC2_100%)]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-30 ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop & Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center px-4 md:px-0 py-4 md:py-0`}
          >
            {navBarContents.map(({ title, link, subLinks }) =>
              subLinks ? (
                <div key={title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(title)}
                    className="flex items-center gap-1 py-1 text-black cursor-pointer hover:text-white font-semibold text-sm md:text-base"
                  >
                    {title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDropdown === title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Dropdown */}
                  {activeDropdown === title && (
                    <div className="mt-2 md:absolute md:mt-0 bg-white text-black  border border-gray-300 shadow-lg w-48 z-40">
                      {subLinks.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={title}
                  href={link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black block md:inline-block py-1 font-semibold text-sm md:text-base hover:text-white"
                >
                  {title}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

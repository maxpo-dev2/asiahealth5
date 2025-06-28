import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="relative bg-gray-800 shadow-sm">
      {/* Top bar with phone and button */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Empty space for logo positioning */}
          <div className="w-48"></div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center text-white bg-gray-800 px-4 py-2 rounded">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91 93631 06848</span>
          </div>

          {/* Register Button */}
          <Button className="px-6 py-3 text-sm font-semibold bg-transparent hover:bg-cyan-500 text-cyan-400 border-2 border-cyan-400 rounded-none">
            REGISTER NOW
          </Button>
        </div>
      </div>

      {/* Navigation Bar — full width */}
      <nav className="w-full bg-cyan-400 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-5">
            <a href="#" className="text-white hover:text-cyan-100 font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-cyan-100 font-medium">
              About Us
            </a>
            <a href="#" className="text-white hover:text-cyan-100 font-medium">
              Exhibition
            </a>
            <a href="#" className="text-white hover:text-cyan-100 font-medium">
              Conference
            </a>
            <a href="#" className="text-white hover:text-cyan-100 font-medium">
              Sponsors
            </a>
            <a href="#" className="text-white hover:text-cyan-100 font-medium">
              More
            </a>
          </div>
        </div>
      </nav>

      {/* Logo - Positioned to overlap both header and nav */}
      <div className="absolute left-20 top-0 z-10">
        <div
          className="bg-white p-4 shadow-lg  "
          style={{  borderRadius: "50px 0px 50px 0px" }}
        >
          <Image
            src="/logo/healthlogo.png"
            alt="Asia Health 5 Logo"
            width={280}
            height={55}
            
            className="object-contain p-3"
          />
        </div>
      </div>
    </header>
  );
}

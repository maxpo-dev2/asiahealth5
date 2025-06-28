import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo/healthlogo.png" // Ensure this path is correct and file is in public/logo/
                alt="Asia Health 5 Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-sm text-gray-300 mb-4">WTC, Kuala Lumpur, Malaysia</div>
            <div className="text-sm text-gray-300 mb-2">Contact Us</div>
            <div className="text-sm text-gray-300 mb-1">info@asiahealth5.com</div>
            <div className="text-sm text-gray-300">+91 9363106848 | +91 9361705548</div>
          </div>

          {/* Event Information */}
          <div>
            <h4 className="font-bold mb-4">Event Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-400">About</a></li>
              <li><a href="#" className="hover:text-cyan-400">Conference</a></li>
              <li><a href="#" className="hover:text-cyan-400">Agenda</a></li>
              <li><a href="#" className="hover:text-cyan-400">Exhibition</a></li>
            </ul>
          </div>

          {/* Participants */}
          <div>
            <h4 className="font-bold mb-4">Participants</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-400">Speakers</a></li>
              <li><a href="#" className="hover:text-cyan-400">Exhibitors</a></li>
              <li><a href="#" className="hover:text-cyan-400">Partners</a></li>
              <li><a href="#" className="hover:text-cyan-400">Sponsors</a></li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h4 className="font-bold mb-4">Registration</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-400">Visitor Registration</a></li>
              <li><a href="#" className="hover:text-cyan-400">Delegate Pass</a></li>
              <li><a href="#" className="hover:text-cyan-400">Book Brochure</a></li>
            </ul>
          </div>

          {/* Media & Content */}
          <div>
            <h4 className="font-bold mb-4">Media & Content</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-400">Press Release</a></li>
              <li><a href="#" className="hover:text-cyan-400">Market Outlook</a></li>
              <li><a href="#" className="hover:text-cyan-400">Testimonials</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <span className="mr-4">Follow Us</span>
              <div className="inline-flex space-x-2">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Organised by</span>
              <div className="bg-cyan-400 px-3 py-1 rounded text-black font-bold text-sm">GMEC INDIA</div>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-400">
            <a href="#" className="hover:text-cyan-400 mr-4">Terms & Conditions</a>
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

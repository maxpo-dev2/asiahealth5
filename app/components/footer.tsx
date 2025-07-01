"use client";
import Image from "next/image";
import { X, Instagram, Linkedin,Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo/healthlogow.png"
                alt="Asia Health 5 Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="text-sm text-gray-300 mb-4">
              WTC, Kuala Lumpur, Malaysia
            </div>
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
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-4 items-start text-sm text-gray-300">
            {/* Contact Info */}
            <div>
              <div className="font-semibold mb-1">Contact Us</div>
              <div>info@asiahealthfive.com</div>
              <div>+971 509431529 | +91 9363106848</div>
            </div>

            {/* Organised By */}
            <div className="text-center">
              <div className="text-sm mb-2">Organised By</div>
              <Image
                src="/logo/gmec.png"
                alt="GMEC India Logo"
                width={100}
                height={40}
                className="mx-auto object-contain"
              />
            </div>

            {/* Social Media */}
            <div className="text-right">
              <div className="font-semibold mb-1">Follow Us:</div>
              <div className="flex justify-end space-x-3">
                <a href="#" aria-label="X">
                  <X className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition" />
                </a>
      <a href="#" aria-label="Facebook">
        <Facebook className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition" />
      </a>
              </div>
            </div>
          </div>

          {/* Gradient Line */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-transparent mt-6 mb-4" />

          {/* Footer Bottom */}
          <div className="text-center text-xs text-gray-400 pb-4">
            <a href="#" className="hover:text-cyan-400 mr-4">Terms & Conditions</a>
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

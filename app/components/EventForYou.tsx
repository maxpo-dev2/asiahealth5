"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EventForYou() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Is This Event For You?</h2>
          <p className="text-gray-300">
            {`If you're looking to explore new frontiers in healthcare, then `}
            <span className="text-cyan-400">Asia Health-5 2025</span> is designed with you in mind.
          </p>
        </div>

        {/* First Row with RIGHT arrow */}
        <div className="relative mb-12">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {cardItems.slice(0, 4).map((text, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-black via-gray-900 to-cyan-900 text-white shadow-md"
              >
                <CardContent className="p-4 h-full flex items-center justify-center text-center">
                  <h3 className="text-sm font-medium">{text}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cyan Line */}
          <div className="absolute bottom-[-12px] left-0 right-6 h-[6px] bg-cyan-400 z-0" />

          {/* Arrowhead */}
          <div className="absolute bottom-[-21px] right-0 w-0 h-0 border-t-[18px] border-b-[18px] border-l-[28px] border-t-transparent border-b-transparent border-l-cyan-400 z-0 rotate-[45deg] origin-left" />
        </div>

        {/* Second Row with LEFT arrow */}
        <div className="relative mb-12">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {cardItems.slice(4).map((text, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-black via-gray-900 to-cyan-900 text-white shadow-md"
              >
                <CardContent className="p-4 h-full flex items-center justify-center text-center">
                  <h3 className="text-sm font-medium">{text}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cyan Line */}
          <div className="absolute bottom-[-12px] left-6 right-0 h-[6px] bg-cyan-400 z-0" />

          {/* Left Arrowhead */}
          <div className="absolute bottom-[-21px] left-0 w-0 h-0 border-t-[18px] border-b-[18px] border-r-[28px] border-t-transparent border-b-transparent border-r-cyan-400 z-0 -rotate-[45deg] origin-right" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Stall Booking
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent"
          >
            Visitor Pass
          </Button>
        </div>
      </div>
    </section>
  );
}

const cardItems = [
  `You're a buyer or procurement head and need access to reliable suppliers of certified medical and diagnostic equipment.`,
  `You're a healthcare professional seeking exposure to the latest clinical tools, hospital innovations, and global best practices.`,
  `You're a distributor or dealer looking to expand your portfolio with high-demand healthcare products and technologies.`,
  `You're a tech innovator or startup ready to showcase your solutions in digital health, AI, or remote patient care to a targeted audience.`,
  `You're a hospital or clinic owner looking for scalable solutions that improve patient outcomes and operational efficiency.`,
  `You're a government or public health official responsible for infrastructure planning, policy, and procurement in the health sector.`,
  `You're an investor or venture capitalist scouting for disruptive innovations and emerging opportunities in Asia's booming healthcare market.`,
];

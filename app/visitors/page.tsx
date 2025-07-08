// app/visitors/page.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import EventForYou from "../components/EventForYou";

export default function VisitorsPage() {
  const visitItems = [
    {
      title: "Discover Innovations",
      description:
        "Explore Innovative Healthcare Technologies, Medical Devices, And Diagnostic Solutions From Leading Global Brands.",
      image: "/visitor/visitor1.png",
    },
    {
      title: "Meet Trusted Medical Suppliers",
      description:
        "Evaluate And Compare A Wide Range Of Products And Solutions Under One Roof - From Medical Equipment To Wellness And Rehabilitation Solutions.",
      image: "/visitor/visitor2.png",
    },
    {
      title: "Stay Ahead Of Trends",
      description:
        "Attend Conferences, Seminars & Presentations On Digital Health, AI, And Biotechnology Through Visionary Discussions And Expert Interviews.",
      image: "/visitor/visitor3.png",
    },
    {
      title: "Connect With Global Leaders",
      description:
        "Connect With Hospital Owners, Healthcare Executives, Government Representatives, And Key Decision-Makers From Across Asia.",
      image: "/visitor/visitor4.png",
    },
    {
      title: "Business & Investment Opportunities",
      description:
        "Gain Access To Growth Opportunities, Investment Partnerships, And Market Entry Strategies In The Expanding Asian Healthcare Market.",
      image: "/visitor/visitor5.png",
    },
    {
      title: "Global Participation",
      description:
        "Engage With Exhibitors And Visitors From Over 30 Countries, Making It A Truly International Experience.",
      image: "/visitor/visitor6.png",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
              Visit <span className="text-cyan-400">Asia Health-5 2025</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Asia Health-5 2025, Happening From December 2-4, 2025 At The World Trade Centre Kuala Lumpur, Is
              Malaysia&#39;s Leading B2B Healthcare And Medical Trade Exhibition Platform. Healthcare Professionals,
              Industry Innovators, And Visionaries From Around The Globe Will Converge To View The Latest Advancements
              In Medical Equipment, Laboratory Diagnostics, Digital Health, Medical Tourism, And Elderly Care Solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Why Visit Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white font-bold mb-4">
              Why <span className="text-cyan-400">Visit?</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Asia Health-5 Is A Powerful Platform For Learning, Networking, And Business Development. Here&#39;s Why You
              Should Attend
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {visitItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex ${
                  idx % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
                } items-start w-full relative`}
              >
                {/* Decorative Glow */}
                <div
                  className={`absolute hidden md:block top-3 ${
                    idx % 2 === 0 ? "left-[200px]" : "right-[200px]"
                  } w-[60px] h-[50px] bg-gradient-to-tr from-cyan-400 to-transparent transform rotate-45 z-0`}
                />
                <div
                  className={`absolute hidden md:block bottom-3 ${
                    idx % 2 === 0 ? "left-[200px]" : "right-[200px]"
                  } w-[60px] h-[50px] bg-gradient-to-br from-cyan-400 to-transparent transform rotate-45 z-0`}
                />

                {/* Image */}
                <div className="relative w-[240px] h-[200px] z-10 bg-gradient-to-t from-cyan-400 to-cyan-200">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                {/* Text Card */}
                <div className={`flex-1 ${idx % 2 === 0 ? "ml-0" : "mr-0"} mt-10 z-10`}>
                  <Card className="bg-gradient-to-r from-cyan-400 to-cyan-200 text-black rounded-none border-none shadow-none h-[120px] flex items-center">
                    <CardContent className="p-4 w-full">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-black/80 text-sm leading-snug">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EventForYou />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-900 mb-6 leading-relaxed">
              Welcome To Malaysia’s Top Health Care Event –{" "}
              <span className="text-cyan-500">Asia Health 5 – 2025</span>
            </h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Asia’s Most Anticipated Healthcare Expo And Summit, Bringing
              Together The World’s Leading Minds And Innovations Across Five Key
              Segments. Asia Health–5 2025 Is An International Healthcare
              Exhibition And Conference, Designed To Showcase The Latest
              Innovations And Foster Business Collaborations Across The Full
              Healthcare Ecosystem. Organised By GMEC, This 3 Day Mega Event Is
              Strategically Segmented Into Five Vital Pillars Of The Industry.
            </p>
            <Button
              variant="outline"
              className="border-2 border-cyan-400 text-gray-700 hover:bg-gray-100 bg-transparent rounded-none px-6 py-2 text-sm"
            >
              Know More <CircleArrowRight />
            </Button>
          </div>

          {/* Right Placeholder Block */}
          <div className="bg-cyan-400 h-90 w-full rounded-none shadow-md " />
        </div>
      </div>
    </section>
  );
}

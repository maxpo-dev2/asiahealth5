import { Button } from "@/components/ui/button";
import CommonGrad from "@/app/components/commpn-grad";

export default function AboutHero() {
  return (
    <>
      {/* White Background Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-left space-y-6">
            <p className="text-gray-600 text-sm">About Asia Health 5</p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Welcome To <span className="text-cyan-400">Asia Health 5 - 2025</span>
            </h1>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <span className="text-cyan-400 font-semibold">Asia Health-5 2025</span> is Malaysia&rsquo;s premier B2B trade
                show for medical supplies, laboratory and diagnostics equipment, medical tourism, digital health, and
                elderly care. Organized by{" "}
                <span className="text-cyan-400 font-semibold">GMEC India</span>, this flagship event serves as a dynamic
                platform for building strategic business connections and engaging with the top medical brands across the
                healthcare industry.
              </p>

              <p>
                Bringing together thousands of suppliers, manufacturers, and service providers under one roof, Asia
                Health-5 offers a unique opportunity to showcase your brand to key decision-makers and industry leaders.
                Strengthen your brand presence, enhance visibility, and stay ahead in the Malaysian healthcare market
                through this influential gathering.
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 bg-transparent rounded-none"
              >
                Stall Booking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Background Section with Centered Image */}
      <CommonGrad />
    </>
  );
}

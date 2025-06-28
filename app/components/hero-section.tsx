import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative h-[800px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home/herosec.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-10 "></div>

      {/* Main content */}
      <div className="relative z-20 container mx-auto h-full px-4 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl mt-90 md:text-5xl lg:text-6xl font-bold mb-8">
            Coming Together For A Healthier Tomorrow
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-2 border-cyan-500 text-white hover:bg-white hover:text-black bg-transparent px-9 py-6 rounded-none"
            >
              View Agenda
            </Button>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-white px-9 py-7 rounded-none">
              Sponsorship Opportunities
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Event Info */}
<div className="absolute bottom-0 left-0 right-0 z-30">
  <div className="w-full">
    <div className="bg-cyan-400 text-black max-w-8xl mx-auto px-6 py-4 rounded-t-md">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left">
        <div>
          <div className="text-sm font-semibold">When :</div>
          <div className="text-xl font-bold">December 2–4, 2025</div>
        </div>
        <div className="mt-4 md:mt-0 md:text-right">
          <div className="text-sm font-semibold">Where :</div>
          <div className="text-xl font-bold">WTC, KL, Malaysia</div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      {/* Hero Background Image */}
      <div
        className="relative h-[700px] md:h-[800px] bg-cover bg-center bg-no-repeat z-0 "
        style={{ backgroundImage: "url('/home/heroBanner.png')" }}
      >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-0"></div>


        {/* Overlay Content - Positioned at Bottom */}
        <div className="absolute bottom-20 left-0 right-0 w-full z-10">
          <div className="container mx-auto px-4 text-center text-white  pb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Coming Together For A Healthier Tomorrow
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-2 border-cyan-300 text-white hover:bg-white hover:text-black bg-transparent px-8 py-4 rounded-none"
              >
                View Agenda
              </Button>
              <Button className="bg-cyan-300 border-2 border-cyan-300 hover:bg-white text-black font-semibold px-8 py-4 rounded-none">
                Sponsorship Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Event Info Bar */}
      <div className="relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-[linear-gradient(to_right,_#00FCFF_0%,_#3EAEC2_100%)] text-black w-full px-6 py-6 shadow-md flex justify-center md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left items-center">
              <div>
                <div className="text-xl md:text-2xl">When :</div>
                <div className="text-2xl md:text-3xl font-semibold">
                  April 14–16, 2026
                </div>
              </div>
              <div className="md:text-right">
                <div className="text-xl md:text-2xl">Where :</div>
                <div className="text-2xl md:text-3xl font-semibold">
                  WTC, KL, Malaysia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button"

export default function BookExhibitionSpace() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/whoshouldexhibit.png')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Your <span className="text-cyan-600">Exhibition Space Today</span>
          </h2>

          <p className="text-gray-700 text-lg">
            Secure Your Booth At <span className="font-semibold">Asia Health-5 2025</span> And Be Part Of Malaysia&apos;s
            Future Healthcare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="bg-[#3EAEC2] hover:bg-cyan-500 text-white px-8 py-3 font-semibold rounded-none">
              Book Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 font-semibold bg-transparent rounded-none"
            >
              Download Floor Plan
            </Button>

            <Button size="lg" className="bg-[#3EAEC2] hover:bg-cyan-500 text-white px-8 py-3 font-semibold rounded-none">
              Sponsorship Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

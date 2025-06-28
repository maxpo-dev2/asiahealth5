import { Button } from "@/components/ui/button";

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome To Malaysia&rsquo;s Top Health Care Event – <span className="text-cyan-400">Asia Health 5 – 2025</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Asia&rsquo;s Most Anticipated Healthcare Expo And Summit, Bringing Together The World&rsquo;s Leading Minds And
              Innovations Across Five Key Segments. Asia Health-5 2025 Is An International Healthcare Exhibition And
              Conference, Designed To Showcase The Latest Innovations And Foster Business Collaborations Across The Full
              Healthcare Ecosystem. Organised By GMEC , This 3 Day Mega Event Is Strategically Segmented Into Five Vital
              Pillars Of The Industry.
            </p>
            <Button variant="outline" className="border-cyan-400 text-gray-700 hover:bg-gray-50 bg-transparent rounded-none">
              Know More ⊕
            </Button>
          </div>
          <div className="bg-cyan-400 h-80 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

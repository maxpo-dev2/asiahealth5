export default function ExhibitionHero() {
  return (
    <section
      className="relative w-full h-auto py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/exhibitionheadcover.png')",
      }}
    >
      {/* Optional: Subtle white gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10 z-0" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="space-y-8">
          {/* Main Heading */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Exhibit At Asia Health-5 2025 –{" "}
              <span className="text-[#3EAEC2]">Malaysia&apos;s Premier Healthcare & Medical Trade Show</span>
            </h1>
          </div>

          {/* Event Details */}
          <div className="text-gray-700 leading-relaxed space-y-2">
            <p>
              <span className="text-[#3EAEC2] font-semibold">Asia Health-5 2025</span>, taking place at the World Trade
              Centre Kuala Lumpur from <span className="text-[#3EAEC2] font-semibold">December 2–4, 2025</span>, is the
              leading <span className="text-[#3EAEC2] font-semibold">B2B healthcare exhibition in Malaysia</span>,
              bringing together top brands, buyers, and decision-makers from across the medical, laboratory, digital
              health, and wellness sectors.
            </p>
          </div>

          {/* Why Exhibit Section */}
          <div className="rounded-lg p-8 mt-12 ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Why Exhibit At <span className="text-[#3EAEC2]">Asia Health-5 2025?</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Join hundreds of industry leaders and showcase your innovations at one of Asia&apos;s fastest-growing
              healthcare trade shows. Whether you specialize in{" "}
              <span className="text-[#3EAEC2] font-semibold">medical supplies</span>,{" "}
              <span className="text-[#3EAEC2] font-semibold">diagnostic equipment</span>,{" "}
              <span className="text-[#3EAEC2] font-semibold">healthcare IT</span>,{" "}
              <span className="text-[#3EAEC2] font-semibold">medical tourism</span>, or{" "}
              <span className="text-[#3EAEC2] font-semibold">elderly care solutions</span>, this is your chance to
              connect with high-value buyers, forge new partnerships, and expand into the thriving ASEAN healthcare
              market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

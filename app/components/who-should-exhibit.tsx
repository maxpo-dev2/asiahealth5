const exhibitorTypes = [
  {
    title: "Medical Device Manufacturers",
    icon: "🏥",
  },
  {
    title: "Diagnostic & Laboratory Equipment Suppliers",
    icon: "🔬",
  },
  {
    title: "Hospital Infrastructure & Healthcare Technology Companies",
    icon: "🏢",
  },
  {
    title: "Telemedicine & Digital Health Platforms",
    icon: "💻",
  },
  {
    title: "Pharmaceutical & Biotech Firms",
    icon: "💊",
  },
  {
    title: "Medical Tourism Facilitators & Wellness Providers",
    icon: "✈️",
  },
  {
    title: "Elderly Care & Assisted Living Solution Providers",
    icon: "👥",
  },
]

export default function WhoShouldExhibit() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who Should <span className="text-cyan-600">Exhibit?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* First 4 cards */}
          {exhibitorTypes.slice(0, 4).map((type, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <div className="pr-16">
                <h3 className="font-bold text-sm leading-tight">{type.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Last 3 cards */}
          {exhibitorTypes.slice(4).map((type, index) => (
            <div key={index + 4} className="bg-gray-800 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <div className="pr-16">
                <h3 className="font-bold text-sm leading-tight">{type.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function NumbersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-stone-900 mb-8 font-medium">
          Expected{" "}
          <span className="font-semibold text-5xl md:text-6xl">Numbers</span>
        </h2>

        {/* Gradient Box with Stats */}
        <div className="bg-[linear-gradient(90deg,_rgb(161,253,255)_0%,_rgba(62,174,194,0)_100%)] px-6 md:px-20 py-12 rounded-none mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { value: "3000+", label: "Visitors" },
              { value: "250+", label: "Exhibitors" },
              { value: "25+", label: "Speakers" },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-6xl md:text-8xl font-bold text-stone-900 mb-2">
                  {item.value}
                </div>
                <div className="text-cyan-500 text-xl md:text-3xl font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="text-center mx-auto py-16">
          <h3 className="text-xl sm:text-2xl md:text-5xl font-semibold text-stone-900 mb-4">
            Overview Of The Malaysian Healthcare Market
          </h3>
          <p className="text-sm sm:text-base md:text-2xl text-neutral-900 leading-relaxed">
            Malaysia’s healthcare market is one of Southeast Asia’s
            fastest-growing, driven by an expanding middle class, increased
            government spending, and rising demand for high-quality medical
            services.
          </p>
        </div>
      </div>
    </section>
  );
}

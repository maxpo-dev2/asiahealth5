export default function NumbersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Expected <span className="font-black">Numbers</span>
        </h2>

        <div className="bg-gradient-to-r from-cyan-200 to-cyan-400 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gray-800 mb-2">3000+</div>
              <div className="text-gray-700 font-medium">Visitors</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-800 mb-2">250+</div>
              <div className="text-gray-700 font-medium">Exhibitors</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Speakers</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Overview Of The Malaysian Healthcare Market
          </h3>
          <p className="text-gray-600">
            Malaysia&rsquo;s Healthcare Market Is One Of Southeast Asia&rsquo;s Fastest-Growing,
            Driven By An Expanding Middle Class, Increased Government Spending, And Rising Demand
            For High-Quality Medical Services.
          </p>
        </div>
      </div>
    </section>
  );
}

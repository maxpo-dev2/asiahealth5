import Image from "next/image"

export default function FocusSectors() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Focus Sectors At <span className="text-cyan-400">Asia Health-5 2025</span>
        </h2>

        {/* First row - 2 large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <Image src="/focus/foc1.png" alt="Medical Supplies" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-cyan-400/60 to-cyan-300/40" />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <h3 className="text-2xl font-bold text-white">Medical Supplies</h3>
            </div>
          </div>

          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <Image src="/focus/foc2.png" alt="Laboratory Equipment" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-cyan-400/60 to-cyan-300/40" />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <h3 className="text-2xl font-bold text-white">Laboratory Equipment</h3>
            </div>
          </div>
        </div>

        {/* Second row - 3 smaller cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <Image src="/focus/foc3.png" alt="Medical Tourism" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-cyan-400/60 to-cyan-300/40" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="text-xl font-bold text-white">Medical Tourism</h3>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <Image src="/focus/foc4.png" alt="Digital Health" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-cyan-400/60 to-cyan-300/40" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="text-xl font-bold text-white">Digital Health</h3>
            </div>
          </div>

          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <Image src="/focus/foc5.png" alt="Elderly Care" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-cyan-400/60 to-cyan-300/40" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="text-xl font-bold text-white">Elderly Care</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

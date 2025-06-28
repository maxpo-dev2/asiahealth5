import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 rounded-lg overflow-hidden relative h-64">
            <div className="absolute inset-0 rounded-tl-[0px] rounded-tr-[60px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
              <Image src="/overview/overview1.png" alt="Medical Tourism" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-cyan-400/90 p-4">
              <h3 className="font-bold text-gray-900 text-sm leading-tight">
                Ranked Among The Top Medical Tourism Destinations Globally
              </h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden relative h-64">
            <div className="absolute inset-0 rounded-tl-[60px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
              <Image src="/overview/overview2.png" alt="Healthcare Infrastructure" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-cyan-400/90 p-4">
              <h3 className="font-bold text-gray-900 text-sm leading-tight">
                Strong Public-Private Healthcare Infrastructure &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              </h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden relative h-64">
            <div className="absolute inset-0 rounded-tl-[0px] rounded-tr-[60px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
              <Image src="/overview/overview3.png" alt="Digital Health" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-cyan-400/90 p-4">
              <h3 className="font-bold text-gray-900 text-sm leading-tight">
                Surge In Digital Health Adoption And Elderly Care Demand
              </h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden relative h-64">
            <div className="absolute inset-0 rounded-tl-[60px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden ">
              <Image src="/overview/overview4.png" alt="Medical Devices" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-cyan-400/90 p-4">
              <h3 className="font-bold text-gray-900 text-sm leading-tight">
                Thriving Market For Medical Devices, Lab Equipment, And Pharmaceuticals
              </h3>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-cyan-400 text-sm max-w-4xl mx-auto">
            <span className="font-semibold">Asia Health-5</span> 2025 Provides An Exceptional Platform To Connect With
            Buyers, Partners, And Government Stakeholders In This Thriving Market.
          </p>
        </div>
      </div>
    </section>
  )
}

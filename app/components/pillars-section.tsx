import Image from "next/image"

export default function PillarsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            The 5 Pillars Of <span className="text-[#3EAEC2]">Asia Health-5 2025</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm leading-relaxed">
           <span className="text-[#3EAEC2]"> Health-5</span> 2025 Is A Sector-Focused Platform That Unites Five High-Growth Verticals Of The Healthcare And
            Wellness Industry. Each Pillar Represents A Thriving Market Opportunity And Is Curated To Showcase
            Innovation, Investment Potential, And Business-Ready Solutions.
          </p>
        </div>ḷ

        <div className="space-y-8">
          {/* Pillar 1 - Medical Supplies */}
          <div className="bg-[#19F0F5] rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">1. Medical Supplies</h3>
                <p className="text-stone-900 text-sm leading-relaxed">
                  Find The Latest In Surgical Instruments, Diagnostic Tools, Disposables, And Hospital-Grade Medical
                  Consumables. The Segment Brings Together Leading Manufacturers And Procurement Professionals Seeking
                  Quality Products That Meet Global Standards.
                </p>
              </div>
<div className="relative min-h-[250px] rounded-tl-[60px] rounded-tr-[60px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
  <Image src="/pillar/pillar1.png" alt="Medical Supplies" fill className="object-cover" />
</div>

            </div>
          </div>

          {/* Pillar 2 - Laboratory Equipment */}
          <div className="bg-[#0D9B9D] rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[250px] rounded-tl-[60px] rounded-tr-[60px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
                <Image src="/pillar/pillar2.png" alt="Laboratory Equipment" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">2. Laboratory Equipment</h3>
                <p className="text-white text-sm leading-relaxed">
                  Focusing On Next-Generation Laboratory Solutions, From Clinical Diagnostics To Research-Based
                  Technologies. The Pillar Is Specifically Curated For Labs, Hospitals, And Research Institutions
                  Looking For Precision-Driven Equipment Like PCR Machines, Imaging Systems, And Biosafety Systems.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3 - Medical Tourism */}
          <div className="bg-[#19F0F5] rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">3. Medical Tourism</h3>
                <p className="text-stone-900 text-sm leading-relaxed">
                  A Dedicated Platform For Hospitals, Wellness Resorts, And Facilitators To Promote Cross-Border
                  Healthcare Services. Position Your Brand In Front Of International Patients, Medical Travel Agencies,
                  And Health Tour Operators.
                </p>
              </div>
              <div className="relative min-h-[250px] rounded-tl-[60px] rounded-tr-[60px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
                <Image src="/pillar/pillar3.png" alt="Medical Tourism" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Pillar 4 - Digital Health */}
          <div className="bg-[#0D9B9D] rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[250px] rounded-tl-[60px] rounded-tr-[60px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
                <Image src="/pillar/pillar4.png" alt="Digital Health" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">4. Digital Health</h3>
                <p className="text-white text-sm leading-relaxed">
                  Discover How Digital Transformation Is Revolutionizing Healthcare Delivery Across Asia. Explore
                  Cutting-Edge Solutions Including AI In Healthcare, Telemedicine Platforms, Remote Monitoring Devices,
                  Health Apps, Wearable Tech, And IT Solutions For Hospitals And Clinics.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 5 - Elderly Care */}
          <div className="bg-[#19F0F5] rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">5. Elderly Care</h3>
                <p className="text-stone-900 text-sm leading-relaxed">
                  Addressing An Aging Population, This Wellness And Elderly Care Healthcare Segment Focuses On Senior
                  Care Infrastructure. This Segment Features Assisted Living Products, Mobility Aids, Nursing
                  Technologies, And Care Home Management Solutions Essential For Caregivers, Policy Planners, And
                  Wellness Investors.
                </p>
              </div>
              <div className="relative min-h-[250px] rounded-tl-[60px] rounded-tr-[60px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden">
                <Image src="/pillar/pillar5.png" alt="Elderly Care" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

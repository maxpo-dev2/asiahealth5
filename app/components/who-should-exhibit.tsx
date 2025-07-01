import Image from "next/image"
import logo from "@/public/images/exhibit-logo.png"

const exhibitCards = [
  {
    title: "Medical Device Manufacturers",
    description:
      "Showcase Advanced Surgical Tools, Patient Monitoring Systems, and Hospital-Grade Devices to a Qualified Audience of Buyers and Healthcare Providers From Across Asia",
  },
  {
    title: "Medical Device Manufacturers",
    description:
      "Present Your Latest Innovations in Imaging, Testing, And Laboratory Automation to Pathologists, Lab Directors, And Diagnostic Chains Looking For Reliable Solutions.",
  },
  {
    title: "Medical Device Manufacturers",
    description:
      "Connect With Hospital Owners and Facility Planners Seeking Turnkey Solutions, Smart Hospital Systems, And Next-Gen Healthcare Infrastructure Technologies.",
  },
  {
    title: "Medical Device Manufacturers",
    description:
      "Promote Your Digital Solutions, From Remote Consultations To AI-Based Health Monitoring, To Decision-Makers Driving Tech Adoption in Healthcare Delivery.",
  },
  {
    title: "Medical Device Manufacturers",
    description:
      "Showcase Drug Development, Formulation, and Biotech Innovations To Healthcare Institutions, Distributors, And Regulatory Professionals From Across The Region",
  },
  {
    title: "Medical Device Manufacturers",
    description:
      "Engage With Global Partners Seeking Cross-Border Treatment Networks, Wellness Packages, And Rehabilitation Services For Patients Across Asia And Beyond.",
  },
  {
    title: "Medical Device Manufacturers",
    description:
      "Introduce Products And Services That Support Aging Populations, From Homecare Technology To Senior Living Innovations, To Care Providers And Investors.",
  },
]

export default function WhoShouldExhibit() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
  Who Should <span className="text-[#3EAEC2] text-4xl md:text-7xl">Exhibit?</span>
</h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {exhibitCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#1e1e1e] text-white px-6 py-8 rounded-bl-none rounded-br-[60px] rounded-tl-[60px] rounded-tr-none shadow-lg"
            >
              {/* Logo top-left */}
              <div className="absolute top-0 left-0 transform translate-x-1 -translate-y-1/3 w-[50px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
                <Image src={logo} alt="Logo" width={60} height={60} />
              </div>

<div className="mt-8 pt-8">
  <h3 className="text-sm font-bold text-white mb-2 leading-tight text-right">
    {card.title}
  </h3>
  <div className="h-[2px] w-24 bg-gradient-to-r from-white via-white to-[#00F0FF] mb-4 ml-auto" />
  <p className="text-sm leading-relaxed text-white/90">
    {card.description}
  </p>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 

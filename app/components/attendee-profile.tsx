import Image from "next/image"
import { Button } from "@/components/ui/button"

const attendeeTypes = [
  {
    id: "01",
    title: "Hospital & Clinic Owners",
    image: "/attendee/attendp1.png",
  },
  {
    id: "02",
    title: "Medical Equipment Distributors & Importers",
    image: "/attendee/attendp2.png",
  },
  {
    id: "03",
    title: "Healthcare Procurement Heads",
    image: "/attendee/attendp3.png",
  },
  {
    id: "04",
    title: "Doctors, Surgeons & Medical Practitioners",
    image: "/attendee/attendp4.png",
  },
  {
    id: "05",
    title: "Healthcare IT & Digital Health Professionals",
    image: "/attendee/attendp5.png",
  },
  {
    id: "06",
    title: "Laboratory & Diagnostic Center Heads",
    image: "/attendee/attendp6.png",
  },
  {
    id: "07",
    title: "Pharmaceutical & Biotech Executives",
    image: "/attendee/attendp7.png",
  },
  {
    id: "08",
    title: "Wellness & Medical Tourism Facilitators",
    image: "/attendee/attendp8.png",
  },
  {
    id: "09",
    title: "Government Health Officials & Regulators",
    image: "/attendee/attendp9.png",
  },
  {
    id: "10",
    title: "Senior Care & Assisted Living Providers",
    image: "/attendee/attendp10 (2).png",
  },
  {
    id: "11",
    title: "Investors & Venture Capitalists In HealthTech",
    image: "/attendee/attendp11.png",
  },
  {
    id: "12",
    title: "Healthcare Consultants & Industry Analysts",
    image: "/attendee/attendp12.png",
  },
];

export default function AttendeeProfile() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Attendee <span className="text-cyan-600">Profile</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {attendeeTypes.map((attendee) => (
            <div key={attendee.id} className="relative overflow-hidden rounded-none aspect-[4/5] group shadow-lg">
              <Image src={attendee.image || "/placeholder.svg"} alt={attendee.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/90 via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-16 left-4">
  <div className="text-[40px] md:text-[48px] stroke-text">
    {attendee.id}
  </div>
</div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-semibold text-sm leading-tight drop-shadow-md">{attendee.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 bg-transparent rounded-none"
          >
            Visitor Pass
          </Button>
        </div>
      </div>
    </section>
  )
}

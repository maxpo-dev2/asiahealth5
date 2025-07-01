"use client"

import { useSearchParams } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const thankYouLabels: Record<string, string> = {
  delegate: "Delegate",
  exhibition: "Exhibitor",
  sponsorship: "Sponsorship",
  enquiry: "Enquiry",
  brochure: "Brochure",
  speaker: "Speaker",
}

export default function ThankYouClient() {
  const searchParams = useSearchParams()
  const type = searchParams.get("t") || "delegate"
  const label = thankYouLabels[type] || "Registration"

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-[900px] min-h-[490px] rounded-tr-[20px] rounded-bl-[20px] overflow-hidden text-center shadow-2xl">
        
        {/* Gradient Top */}
        <div className="bg-[linear-gradient(to_right,#00FCFF,#3EAEC2)] py-6">
          <h1 className="text-4xl font-bold text-black">{label}</h1>
        </div>

        {/* Body Content */}
        <div
          className="relative px-8 py-20 text-white min-h-[400px]"
          style={{
            backgroundImage: 'url("/images/thankyou-back.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Thank You For Your {label}!</h2>
            <p className="text-lg mb-6">You Are Now Part Of The Asia Health 5 Community</p>

            <p className="text-sm mb-1">
              Our Team Will Get In Touch With You Soon.
            </p>
            <p className="text-sm mb-8">
              We Look Forward To Welcoming You At The World Trade Centre, Kuala Lumpur<br />
              <strong>2nd December – 4th December 2025</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/participants"
                className="flex items-center space-x-2 text-[#00FCFF] text-sm hover:underline"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>See Who&apos;s Participating</span>
              </Link>
              <Link
                href="/conference/speakers"
                className="flex items-center space-x-2 text-[#00FCFF] text-sm hover:underline"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>View All Speakers</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

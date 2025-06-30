"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import { Checkbox } from "@/app/components/ui/checkbox"

type RegistrationType =
  | "delegate"
  | "exhibition"
  | "sponsorship"
  | "enquiry"
  | "brochure"
  | "speaker"

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "industry"
  | "jobTitle"
  | "requestType"
  | "message"
  | "termsAccepted"
  | "privacyAccepted"

const registrationTypes: { id: RegistrationType; label: string }[] = [
  { id: "delegate", label: "Delegate" },
  { id: "exhibition", label: "Exhibition" },
  { id: "sponsorship", label: "Sponsorship" },
  { id: "enquiry", label: "Enquiry" },
  { id: "brochure", label: "Brochure" },
  { id: "speaker", label: "Speaker" },
]

const industries = [
  "Healthcare",
  "Medical Devices",
  "Pharmaceuticals",
  "Biotechnology",
  "Digital Health",
  "Medical Tourism",
  "Laboratory Services",
  "Hospital Management",
  "Other",
]

const requestTypes: Record<RegistrationType, string[]> = {
  delegate: ["Conference Pass", "Workshop Access", "Networking Events", "Full Package"],
  exhibition: ["Standard Booth", "Premium Booth", "Corner Booth", "Custom Design"],
  sponsorship: ["Platinum Sponsor", "Gold Sponsor", "Silver Sponsor", "Bronze Sponsor"],
  enquiry: ["General Information", "Partnership", "Media Inquiry", "Other"],
  brochure: ["Event Brochure", "Exhibitor List", "Floor Plan", "Sponsorship Package"],
  speaker: ["Keynote Speaker", "Panel Discussion", "Workshop Facilitator", "Technical Presentation"],
}

const formImages: Record<RegistrationType, string> = {
  delegate: "/form/sponsorform.png",
  exhibition: "/form/exhibitionform.png",
  sponsorship: "/form/sponsorform.png",
  enquiry: "/form/sponsorform.png",
  brochure: "/form/brochureform.png",
  speaker: "/form/speakerform.png",
}

export default function RegistrationForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeType, setActiveType] = useState<RegistrationType>("sponsorship")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    jobTitle: "",
    requestType: "",
    message: "",
    termsAccepted: false,
    privacyAccepted: false,
  })

  useEffect(() => {
    const type = searchParams.get("t") as RegistrationType
    if (type && registrationTypes.some((t) => t.id === type)) {
      setActiveType(type)
    }
  }, [searchParams])

  const handleTypeChange = (type: RegistrationType) => {
    setActiveType(type)
    router.push(`/register?t=${type}`)
    setFormData((prev) => ({ ...prev, requestType: "" }))
  }

  const handleInputChange = (field: FieldName, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", { type: activeType, ...formData })
  }

  const getFormTitle = () => {
    const type = registrationTypes.find((t) => t.id === activeType)
    return `${type?.label} Registration`
  }

  const getSpecificFields = () => {
    if (activeType === "delegate") {
      return (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Dietary Requirements</label>
          <Input
            placeholder="Any dietary restrictions or preferences"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
        </div>
      )
    }

    if (activeType === "exhibition") {
      return (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Booth Size Preference</label>
          <Select onValueChange={(value: string) => handleInputChange("requestType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select booth size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3x3">3x3 meters</SelectItem>
              <SelectItem value="3x6">3x6 meters</SelectItem>
              <SelectItem value="6x6">6x6 meters</SelectItem>
              <SelectItem value="custom">Custom Size</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )
    }

    if (activeType === "speaker") {
      return (
        <>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Presentation Topic</label>
            <Input
              placeholder="Your proposed presentation topic"
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Bio/Experience</label>
            <Textarea
              placeholder="Brief bio and relevant experience"
              className="min-h-[80px]"
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
          </div>
        </>
      )
    }

    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {registrationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`px-6 py-2 font-medium text-sm rounded-none border border-white transition-colors ${
                activeType === type.id
                  ? "bg-white text-[#3EAEC2]"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg border-2 border-cyan-400 overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{getFormTitle()}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "phone", "company", "jobTitle"].map((field) => (
                  <div key={field} className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 capitalize">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <Input
                      type={field === "email" ? "email" : "text"}
                      placeholder={
                        field === "email"
                          ? "Work Email Address"
                          : field === "phone"
                          ? "+60"
                          : field.replace(/([A-Z])/g, " $1")
                      }
                      value={formData[field as FieldName] as string}
                      onChange={(e) => handleInputChange(field as FieldName, e.target.value)}
                      required
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Industry</label>
                  <Select onValueChange={(value: string) => handleInputChange("industry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Select Request Type</label>
                  <Select onValueChange={(value: string) => handleInputChange("requestType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Request Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {requestTypes[activeType].map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {getSpecificFields()}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message (if any)</label>
                  <Textarea
                    placeholder="Additional information or special requests"
                    className="min-h-[100px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked: boolean) =>
                        handleInputChange("termsAccepted", checked)
                      }
                    />
                    <label htmlFor="terms" className="text-xs text-gray-600 leading-tight">
                      I confirm that I have read, understood and accept the event&apos;s Terms and Conditions.
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onCheckedChange={(checked: boolean) =>
                        handleInputChange("privacyAccepted", checked)
                      }
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-600 leading-tight">
                      GMEC India may contact you from time to time with updates and information about our events.
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-white border border-black text-black font-bold hover:bg-[#f0fdfd] py-3 px-8 rounded-none"
                    disabled={!formData.termsAccepted || !formData.privacyAccepted}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>

            <div className="relative">
              <Image
                src={formImages[activeType]}
                alt={`${activeType} form illustration`}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

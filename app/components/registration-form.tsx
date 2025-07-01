"use client"

import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import toast, { Toaster } from "react-hot-toast"
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

const registrationTypes: { id: RegistrationType; label: string }[] = [
  { id: "delegate", label: "Delegate" },
  { id: "exhibition", label: "Exhibitor" },
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
  exhibition: "/form/exhibitorform.png",
  sponsorship: "/form/sponsorform.png",
  enquiry: "/form/sponsorform.png",
  brochure: "/form/brochureform.png",
  speaker: "/form/speakerform.png",
}

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  industry: Yup.string().required("Required"),
  jobTitle: Yup.string().required("Required"),
  requestType: Yup.string().required("Required"),
  message: Yup.string(),
  termsAccepted: Yup.boolean().oneOf([true], "Required"),
  privacyAccepted: Yup.boolean().oneOf([true], "Required"),
})

export default function RegistrationForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeType, setActiveType] = useState<RegistrationType>("sponsorship")

  useEffect(() => {
    const type = searchParams.get("t") as RegistrationType
    if (type && registrationTypes.some((t) => t.id === type)) {
      setActiveType(type)
    }
  }, [searchParams])

  const handleTypeChange = (type: RegistrationType) => {
    setActiveType(type)
    router.push(`/register?t=${type}`)
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    requestType: "",
    message: "",
    termsAccepted: true,
    privacyAccepted: true,
  }

  const handleSubmit = async (values: typeof initialValues) => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, type: activeType }),
    })

    if (res.ok) {
      router.push(`/register/thankyou?t=${activeType}`)
    } else {
      toast.error("Submission failed. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {registrationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`px-6 py-2 font-medium text-sm rounded-none transition-colors ${
                activeType === type.id
                  ? "bg-white text-[#3EAEC2] border border-[#3EAEC2]"
                  : "bg-gray-800 text-white border border-white hover:bg-gray-700"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg border-2 border-cyan-400 overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {registrationTypes.find((t) => t.id === activeType)?.label} Registration
              </h2>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="space-y-4">
                    {["name", "email", "phone", "company", "jobTitle"].map((field) => (
                      <div key={field}>
                        <label className="text-sm font-medium text-gray-700 capitalize">{field}</label>
                        <Field
                          name={field}
                          as={Input}
                          placeholder={
                            field === "email"
                              ? "Work Email Address"
                              : field === "phone"
                              ? "+60"
                              : field
                          }
                        />
                        <ErrorMessage name={field} component="div" className="text-red-500 text-xs" />
                      </div>
                    ))}

                    <div>
                      <label className="text-sm font-medium text-gray-700">Industry</label>
                      <Select
                        onValueChange={(value) => setFieldValue("industry", value)}
                        value={values.industry}
                      >
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
                      <ErrorMessage name="industry" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Request Type</label>
                      <Select
                        onValueChange={(value) => setFieldValue("requestType", value)}
                        value={values.requestType}
                      >
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
                      <ErrorMessage name="requestType" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <Field
                        name="message"
                        as={Textarea}
                        placeholder="Any additional details or message"
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={values.termsAccepted}
                          onCheckedChange={(checked: boolean) =>
                            setFieldValue("termsAccepted", checked)
                          }
                        />
                        <label htmlFor="terms" className="text-xs text-gray-600 leading-tight">
                          I accept the Terms and Conditions
                        </label>
                      </div>
                      <ErrorMessage name="termsAccepted" component="div" className="text-red-500 text-xs" />

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={values.privacyAccepted}
                          onCheckedChange={(checked: boolean) =>
                            setFieldValue("privacyAccepted", checked)
                          }
                        />
                        <label htmlFor="privacy" className="text-xs text-gray-600 leading-tight">
                          I agree to receive updates from GMEC India.
                        </label>
                      </div>
                      <ErrorMessage name="privacyAccepted" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-white border border-black text-black font-bold hover:bg-[#f0fdfd] py-3 px-8 rounded-none"
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="relative">
              <Image
                src={formImages[activeType]}
                alt={`${activeType} form image`}
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

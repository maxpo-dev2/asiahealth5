



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-black">
    {/* Top heading bar */}
<div
  className="py-12 px-4 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/commonback.png')",
    minHeight: "200px",
  }}
>
  <div className="container mx-auto text-start">
<h1 className="text-6xl font-bold text-white">
  General <span className="text-[#00FCFF]">FAQ&apos;s</span>
</h1>

  </div>
</div>



      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border border-gray-200 rounded-none overflow-hidden"
              >
                <AccordionTrigger
                  className="text-left bg-[#D3D5D5] px-6 py-4 text-black rounded-none hover:no-underline [&[data-state=open]]:bg-[#D3D5D5]"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 text-black">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "What Is Asia Health-5 2025?",
    answer: `Asia Health-5 2025 Is A Premier B2B Healthcare And Medical Trade Exhibition Showcasing The Latest In Medical Products, Diagnostic Equipment, Technology, Medical Tourism, And Elderly Care Solutions. It Brings Together Global Healthcare Professionals, Suppliers, And Innovators Under One Roof.`,
  },
  {
    question: "When And Where Will The Event Take Place?",
    answer:
      "The Event Will Take Place From December 2–4, 2025, At The World Trade Centre Kuala Lumpur, Malaysia.",
  },
  {
    question: "Who Can Attend The Event?",
    answer: (
      <>
        <p className="mb-4">Asia Health-5 Is Open To:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Healthcare Professionals</li>
          <li>Medical Equipment Buyers And Distributors</li>
          <li>Hospital And Clinic Administrators</li>
          <li>Government Health Officials</li>
          <li>Technology Innovators</li>
          <li>Government Health Officials</li>
          <li>Medical Tourism Professionals</li>
          <li>Investors And Industry Stakeholders</li>
        </ul>
        <p className="mt-4">Admission Is Free For Trade Visitors With Your Registration.</p>
      </>
    ),
  },
  {
    question: "How Do I Register To Attend Asia Health-5 2025?",
    answer:
      "You Can Register Online Through Our Official Website. Simply Fill Out The Registration Section And Fill In Your Details To Receive Your Pass.",
  },
  {
    question: "How Can I Exhibit At Asia Health-5 2025?",
    answer:
      "To Become An Exhibitor, Visit The Exhibition Section On Our Website, Where You Can Submit An Inquiry Or Directly Book Your Booth. Our Team Will Contact You With All The Details And Assistance You Need.",
  },
  {
    question: "What Sectors And Categories Are Represented At The Exhibition?",
    answer: (
      <>
        <p className="mb-4">Asia Health-5 Features Exhibitors From The Following Sectors:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Medical Equipment And Devices</li>
          <li>Laboratory & Diagnostics</li>
          <li>Health Technology & Digital Health</li>
          <li>Pharmaceuticals</li>
          <li>Medical Tourism & Wellness</li>
          <li>Elderly Care & Assisted Living</li>
        </ul>
      </>
    ),
  },
  {
    question: "Will There Be Conferences Or Knowledge Sessions During The Event?",
    answer:
      "Yes, Asia Health-5 Hosts Expert-Led Panels, Seminars, And Workshops Covering Topics Like Digital Transformation In Healthcare, Health Innovation, Technology Trends, AI In Medicine, And Global Health Solutions.",
  },
  {
    question: "Is There A Cost To Attend The Conferences Or Workshops?",
    answer:
      "Some Premium Sessions And Workshops May Offer Exclusive Premium Sessions May Require Separate Registration, Which Will Be Announced Closer To The Event Date.",
  },
  {
    question: "Are International Visitors Welcome?",
    answer:
      "We Welcome Global Attendees And Exhibitors. Visa Support Letters Can Be Provided Upon Request After Successful Registration Or Booth Booking.",
  },
  {
    question: "Who Is Organizing Asia Health-5 2025?",
    answer:
      "The Event Is Organized By GMEC In Association With Manya Acorn For Delivering Impactful Healthcare And Business Exhibitions Across Asia And The Middle East.",
  },
];

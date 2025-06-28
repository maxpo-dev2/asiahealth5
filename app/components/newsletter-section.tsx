import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
<section className="bg-gradient-to-r from-[#19F0F5] to-[#68C7D3] py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div>
        <div className="font-bold stone-900">Contact Us</div>
        <div className="text-gray-700">info@asiahealth5.com</div>
      </div>
      <div className=" items-center space-x-4 mt-4 md:mt-0 text-2xl">
        <div className="font-bold stone-900">Join Our Mailing List</div>
<div className="flex">
  <Input
    type="email"
    placeholder="Enter email"
    className="w-72 rounded-r-none border-r-0 bg-white"
  />
  <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-l-none">
    Subscribe
  </Button>
</div>

      </div>
    </div>
  </div>
</section>

  )
}

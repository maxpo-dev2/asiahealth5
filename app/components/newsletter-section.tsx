import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="bg-[url(/background/contactUs.png)] py-8 bg-cyan-400 bg-no-repeat bg-cover">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center  text-center  md:text-left justify-between">
          <div>
            <div className="font-bold stone-900 text-2xl">Contact Us</div>
            <div className="text-gray-700 text-xl">info@asiahealthfive.com</div>
          </div>
          <div className=" items-center space-x-4 mt-4 md:mt-0 ">
            <div className="font-bold text-xl md:text-2xl mb-2 stone-900">
              Join Our Mailing List
            </div>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter email"
                className="w-40 md:w-72 rounded-r-none border-r-0 bg-white"
              />
              <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

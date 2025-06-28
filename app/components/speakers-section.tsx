import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SpeakersSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white">
            Speakers At <span className="text-cyan-400">#AH5</span>
          </h2>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Speaker 1"
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4 bg-cyan-400">
              <div className="font-bold text-gray-800">Name</div>
              <div className="text-gray-700">Post</div>
              <div className="mt-2">
                <div className="bg-white p-2 rounded text-xs font-bold text-center">BUSINESS</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Speaker 2"
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4 bg-cyan-400">
              <div className="font-bold text-gray-800">Name</div>
              <div className="text-gray-700">Post</div>
              <div className="mt-2">
                <div className="bg-white p-2 rounded text-xs font-bold text-center">BUSINESS</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Speaker 3"
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4 bg-cyan-400">
              <div className="font-bold text-gray-800">Name</div>
              <div className="text-gray-700">Post</div>
              <div className="mt-2">
                <div className="bg-white p-2 rounded text-xs font-bold text-center">FLYSETS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

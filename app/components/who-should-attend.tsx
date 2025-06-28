import Image from "next/image"

export default function WhoShouldAttend() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-stone-900 mb-2">Who Should</h2>
          <h2 className="text-4xl font-bold text-cyan-400">Attend?</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-lg overflow-hidden aspect-[3/4]">
            <Image src="/whoattend/whoattend1.png" alt="Healthcare Professionals" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="text-5xl font-bold text-white/90 stroke-white stroke-2">01</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-semibold text-sm leading-tight">
                Healthcare Professionals & Hospital Leaders
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-lg overflow-hidden aspect-[3/4]">
            <Image src="/whoattend/whoattend2.png" alt="Manufacturers" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="text-5xl font-bold text-white/90 stroke-white stroke-2">02</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-semibold text-sm leading-tight">Manufacturers & Distributors</div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-lg overflow-hidden aspect-[3/4]">
            <Image src="/whoattend/whoattend3.png" alt="Government Officials" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="text-5xl font-bold text-white/90 stroke-white stroke-2">03</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-semibold text-sm leading-tight">
                Government Officials & Policy Planners
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-lg overflow-hidden aspect-[3/4]">
            <Image src="/whoattend/whoattend4.png" alt="Medical Tourism" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="text-5xl font-bold text-white/90 stroke-white stroke-2">04</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-semibold text-sm leading-tight">Medical Tourism Facilitators</div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-lg overflow-hidden aspect-[3/4]">
            <Image src="/whoattend/whoattend5.png" alt="HealthTech Innovators" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="text-5xl font-bold text-white/90 stroke-white stroke-2">05</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-semibold text-sm leading-tight">Healthtech & MedTech Innovators</div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-lg overflow-hidden aspect-[3/4]">
            <Image src="/whoattend/whoattend6.png" alt="Elderly Care Providers" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="text-5xl font-bold text-white/90 stroke-white stroke-2">06</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-semibold text-sm leading-tight">Elderly Care Providers & NGOs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

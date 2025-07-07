import Image from "next/image";

const attendees = [
  {
    image: "/whoattend/whoattend1.png",
    number: "01",
    label: "Healthcare Professionals & Hospital Leaders",
  },
  {
    image: "/whoattend/whoattend2.png",
    number: "02",
    label: "Manufacturers & Distributors",
  },
  {
    image: "/whoattend/whoattend3.png",
    number: "03",
    label: "Government Officials & Policy Planners",
  },
  {
    image: "/whoattend/whoattend4.png",
    number: "04",
    label: "Medical Tourism Facilitators",
  },
  {
    image: "/whoattend/whoattend5.png",
    number: "05",
    label: "Healthtech & MedTech Innovators",
  },
  {
    image: "/whoattend/whoattend6.png",
    number: "06",
    label: "Elderly Care Providers & NGOs",
  },
];

export default function WhoShouldAttend() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl  text-[#1E1E1E] leading-tight">
            Who Should <br />
            <span className="text-4xl md:text-8xl font-bold text-[#3EAEC2]">Attend?</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {attendees.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-none aspect-[3/4]"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover rounded-none"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3EAEC2]/70 via-transparent to-transparent" />

          

              {/* Label */}
              <div className="absolute top-9/12 bottom-2 left-4 right-4 ">
                  <span className="stroke-text stroke-2 text-6xl md:text-8xl font-extrabold ">
                  {item.number}
                </span>
                <p className="text-white text-sm md:text-2xl font-medium leading-tight">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

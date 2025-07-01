import Image from "next/image";

const features = [
  {
    image: "/overview/overview1.png",
    title: "Ranked Among The Top Medical Tourism Destinations Globally",
    rounded: "rounded-tr-[60px]",
  },
  {
    image: "/overview/overview2.png",
    title: "Strong Public-Private Healthcare Infrastructure",
    rounded: "rounded-tl-[60px]",
  },
  {
    image: "/overview/overview3.png",
    title: "Surge In Digital Health Adoption And Elderly Care Demand",
    rounded: "rounded-tr-[60px]",
  },
  {
    image: "/overview/overview4.png",
    title:
      "Thriving Market For Medical Devices, Lab Equipment, And Pharmaceuticals",
    rounded: "rounded-tl-[60px]",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-10 md:py-16 bg-[url(/overview/blackBg.png)] bg-cover bg-no-repeat  bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className=" overflow-hidden relative h-80 group"
            >
              <div
                className={`absolute inset-0 overflow-hidden ${item.rounded}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-400 to-transparent p-4 md:pt-30">
                <h3 className=" text-neutral-800 text-sm sm:text-base md:text-2xl font-medium leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 px-4">
          <p className="text-white text-sm sm:text-base md:text-2xl max-w-8xl mx-auto leading-relaxed">
            <span className="font-semibold text-teal-400">Asia Health-5</span>{" "}
            2025 provides an exceptional platform to connect with buyers,
            partners, and government stakeholders in this thriving market.
          </p>
        </div>
      </div>
    </section>
  );
}

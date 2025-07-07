import Image from "next/image";
import clsx from "clsx";

const pillars = [
  {
    id: 1,
    title: "Medical Supplies",
    description:
      "Find the latest in surgical instruments, diagnostic tools, disposables, and hospital-grade medical consumables. The segment brings together leading manufacturers and procurement professionals seeking quality products that meet global standards.",
    image: "/pillar/pillar1.png",
    imageLeft: false,
  },
  {
    id: 2,
    title: "Laboratory Equipment",
    description:
      "Focusing on next-generation laboratory solutions, from clinical diagnostics to research-based technologies. The pillar is specifically curated for labs, hospitals, and research institutions looking for precision-driven equipment like PCR machines, imaging systems, and biosafety systems.",
    image: "/pillar/pillar2.png",
    imageLeft: true,
  },
  {
    id: 3,
    title: "Medical Tourism",
    description:
      "A dedicated platform for hospitals, wellness resorts, and facilitators to promote cross-border healthcare services. Position your brand in front of international patients, medical travel agencies, and health tour operators.",
    image: "/pillar/pillar3.png",
    imageLeft: false,
  },
  {
    id: 4,
    title: "Digital Health",
    description:
      "Discover how digital transformation is revolutionizing healthcare delivery across Asia. Explore cutting-edge solutions including AI in healthcare, telemedicine platforms, remote monitoring devices, health apps, wearable tech, and IT solutions for hospitals and clinics.",
    image: "/pillar/pillar4.png",
    imageLeft: true,
  },
  {
    id: 5,
    title: "Elderly Care",
    description:
      "Addressing an aging population, this wellness and elderly care healthcare segment focuses on senior care infrastructure. This segment features assisted living products, mobility aids, nursing technologies, and care home management solutions essential for caregivers, policy planners, and wellness investors.",
    image: "/pillar/pillar5.png",
    imageLeft: false,
  },
];
function Pillar({
  title,
  description,
  image,
  imageLeft,
}: typeof pillars[number]) {
  return (
    <div
      className={clsx(
        "rounded-none overflow-hidden bg-cover bg-no-repeat",
        imageLeft
          ? "bg-[url(/pillar/greenBgRight.png)]"
          : "bg-[url(/pillar/greenBgLeft.png)]"
      )}
    >
      <div
        className={clsx(
          "flex flex-col md:flex-row items-center justify-between  gap-6 ",
          imageLeft ? "md:flex-row-reverse text-white" : "text-stone-900"
        )}
      >
        {/* TEXT */}
        <div className="flex-1 p-8 md:p-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
           {title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed">{description}</p>
        </div>

        {/* IMAGE */}
        <div className=" shrink-0 rounded-tl-[60px] rounded-tr-[60px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}



export default function PillarsSection() {
  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
            The 5 Pillars Of{" "}
            <span className="text-[#3EAEC2]">Asia Health-5 2025</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm leading-relaxed">
            <span className="text-[#3EAEC2] font-bold">Health-5 2025</span>  is a
            sector-focused platform that unites five high-growth verticals of
            the healthcare and wellness industry. Each pillar represents a
            thriving market opportunity and is curated to showcase innovation,
            investment potential, and business-ready solutions.
          </p>
        </div>

        <div className="space-y-8">
          {pillars.map((pillar) => (
            <Pillar key={pillar.id} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

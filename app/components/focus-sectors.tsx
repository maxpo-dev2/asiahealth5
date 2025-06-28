import Image from "next/image";

export default function FocusSectors() {
  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl  text-center text-stone-900 mb-12">
          Focus Sectors At{" "}
          <span className="text-cyan-500 font-bold">Asia Health–5 2025</span>
        </h2>

        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-15 ">
          <Card src="/focus/foc1.png" label="Medical Supplies" />
          <Card src="/focus/foc2.png" label="Laboratory Equipment" />
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <Card src="/focus/foc3.png" label="Medical Tourism" />
          <Card src="/focus/foc4.png" label="Digital Health" />
          <Card src="/focus/foc5.png" label="Elderly Care" />
        </div>
      </div>
    </section>
  );
}

function Card({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative h-60 md:h-120 rounded-4xl overflow-hidden ">
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(62,174,194,0)_19.36%,_#3EAEC2_100%)]" />
      <div className="absolute bottom-7 left-0 right-0 text-center">
        <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white">
          {label}
        </h3>
      </div>
    </div>
  );
}

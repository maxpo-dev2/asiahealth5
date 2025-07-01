import Image from "next/image";

export default function BgWithBlueGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Top Gradient Strip */}
      <div
        className="w-full h-24"
        style={{
          background: "linear-gradient(to bottom, white, #00FCFF)",
        }}
      />

      {/* Main Dark Section with Background Image */}
      <section className="bg-gray-900 bg-no-repeat bg-cover bg-[url('/images/commongrad.png')] py-16 px-0 shadow-xl w-full">
        {children}
      </section>

      {/* Bottom Gradient Strip */}
      <div
        className="w-full h-24"
        style={{
          background: "linear-gradient(to top, white, #00FCFF)",
        }}
     />
    </>
  );
}

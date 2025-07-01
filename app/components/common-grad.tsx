import Image from "next/image";

export default function CommonGrad() {
  return (
    <>
      {/* Top Gradient Strip */}
      <div
        className="w-full h-24"
        style={{
          background: "linear-gradient(to bottom, white, #00FCFF)",
        }}
      ></div>

      {/* Main Dark Section with Background Image */}
      <section className="bg-[#1e1e1e] py-16 px-0 shadow-xl w-full">
        <div className="relative w-full h-[300px]">
          {/* Background Image (commongrad.png) */}
          <Image
            src="/images/commongrad.png"
            alt="Background"
            fill
            className="object-cover"
          />

          {/* Centered White Box with Overlaid Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="bg-white w-[90%] md:w-[80%] h-[180px] md:h-[200px] shadow-lg rounded-sm flex items-center justify-center">
              <Image
                src="/images/overlay-image.png" // 🔁 Replace with your overlay image filename
                alt="Overlay"
                width={400}
                height={120}
                className="object-contain"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Bottom Gradient Strip */}
      <div
        className="w-full h-24"
        style={{
          background: "linear-gradient(to top, white, #00FCFF)",
        }}
      ></div>
    </>
  );
}

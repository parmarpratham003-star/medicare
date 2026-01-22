export default function ContactHero() {
  return (
    <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] overflow-hidden">

      {/* Background Image (FACE SAFE) */}
      <div
        className="
          absolute inset-0
          bg-cover bg-no-repeat
          scale-105
        "
        style={{
          backgroundImage: "url(image/img4.jpg)", // your image
          backgroundPosition: "right center", // keeps face visible
        }}
      />

      {/* Soft Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-900/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-xl animate-fadeUp">

          <h1 className="
            text-2xl sm:text-3xl md:text-5xl
            font-light mb-3
          ">
            Contact <span className="font-semibold">Us</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/80">
            html5 Bootstrap Templates Made by colorlib.com
          </p>

        </div>
      </div>

    </section>
  );
}

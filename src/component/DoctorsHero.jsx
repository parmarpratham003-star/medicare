export default function DoctorsHero() {
  return (
    <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] overflow-hidden">

      {/* Background Image (FACE SAFE) */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(image/img4.jpg)", // replace with your image
          backgroundPosition: "right center", // keeps face visible
        }}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-blue-900/35" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-xl animate-fadeUp">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-3">
            Our Experienced <span className="font-semibold">Doctors</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/80">
            html5 Bootstrap Templates Made by colorlib.com
          </p>

        </div>
      </div>

    </section>
  );
}

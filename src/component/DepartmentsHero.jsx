export default function DepartmentsHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(/image/img2.jpg)",
          backgroundPosition: "right center", // face-safe
        }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-2xl">

          <h1 className="text-3xl md:text-5xl font-light mb-4">
            Medicare <span className="font-bold">Departments</span>
          </h1>

          <p className="text-sm md:text-base text-white/80">
            html5 Bootstrap Templates Made by colorlib.com
          </p>

        </div>
      </div>

    </section>
  );
}

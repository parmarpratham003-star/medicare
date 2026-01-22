export default function ContactMap() {
  return (
    <section className="w-full bg-beige/40 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">
          Find Us On Map
        </h2>

        {/* Map Wrapper */}
        <div
          className="
            relative overflow-hidden
            rounded-xl shadow-lg
            h-[300px] sm:h-[380px] md:h-[450px]
            animate-mapFade
          "
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=198+West+21st+Street+New+York+NY+10016&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Soft overlay (optional aesthetic) */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
        </div>

      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

const slides = [
  {
    image: "image/img4.jpg",
    position: "right top", // face-safe
    title: "Dr. Beatrice Prior",
    subtitle: "Dr. Prior's Plastic Surgery Clinic Welcomes You!",
    desc:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
  },
  {
    image: "image/img2.jpg",
    position: "right 20%", // face centered
    title: "Dr. Mark Bowman",
    subtitle: "Dr. Mark Bowman's Dental Clinic Welcomes You!",
    desc:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    position: "center top", // head visible
    title: "Have an Access to a Health Professional",
    subtitle: "Anytime & Anywhere",
    desc:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
  },
  {
    image: "image/img3.jpg",
    position: "right center", // face-safe
    title: "Special Offer!",
    subtitle: "Free Consultation this month only",
    desc:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  /* ===== AUTO PLAY ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-beige">

      {/* ================= SLIDES ================= */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* BACKGROUND IMAGE (FACE SAFE) */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition:
                window.innerWidth < 640
                  ? "center top" // mobile face-safe
                  : slide.position,
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-blue-900/50" />

          {/* CONTENT */}
          <div className="relative z-20 h-full flex items-center">
            <div className="px-6 md:px-20 max-w-2xl text-white animate-fadeUp">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              <h2 className="text-lg md:text-2xl mb-4">
                {slide.subtitle}
              </h2>
              <p className="text-sm md:text-base mb-6 text-gray-200">
                {slide.desc}
              </p>

              <button className="bg-green-400 hover:bg-green-500 text-white px-7 py-3 rounded-full text-sm font-semibold transition">
                MAKE AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ================= INFO BOXES ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[80%] z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-blue-500 rounded-xl overflow-hidden shadow-lg text-white text-xs md:text-sm">

          {[
            "Medical Counseling",
            "Qualified Doctors",
            "Rehabilitation Center",
            "Emergency Services",
          ].map((item, i) => (
            <div
              key={i}
              className="px-4 py-4 border-r border-blue-400 last:border-none"
            >
              <h4 className="font-semibold mb-1 uppercase">
                {item}
              </h4>
              <p className="text-blue-100 leading-snug">
                Far far away behind the word mountains.
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

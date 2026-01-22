import Header from "../component/Header";
import DoctorHero from "../component/DoctorsHero";
import Footer from "../component/Footer";
import Doctors from "../component/Doctors";
import { useState } from "react";

export default function Doctor() {
    const [whyOpen, setWhyOpen] = useState(true);
      const [whatOpen, setWhatOpen] = useState(false);
      const [offerOpen, setOfferOpen] = useState(false);
  return (
    <>
      <Header />
      {/* ================= HERO ================= */}
      <DoctorHero />
   {/* ================= APPOINTMENT BANNER ================= */}
<section className="w-full py-8 px-4">
  <div
    className="
      relative
      max-w-5xl mx-auto
      px-6 md:px-12 py-6
      bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600
      flex flex-col md:flex-row
      items-center justify-between
      gap-5
      rounded-[2.5rem]
      shadow-xl
      overflow-hidden
    "
  >
    {/* Decorative Shape */}
    <div
      className="
        absolute -top-10 -right-10
        w-40 h-40
        bg-white/10
        rounded-full
      "
    />

    {/* Text */}
    <h2
      className="
        text-white
        text-lg sm:text-xl md:text-2xl
        font-semibold
        text-center md:text-left
        z-10
      "
    >
      Make an appointment
    </h2>

    {/* Button */}
    <button
      className="
        z-10
        bg-white text-blue-600
        px-7 py-3
        rounded-full
        text-sm font-semibold
        transition-all duration-300
        hover:bg-beige hover:text-blue-700
        hover:scale-105
        active:scale-95
      "
    >
      Book an Appointment
    </button>
  </div>
</section>

    {/* About section */}
<section className="w-full bg-beige py-14">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    {/* LEFT IMAGE */}
<div className="w-full h-full">
  <img
    src="image/img1.jpg"
    alt="Doctor"
    className="
      w-full 
      h-full 
      max-h-[520px] 
      object-cover 
      object-top 
      rounded-md
    "
  />
</div>


    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-3xl font-bold text-blueDark mb-4">
        About Medicare
      </h2>

      <p className="text-gray-600 mb-6">
        Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts.
      </p>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="border mb-3">
        <button
          onClick={() => setWhyOpen(!whyOpen)}
          className={`w-full px-6 py-4 flex justify-between items-center font-semibold transition ${
            whyOpen
              ? "bg-green-500 text-white"
              : "bg-white text-blueDark"
          }`}
        >
          WHY CHOOSE US?
          <span>{whyOpen ? "↑" : "↓"}</span>
        </button>

        {whyOpen && (
          <div className="grid md:grid-cols-2 gap-6 p-5 bg-white text-gray-600">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
        )}
      </div>

      {/* ================= WHAT WE DO ================= */}
      <div className="border mb-3">
        <button
          onClick={() => setWhatOpen(!whatOpen)}
          className={`w-full px-6 py-4 flex justify-between items-center font-semibold transition ${
            whatOpen
              ? "bg-green-500 text-white"
              : "bg-white text-blueDark"
          }`}
        >
          WHAT WE DO?
          <span>{whatOpen ? "↑" : "↓"}</span>
        </button>

        {whatOpen && (
          <div className="p-5 bg-white text-gray-600">
            <p className="mb-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Separated they live in Bookmarksgrove</li>
              <li>Large language ocean</li>
            </ul>
          </div>
        )}
      </div>

      {/* ================= OFFER SERVICES ================= */}
      <div className="border">
        <button
          onClick={() => setOfferOpen(!offerOpen)}
          className={`w-full px-6 py-4 flex justify-between items-center font-semibold transition ${
            offerOpen
              ? "bg-green-500 text-white"
              : "bg-white text-blueDark"
          }`}
        >
          OFFER SERVICES
          <span>{offerOpen ? "↑" : "↓"}</span>
        </button>

        {offerOpen && (
          <div className="p-5 bg-white text-gray-600">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
        {/* ================= DOCTORS ================= */}
      <Doctors />
       
        {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

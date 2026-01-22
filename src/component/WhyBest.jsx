import {
  FaUserNurse,
  FaLaptopMedical,
  FaNotesMedical,
  FaClinicMedical,
} from "react-icons/fa";

export default function WhyBest() {
  return (
    <section className="w-full bg-beige py-10">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-6 items-stretch">

        {/* LEFT IMAGE CARD */}
        <div className="relative h-[280px] lg:h-[300px] overflow-hidden shadow-lg rounded-image group">
          <img
            src="image/img3.jpg"
            alt="Doctor Consultation"
            className="
              w-full h-full object-cover object-top
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>

        {/* RIGHT CONTENT CARD */}
        <div className="relative h-[280px] lg:h-[300px] bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl px-7 py-6 rounded-content flex flex-col">

          <h2 className="text-lg md:text-xl font-bold mb-4 tracking-wide">
            WHAT MAKES US BEST?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 flex-1">
            <Feature icon={<FaUserNurse />} title="Expert Doctors" />
            <Feature icon={<FaLaptopMedical />} title="Online Services" />
            <Feature icon={<FaNotesMedical />} title="Free Consultation" />
            <Feature icon={<FaClinicMedical />} title="Advanced Clinics" />
          </div>
        </div>

      </div>

      {/* Clean asymmetric rounding */}
      <style>
        {`
          .rounded-image {
            border-radius: 28px 60px 28px 60px;
          }

          .rounded-content {
            border-radius: 60px 28px 60px 28px;
          }
        `}
      </style>
    </section>
  );
}

/* Feature Item – clean & minimal */
function Feature({ icon, title }) {
  return (
    <div
      className="
        flex gap-3 items-start
        bg-white/10 hover:bg-white/20
        p-3 rounded-xl
        transition-all duration-300
      "
    >
      <div
        className="
          w-9 h-9 rounded-full
          bg-white text-blue-700
          flex items-center justify-center
          text-sm
        "
      >
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-xs uppercase tracking-wide mb-1">
          {title}
        </h4>
        <p className="text-[11px] text-blue-100 leading-relaxed">
          A small river named Duden flows by their place.
        </p>
      </div>
    </div>
  );
}

import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import WhyBest from "../component/WhyBest";
import Testimonials from "../component/Testimonials";
import Doctors from "../component/Doctors";
import {
  FaUserMd,
  FaHospital,
  FaAmbulance,
  FaTint,
  FaProcedures,
  FaPills,
} from "react-icons/fa";
import FreeConsultation from "../component/FreeConsultation";
import ServiceHero from "../component/ServiceHero";

export default function service(){
    const services = [
        {
          title: "Qualified Doctors",
          desc:
            "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
          icon: FaUserMd,
        },
        {
          title: "Medical Counseling",
          desc:
            "Little Blind Text didn’t listen. She packed her seven versalia.",
          icon: FaHospital,
        },
        {
          title: "Emergency Services",
          desc:
            "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
          icon: FaAmbulance,
        },
        {
          title: "Blood Bank",
          desc:
            "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
          icon: FaTint,
        },
        {
          title: "Operation Theater",
          desc:
            "Little Blind Text didn’t listen. She packed her seven versalia.",
          icon: FaProcedures,
        },
        {
          title: "Free Medicine",
          desc:
            "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
          icon: FaPills,
        },
      ];
    return(
        <>
              <Header />
            
            <ServiceHero  />
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

        {/* ======= DOCTORS SECTION ======= */}
        <WhyBest />
         {/* ================= SERVICES ================= */}
      <section className="w-full bg-beige py-15">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blueDark mb-4">
            OUR SERVICES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="
                  relative overflow-hidden
                  bg-white p-10 rounded-xl
                  border border-gray-100
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-2xl
                  group
                "
              >
                {/* LEFT COLOR STRIP */}
                <span
                  className="
                    absolute left-0 top-0 h-full w-1
                    bg-blue-500
                    scale-y-0 origin-top
                    transition-transform duration-500
                    group-hover:scale-y-100
                  "
                />

                {/* BACKGROUND GRADIENT */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br from-blue-500 to-blue-600
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16 rounded-full flex items-center justify-center
                      bg-blue-500 text-white mb-6
                      transition-all duration-500
                      group-hover:bg-white
                      group-hover:rotate-6 group-hover:scale-110
                    "
                  >
                    <Icon className="text-2xl group-hover:text-blue-500 transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-lg font-semibold mb-4 text-blueDark
                      transition-colors duration-500
                      group-hover:text-white
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-gray-600 leading-relaxed
                      transition-colors duration-500
                      group-hover:text-blue-100
                    "
                  >
                    {service.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    
    {/* ================= FREE CONSULTATION ================= */}
    <FreeConsultation />
    {/* ================= TESTIMONIALS ================= */}
      <Testimonials /> 
    {/* ================= FOOTER ================= */}
        <Footer />
    </>
    )
}
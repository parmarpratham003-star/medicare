import {
  FaUserMd,
  FaHospital,
  FaAmbulance,
  FaHeartbeat,
  FaProcedures,
  FaPills,
} from "react-icons/fa";

const services = [
  {
    title: "QUALIFIED DOCTORS",
    desc:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.",
    icon: FaUserMd,
  },
  {
    title: "MEDICAL COUNSELING",
    desc:
      "Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
    icon: FaHospital,
  },
  {
    title: "EMERGENCY SERVICES",
    desc:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.",
    icon: FaAmbulance,
  },
  {
    title: "BLOOD BANK",
    desc:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.",
    icon: FaHeartbeat,
  },
  {
    title: "OPERATION THEATER",
    desc:
      "Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
    icon: FaProcedures,
  },
  {
    title: "FREE MEDICINE",
    desc:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.",
    icon: FaPills,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-beige py-24">
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
  );
}

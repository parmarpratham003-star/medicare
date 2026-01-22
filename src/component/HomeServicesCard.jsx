import {
  FaUserMd,
  FaHospital,
  FaAmbulance,
  FaTint,
  FaProcedures,
  FaPills,
} from "react-icons/fa";

export default function HomeServicesCard() {
  const services = [
    { title: "Qualified Doctors", desc: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.", icon: FaUserMd },
    { title: "Medical Counseling", desc: "Little Blind Text didn’t listen. She packed her seven versalia.", icon: FaHospital },
    { title: "Emergency Services", desc: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.", icon: FaAmbulance },
    { title: "Blood Bank", desc: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.", icon: FaTint },
    { title: "Operation Theater", desc: "Little Blind Text didn’t listen. She packed her seven versalia.", icon: FaProcedures },
    { title: "Free Medicine", desc: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.", icon: FaPills },
  ];

  return (
    <section className="w-full py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="
                  group relative rounded-[2.8rem]
                  bg-beige border border-blue-100
                  shadow-md overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)]
                "
              >
                {/* Hover Blue Background */}
                <div
                  className="
                    absolute inset-0 bg-blue-600
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                {/* Icon Circle */}
                <div className="relative z-10 flex justify-center mt-8">
                  <div
                    className="
                      w-16 h-16 rounded-full
                      bg-blue-600
                      flex items-center justify-center
                      shadow-md
                      transition-all duration-500
                      group-hover:bg-white
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      className="
                        text-2xl text-white
                        transition-colors duration-500
                        group-hover:text-blue-600
                      "
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-8 pb-10 pt-6 text-center">
                  <h3 className="text-lg font-semibold mb-4 text-blueDark transition-colors duration-500 group-hover:text-beige">
                    {service.title}
                  </h3>

                  <p className="text-sm text-blueDark/80 transition-colors duration-500 group-hover:text-beige/90">
                    {service.desc}
                  </p>
                </div>

                {/* Soft Shine */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

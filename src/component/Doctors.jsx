import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Beatrice Prior",
    role: "Dental Hygienist",
    image: "image/img1.jpg",
  },
  {
    name: "Dr. Edward Dughlas",
    role: "Orthopedic Surgeon",
    image: "image/img2.jpg",
  },
  {
    name: "Dr. Peter Parker",
    role: "Health Care",
    image: "image/img4.jpg",
  },
  {
    name: "Dr. Liza Thomas",
    role: "Patient Services Manager",
    image: "image/img5.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-blueDark">
            WELL EXPERIENCED DOCTORS
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm">
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="group bg-white shadow-md rounded-md overflow-hidden
              hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-72 object-cover
                  group-hover:scale-105 transition duration-500"
                />

                {/* ICONS – FLOATING & HIDDEN */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3">
                  <SocialIcon Icon={FaFacebookF} delay="delay-[0ms]" />
                  <SocialIcon Icon={FaTwitter} delay="delay-[80ms]" />
                  <SocialIcon Icon={FaLinkedinIn} delay="delay-[160ms]" />
                  <SocialIcon Icon={FaInstagram} delay="delay-[240ms]" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center px-6 py-6">
                <h3 className="font-semibold text-sm tracking-widest text-blueDark">
                  {doc.name.toUpperCase()}
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  {doc.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* 🔹 Unique Animated Icon */
function SocialIcon({ Icon, delay }) {
  return (
    <div
      className={`
        w-9 h-9 rounded-full
        bg-blue-600 text-white
        flex items-center justify-center
        opacity-0 translate-y-6 rotate-[-15deg]
        group-hover:opacity-100
        group-hover:translate-y-0
        group-hover:rotate-0
        transition-all duration-500 ease-out
        ${delay}
      `}
    >
      <Icon size={14} />
    </div>
  );
}

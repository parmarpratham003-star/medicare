import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full bg-beige/40 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* ================= CONTACT INFO ================= */}
        
        {/* ================= FORM ================= */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">

          <h3 className="text-xl font-semibold text-blue-700 mb-8 text-center md:text-left">
            Get In Touch
          </h3>

          <form className="space-y-6">

            {/* Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="First Name" placeholder="Your firstname" />
              <Input label="Last Name" placeholder="Your lastname" />
            </div>

            <Input label="Email" placeholder="Your email address" />
            <Input label="Subject" placeholder="Your subject of this message" />

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Say something about us"
                className="
                  w-full rounded-md border border-gray-200
                  px-4 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  transition
                "
              />
            </div>

            {/* Button */}
            <div className="pt-4 text-center">
              <button
                className="
                  bg-green-400 hover:bg-green-500
                  text-white px-8 py-3 rounded-full
                  text-sm font-semibold
                  transition-all duration-300
                "
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

/* 🔹 Reusable Input */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full rounded-md border border-gray-200
          px-4 py-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-400
          transition
        "
      />
    </div>
  );
}

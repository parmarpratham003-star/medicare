export default function Footer() {
  return (
    <footer className="w-full bg-[#2f4154] text-white overflow-x-hidden">

      {/* MAIN FOOTER */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ABOUT */}
          <div>
            <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-blue-600">+</span>
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600">MEDI</span>
              <span className="text-green-500">CARE</span>
            </h1>
          </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-base font-bold tracking-widest mb-4 text-beige">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white transition">✔ Department</li>
              <li className="hover:text-white transition">✔ Blog</li>
              <li className="hover:text-white transition">✔ Contact</li>
              <li className="hover:text-white transition">✔ Terms</li>
              <li className="hover:text-white transition">✔ Shop</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-base font-bold tracking-widest mb-4 text-beige">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white transition">✔ Heart Surgery</li>
              <li className="hover:text-white transition">✔ Surgical Treatment</li>
              <li className="hover:text-white transition">✔ General Treatment</li>
              <li className="hover:text-white transition">✔ Medical Treatment</li>
              <li className="hover:text-white transition">✔ Help Desk</li>
            </ul>
          </div>

          {/* FORM */}
          <div>
            <h3 className="text-base font-bold tracking-widest mb-4 text-beige">
              MAKE AN APPOINTMENT
            </h3>

            <form className="space-y-3">
              <input
                className="w-full px-4 py-2.5 rounded-md bg-[#394f64] text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Name"
              />
              <input
                className="w-full px-4 py-2.5 rounded-md bg-[#394f64] text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Email"
              />
              <textarea
                className="w-full px-4 py-2.5 rounded-md bg-[#394f64] text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                rows="3"
                placeholder="Message"
              />
              <button
                className="bg-blue-500 px-5 py-2.5 rounded-full text-sm
                hover:bg-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#263646] text-center py-4 text-xs text-gray-400">
        Copyright ©2026 All rights reserved |
        This template is made with ♥ by Colorlib
      </div>

    </footer>
  );
}

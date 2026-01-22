import { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">

      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-beige w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-blue-600">+</span>
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600">MEDI</span>
              <span className="text-green-500">CARE</span>
            </h1>
          </Link>

          {/* Contact Info (Desktop Only) */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <Info icon={<FaPhoneAlt />} text="111-222-333" />
            <Info icon={<FaEnvelope />} text="medicare@gmail.com" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-600 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-blue-500 w-full">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-white font-medium text-sm tracking-wide">

            <NavLink to="/" active>HOME</NavLink>

            {/* Doctors */}
            <Dropdown title="DOCTORS" link="/doctors">
              <Link to="/doctor-single" className="hover:text-white">
                Single Doctor
              </Link>
            </Dropdown>

            <NavLink to="/services">SERVICES</NavLink>

            {/* Departments */}
            <Dropdown title="DEPARTMENTS" link="/department">
              <Link to="/departments/plastic" className="hover:text-white">
                Plastic Surgery
              </Link>
              <Link to="/departments/dental" className="hover:text-white">
                Dental Department
              </Link>
              <Link to="/departments/psychological" className="hover:text-white">
                Psychological Department
              </Link>
            </Dropdown>

            {/* Blog */}
            <Dropdown title="BLOG" link="/blog">
              <Link to="/blog" className="hover:text-white">
                Single Blog
              </Link>
            </Dropdown>

            <NavLink to="/contact">CONTACT</NavLink>
          </ul>

          {/* Desktop Button */}
          <Link
            to="/appointment"
            className="hidden md:inline-block bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
          >
            Make an Appointment
          </Link>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden bg-blue-600 text-white px-6 py-6 space-y-4 animate-slideDown">
            <MobileLink to="/" setMenuOpen={setMenuOpen}>HOME</MobileLink>
            <MobileLink to="/doctors" setMenuOpen={setMenuOpen}>DOCTORS</MobileLink>
            <MobileLink to="/services" setMenuOpen={setMenuOpen}>SERVICES</MobileLink>
            <MobileLink to="/department" setMenuOpen={setMenuOpen}>DEPARTMENTS</MobileLink>
            <MobileLink to="/blog" setMenuOpen={setMenuOpen}>BLOG</MobileLink>
            <MobileLink to="/contact" setMenuOpen={setMenuOpen}>CONTACT</MobileLink>

            <Link
              to="/appointment"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-green-400 hover:bg-green-500 text-white py-2 rounded-full text-sm font-semibold"
            >
              Make an Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ===== Reusable Components ===== */

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

function NavLink({ to, children, active }) {
  return (
    <li>
      <Link to={to} className={active ? "text-green-300" : "hover:text-green-300"}>
        {children}
      </Link>
    </li>
  );
}

function Dropdown({ title, link, children }) {
  return (
    <li className="relative group">
      <Link to={link} className="hover:text-green-300 flex items-center gap-1">
        {title} <FaChevronDown className="text-xs" />
      </Link>

      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-10 z-50
          opacity-0 translate-y-2 pointer-events-none
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          transition-all duration-300
        "
      >
        <div className="bg-[#2f4154] text-gray-200 px-6 py-4 rounded shadow-lg w-48 space-y-2">
          {children}
        </div>
      </div>
    </li>
  );
}

function MobileLink({ to, children, setMenuOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setMenuOpen(false)}
      className="block text-sm hover:text-green-300"
    >
      {children}
    </Link>
  );
}

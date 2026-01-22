import { useState } from "react";
import Header from "../component/Header";
import ContactHero from "../component/ContactHero";
import ContactSection from "../component/ContactSection";
import ContactMap from "../component/ContactMap";
import Footer from "../component/Footer";
import Testimonials from "../component/Testimonials";
import { MapPin, Mail, Phone, Clock, Download, Calendar, ChevronRight, Send, Building } from "lucide-react";

export default function Contact() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [activeSection, setActiveSection] = useState("contact");

  const contactPoints = [
    {
      id: 1,
      title: "Sales Inquiries",
      email: "sales@example.com",
      phone: "+1 (800) 123-4567",
      description: "For product information, pricing, and partnership opportunities",
      hours: "Mon-Fri, 9AM-6PM EST",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Technical Support",
      email: "support@example.com",
      phone: "+1 (800) 987-6543",
      description: "24/7 technical assistance and troubleshooting",
      hours: "24/7",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "General Inquiries",
      email: "info@example.com",
      phone: "+1 (555) 123-4567",
      description: "General questions and information requests",
      hours: "Mon-Fri, 8AM-5PM EST",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  const quickLinks = [
    { 
      label: "Request a Demo", 
      action: () => setShowFormModal(true),
      icon: <Send className="w-5 h-5" />
    },
    { 
      label: "Download Brochure", 
      action: () => window.open("/brochure.pdf"),
      icon: <Download className="w-5 h-5" />
    },
    { 
      label: "Schedule Call", 
      action: () => window.open("https://calendly.com/your-company"),
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const officeLocations = [
    {
      city: "New York HQ",
      address: "123 Business Ave, Suite 1000",
      location: "New York, NY 10001",
      country: "United States",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      city: "London Office",
      address: "45 Innovation Street",
      location: "London, EC1A 1BB",
      country: "United Kingdom",
      icon: <Building className="w-6 h-6" />
    },
    {
      city: "Singapore Office",
      address: "78 Tech Boulevard",
      location: "Singapore 038987",
      country: "Singapore",
      icon: <Building className="w-6 h-6" />
    }
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= CONTACT HERO ================= */}
      <ContactHero />

      {/* ================= CONTACT NAVIGATION ================= */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
            <button 
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeSection === "contact" 
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"}`}
              onClick={() => setActiveSection("contact")}
            >
              Contact Information
            </button>
        
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <ContactSection />

      {/* ================= CONTACT POINTS GRID ================= */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch with the Right Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated teams are ready to assist you with any inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {contactPoints.map(point => (
              <div 
                key={point.id} 
                className={`${point.color} border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl ${point.iconColor} bg-white flex items-center justify-center mb-4 shadow-md`}>
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 mb-6">{point.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${point.iconColor} shadow-sm`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <a 
                        href={`mailto:${point.email}`} 
                        className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                      >
                        {point.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${point.iconColor} shadow-sm`}>
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <a 
                        href={`tel:${point.phone.replace(/\D/g, '')}`} 
                        className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                      >
                        {point.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${point.iconColor} shadow-sm`}>
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">{point.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUICK ACTIONS ================= */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">Quick Actions</h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Get instant access to resources or connect with our team
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-white mb-3 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="text-white font-semibold text-lg">{link.label}</span>
                <ChevronRight className="w-5 h-5 text-white mt-2 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT MAP ================= */}
      <ContactMap />

      {/* ================= OFFICE LOCATIONS ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're strategically located across the globe to serve you better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {officeLocations.map((office, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform inline-flex p-3 bg-blue-50 rounded-xl">
                  {office.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.location}</p>
                  <p className="font-medium text-gray-900">{office.country}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Get Directions
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER SIGNUP ================= */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for updates and insights
              </p>
              
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button 
                    type="submit" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  By subscribing, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
                    Privacy Policy
                  </a>
                </p>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  Join 10,000+ professionals who receive our monthly insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
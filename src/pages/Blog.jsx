import Header from "../component/Header";
import BlogHero from "../component/BlogHero";
import Footer from "../component/Footer";
import BlogSection from "../component/BlogSection";
export default function Blog() {
    return(
        <>  
        {/* ================= HEADER ================= */}
            <Header />          
        {/* ================= HERO ================= */}
            <BlogHero />  
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
        {/* ================= BLOG SECTION ================= */}
            <BlogSection    />
        {/* ================= FOOTER ================= */}
            <Footer />          
        </>
    )
}
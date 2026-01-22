import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sudheer Kumar",
    text:
      "I'm really thankful to Next Gen Business Consultancy for their excellent support in getting my Startup India certificate. Their team handled everything professionally and saved us valuable time.",
  },
  {
    name: "Manish Gupta",
    text:
      "Amazingly fast execution and professional guidance. The entire process was smooth, transparent and well-managed from start to finish.",
  },
  {
    name: "Jitendra Jain",
    text:
      "Their expert advice helped us create a strong business foundation and compliance structure. Very knowledgeable and supportive team.",
  },
  {
    name: "Ravi Kant",
    text:
      "Very supportive team. They guided us step by step and resolved every query patiently. Overall a great experience.",
  },
  {
    name: "Aniket Raj",
    text:
      "Best consultancy experience so far. Clear communication, professional service and timely delivery throughout.",
  },
  {
    name: "Neha Sharma",
    text:
      "Professional, reliable and extremely helpful throughout the entire process. Highly recommended for startups.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const total = testimonials.length;
    const prev = (active - 1 + total) % total;
    const next = (active + 1) % total;

    if (index === active) return "z-30 scale-100 opacity-100 translate-x-0";
    if (index === prev)
      return "z-20 scale-95 opacity-40 -translate-x-64 hidden md:block";
    if (index === next)
      return "z-20 scale-95 opacity-40 translate-x-64 hidden md:block";
    return "opacity-0 scale-90";
  };

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold tracking-widest text-blue-900">
          WHAT OUR PATIENTS SAY
        </h2>
        <p className="mt-2 text-blue-900/70 text-sm max-w-xl mx-auto">
          What our clients say about our professional services
        </p>

        {/* Cards Wrapper (HEIGHT INCREASED) */}
        <div className="relative mt-16 h-[360px] flex items-center justify-center">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`
                absolute w-full max-w-2xl
                transition-all duration-700 ease-in-out
                ${getCardStyle(i)}
              `}
            >
              <div
                className="
                  rounded-3xl
                  px-10 py-10 md:px-12 md:py-12
                  bg-blue-800
                  shadow-2xl
                  text-white
                "
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-wide">
                    Google Reviews
                  </span>
                  <span className="text-yellow-400 text-base">★★★★★</span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/40 my-4" />

                {/* Name */}
                <h3 className="font-semibold text-lg md:text-xl mb-3">
                  {item.name}
                </h3>

                {/* Text */}
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  “{item.text}”
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

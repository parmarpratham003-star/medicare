import { useState } from "react";

const blogs = [
  {
    date: "1",
    month: "FEB. 2017",
    image: "image/img1.jpg",
    title: "HERE'S WHY YOGA IS BEST FOR YOUR HEALTH",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    full:
      "Yoga improves flexibility, strength, posture, and mental health. It helps reduce stress, improves breathing, and boosts overall well-being.",
  },
  {
    date: "31",
    month: "JAN. 2017",
    image: "image/img2.jpg",
    title: "LIVE BETTER GET TO KNOW YOUR MEDICAL TECHNOLOGY",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    full:
      "Medical technology is evolving rapidly, improving diagnostics, treatment accuracy, and patient outcomes across the world.",
  },
  {
    date: "30",
    month: "JAN. 2017",
    image: "image/img3.jpg",
    title: "EATING APPLE IS THE SOURCE OF ENERGY",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    full:
      "Apples are rich in fiber and vitamins. They improve digestion, boost immunity, and provide natural energy.",
  },

  /* ===== NEW BLOGS ===== */

  {
    date: "28",
    month: "JAN. 2017",
    image: "image/img4.jpg",
    title: "IMPORTANCE OF REGULAR HEALTH CHECKUPS",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    full:
      "Regular health checkups help detect potential health issues early, improving treatment success and long-term wellness.",
  },
  {
    date: "15",
    month: "JAN. 2017",
    image: "image/img5.jpg",
    title: "HOW MEDITATION IMPROVES MENTAL HEALTH",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    full:
      "Meditation reduces anxiety, improves focus, and supports emotional balance, making it an essential part of mental wellness.",
  },
  {
    date: "10",
    month: "JAN. 2017",
    image: "image/img6.jpg",
    title: "BENEFITS OF DAILY EXERCISE FOR A HEALTHY LIFE",
    desc:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    full:
      "Daily exercise strengthens the heart, improves flexibility, boosts energy levels, and helps maintain a healthy lifestyle.",
  },
];


export default function BlogSection() {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <section className="w-full bg-beige/40 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="
                bg-white rounded-lg shadow-sm overflow-hidden
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Date Badge */}
                <div className="absolute bottom-0 left-0 bg-blue-500 text-white px-4 py-3 text-center">
                  <p className="text-xl font-bold leading-none">
                    {blog.date}
                  </p>
                  <span className="text-xs">{blog.month}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-sm text-gray-900 mb-4 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {blog.desc}
                </p>

                <button
                  onClick={() => setActiveBlog(blog)}
                  className="text-blue-500 text-sm font-semibold hover:underline"
                >
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeBlog && (
  <div
    className="
      fixed inset-0 z-50 bg-black/50
      flex items-center justify-center px-4
      animate-fadeIn
    "
    onClick={() => setActiveBlog(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        bg-white rounded-2xl
        max-w-xl w-full
        overflow-hidden
        shadow-xl
        animate-slideScale
      "
    >
      {/* Image */}
      <div className="relative h-56">
        <img
          src={activeBlog.image}
          alt={activeBlog.title}
          className="w-full h-full object-cover"
        />

        {/* Date Badge */}
        <div className="absolute bottom-0 left-0 bg-blue-500 text-white px-4 py-3 text-center">
          <p className="text-xl font-bold leading-none">
            {activeBlog.date}
          </p>
          <span className="text-xs">
            {activeBlog.month}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setActiveBlog(null)}
          className="
            absolute top-3 right-3
            w-9 h-9 rounded-full
            bg-white/90 text-gray-700
            flex items-center justify-center
            text-xl
            hover:bg-red-500 hover:text-white
            transition
          "
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 max-h-[55vh] overflow-y-auto">

        <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">
          {activeBlog.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {activeBlog.desc}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {activeBlog.full}
        </p>

        {/* Extra Information */}
        <div className="mt-6 bg-beige/40 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            Why this matters
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Maintaining a healthy lifestyle through informed decisions helps
            prevent diseases, improves quality of life, and ensures long-term
            well-being for individuals of all ages.
          </p>
        </div>

      </div>
    </div>
  </div>
)}

    </section>
  );
}

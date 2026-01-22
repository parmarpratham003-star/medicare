import { useState } from "react";

export default function RecentBlog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      date: "1",
      month: "FEB. 2017",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      title: "HERE'S WHY YOGA IS BEST FOR YOUR HEALTH",
      desc:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      fullDesc:
        "Yoga improves flexibility, reduces stress, boosts immunity, and enhances overall mental well-being. Practicing yoga daily helps balance both body and mind.",
    },
    {
      date: "31",
      month: "JAN. 2017",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0",
      title: "LIVE BETTER GET TO KNOW YOUR MEDICAL TECHNOLOGY",
      desc:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      fullDesc:
        "Modern medical technology improves diagnosis, treatment precision, and patient care through innovation like AI, robotics, and smart monitoring systems.",
    },
    {
      date: "30",
      month: "JAN. 2017",
      image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
      title: "EATING APPLE IS THE SOURCE OF ENERGY",
      desc:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      fullDesc:
        "Apples are rich in fiber and antioxidants. They support heart health, improve digestion, and provide natural energy throughout the day.",
    },
  ];

  return (
    <>
      {/* SECTION */}
      <section className="w-full bg-beige py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blueDark mb-4">
              RECENT BLOG
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Dignissimos asperiores vitae velit veniam totam fuga molestias.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-50 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-blueDark mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {blog.desc}
                  </p>

                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-blue-500 font-semibold text-sm hover:text-blue-700 transition"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-lg w-full rounded-xl p-6
            transform transition-all duration-300 scale-100 animate-fadeIn"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-blueDark">
                {selectedBlog.title}
              </h3>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            <img
              src={selectedBlog.image}
              alt=""
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              {selectedBlog.fullDesc}
            </p>

            <button
              onClick={() => setSelectedBlog(null)}
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md
              hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

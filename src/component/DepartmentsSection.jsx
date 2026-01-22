const departments = [
  {
    title: "DENTAL DEPARTMENT",
    image: "image/img4.jpg",
    position: "top",
  },
  {
    title: "PLASTIC SURGERY DEPARTMENT",
    image: "image/img5.jpg",
    position: "right center",
  },
  {
    title: "PSYCHOLOGICAL DEPARTMENT",
    image: "image/img3.jpg",
    position: "top",
  },
];

export default function DepartmentsSection() {
  return (
    <section className="w-full bg-beige/40 py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-24">

        {departments.map((dept, i) => (
          <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative overflow-hidden rounded-2xl shadow-lg group h-[300px] sm:h-[360px] lg:h-[420px]">
  <img
    src={dept.image}
    alt={dept.title}
    className={`
      w-full h-full
      object-cover
      object-center            /* mobile – face safe */
      sm:object-center
      lg:${dept.position}      /* desktop – custom */
      transition-transform duration-700 ease-out
      group-hover:scale-105
    `}
  />

  {/* Soft overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/15 to-transparent" />
</div>


            {/* CONTENT */}
            <div>
              <h2 className="text-blue-600 text-lg font-semibold mb-4 tracking-wide">
                {dept.title}
              </h2>

              <p className="text-gray-600 mb-8 max-w-lg">
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia.
              </p>

              <div className="space-y-4">
                <InfoCard title="PAUL MERRIWEATHER" desc="Head Department" />
                <InfoCard title="DEPARTMENT INFO" desc="Block B, 3rd floor" />
                <InfoCard title="FIND A DOCTOR" desc="See doctors in this department" />
                <InfoCard title="REQUEST AN APPOINTMENT" desc="Call us or fill in a form" />
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

/* 🔹 Smooth Info Card (Beige Accent Glide) */
function InfoCard({ title, desc }) {
  return (
    <div
      className="
        relative overflow-hidden
        bg-white px-6 py-4 rounded-lg
        transition-all duration-500 ease-out
        hover:bg-blue-50
        cursor-pointer
      "
    >
      {/* Beige accent glide */}
      <span
        className="
          absolute left-0 top-0 h-full w-[3px]
          bg-beige
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-500
        "
      />

      <h4 className="text-sm font-semibold text-blue-700">
        {title}
      </h4>
      <p className="text-xs text-gray-500 mt-1">
        {desc}
      </p>
    </div>
  );
}

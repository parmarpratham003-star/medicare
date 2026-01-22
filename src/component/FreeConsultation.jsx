import { useEffect, useState } from "react";

export default function FreeConsultation() {
  const targetValues = {
    days: -2577,
    hours: -19,
    minutes: -40,
    seconds: -18,
  };

  const [values, setValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const duration = 1200;
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;

      setValues({
        days: Math.round((targetValues.days / steps) * step),
        hours: Math.round((targetValues.hours / steps) * step),
        minutes: Math.round((targetValues.minutes / steps) * step),
        seconds: Math.round((targetValues.seconds / steps) * step),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background – testimonials style blue */}
      <div className="absolute inset-0 bg-blue-800" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center text-white">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
          We offer <span className="font-bold">Free Consultation</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white/80">
          By Dr. <span className="font-semibold">Beatrice Prior</span>
        </p>

        {/* COUNTERS */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <CounterBox value={values.days} label="days" />
          <CounterBox value={values.hours} label="hours" />
          <CounterBox value={values.minutes} label="minutes" />
          <CounterBox value={values.seconds} label="seconds" />
        </div>

        <p className="mt-12 text-sm font-medium text-white/90">
          Limited offer, Hurry Up!
        </p>

        <button className="mt-6 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-3 rounded-full text-sm font-semibold shadow-lg">
          Book an Appointment
          <span>📅</span>
        </button>
      </div>
    </section>
  );
}

/* 🔹 Counter Box */
function CounterBox({ value, label }) {
  return (
    <div className="backdrop-blur-md bg-white/15 rounded-xl py-6 transition-all duration-500 hover:bg-white/20">
      <p className="text-3xl sm:text-4xl font-bold tabular-nums">
        {value}
      </p>
      <span className="block mt-2 text-xs uppercase tracking-widest text-white/80">
        {label}
      </span>
    </div>
  );
}

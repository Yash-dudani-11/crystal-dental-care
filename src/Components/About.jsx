import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence, useInView } from "framer-motion";
import drImage from "/dr3.webp";

const stats = [
  { value: 3000, label: "Patients Treated", suffix: "+" },
  { value: 10, label: "Years of Experience", suffix: "+" },
  { value: 10000, label: "Successful Procedures", suffix: "+" },
];

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const statsref = useRef(null);
  const statsInView = useInView(statsref, { once: true, threshold: 0.5 });
  const controls = useAnimation();

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (statsInView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // 2 seconds
        const stepTime = 10;
        const increment = end / (duration / stepTime);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(counter);
            start = end;
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = Math.floor(start);
            return newCounts;
          });
        }, stepTime);
      });
    }
  }, [statsInView]);


  return (
    <div className="relative">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 320">
          <path fill="#fffaf6" fillOpacity="1" d="M0,160L1440,320L1440,0L0,0Z"></path>
        </svg>
      </div>
      <section
        id="about"
        className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden px-8 pt-20 pb-8 bg-gradient-to-b from-teal-50  via-teal-100 to-teal-100"
      >
        {/* Floating Aura Animation */}
        {/* <motion.div
        className="absolute w-[600px] h-[600px] bg-teal-100 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div> */}

        {/* Doctor Image with Glow Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-teal-400/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          <img
            src={drImage}
            alt="Dr. Hansa Dudani"
            loading="lazy"
            className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full object-cover shadow-[0_0_40px_-10px_rgba(13,148,136,0.4)]"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-teal-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Dr. Hansa Dudani
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A visionary in dental excellence, Dr. Hansa blends artistry and science
          to craft smiles that radiate confidence and care.
        </motion.p>

        <AnimatePresence>
          {showMore && (
            <motion.p
              className="max-w-2xl text-gray-600 text-lg leading-relaxed mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              Her approach to dentistry redefines comfort and precision, making
              every patient’s experience exceptional and empowering through modern
              innovation and compassion.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onClick={() => setShowMore(!showMore)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold shadow-md transition-all duration-300"
        >
          {showMore ? "Show Less" : "Learn More"}
        </motion.button>

      </section>
      <section
        ref={statsref}
        className="relative pb-10 md:pb-10 bg-teal-100 overflow-hidden"
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-200 via-white to-teal-200 opacity-40 blur-3xl"
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        {/* Frosted glass container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
          <div className="backdrop-blur-xl bg-white/40 rounded-3xl shadow-2xl py-10 md:py-14 flex flex-col sm:flex-row justify-around items-center gap-10 sm:gap-0 text-center border border-white/50">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 30px rgba(13,148,136,0.3)",
                  }}
                  className="text-4xl sm:text-5xl font-extrabold text-teal-600 tracking-tight"
                >
                  {counts[i].toLocaleString()}
                  {stat.suffix}
                </motion.div>
                <p className="mt-2 text-gray-700 font-medium text-lg sm:text-xl">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Software Engineer",
    text: "I’ve always been anxious about dental visits, but here it felt different — calm, caring, and extremely professional. My root canal was completely painless.",
  },
  {
    id: 2,
    name: "Meera Patel",
    role: "Teacher",
    text: "The doctors explain everything with such clarity. You can feel the precision and care in every step. My smile looks better than ever.",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Architect",
    text: "I had a full cleaning and whitening done — they made me feel comfortable from start to finish. Truly one of the best dental experiences I’ve had.",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    role: "Marketing Professional",
    text: "Exceptional service and attention to detail. The ambience itself makes you forget you’re at a clinic!",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-b from-teal-100 via-teal-100/40 to-teal-100 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-teal-100/30 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-50/40 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-teal-700 mb-16"
        >
          What Our Patients Say
        </motion.h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.15, x: -3 }}
            className="absolute left-0 md:-left-10 z-20 bg-white/70 backdrop-blur-md shadow-md rounded-full p-3 text-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-300"
          >
            <FaArrowLeft className="text-lg" />
          </motion.button>

          {/* Testimonial Card */}
          <div className="overflow-hidden w-full md:w-[650px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="bg-white/80 backdrop-blur-md border border-teal-100 shadow-xl rounded-3xl px-8 py-12 flex flex-col items-center gap-6"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <FaUserCircle className="text-6xl text-teal-500 mb-2" />
                </motion.div>

                <FaQuoteLeft className="text-teal-400 text-2xl opacity-70 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed italic font-light">
                  “{testimonials[index].text}”
                </p>
                <div className="mt-6">
                  <h4 className="text-teal-700 font-semibold text-lg">{testimonials[index].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.15, x: 3 }}
            className="absolute right-0 md:-right-10 z-20 bg-white/70 backdrop-blur-md shadow-md rounded-full p-3 text-teal-700 hover:bg-teal-700 hover:text-white transition-all duration-300"
          >
            <FaArrowRight className="text-lg" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-teal-600 w-6" : "bg-teal-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

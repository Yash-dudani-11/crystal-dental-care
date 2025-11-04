import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer:
        "It’s best to visit the dentist every six months for a regular check-up and cleaning. Your dentist may recommend more frequent visits depending on your dental health.",
    },
    {
      question: "What are the best practices for maintaining oral hygiene?",
      answer:
        "Brush twice daily, floss regularly, use mouthwash, and avoid sugary snacks. Routine dental visits are key to maintaining long-term oral health.",
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer:
        "Contact your dentist immediately for emergencies like a broken tooth or severe pain. If unavailable, visit your nearest emergency care center.",
    },
    {
      question: "Are dental X-rays safe?",
      answer:
        "Yes, dental X-rays are completely safe. Modern digital X-rays use minimal radiation, and protective measures ensure full safety for patients.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-white via-[#e6faf8] to-[#c9f1ee] overflow-hidden"
    >
      {/* Floating background glow effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-bold text-teal-700 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Answers to your most common dental care queries.
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/70 border border-teal-100 shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center text-left p-5 md:p-6 focus:outline-none"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>

              {/* Custom Arrow Indicator */}
              <motion.span
                animate={{ rotate: selectedQuestion === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-teal-600 text-2xl font-bold"
              >
                ⌄
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {selectedQuestion === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-5 md:px-6 pb-5 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

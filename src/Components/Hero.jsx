// // import React, { useState, useRef, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import "/clinic-image.png"

// // const HeroSection = () => {
// //   const [isCalendlyVisible, setIsCalendlyVisible] = useState(false);
// //   const calendlyRef = useRef(null);

// //   const handleOpenCalendly = () => {
// //     setIsCalendlyVisible(true);
// //   };

// //   const handleCloseCalendly = () => {
// //     setIsCalendlyVisible(false);
// //   };

// //   useEffect(() => {
// //     if (isCalendlyVisible) {
// //       // Dynamically load Calendly script
// //       const script = document.createElement('script');
// //       script.src = 'https://assets.calendly.com/assets/external/widget.js';
// //       script.async = true;
// //       document.body.appendChild(script);

// //       return () => {
// //         // Clean up script on component unmount
// //         document.body.removeChild(script);
// //       };
// //     }
// //   }, [isCalendlyVisible]);

// //   return (
// //     <div className="min-h-screen md:h-screen md:mt-[55px]  flex flex-col md:flex-row font-serif items-center bg-[url('https://img.freepik.com/premium-photo/modern-design-dental-chair-clinic-office-interior-grey-wall-mockup-copy-space-ai-generative_780608-33741.jpg')] bg-cover  justify-between py-16 px-8 md:px-16 md:py-24">
// //       {/* Left Side - Clinic Name and Details */}
// //       <motion.div
// //         className="md:w-1/2  md:mb-0 text-center md:text-left ml-16"
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1, delay:3 }}
// //       >
// //         <h2 className="text-3xl md:text-4xl font-semibold text-black-600 mb-1 md:mb-1 font-roboto">
// //           Dr. Hansa's
// //         </h2>
// //         <h1 className="text-4xl md:text-6xl font-bold text-black-800 mb-6 md:mb-10 hover:scale-105 hover:text-teal-600 transition duration-300 font-bold ">
// //           Crystal Dental Care
// //         </h1>
// //         {/* <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-10 px-4 md:px-0">
// //           At crystal dental care, we believe in providing the best dental care in a warm and welcoming environment. Our experienced doctor is here to ensure your smile stays healthy and bright.
// //         </p> */}
// //         <motion.a
// //           href="#services"
// //           className="inline-block bg-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transform"
// //           whileHover={{ scale: 1.05, backgroundColor: '#5a67d8' }}
// //           transition={{ duration: 0.3 }}
// //         >
// //           Explore Our Services
// //         </motion.a>
// //         {/* Schedule Appointment Button */}
// //         <button
// //          id="scheduleButton"
// //           onClick={handleOpenCalendly}
// //           className="mt-4 lg:ml-4 inline-block bg-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:bg-indigo-600 transition duration-300"
// //         >
// //           Schedule an Appointment
// //         </button>
// //       </motion.div>

// //       {/* Right Side - Image */}
// //       {/* <motion.div
// //         className="md:w-1/2 flex justify-center md:justify-end ml-8 mt-8 md:mt-0"
// //         initial={{ opacity: 0, x: 40 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.8, delay: 2.7 }}
// //       >
// //         <img
// //           src="/clinic-image.png"
// //           alt="Dental Clinic"
// //           className="w-full md:w-full rounded-lg shadow-lg"
// //         />
// //       </motion.div> */}

// //       {/* Calendly Popup */}
// //       {isCalendlyVisible && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto ">
// //           <div className="bg-white rounded-lg shadow-lg p-7 relative max-w-md w-full h-[90vh] flex flex-col">
// //             <button
// //               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
// //               onClick={handleCloseCalendly}
// //             >
// //               ✕
// //             </button>
// //             <div
// //               className="calendly-inline-widget flex-1"
// //               data-url="https://calendly.com/abcdgef017/30min?hide_event_type_details=1&hide_gdpr_banner=1"
// //               style={{ minWidth: '320px', height: '100%' }}
// //             ></div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";


// const HeroSection = () => {
//   const [isCalendlyVisible, setIsCalendlyVisible] = useState(false);
//   const calendlyRef = useRef(null);

//   const handleOpenCalendly = () => setIsCalendlyVisible(true);
//   const handleCloseCalendly = () => setIsCalendlyVisible(false);

//   useEffect(() => {
//     if (isCalendlyVisible) {
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       document.body.appendChild(script);
//       return () => document.body.removeChild(script);
//     }
//   }, [isCalendlyVisible]);

//   return (
//     <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-between overflow-hidden pt-6 md:pt-8 bg-gradient-to-br from-white to-teal-50">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://www.shutterstock.com/image-vector/low-poly-background-teal-color-260nw-770304286.jpg"
//           alt="Dental Clinic Background"
//           className="w-full h-full object-cover opacity-70"
//         />
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

//       {/* Left Content */}
//       <motion.div
//         className="relative z-10 flex flex-col items-start justify-center text-left px-8 md:px-16 md:w-1/2"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h2
//           className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Dr. Hansa’s
//         </motion.h2>
//         <motion.h1
//           className="text-5xl md:text-6xl font-bold text-teal-700 leading-tight mb-6 md:mb-8 font-[Poppins]"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.7 }}
//         >
//           Crystal Dental Care
//         </motion.h1>

//         <motion.p
//           className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-lg font-[DM Sans]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7, duration: 0.8 }}
//         >
//           Transform your smile with comfort, care, and confidence. Experience
//           advanced dental care in a soothing environment that feels like home.
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-wrap gap-4">
//           <motion.a
//             href="#services"
//             className="bg-teal-500 text-white py-3 px-8 rounded-full shadow-md hover:bg-teal-600 hover:shadow-lg transition-transform transform hover:scale-105"
//             whileHover={{ scale: 1.07 }}
//           >
//             Explore Our Services
//           </motion.a>

//           <motion.button
//             onClick={handleOpenCalendly}
//             className="border-2 border-teal-500 text-teal-700 py-3 px-8 rounded-full hover:bg-teal-100 shadow-sm hover:shadow-md transition-all transform hover:scale-105"
//             whileHover={{ scale: 1.07 }}
//           >
//             Schedule Appointment
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         className="relative z-10 md:w-1/2 flex justify-center mt-12 md:mt-0"
//         initial={{ opacity: 0, x: 60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.8, duration: 1 }}
//       >
//         <div className="rounded-full overflow-hidden shadow-2xl border-4 border-white w-72 h-72 md:w-96 md:h-96">
//           <img
//             src="/clinic-image.png"
//             alt="Clinic Interior"
//             className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
//           />
//         </div>
//       </motion.div>

//       {/* Calendly Popup */}
//       {isCalendlyVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
//           <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full h-[90vh] flex flex-col">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
//               onClick={handleCloseCalendly}
//             >
//               ✕
//             </button>
//             <div
//               className="calendly-inline-widget flex-1"
//               data-url="https://calendly.com/abcdgef017/30min?hide_event_type_details=1&hide_gdpr_banner=1"
//               style={{ minWidth: "320px", height: "100%" }}
//             ></div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaWhatsapp } from "react-icons/fa";
import bgimage from "/dental_background.jpg"; // ✅ use .webp

const HeroSection = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-evenly pt-28 px-6 md:px-16 pb-24 md:pb-12"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={bgimage}
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchpriority="high"
          className="w-full h-full md:object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-700 max-w-xl z-10 space-y-4 md:space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
          Dr. Hansa’s
        </h2>

        <h1 className="font-poppins font-extrabold text-4xl md:text-6xl text-teal-700 leading-[1.1]">
          Crystal
          <br className="md:block hidden" />
          Dental Care
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed font-inter">
          Your smile deserves expert care. Experience modern dentistry that
          blends precision, comfort, and compassion — for the perfect crystal
          smile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Explore Services */}
          <motion.a
            href="#services"
            aria-label="Explore our dental services"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(13,148,136,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-full text-lg font-medium shadow-md hover:bg-teal-700 transition-all duration-300"
          >
            <FaTooth className="text-xl" />
            Explore Services
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/9406544202"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book appointment via WhatsApp"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(0,200,83,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full text-lg font-medium shadow-md hover:bg-green-600 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            <span>Book via WhatsApp</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative flex justify-center items-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="p-[4px] bg-gradient-to-b from-teal-200 to-white rounded-full shadow-[0_0_60px_-15px_rgba(0,150,136,0.4)]"
        >
          <img
            src="/clinic-image.webp"
            alt="Clinic"
            width="420"
            height="420"
            loading="lazy"
            decoding="async"
            className="w-[330px] md:w-[420px] h-[330px] md:h-[420px] rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent via-teal-50 to-teal-50 pointer-events-none"></div>
    </header>
  );
};

export default HeroSection;

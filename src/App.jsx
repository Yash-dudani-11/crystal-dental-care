import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import Navbar from "./Components/Nav";
import HeroSection from "./Components/Hero";
import AboutUs from "./Components/About";
import SphereServices from "./Components/Journey";
import TestimonialsSection from "./Components/Testimonial";
import FAQSection from "./Components/Faq";
import MapComponent from "./Components/Map";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Crystal Dental Care | Best Dentist in Indore | Dentist near me </title>
        <meta
          name="description"
          content="Crystal Dental Care in Indore offers expert dental treatments including root canals, implants, braces, and teeth whitening. Led by Dr. Hansa, ensuring your perfect crystal smile."
        />
        <meta
          name="keywords"
          content="dental clinic Indore, dentist in Indore, root canal Indore, teeth cleaning, braces Indore, Dr. Hansa, crystal dental care, teeth whitening, dental implants"
        />
        <meta name="author" content="Crystal Dental Care" />

        {/* 🔹 Open Graph for social preview */}
        <meta property="og:title" content="Crystal Dental Care - Best Dentist in Indore" />
        <meta
          property="og:description"
          content="Modern, compassionate dentistry by Dr. Hansa. Book your appointment today at Crystal Dental Care, Indore."
        />
        <meta property="og:image" content="/clinic-image.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crystaldentalcare.in" />

        {/* 🔹 Favicon / Canonical */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://crystaldentalcare.in" />

        {/* 🔹 Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Crystal Dental Care",
            "image": "https://crystaldentalcare.in/logo.png",
            "logo": "https://crystaldentalcare.in/logo.png",
            "url": "https://crystaldentalcare.in/",
            "telephone": "+91-9406544202",
            "description":
              "Crystal Dental Care is a modern dental clinic in Indore offering expert treatments such as root canal therapy, teeth whitening, dental implants, orthodontics, and more under the care of Dr. Hansa Dudani.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vijay Nagar",
              "addressLocality": "Indore",
              "addressRegion": "Madhya Pradesh",
              "postalCode": "452010",
              "addressCountry": "IN",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.7546,
              "longitude": 75.8947,
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                "opens": "10:00",
                "closes": "20:00",
              },
            ],
            "priceRange": "₹₹",
            "sameAs": [
              "https://www.instagram.com/_crystal_dc",
              "https://wa.me/919406544202",
              "https://www.linkedin.com/in/hansa-dudani-550bb7288",
            ],
          }),
        }}
      />

      </Helmet>

      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <HeroSection />
        <AboutUs />
        <SphereServices />
        <TestimonialsSection />
        <FAQSection />
        <MapComponent />
      </motion.div>
    </div>
  );
};

export default App;

// this is my app.jsx for refrence





// const App = () => {
//   return (
//     <div className="bg-white overflow-x-hidden">
//       <Navbar />
      
//       <ScrollSection>
//         <HeroSection />
//       </ScrollSection>

//       <ScrollSection>
//         <AboutUs />
//       </ScrollSection>

//       <ScrollSection>
//         <JourneySection />
//       </ScrollSection>

//       <ScrollSection>
//         <ServicesSection />
//       </ScrollSection>

//       <ScrollSection>
//         <TestimonialsSection />
//       </ScrollSection>

//       <ScrollSection>
//         <FAQSection />
//       </ScrollSection>

//       <ScrollSection>
//         <MapComponent />
//       </ScrollSection>
//     </div>
//   );
// };

// export default App;


// src/App.jsx
// src/App.jsx
// import { motion } from "framer-motion";
// import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 text-gray-800 overflow-x-hidden">
//       {/* Navbar */}
//       <motion.nav
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="flex justify-between items-center w-11/12 mx-auto py-3 mt-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-md px-5"
//       >
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://img.freepik.com/free-vector/tooth-logo-design-vector_23-2150427361.jpg"
//             alt="Logo"
//             className="w-12 h-12 rounded-full object-cover shadow-sm"
//           />
//           <h1 className="text-xl md:text-2xl font-semibold text-teal-700">
//             Dr. Hansa’s Dental Care
//           </h1>
//         </div>

//         {/* Nav Links */}
//         <ul className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
//           <li className="hover:text-teal-600 relative group cursor-pointer transition">
//             Services
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all duration-300"></span>
//           </li>

//           <li className="text-gray-400 relative group cursor-not-allowed">
//             Blog
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400"></span>
//             <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-teal-600 text-white text-xs px-2 py-1 rounded-md shadow-md">
//               Upcoming Feature
//             </span>
//           </li>

//           <li className="hover:text-teal-600 relative group cursor-pointer transition">
//             Locate Us
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all duration-300"></span>
//           </li>

//           <li className="hover:text-teal-600 relative group cursor-pointer transition">
//             About Us
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all duration-300"></span>
//           </li>
//         </ul>

//         {/* Icons */}
//         <div className="flex gap-4 items-center text-teal-600">
//           <a
//             href="https://wa.me/919999999999"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaWhatsapp size={22} className="hover:scale-110 transition" />
//           </a>
//           <a
//             href="https://instagram.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram size={22} className="hover:scale-110 transition" />
//           </a>
//           <a href="tel:+919999999999">
//             <FaPhoneAlt size={20} className="hover:scale-110 transition" />
//           </a>
//         </div>
//       </motion.nav>

//       {/* Hero Section */}
//       <section className="flex flex-col-reverse md:flex-row items-center justify-between w-11/12 mx-auto mt-16 md:mt-20 gap-10">
//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="md:w-1/2 text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4 leading-tight">
//             Your Smile, Our Passion.
//           </h1>
//           <p className="text-gray-600 text-lg mb-8">
//             Experience world-class dental care with cutting-edge technology and
//             personalized attention. We make every smile confident and bright.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               href="https://wa.me/919999999999"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-400 text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition"
//             >
//               <span className="relative z-10">Chat via WhatsApp</span>
//               <motion.div
//                 className="absolute inset-0 bg-teal-700 opacity-0 hover:opacity-10 transition"
//                 initial={false}
//               />
//             </motion.a>

//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               href="#services"
//               className="relative border border-teal-600 text-teal-600 px-8 py-3 rounded-2xl font-semibold overflow-hidden hover:text-white hover:bg-gradient-to-r from-teal-500 to-teal-400 shadow-md transition"
//             >
//               Explore Services
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="md:w-1/2 flex justify-center"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1632324344599-9b4ed0f4e6a1?auto=format&fit=crop&w=800&q=80"
//             alt="Dental Care"
//             className="rounded-3xl shadow-2xl w-4/5 md:w-3/4 hover:scale-105 transition-transform duration-500"
//           />
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500 text-sm mt-20">
//         © {new Date().getFullYear()} Dr. Hansa’s Dental Care | All Rights Reserved
//       </footer>
//     </div>
//   );
// }


// import React from 'react'
// import { motion } from 'framer-motion'
// import JourneySection from './Components/Journey'
// import AboutUs from './components/About'
// import ServicesSection from './components/Services'
// import TestimonialsSection from './Components/Testimonial'
// import MapComponent from './Components/Map'
// import HeroSection from './Components/Hero'
// import FAQSection from './Components/Faq'
// import Navbar from './Components/Nav'


// const App = () => {
//   return (
//     <div className="relative min-h-screen overflow-x-hidden">
//       {/* Fixed background */}
//       <div
//         className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-60"
//         style={{
//           backgroundImage:
//             "url('https://media.istockphoto.com/id/1366554103/vector/mint-abstract-watercolor-texture-background.jpg?s=612x612&w=0&k=20&c=4n6PhMM13Uqlb6QVeyu5ayh4rMFoyF3XeleXCddHLCc=')",
//         }}
//       >
//         {/* optional dark overlay */}
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//       </div>

//       {/* Navbar always on top */}
//       <Navbar />

//       {/* Main content */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <HeroSection />
//         <AboutUs />
//         <JourneySection />
//         <ServicesSection />
//         <TestimonialsSection />
//         <FAQSection />
//         <MapComponent />
//       </motion.div>
//     </div>
//   )
// }


// export default App
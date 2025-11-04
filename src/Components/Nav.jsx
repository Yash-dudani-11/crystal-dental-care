// // src/components/Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { motion, AnimatePresence } from 'framer-motion';
// import "/logo.png";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [loading, setLoading] = useState(true); // State to handle loading

//   // Function to control navbar visibility on scroll
//   const controlNavbar = () => {
//     if (typeof window !== 'undefined') {
//       if (window.scrollY > lastScrollY) {
//         setIsVisible(false); // Scroll down
//       } else {
//         setIsVisible(true); // Scroll up
//       }
//       setLastScrollY(window.scrollY);
//     }
//   };

//   // Handle scroll event listener
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', controlNavbar);
//       return () => {
//         window.removeEventListener('scroll', controlNavbar);
//       };
//     }
//   }, [lastScrollY]);

//   // Loading animation control
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Hide loading after 2 seconds
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Triggering schedule appointment click event
//   const triggerScheduleAppointment = () => {
//     const scheduleButton = document.getElementById('scheduleButton');
//     if (scheduleButton) {
//       scheduleButton.click();
//     }
//   };

//   return (
//     <>
//       {/* Loading Animation */}
//       <AnimatePresence>
//         {loading && (
//           <motion.div
//             className="fixed inset-0 bg-teal-100 flex justify-center items-center  z-500"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit={{ delay:1.5,opacity: 0, transition: { duration: 1.5 } }}
//           >
//              {/* <motion.div
//             className="mt-8 text-center text-gray-700 w-full"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, transition: { duration: 1.5 } }}
//             transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
//           >
//             <h2 className="text-3xl font-bold font-mono mb-2">
//             Welcome to our world of trusted dental care,<br /> where your smile is always our top priority
//             </h2>
//           </motion.div> */}
//             <motion.img
//               src="/logo.png"
//               alt="Logo"
//               className="h-80w-80 "
//               initial={{ scale: 1, rotate: 0 }}
//               animate={{ scale: 0.1, rotate: 360, y: "-50vh",x:"-50vw" }}
//               transition={{ delay:1.2,duration: 1.2, ease: "easeInOut" }}
//             />
//              {/* <motion.div
//             className="mt-8 text-center text-gray-700 w-full"
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, transition: { duration: 1.5 } }}
//             transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
//           >
//             <h2 className="text-4xl font-bold font-mono mb-2">
//             CRYSTAL DENTAL CARE
//             </h2>
//           </motion.div> */}

//           </motion.div>
//         )}
//       </AnimatePresence>
//        <motion.div
//        initial={{ opacity:0,y:-50 }}
//        animate={{ opacity:1, y:0 }}
//        transition={{ delay:2.3, duration :1 }}>
//       {/* Navbar */}
//       <nav
//         className={`w-full bg-stone-50 p-3 flex items-center justify-between shadow-lg fixed top-0 bg-white/30 backdrop-blur-md border-b border-gray-200  left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${
//           isVisible ? 'translate-y-0' : '-translate-y-full'
//         } ${loading ? 'hidden' : ''}`} // Hide navbar during loading
//       >
//         {/* Logo and Navigation Links */}
//         <div className="flex items-center space-x-3">
//         <a href="#home">
//           <img
//             src="/logo.png"
//             alt="Logo"
//             className="h-16 w-16 rounded-full hover:scale-110 transition border-2"
//           />
//         </a>
//         <div>

//         <h1 className='font-bold text-xl leading-none font-mono'>Crystal <br /> Dental <br /> Care</h1>
//         </div>
//         </div>
//         <div className="flex items-center space-x-12">
//           <div className="hidden md:flex space-x-12">
//             <Link
//               to="services"
//               smooth={true} 
//               duration={500}
//               className="text-gray-800 hover:text-teal-600 transition duration-300 cursor-pointer font-mono font-bold"
//             >
//               Services
//             </Link>
//             <a href="#blog" className="text-gray-800 hover:text-teal-600 transition duration-300 font-mono font-bold">
//               Blog
//             </a>
//             <Link
//               to="map"
//               smooth={true}
//               duration={500}
//               className="text-gray-800 hover:text-teal-600 transition duration-300 cursor-pointer font-mono font-bold "
//             >
//               Locate us
//             </Link>
//             <Link
//               to="about"
//               smooth={true}
//               duration={500}
//               className="text-gray-800 hover:text-teal-600 transition duration-300 cursor-pointer font-mono font-bold"
//             >
//               About Us
//             </Link>
//           </div>
//         </div>
//       </nav>
//       </motion.div>
//     </>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import "/logo.png";
import { socialLinks } from "./Footer";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  // Control navbar visibility on scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(window.scrollY);
    }
  };

  // Scroll listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-teal-50 via-teal-100 to-cyan-50  flex justify-center items-center z-[9999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              delay: 1.5,
              opacity: 0,
              transition: { duration: 1.5 },
            }}
          >
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="h-80 w-80 object-contain"
              initial={{ scale: 1, rotate: 0 }}
              animate={{
                scale: 0.1,
                rotate: 360,
                y: "-50vh",
                x: "-50vw",
              }}
              transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 1 }}
      >
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[98%] md:w-[95%] lg:w-[90%] bg-white/60 backdrop-blur-md border border-teal-100 shadow-md rounded-2xl px-4 py-4 flex items-center justify-between transition-transform duration-500 z-[1000] ${isVisible ? "translate-y-0" : "-translate-y-full"
            } ${loading ? "hidden" : ""}`}
        >
          {/* Left Section - Logo */}
          <div className="flex items-center gap-3">
          <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-12 rounded-full border-2 border-teal-400 hover:scale-110 transition-transform duration-300 shadow-sm"
              />
            </Link>
            <div>
              <h1 className="font-bold text-md md:text-xl text-teal-700 leading-tight font-mono leading-[1]">
                {/* <span className="relative top-0">Crystal</span><br />
                <span className="relative -top-1">Dental</span><br />
                <span className="relative -top-2">Care</span> */}
                crystal dental  care
              </h1>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-10 font-mono font-semibold text-gray-700">
          <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="relative cursor-pointer hover:text-teal-600 transition"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-500 transition-all duration-300 hover:w-full"></span>
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="relative cursor-pointer hover:text-teal-600 transition"
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Blog with Tooltip */}
            <div className="relative group cursor-not-allowed text-gray-400">
              Blog
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-teal-600 text-white text-xs px-2 py-1 rounded-md shadow-md transition">
                Upcoming Feature
              </span>
            </div>

            <Link
              to="map"
              smooth={true}
              duration={500}
              offset={-80}
              className="relative cursor-pointer hover:text-teal-600 transition"
            >
              Locate Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-500 transition-all duration-300 hover:w-full"></span>
            </Link>

            
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 text-teal-600">
            {socialLinks
              .filter(link => ["Instagram", "WhatsApp", "Call"].includes(link.label)) // use only relevant ones
              .map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-teal-700 transition-transform"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;


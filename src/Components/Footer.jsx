import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

export const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/_crystal_dc", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/919406544202", label: "WhatsApp" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/hansa-dudani-550bb7288", label: "LinkedIn" },
  { icon: FaPhoneAlt, href: "tel:+919406544202", label: "Call" },
];

const Footer = () => {
  return (
    <footer role="contentinfo" aria-label="Crystal Dental Care Footer" className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-8">
        {/* Left Section - Clinic Info */}
        <div className="flex flex-col space-y-4 lg:w-1/3">
          <div>
            <span className="text-teal-300 text-sm font-medium">Dr. Hansa’s</span>
            <h2 className="text-2xl font-bold text-white drop-shadow-md">
              Crystal Dental Care
            </h2>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            203 First Floor, Vikram Towers, Sapna Sangeeta Road, Indore (M.P) 452001
          </p>
          <p className="text-sm text-gray-300">Phone: +91 9406544202</p>
        </div>

        {/* Quick Links */}
        <div className="hidden lg:flex flex-col space-y-2 lg:w-1/4">
          <h3 className="text-lg font-semibold text-teal-200 mb-2">Quick Links</h3>

          <Link
            to="services"
            smooth={true}
            duration={700}
            offset={-80}
            className="hover:text-teal-400 text-sm transition-all duration-300 cursor-pointer"
          >
            Services
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            className="hover:text-teal-400 text-sm transition-all duration-300 cursor-pointer"
          >
            About Us
          </Link>

          <Link
            to="Locate"
            smooth={true}
            duration={700}
            offset={-80}
            className="hover:text-teal-400 text-sm transition-all duration-300 cursor-pointer"
          >
            Locate
          </Link>

          <Link
            to="faq"
            smooth={true}
            duration={700}
            offset={-80}
            className="hover:text-teal-400 text-sm transition-all duration-300 cursor-pointer"
          >
            FAQs
          </Link>
        </div>


        {/* Social Icons (Desktop only) */}
        <div className="hidden lg:flex flex-col items-start lg:items-center space-y-3 lg:w-1/3">
          <h3 className="text-lg font-semibold text-teal-200 mb-1">
            Connect With Us
          </h3>
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{
                  scale: 1.2,
                  color: "#5eead4",
                  textShadow:
                    "0 0 12px rgba(94,234,212,0.9), 0 0 20px rgba(45,212,191,0.7)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="text-gray-300 hover:text-teal-400 transition-all duration-300"
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Social Icons Section (only visible on small screens) */}
      <div className="lg:hidden flex flex-col items-center space-y-3 mt-8">
        <h3 className="text-lg font-semibold text-teal-200 mb-1">
          Connect With Us
        </h3>
        <div className="flex space-x-6">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{
                scale: 1.15,
                color: "#5eead4",
                textShadow:
                  "0 0 10px rgba(94,234,212,0.8), 0 0 18px rgba(45,212,191,0.7)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="text-gray-300 hover:text-teal-400 transition-all duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-300 border-t border-teal-700/40 pt-4">
        © 2025 Crystal Dental Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

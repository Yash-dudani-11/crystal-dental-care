// import React from 'react';
// import { motion } from 'framer-motion';

// const JourneySection = () => {
//   return (
//     <section className="bg-orange-100 py-16 px-8 md:px-16 relative z-10 mt-16">
//       <div className="container mx-auto flex flex-col items-center text-center">

//         {/* Header - "Our Journey" */}
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-teal-600 mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{once:true}}
//           transition={{ duration: 0.8 }}
//         >
//           Our Journey
//         </motion.h2>

//         {/* Paragraph */}
//         <motion.p
//           className="w-full md:w-3/4 text-lg md:text-xl text-gray-700 mb-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{once:true}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Over the past 10 years, we’ve dedicated ourselves to transforming smiles and enhancing lives with state-of-the-art dental care. Our experienced team is committed to ensuring every patient receives the best treatment in a warm and welcoming environment.
//         </motion.p>

//         {/* Image */}
//         <motion.div
//           className="w-full md:w-2/3 mb-12"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{once:true}}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <img
//             src="https://c1.wallpaperflare.com/preview/460/42/385/dentist-dental-office-dentistry.jpg"
//             alt="Dental Team"
//             className="w-full rounded-lg shadow-lg"
//           />
//         </motion.div>

//         {/* Statistics */}
//         <div className="w-full flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">

//           {/* Patients Treated */}
//           <motion.div
//             className="flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{once:true}}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <span className="text-4xl md:text-5xl font-bold text-teal-500">
//               3000+
//             </span>
//             <span className="text-gray-600 text-lg">Patients Treated</span>
//           </motion.div>

//           {/* Years of Experience */}
//           <motion.div
//             className="flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{once:true}}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <span className="text-4xl md:text-5xl font-bold text-teal-500">
//               10+
//             </span>
//             <span className="text-gray-600 text-lg">Years of Experience</span>
//           </motion.div>

//           {/* Successful Procedures */}
//           <motion.div
//             className="flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{once:true}}
//             transition={{ duration: 0.8, delay: 1.0 }}
//           >
//             <span className="text-4xl md:text-5xl font-bold text-teal-500">
//               10,000+
//             </span>
//             <span className="text-gray-600 text-lg">Successful Procedures</span>
//           </motion.div>

//         </div>

//       </div>

//       {/* Decorative Elements */}
//       <motion.div
//         className="absolute left-0 bottom-0 w-24 h-24 bg-teal-100 rounded-full"
//         initial={{ opacity: 0, scale: 0 }}
//         whileInView={{ opacity: 0.3, scale : 1 }}
//         viewport={{once:true}}
//         transition={{ duration: 1, delay: 1.2 }}
//       />
//       <motion.div
//         className="absolute right-0 top-0 w-32 h-32 bg-indigo-200 rounded-full"
//         initial={{ opacity: 0, scale: 0 }}
//         whileInView={{ opacity: 0.4, scale: 1 }}
//         viewport={{once:true}}
//         transition={{ duration: 1, delay: 1.4 }}
//       />
//     </section>
//   );
// };

// export default JourneySection;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    image: "https://omniendo.com/wp-content/uploads/2020/05/canal-scaled.jpeg",
    title: "Root Canal Treatment",
    desc: "Save your natural tooth with our expert root canal treatment.",
  },
  {
    id: 2,
    image: "https://nelsonridge.com/wp-content/uploads/2019/12/tooth-extraction-service.png",
    title: "Tooth Extractions",
    desc: "Safe and painless tooth extractions for a healthier smile.",
  },
  {
    id: 3,
    image: "https://rowleyfamilydental.com/wp-content/uploads/dental-fillings-2111.jpg",
    title: "Dental Fillings",
    desc: "Restore your teeth’s function and appearance with precision.",
  },
  {
    id: 4,
    image:
      "https://ik.imagekit.io/amddentalclinic/e9457e14-4639-4ff0-a3bc-636547bb4c6f-amd_teeth_cleaning_A4F2C3_haD.jpeg",
    title: "Teeth Cleaning",
    desc: "Deep, refreshing, and completely painless cleaning experience.",
  },
  {
    id: 5,
    image: "https://clovedental.in/wp-content/uploads/2019/02/teeth-white.jpg",
    title: "Teeth Whitening",
    desc: "Unveil your brightest smile with professional whitening.",
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dental-implant-illustration.jpg/800px-Dental-implant-illustration.jpg",
    title: "Dental Implants",
    desc: "Strong, natural-looking implants that restore confidence.",
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1744688379587-c9d174f0576e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    title: "Complete Dentures",
    desc: "Comfortable, aesthetic dentures that feel like your own.",
  },
  {
    id: 8,
    image:
      "https://smilemoreaz.com/wp-content/uploads/2021/08/invisalign-vs-braces-750x360-1.jpg",
    title: "Braces & Aligners",
    desc: "Modern aligners for a straighter, flawless smile.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  const [visibleCount, setVisibleCount] = useState(isMobile ? 3 : services.length);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCount((prev) => (mobile ? Math.min(prev, services.length) : services.length));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, services.length));
  };

  const displayedServices = services.slice(0, visibleCount);

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-white via-teal-100 to-white overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Section Header */}
      <header className="text-center mb-16">
        <h2 id="services-heading" className="text-5xl font-extrabold text-teal-700 mb-3">
          Our Expertise
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A complete range of advanced dental solutions crafted for your smile.
        </p>
      </header>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {displayedServices.map((service, index) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: (index % 3) * 0.20, // 👈 stagger effect for each batch of 3
            }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-white"
          >
            <figure className="relative">
              <img
                src={service.image}
                alt={`${service.title} - ${service.desc}`}
                width="400"
                height="256"
                loading={index > 1 ? "lazy" : "eager"}
                decoding="async"
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:brightness-75"
              />
              <figcaption className="sr-only">{service.title}</figcaption>
            </figure>

            <div
              className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent"
              aria-hidden="true"
            ></div>

            <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white font-semibold text-xl z-10">
              {service.title}
            </h3>

            <motion.div
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-teal-900/90 flex items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <p className="text-white text-base leading-relaxed">{service.desc}</p>
            </motion.div>
          </motion.article>
        ))}

      </motion.div>

      {/* Load More Button */}
      {isMobile && visibleCount < services.length && (
        <div className="flex justify-center mt-10">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Load more dental services"
          >
            Load More
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;

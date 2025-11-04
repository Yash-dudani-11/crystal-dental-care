// import React from 'react';
// import { motion } from 'framer-motion';

// // Animation variants for smooth bottom-to-top effect
// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//      // Adjusted delay for smoother staggered effect
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const ServicesSection = () => {
//   // Services data object
//   const services = [
//     {
//       id: 1,
//       image: 'https://omniendo.com/wp-content/uploads/2020/05/canal-scaled.jpeg',
//       title: 'Root Canal',
//       description: 'Save your natural tooth with our expert root canal treatment.',
//     },
//     {
//       id: 2,
//       image: 'https://nelsonridge.com/wp-content/uploads/2019/12/tooth-extraction-service.png',
//       title: 'Extractions',
//       description: 'Safe and painless tooth extractions for a healthier smile.',
//     },
//     {
//       id: 3,
//       image: 'https://rowleyfamilydental.com/wp-content/uploads/dental-fillings-2111.jpg',
//       title: 'Fillings',
//       description: 'Restore the function and appearance of your teeth with our durable fillings.',
//     },
//     {
//       id: 4,
//       image: 'https://ik.imagekit.io/amddentalclinic/e9457e14-4639-4ff0-a3bc-636547bb4c6f-amd_teeth_cleaning_A4F2C3_haD.jpeg',
//       title: 'Teeth Cleaning',
//       description: 'Keep your teeth and gums healthy with our thorough teeth cleaning services.',
//     },
//     {
//       id: 5,
//       image: 'https://clovedental.in/wp-content/uploads/2019/02/teeth-white.jpg',
//       title: 'Teeth Whitening',
//       description: 'Achieve a brighter, whiter smile with our professional teeth whitening services.',
//     },
//     {
//       id: 6,
//       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dental-implant-illustration.jpg/800px-Dental-implant-illustration.jpg',
//       title: 'Dental Implants',
//       description: 'Replace missing teeth with durable and natural-looking dental implants.',
//     },
//     {
//       id: 7,
//       image: 'https://triaddentalstudio.com/wp-content/uploads/2020/02/full-denture-scaled-e1594905192656-1024x620.jpg',
//       title: 'Complete Dentures',
//       description: 'Comfortable and natural-looking dentures to restore your smile.',
//     },
//     {
//       id: 8,
//       image: 'https://smilemoreaz.com/wp-content/uploads/2021/08/invisalign-vs-braces-750x360-1.jpg',
//       title: 'Braces & Aligners',
//       description: 'Straighten your teeth with our modern braces and aligners.',
//     },
//   ];

//   return (
//     <div id='services' className="bg-[url(https://static.wixstatic.com/media/3f4fbc_3167489e082945a9b70300fd3d129254~mv2.png/v1/fill/w_640,h_704,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3f4fbc_3167489e082945a9b70300fd3d129254~mv2.png bg-cover bg-center py-12 px-8 md:px-16">
//       <h2 className="text-5xl font-bold text-center text-gray-800 mb-24">Our Services</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <motion.div
//             key={service.id}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={index}
//             className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-[45vw] md:w-[30vw] lg:w-[28vw] mx-auto"
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-48 object-cover" // Increased height for the image
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent flex items-end justify-center text-center p-4">
//               <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
//               <p className="text-white text-lg">{service.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

import React from "react";
import { motion } from "framer-motion";

const services = [
  { id: 1, image: "https://omniendo.com/wp-content/uploads/2020/05/canal-scaled.jpeg", title: "Root Canal", desc: "Save your natural tooth with our expert root canal treatment." },
  { id: 2, image: "https://nelsonridge.com/wp-content/uploads/2019/12/tooth-extraction-service.png", title: "Extractions", desc: "Safe and painless tooth extractions for a healthier smile." },
  { id: 3, image: "https://rowleyfamilydental.com/wp-content/uploads/dental-fillings-2111.jpg", title: "Fillings", desc: "Restore your teeth’s function and appearance with precision." },
  { id: 4, image: "https://ik.imagekit.io/amddentalclinic/e9457e14-4639-4ff0-a3bc-636547bb4c6f-amd_teeth_cleaning_A4F2C3_haD.jpeg", title: "Teeth Cleaning", desc: "Deep, refreshing, and completely painless cleaning experience." },
  { id: 5, image: "https://clovedental.in/wp-content/uploads/2019/02/teeth-white.jpg", title: "Teeth Whitening", desc: "Unveil your brightest smile with professional whitening." },
  { id: 6, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dental-implant-illustration.jpg/800px-Dental-implant-illustration.jpg", title: "Dental Implants", desc: "Strong, natural-looking implants that restore confidence." },
  { id: 7, image: "https://triaddentalstudio.com/wp-content/uploads/2020/02/full-denture-scaled-e1594905192656-1024x620.jpg", title: "Complete Dentures", desc: "Comfortable, aesthetic dentures that feel like your own." },
  { id: 8, image: "https://smilemoreaz.com/wp-content/uploads/2021/08/invisalign-vs-braces-750x360-1.jpg", title: "Braces & Aligners", desc: "Modern aligners for a straighter, flawless smile." },
];

const ServicesSection = () => (
  <section id="services" className="relative py-24 px-8 md:px-20 bg-white overflow-hidden">
    <h2 className="text-5xl font-bold text-center text-teal-700 mb-16">Our Services</h2>

    {/* Subtle curved background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('/wave-bg.svg')] bg-cover bg-center"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
      {services.map((service, i) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:shadow-teal-300/40 transition-all duration-500"
        >
          <div className="overflow-hidden">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="p-5 text-center">
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">{service.title}</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{service.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;

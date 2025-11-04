// components/ScrollTransitionSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSection = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // starts when section top hits viewport
  });

  // section remains normal till 60%, then scales and fades
  const scale = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[200vh] w-full">
      {/* Sticky wrapper keeps section pinned during scroll */}
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          scale,
          opacity,
          transformOrigin: "center top",
          width: "100%",    
          willChange: "transform, opacity",
        }}
        className="h-screen flex items-center justify-center bg-white"
      >
        {/* full-width inner wrapper prevents content shrink */}
        <div className="w-full max-w-none">{children}</div>
      </motion.div>
    </section>
  );
};

export default ScrollSection;

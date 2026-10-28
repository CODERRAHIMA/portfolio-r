"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#9F1239] via-[#BE185D] to-[#E11D48] origin-left z-100"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}
import React from 'react';
import { motion } from "framer-motion";

function AnimScale({ children }) {
  return (
    <motion.div
      initial={{
        scale: 0.9
      }}
      whileInView={{
        scale: 1
      }}
      transition={{
        duration: 0.8,
        delay: 0.3
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimScale;

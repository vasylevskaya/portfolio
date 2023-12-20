import React from 'react';
import { motion } from "framer-motion";

function AnimText({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimText;

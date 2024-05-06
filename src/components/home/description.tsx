"use client";
import React from "react";
import { motion } from "framer-motion";

export const Description = () => {
  const text = "Passionate about changing the world with technology";
  const words = text.split(" ");
  

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-extralight text-lg text-center"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3, type: "spring" }}
          className="mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

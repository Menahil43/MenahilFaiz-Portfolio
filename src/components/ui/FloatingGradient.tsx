"use client";

import { motion } from "framer-motion";

interface FloatingGradientProps {
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

export default function FloatingGradient({ className = "", color = "primary" }: FloatingGradientProps) {
  const gradientClasses = {
    primary: "gradient-orb",
    secondary: "gradient-orb-secondary",
    accent: "gradient-orb-accent",
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${gradientClasses[color]} ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}


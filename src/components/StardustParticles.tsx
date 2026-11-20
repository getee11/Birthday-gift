import React from "react";
import { motion, useReducedMotion } from "motion/react";

export const StardustParticles: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const particles = Array.from({ length: 18 });

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const duration = 4 + Math.random() * 6;
        const delay = Math.random() * 3;
        const size = 3 + Math.random() * 4;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              y: [-15, 15, -15],
              x: [-10, 10, -10],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            className="absolute rounded-full bg-cream-200 shadow-[0_0_8px_rgba(245,235,220,0.8)]"
          />
        );
      })}
    </div>
  );
};

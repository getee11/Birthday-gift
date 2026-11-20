import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface InteractiveHeartProps {
  size?: number;
  initialLiked?: boolean;
  className?: string;
}

export const InteractiveHeart: React.FC<InteractiveHeartProps> = ({
  size = 20,
  initialLiked = false,
  className = "",
}) => {
  const [liked, setLiked] = useState<boolean>(initialLiked);
  const [burst, setBurst] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setBurst(true);
    setTimeout(() => setBurst(false), 800);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`relative p-2.5 rounded-full transition-all flex items-center justify-center ${className}`}
      aria-label="Sukai momen ini"
    >
      <motion.div
        animate={burst ? { scale: [1, 1.35, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Heart
          size={size}
          className={`transition-colors duration-300 ${
            liked
              ? "fill-red-500 text-red-500 drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]"
              : "text-brown-700/70 hover:text-brown-700 fill-transparent"
          }`}
        />
      </motion.div>

      {/* Floating Sparkle Burst on Like */}
      {burst && (
        <>
          <motion.span
            initial={{ opacity: 1, scale: 0.5, y: 0, x: 0 }}
            animate={{ opacity: 0, scale: 1.5, y: -24, x: -12 }}
            transition={{ duration: 0.6 }}
            className="absolute text-xs text-red-400 font-bold pointer-events-none"
          >
            ♥
          </motion.span>
          <motion.span
            initial={{ opacity: 1, scale: 0.5, y: 0, x: 0 }}
            animate={{ opacity: 0, scale: 1.5, y: -22, x: 14 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute text-xs text-amber-500 font-bold pointer-events-none"
          >
            ✨
          </motion.span>
        </>
      )}
    </button>
  );
};

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { content } from "../content";
import { StardustParticles } from "./StardustParticles";
import { InteractiveHeart } from "./InteractiveHeart";
import { BottomNavBar } from "./BottomNavBar";

interface ClosingPageProps {
  onPrev: () => void;
  onReplay: () => void;
}

export const ClosingPage: React.FC<ClosingPageProps> = ({ onPrev, onReplay }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full min-h-[100dvh] bg-ink-950 text-cream-50 flex flex-col justify-between px-5 pt-20 pb-24 select-none overflow-hidden">
      {/* Background Couple Photo with Atmospheric Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/couple_photo.jpg"
          alt="Our Photo"
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        <div className="absolute inset-0 bg-brown-900/20 mix-blend-overlay" />
      </div>

      <StardustParticles />

      <div className="absolute inset-3 sm:inset-5 z-20 pointer-events-none border border-cream-200/30 rounded-2xl sm:rounded-3xl luxury-border-dark">
        <span className="absolute -top-1.5 -left-1.5 text-cream-200/80 text-xs">✦</span>
        <span className="absolute -top-1.5 -right-1.5 text-cream-200/80 text-xs">✦</span>
        <span className="absolute -bottom-1.5 -left-1.5 text-cream-200/80 text-xs">✦</span>
        <span className="absolute -bottom-1.5 -right-1.5 text-cream-200/80 text-xs">✦</span>
      </div>

      <main className="relative z-30 w-full max-w-md mx-auto my-auto flex flex-col items-center text-center py-4 px-2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] } as any}
          className="relative mb-6 flex items-center justify-center"
        >
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-20 h-20 rounded-full border border-cream-200/30 pointer-events-none"
            />
          )}
          <div className="w-18 h-18 rounded-full bg-gradient-to-br from-cream-200/20 via-brown-700/40 to-ink-950 border border-cream-200/50 flex items-center justify-center text-cream-200 shadow-2xl backdrop-blur-md p-3">
            <InteractiveHeart size={32} initialLiked={true} className="hover:bg-cream-200/10" />
          </div>
        </motion.div>

        <div className="flex items-center gap-3 w-40 mb-3 text-cream-200/40">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cream-200/40" />
          <span className="text-xs text-cream-200/70">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cream-200/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] } as any}
          className="space-y-3.5 max-w-sm"
        >
          <span className="font-caveat text-2xl sm:text-3xl text-cream-200 block drop-shadow-md">
            Untuk {content.nickname},
          </span>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-cream-50 leading-tight font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            “{content.closing}”
          </h1>

          <p className="font-cormorant text-xl sm:text-2xl text-cream-100/95 leading-relaxed pt-3 font-normal max-w-sm drop-shadow-md">
            Mari terus saling memilih, saling menguatkan, dan bertumbuh bersama sampai rambut kita memutih nanti.
          </p>

          <div className="pt-2">
            <span className="block font-great-vibes text-3xl sm:text-4xl text-cream-200 drop-shadow-lg">
              Happy Birthday, Sayang ♡
            </span>
          </div>
        </motion.div>
      </main>

      <BottomNavBar
        onPrev={onPrev}
        onReplay={onReplay}
        prevLabel="Surat"
        isDark={true}
        isLast={true}
      />
    </div>
  );
};

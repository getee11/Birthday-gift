import React from "react";
import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import { content } from "../content";
import { StardustParticles } from "./StardustParticles";
import { InteractiveHeart } from "./InteractiveHeart";

interface CoverPageProps {
  onStart: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onStart }) => {
  return (
    <div className="relative w-full min-h-[100dvh] paper-texture text-ink-800 flex flex-col justify-between px-5 pt-16 pb-24 select-none overflow-hidden">
      <StardustParticles />

      {/* Magazine Double Frame Border */}
      <div className="absolute inset-3 sm:inset-5 pointer-events-none border-2 border-brown-700/20 rounded-2xl flex flex-col justify-between p-2">
        <div className="flex justify-between items-center text-[10px] tracking-widest font-dm-sans text-brown-700/70 uppercase px-2">
          <span>Vol. XIX No. 11</span>
          <span>Special Birthday Edition</span>
          <span>20 November 2026</span>
        </div>
        <div className="flex justify-between items-center text-[10px] tracking-widest font-dm-sans text-brown-700/70 uppercase px-2">
          <span>Exclusive Release</span>
          <span>✦ For Gla ✦</span>
          <span>All Rights Reserved</span>
        </div>
      </div>

      {/* Main Cover Content */}
      <main className="relative z-10 w-full max-w-md mx-auto my-auto flex flex-col items-center text-center py-6 px-3">
        {/* Newspaper Header Title */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] } as any}
          className="w-full border-y-2 border-brown-700/30 py-4 mb-6"
        >
          <span className="font-dm-sans text-xs tracking-[0.3em] uppercase text-brown-700/80 block mb-1">
            The Daily Celebration of Love
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brown-700">
            {content.coverGreeting}
          </h1>
          <p className="font-cormorant text-sm sm:text-base italic text-ink-800/80 mt-1">
            {content.coverSubtitle}
          </p>
        </motion.div>

        {/* Featured Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] } as any}
          className="relative w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(90,56,37,0.2)] border-4 border-cream-50 bg-cream-200/50 mb-6 group"
        >
          <div className="absolute top-3 right-3 z-20">
            <InteractiveHeart size={18} className="bg-cream-50/80 backdrop-blur-md shadow-sm" />
          </div>
          <img src="/gla.jpg" alt={content.name} className="w-full h-full object-cover" />
        </motion.div>

        {/* Intro Prose */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] } as any}
          className="space-y-3 max-w-sm mb-8"
        >
          <p className="font-cormorant text-lg sm:text-xl text-ink-800 leading-relaxed italic">
            “At {content.age}, she stands at the quiet crossroad between everything she’s already become and everything she’s still becoming.”
          </p>
          <div className="flex items-center justify-center gap-2 text-brown-700/80">
            <Sparkles className="w-4 h-4" />
            <span className="font-caveat text-xl sm:text-2xl font-semibold">Special Edition for {content.nickname}</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] } as any}
          className="w-full max-w-xs"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            type="button"
            className="w-full py-4 rounded-full bg-brown-700 hover:bg-brown-700/90 text-cream-50 font-dm-sans text-sm tracking-[0.2em] uppercase font-bold shadow-xl transition-all border border-cream-200/40 flex items-center justify-center gap-2"
          >
            <span>Buka Edisi Khusus</span>
            <Heart className="w-4 h-4 fill-cream-50" />
          </motion.button>
        </motion.div>
      </main>

      {/* Bottom Footer copyright */}
      <footer className="absolute bottom-3 left-0 right-0 text-center font-dm-sans text-[11px] text-brown-700/60 uppercase tracking-widest">
        Published with Love for {content.name} • 2026
      </footer>
    </div>
  );
};

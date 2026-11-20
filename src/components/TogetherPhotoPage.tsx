import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Heart, MessageCircle } from "lucide-react";
import { content } from "../content";
import { StardustParticles } from "./StardustParticles";
import { InteractiveHeart } from "./InteractiveHeart";
import { BottomNavBar } from "./BottomNavBar";

interface TogetherPhotoPageProps {
  onNext: () => void;
  onPrev: () => void;
}

export const TogetherPhotoPage: React.FC<TogetherPhotoPageProps> = ({ onNext, onPrev }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden paper-texture text-ink-800 flex flex-col justify-between px-4 sm:px-6 pt-20 pb-24 select-none">
      <StardustParticles />

      {/* Decorative Corner Ornaments for Photobook page */}
      <div className="absolute inset-3 sm:inset-5 pointer-events-none border border-brown-700/10 rounded-2xl sm:rounded-3xl luxury-border">
        <span className="absolute top-2 left-2 text-brown-700/30 text-xs font-serif">❦</span>
        <span className="absolute top-2 right-2 text-brown-700/30 text-xs font-serif">❦</span>
        <span className="absolute bottom-2 left-2 text-brown-700/30 text-xs font-serif">❦</span>
        <span className="absolute bottom-2 right-2 text-brown-700/30 text-xs font-serif">❦</span>
      </div>

      <main className="relative z-10 w-full max-w-md mx-auto my-auto flex flex-col items-center text-center py-2 px-1">
        {/* Chapter Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] } as any}
          className="mb-8 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-cream-50/80 border border-brown-700/20 shadow-lg backdrop-blur-md"
        >
          <MessageCircle className="w-5 h-5 text-brown-700" />
          <span className="font-caveat text-2xl sm:text-3xl font-bold text-brown-700 tracking-wide">
            Chapter I: Awal Kita Kenal
          </span>
        </motion.div>

        {/* Photo Frame */}
        <div className="w-full p-4 sm:p-5 bg-[#FCFAF6]/95 rounded-3xl border border-cream-250 shadow-[0_20px_50px_rgba(90,56,37,0.15)] relative backdrop-blur-xl">
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brown-700/30 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brown-700/30 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brown-700/30 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brown-700/30 pointer-events-none" />

          <div className="absolute top-3 right-3 z-20">
            <InteractiveHeart size={18} className="bg-cream-50/80 backdrop-blur-sm border border-brown-700/15 shadow-sm" />
          </div>

          <div className="p-1 rounded-xl border border-latte/40 bg-cream-50/50">
            <div className="w-full rounded-lg overflow-hidden relative bg-cream-200/40 shadow-inner flex items-center justify-center min-h-[480px] sm:min-h-[640px]">
              <img src="/dm_screenshot.jpg" alt="DM TikTok Pertama" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 px-1 text-[11px] font-dm-sans text-brown-700/60 tracking-widest uppercase font-medium">
            <span>Archive No. 01</span>
            <span className="font-serif italic font-normal text-muted-accent">✦ TikTok Spark</span>
            <span>19th</span>
          </div>
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: shouldReduceMotion ? 0.2 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          } as any}
          className="mt-4 px-2 max-w-sm"
        >
          <div className="p-3.5 sm:p-4 rounded-xl bg-cream-200/35 border border-cream-200/80 shadow-sm relative">
            <span className="font-serif text-3xl text-brown-700/20 absolute top-1 left-2 select-none leading-none">“</span>
            <p className="font-cormorant text-base sm:text-lg text-ink-800 leading-relaxed font-normal pt-1 px-2">
              {content.togetherCaption}
            </p>
            <span className="font-serif text-3xl text-brown-700/20 absolute bottom-1 right-2 select-none leading-none">”</span>
          </div>

          <span className="inline-flex items-center gap-1.5 font-dm-sans text-xs text-muted-accent font-semibold mt-2.5 tracking-wider uppercase">
            <Heart className="w-3 h-3 fill-muted-accent/30" />
            <span>Momen yang selalu tersimpan</span>
            <Heart className="w-3 h-3 fill-muted-accent/30" />
          </span>
        </motion.div>
      </main>

      <BottomNavBar
        onPrev={onPrev}
        onNext={onNext}
        prevLabel="Sampul"
        nextLabel="Timeline"
      />
    </div>
  );
};

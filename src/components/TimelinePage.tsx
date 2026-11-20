import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { content } from "../content";
import { StardustParticles } from "./StardustParticles";
import { InteractiveHeart } from "./InteractiveHeart";
import { BottomNavBar } from "./BottomNavBar";

interface TimelinePageProps {
  onNext: () => void;
  onPrev: () => void;
}

export const TimelinePage: React.FC<TimelinePageProps> = ({ onNext, onPrev }) => {
  return (
    <div className="relative w-full min-h-[100dvh] paper-texture text-ink-800 flex flex-col justify-between px-4 sm:px-6 pt-20 pb-28 select-none">
      <StardustParticles />

      <main className="relative z-10 w-full max-w-lg mx-auto flex-1 py-2 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 pt-2 space-y-2"
        >
          <div className="inline-flex items-center gap-2 text-brown-700/85 px-3.5 py-1 rounded-full bg-cream-200/50 border border-brown-700/15 shadow-xs">
            <Sparkles className="w-4 h-4" />
            <span className="font-caveat text-2xl sm:text-3xl font-semibold">Perjalanan & Kenangan</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl text-brown-700 font-bold tracking-tight">
            Langkah-Langkah Kita
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-ink-800/90 italic">
            Setiap tanggal punya cerita yang tak terlupakan
          </p>
        </motion.div>

        <div className="space-y-4 w-full">
          {content.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-2xl bg-[#FCFAF6]/95 border border-cream-200 shadow-lg relative backdrop-blur-md"
            >
              <div className="absolute top-4 right-4 z-10">
                <InteractiveHeart size={16} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cream-200 text-[11px] font-dm-sans text-brown-700 font-bold tracking-wider uppercase">
                  {item.tanggal}
                </span>
                <span className="text-xs text-muted-accent font-serif italic">{item.tag}</span>
              </div>

              <h3 className="font-playfair text-xl sm:text-2xl text-brown-700 font-bold mb-1.5">
                {item.judul}
              </h3>

              <p className="font-cormorant text-base sm:text-lg text-ink-800/90 leading-relaxed font-normal">
                {item.cerita}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <BottomNavBar
        onPrev={onPrev}
        onNext={onNext}
        prevLabel="Momen"
        nextLabel="Surat Cinta"
      />
    </div>
  );
};

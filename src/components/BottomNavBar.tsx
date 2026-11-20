import React from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { motion } from "motion/react";

interface BottomNavBarProps {
  onNext?: () => void;
  onPrev?: () => void;
  onReplay?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  isDark?: boolean;
  isLast?: boolean;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  onNext,
  onPrev,
  onReplay,
  nextLabel = "Lanjut",
  prevLabel = "Kembali",
  isDark = false,
  isLast = false,
}) => {
  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 px-5 sm:px-8 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] transition-colors duration-500 backdrop-blur-md ${
        isDark
          ? "bg-gradient-to-t from-ink-950 via-ink-950/90 to-transparent border-t border-cream-200/15 text-cream-50"
          : "bg-gradient-to-t from-cream-50 via-cream-50/95 to-transparent border-t border-brown-700/15 text-ink-800"
      }`}
    >
      <div className="w-full max-w-xl mx-auto flex items-center justify-between gap-4">
        {/* Previous Button (Left aligned strictly) */}
        {onPrev ? (
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onPrev}
            type="button"
            className={`touch-target px-5 py-3 rounded-full font-dm-sans text-xs sm:text-sm tracking-wider uppercase font-bold transition-all flex items-center gap-1.5 border shadow-sm ${
              isDark
                ? "border-cream-200/40 text-cream-200 bg-cream-50/5 hover:bg-cream-50/15"
                : "border-brown-700/30 text-brown-700 bg-cream-200/70 hover:bg-cream-200"
            }`}
            aria-label={`Kembali ke ${prevLabel}`}
          >
            <ChevronLeft className="w-4 h-4 mr-0.5 inline" />
            <span>{prevLabel}</span>
          </motion.button>
        ) : (
          <div className="w-24" />
        )}

        {/* Next or Replay Button (Right aligned strictly) */}
        {isLast ? (
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onReplay}
            type="button"
            className="touch-target px-7 py-3.5 rounded-full font-dm-sans text-xs sm:text-sm tracking-widest uppercase font-bold bg-gradient-to-r from-brown-700 via-[#8A5F49] to-brown-700 text-cream-50 border border-cream-200/40 shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            aria-label="Putar kembali cerita dari awal"
          >
            <RotateCcw className="w-4 h-4 text-cream-200" />
            <span>Lihat Cerita Lagi</span>
          </motion.button>
        ) : onNext ? (
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={onNext}
            type="button"
            className={`touch-target px-7 py-3.5 rounded-full font-dm-sans text-xs sm:text-sm tracking-widest uppercase font-bold text-cream-50 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 ${
              isDark
                ? "bg-gradient-to-r from-brown-700 via-[#8A5F49] to-brown-700 border border-cream-200/50"
                : "bg-brown-700 hover:bg-brown-700/90 border border-brown-700"
            }`}
            aria-label={`Lanjut ke ${nextLabel}`}
          >
            <span>{nextLabel}</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        ) : null}
      </div>
    </nav>
  );
};

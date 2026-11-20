import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FastForward, Heart } from "lucide-react";
import { content } from "../content";
import { BottomNavBar } from "./BottomNavBar";
import { InteractiveHeart } from "./InteractiveHeart";

interface LetterPageProps {
  onNext: () => void;
  onPrev: () => void;
}

export const LetterPage: React.FC<LetterPageProps> = ({ onNext, onPrev }) => {
  const shouldReduceMotion = useReducedMotion();
  const letterText = content.letter;

  const [charIndex, setCharIndex] = useState<number>(() =>
    shouldReduceMotion ? letterText.length : 0
  );
  const [isFinished, setIsFinished] = useState<boolean>(
    () => !!shouldReduceMotion
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion || isFinished || charIndex >= letterText.length) return;

    const currentChar = letterText[charIndex];
    let delay = 22;
    if (currentChar === "." || currentChar === "!" || currentChar === "?") {
      delay = 260;
    } else if (currentChar === "," || currentChar === "—") {
      delay = 160;
    } else if (currentChar === "\n") {
      delay = 210;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => {
        const next = prev + 1;
        if (next >= letterText.length) setIsFinished(true);
        return next;
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isFinished, letterText, shouldReduceMotion]);

  const handleSkipAnimation = () => {
    setCharIndex(letterText.length);
    setIsFinished(true);
  };

  const displayedText = isFinished ? letterText : letterText.slice(0, charIndex);
  const progressPercent = Math.min(100, Math.round((charIndex / letterText.length) * 100));

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[100dvh] paper-texture text-ink-800 flex flex-col justify-between px-4 sm:px-6 pt-20 pb-28 select-none"
    >
      <div className="absolute inset-2 sm:inset-4 pointer-events-none border border-brown-700/10 rounded-2xl sm:rounded-3xl luxury-border" />

      <main className="relative z-10 w-full max-w-lg mx-auto flex-1 py-2">
        <div className="flex items-center justify-between gap-3 mb-3 px-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/50 border border-brown-700/15 text-[11px] font-dm-sans text-brown-700 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brown-700 animate-pulse" />
            <span>{isFinished ? "Surat Lengkap" : `Mengetik... ${progressPercent}%`}</span>
          </div>
          {!isFinished && (
            <button
              onClick={handleSkipAnimation}
              type="button"
              className="touch-target inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-brown-700/25 bg-cream-200/70 hover:bg-cream-200 text-brown-700 font-dm-sans text-xs font-semibold active:scale-95 transition-all shadow-sm"
              aria-label="Lewati animasi mengetik surat"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>Lewati Animasi</span>
            </button>
          )}
        </div>

        <div className="relative w-full">
          <div className="absolute inset-0 bg-cream-200/60 rounded-2xl rotate-1 scale-[0.99] border border-brown-700/15 shadow-sm pointer-events-none" />

          <div
            className="relative w-full p-6 sm:p-8 rounded-2xl bg-[#FCFAF6] border border-cream-200 shadow-xl transition-all"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 31px, rgba(185, 154, 130, 0.12) 31px, rgba(185, 154, 130, 0.12) 32px)",
              backgroundAttachment: "local",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-8" />
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brown-700 via-[#825641] to-[#5A3825] text-cream-50 flex items-center justify-center shadow-lg border-2 border-cream-200/60">
                  <Heart className="w-5 h-5 fill-cream-50/40 text-cream-50" />
                </div>
                <span className="font-dm-sans text-[10px] tracking-widest uppercase text-brown-700/70 font-semibold pt-1">
                  Private & Personal
                </span>
              </div>
              <InteractiveHeart size={18} className="bg-cream-200/50 border border-brown-700/15 shadow-sm" />
            </div>

            <div className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#2B1E19] leading-[44px] sm:leading-[50px] font-normal whitespace-pre-line tracking-tight">
              {displayedText}
              {!isFinished && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-2 h-6 sm:h-7 bg-brown-700 ml-1 align-middle"
                  aria-hidden="true"
                />
              )}
            </div>

            {isFinished && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 pt-6 border-t border-brown-700/20 text-right"
              >
                <span className="block font-cormorant text-sm italic text-ink-800/80 mb-1">
                  {content.signature},
                </span>
                <span className="font-great-vibes text-3xl sm:text-4xl text-brown-700 drop-shadow-sm inline-block">
                  Untuk {content.nickname} ♡
                </span>
                <span className="block font-caveat text-base text-muted-accent pt-1">
                  Selalu ada doa terbaik untukmu di setiap hari.
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <BottomNavBar
        onPrev={onPrev}
        onNext={onNext}
        prevLabel="Timeline"
        nextLabel="Kejutan Penutup"
      />
    </div>
  );
};

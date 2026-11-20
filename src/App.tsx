import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CoverPage } from "./components/CoverPage";
import { TogetherPhotoPage } from "./components/TogetherPhotoPage";
import { TimelinePage } from "./components/TimelinePage";
import { LetterPage } from "./components/LetterPage";
import { ClosingPage } from "./components/ClosingPage";


export const App: React.FC = () => {
  const [step, setStep] = useState<"cover" | "photo" | "timeline" | "letter" | "closing">(
    "cover"
  );

  const pageVariant = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } as any,

  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={pageVariant.initial}
        animate={pageVariant.animate}
        exit={pageVariant.exit}
        transition={pageVariant.transition}
        className="min-h-[100dvh] w-full"
      >
        {step === "cover" && (
          <CoverPage onStart={() => setStep("photo")} />
        )}
        {step === "photo" && (
          <TogetherPhotoPage onNext={() => setStep("timeline")} onPrev={() => setStep("cover")} />
        )}
        {step === "timeline" && (
          <TimelinePage onNext={() => setStep("letter")} onPrev={() => setStep("photo")} />
        )}
        {step === "letter" && (
          <LetterPage onNext={() => setStep("closing")} onPrev={() => setStep("timeline")} />
        )}
        {step === "closing" && (
          <ClosingPage onPrev={() => setStep("letter")} onReplay={() => setStep("cover")} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default App;

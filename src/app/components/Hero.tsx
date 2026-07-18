import { motion, useReducedMotion } from "motion/react";
import { CoordinatesNote } from "./CoordinatesNote";
import { SerifDisplay } from "./SerifDisplay";

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const revealInitial = prefersReducedMotion ? false : { opacity: 0, y: 24 };
  const revealTransition = { duration: 0.74, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section id="intro" className="paper-bg relative flex min-h-[100svh] items-center overflow-hidden bg-[#F9F6F0] px-6 pb-16 pt-28 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <svg width="100%" height="100%" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true">
          <path d="M80 620 C320 470 392 210 650 276 C870 332 960 206 1160 118" stroke="#0F766E" strokeWidth="1" strokeOpacity="0.1" fill="none" />
          <path d="M214 720 C386 520 456 455 644 468 C826 481 884 588 1090 500" stroke="#2C2621" strokeWidth="1" strokeOpacity="0.07" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={revealInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
              className="mb-8 flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.22em] text-[#0F766E]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
              Computer Science @ University of Bristol
            </motion.div>

            <motion.div
              initial={revealInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
            >
              <SerifDisplay
                as="h1"
                className="mb-9 text-[clamp(5.8rem,16vw,13.5rem)] leading-[0.82] tracking-[-0.035em] text-[#2C2621]"
              >
                Jinni Li<span className="text-[#C2410C]">.</span>
              </SerifDisplay>
            </motion.div>

            <motion.p
              initial={revealInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.16 }}
              className="mb-8 max-w-3xl text-xl font-light leading-snug text-[#2C2621] md:text-3xl xl:text-[2.1rem]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I build useful software where data, AI, and product ideas become reliable systems.
            </motion.p>

            <motion.p
              initial={revealInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.24 }}
              className="max-w-2xl text-base font-light leading-7 text-[#2C2621]/78 md:text-lg"
            >
              I’m especially interested in turning messy workflows into reliable tools that people can actually use.
            </motion.p>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, rotate: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: -0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.32 }}
            className="relative flex min-h-[24rem] items-center justify-start lg:col-span-5 lg:min-h-[40rem] lg:justify-end xl:col-span-4"
          >
            <CoordinatesNote className="bg-[#F9F6F0]/88 backdrop-blur-[1px] lg:max-w-[25rem] lg:px-7 lg:py-7 xl:max-w-[26rem]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

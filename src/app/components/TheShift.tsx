import { motion } from "motion/react";
import { useRevealMotion } from "../../hooks/useRevealMotion";
import { SerifDisplay } from "./SerifDisplay";

const steps = [
  {
    label: "Workflows",
    note: "real-world context",
  },
  {
    label: "Data flows",
    note: "structure and movement",
  },
  {
    label: "Automation",
    note: "repeatable systems",
  },
  {
    label: "Useful tools",
    note: "product value",
  },
];

export function TheShift() {
  const { prefersReducedMotion, revealInitial, revealTransition } = useRevealMotion();

  return (
    <section id="shift" className="paper-bg relative flex min-h-[100svh] items-center overflow-hidden bg-[#F9F6F0] px-6 py-10 text-[#2C2621] lg:px-12 lg:py-12">
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={revealInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={revealTransition}
            >
              <SerifDisplay className="mb-8 text-6xl leading-[0.88] tracking-tighter text-[#2C2621] md:text-8xl lg:text-[7rem]">
                The Shift.
              </SerifDisplay>
              <p
                className="max-w-2xl text-2xl font-light leading-relaxed text-[#2C2621]/76 md:text-3xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                From workflows to systems people can actually use.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col justify-end lg:col-span-11 lg:col-start-7 xl:col-start-7">
            <motion.p
              initial={revealInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
              className="mb-5 text-lg font-light leading-relaxed text-[#2C2621]/90"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I started close to real-world workflows: operations, data, decisions, and the messy details that make tools succeed or fail.
            </motion.p>

            <motion.p
              initial={revealInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.12 }}
              className="mb-6 text-lg font-light leading-relaxed text-[#2C2621]/90"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Over time, I became more interested in building the <span className="font-medium text-[#0F766E]">systems underneath</span> — the data flows, automation, infrastructure, and interfaces that turn ideas into something reliable and usable.
            </motion.p>

            <motion.p
              initial={revealInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.16 }}
              className="text-base font-medium leading-relaxed text-[#C2410C] md:text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              That's the direction I'm following now: data infrastructure, AI-enabled tools, and product-minded engineering.
            </motion.p>
          </div>
        </div>

        <div className="-mx-6 mt-10 pt-5 md:mt-12 md:pt-6 lg:-mx-12">
          <div className="relative">
            <div className="absolute top-2.5 hidden h-px bg-[#2C2621]/18 md:left-[6rem] md:right-[6rem] md:block lg:left-[7rem] lg:right-[7rem]" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-5 px-6 sm:grid-cols-2 md:flex md:w-full md:items-start md:justify-between md:gap-8 lg:px-6">
              {steps.map((step, i) => {
                const isDestination = i === steps.length - 1;

                return (
                  <motion.div
                    key={step.label}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                      delay: prefersReducedMotion ? 0 : i * 0.12,
                    }}
                    className="relative z-10 flex items-center gap-3 md:w-40 md:flex-col md:items-center md:gap-4 md:text-center"
                  >
                    <span
                      className={`shrink-0 rounded-full ring-4 ring-[#F9F6F0] md:ring-6 ${
                        isDestination ? "h-[1.125rem] w-[1.125rem] bg-[#C2410C] md:h-5 md:w-5" : "h-3.5 w-3.5 bg-[#0F766E] md:h-[1.125rem] md:w-[1.125rem]"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="flex flex-col gap-1 md:items-center md:text-center">
                      <span
                        className={`font-mono text-[0.95rem] font-bold uppercase tracking-[0.12em] md:text-base ${
                          isDestination ? "text-[#C2410C]" : "text-[#0F766E]"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[0.95rem] font-light leading-snug text-[#2C2621]/60 md:text-base">
                        {step.note}
                      </span>
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

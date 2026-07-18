import { motion } from "motion/react";
import { useRevealMotion } from "../../hooks/useRevealMotion";
import { SerifDisplay } from "./SerifDisplay";

const clusters = [
  {
    name: "Programming",
    items: ["Python", "C++", "C", "Java", "JavaScript"],
    tone: "system",
  },
  {
    name: "Data & ML",
    items: ["pandas", "scikit-learn", "XGBoost", "SHAP", "Optuna"],
    tone: "system",
  },
  {
    name: "Cloud & Automation",
    items: ["AWS Lambda", "S3", "Git", "Linux"],
    tone: "system",
  },
  {
    name: "Systems Direction",
    items: ["Distributed systems", "streaming algorithms", "system design"],
    tone: "system",
  },
  {
    name: "Product Engineering",
    items: ["Workflow thinking", "usability", "analytics", "business context"],
    tone: "story",
  },
  {
    name: "Creative Engineering",
    items: ["Visual storytelling", "creative coding", "interaction design"],
    tone: "story",
  },
];

export function Toolkit() {
  const { prefersReducedMotion, revealInitial, revealTransition } = useRevealMotion(16);

  return (
    <section id="toolkit" className="min-h-[100svh] bg-[#F9F6F0] px-6 py-10 paper-bg lg:px-12 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-b border-[#2C2621]/15 pb-8 mb-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={revealInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={revealTransition}
          >
            <SerifDisplay className="text-5xl md:text-7xl lg:text-[6rem] text-[#2C2621] tracking-tighter max-w-5xl leading-[0.9]">
              The stack under the hood.
            </SerifDisplay>
          </motion.div>
        </div>
        <div className="lg:col-span-5 flex items-end">
          <motion.p
            initial={revealInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="max-w-xl text-base md:text-lg leading-relaxed text-[#2C2621]/78 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A practical stack for turning messy inputs into structured systems, reliable tools, and product-facing AI workflows.
          </motion.p>
        </div>
      </div>

      <div className="relative">
        <svg
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none"
          viewBox="0 0 1200 560"
          preserveAspectRatio="none"
        >
          <path d="M 190 145 C 360 120, 420 120, 600 145 S 850 170, 1010 145" fill="none" stroke="#0F766E" strokeWidth="1" strokeOpacity="0.2" />
          <path d="M 190 285 C 360 260, 430 260, 600 285 S 840 310, 1010 285" fill="none" stroke="#0F766E" strokeWidth="1" strokeOpacity="0.16" />
          <path d="M 190 425 C 360 400, 420 400, 600 425 S 850 450, 1010 425" fill="none" stroke="#C2410C" strokeWidth="1" strokeOpacity="0.18" />
          <path d="M 400 95 L 400 475" fill="none" stroke="#2C2621" strokeWidth="1" strokeDasharray="3 8" strokeOpacity="0.12" />
          <path d="M 800 95 L 800 475" fill="none" stroke="#2C2621" strokeWidth="1" strokeDasharray="3 8" strokeOpacity="0.12" />
        </svg>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {clusters.map((cluster, i) => {
            const isStory = cluster.tone === "story";
            const accent = isStory ? "#C2410C" : "#0F766E";

            return (
              <motion.article
                key={cluster.name}
                initial={revealInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  ...revealTransition,
                  delay: prefersReducedMotion ? 0 : Math.min(i * 0.04, 0.18),
                }}
                className="group relative min-h-[142px] bg-[#F9F6F0]/82 backdrop-blur-[1px] border border-[#2C2621]/12 px-5 py-5 md:px-6 md:py-5 hover:border-[#2C2621]/28 hover:bg-[#F9F6F0]/94 transition-colors"
              >
                <div
                  className="absolute -left-1 top-8 h-px w-6 opacity-60"
                  style={{ backgroundColor: accent }}
                />

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full ring-4 ring-[#F9F6F0]"
                      style={{ backgroundColor: accent }}
                    />
                    <h3 className="text-[11px] font-mono uppercase tracking-[0.22em] font-bold text-[#2C2621]">
                      {cluster.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#2C2621]/38">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {cluster.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="text-sm md:text-[15px] leading-relaxed text-[#2C2621]/82"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                      {itemIndex < cluster.items.length - 1 && (
                        <span className="ml-3 text-[#2C2621]/25">/</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <div className="h-px flex-1 bg-[#2C2621]/10" />
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {isStory ? "story layer" : "system layer"}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

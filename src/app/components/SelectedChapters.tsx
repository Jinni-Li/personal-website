import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useRevealMotion } from "../../hooks/useRevealMotion";
import { SerifDisplay } from "./SerifDisplay";

const chapterPreview = [
  {
    title: "l0-stream-sampler",
    role: "MSc thesis project",
    period: "In progress",
    summary: "A research project on sampling dynamic data streams efficiently under memory constraints.",
    tags: ["streaming algorithms", "C++", "systems"],
    accent: "#0F766E",
  },
  {
    title: "University of Bristol",
    role: "MSc Computer Science",
    period: "Sep 2025 to Sep 2026",
    summary: "A deeper technical foundation in software engineering, streaming algorithms, and scalable data systems.",
    tags: ["systems", "algorithms", "software", "C/C++", "java"],
    accent: "#0F766E",
  },
  {
    title: "Amazon",
    role: "Logistics Analyst",
    period: "Jun 2024 to Sep 2025",
    summary: "Automation tools and reporting pipelines shaped around real operational workflows, reliability, and time saved.",
    tags: ["operations", "automation", "workflows", "AWS Lambda", "S3"],
    accent: "#C2410C",
  },
  {
    title: "Product & Data Foundation",
    role: "UPF · Ipsos · UOC",
    period: "FOUNDATIONS",
    summary: "Business, research, and data science shaped how I think about users, workflows, decisions, and useful systems.",
    tags: ["research", "AI", "ML", "product thinking", "business context"],
    accent: "#C2410C",
  },
];

export function SelectedChapters() {
  const { prefersReducedMotion, revealInitial, revealTransition } = useRevealMotion();

  return (
    <section id="experience" className="paper-bg relative min-h-[100svh] overflow-hidden bg-[#F9F6F0] px-6 py-10 lg:px-12 lg:py-12">
      <div className="mb-8 grid grid-cols-1 gap-6 border-b border-[#2C2621]/20 pb-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.div
            initial={revealInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={revealTransition}
          >
            <SerifDisplay className="text-5xl leading-[0.9] tracking-[-0.035em] text-[#2C2621] md:text-7xl lg:text-[6rem]">
              Selected chapters.
            </SerifDisplay>
          </motion.div>
        </div>
        <div className="flex items-end lg:col-span-4">
          <motion.p
            initial={revealInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="max-w-xl text-lg font-light leading-relaxed text-[#2C2621]/78"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A few chapters that shaped how I build, think, and choose what to work on.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-[#C2410C]/20 md:left-[42%]" />

        <div className="space-y-3">
          {chapterPreview.map((entry, i) => (
            <motion.article
              key={entry.title}
              initial={revealInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                ...revealTransition,
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : i * 0.06,
              }}
              className="group relative grid gap-4 py-4 pl-12 transition-colors hover:bg-white/35 md:grid-cols-[40%_50%] md:gap-16 md:pl-0"
            >
              <Link to="/experience" className="absolute inset-0 z-10" aria-label={`Open experience page for ${entry.title}`} />

              <div
                className="absolute left-4 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#F9F6F0] md:left-[42%]"
                style={{ backgroundColor: entry.accent }}
              />

              <div className="md:text-right">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#2C2621]/48">
                  {String(i + 1).padStart(2, "0")} / {entry.period}
                </div>
                <div
                  className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: entry.accent }}
                >
                  {entry.role}
                </div>
              </div>

              <div className="relative z-0 max-w-3xl">
                <h3 className="font-serif text-2xl leading-tight text-[#2C2621] transition-colors group-hover:text-[#C2410C] md:text-[1.7rem]">
                  {entry.title}
                </h3>
                <p className="mt-2 text-base font-light leading-6 text-[#2C2621]/82 md:text-[1.05rem]">
                  {entry.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#0F766E]/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#2C2621]/62"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-10 flex justify-end pt-6">
        <Link to="/experience" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2C2621] transition-colors hover:text-[#C2410C]">
          Explore full journey
          <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
}

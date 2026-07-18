import { ArrowUpRight, Map, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { featuredProjects, getProjectPath } from "../../data/projects";
import { useRevealMotion } from "../../hooks/useRevealMotion";
import { SerifDisplay } from "./SerifDisplay";

export function SelectedProjects() {
  const { prefersReducedMotion, revealInitial, revealTransition } = useRevealMotion();

  return (
    <section id="projects" className="relative flex min-h-[100svh] flex-col bg-[#F9F6F0] px-6 py-10 paper-bg lg:px-12 lg:py-12">
      <div className="mb-4 grid grid-cols-1 gap-6 border-b border-[#2C2621]/20 pb-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <motion.div
            initial={revealInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={revealTransition}
          >
            <SerifDisplay className="text-5xl md:text-7xl text-[#2C2621]">Selected projects.</SerifDisplay>
          </motion.div>
        </div>
        <div className="md:col-span-4 flex items-end">
          <motion.p
            initial={revealInitial}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="text-lg font-light opacity-80 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Projects that turn data, algorithms, automation, and interaction ideas into useful systems.
          </motion.p>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col">
        {featuredProjects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={revealInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              ...revealTransition,
              duration: 0.5,
              delay: prefersReducedMotion ? 0 : i * 0.08,
            }}
            className="group relative flex flex-1 items-center overflow-hidden border-b border-[#2C2621]/10 py-7 transition-colors hover:bg-white/45 focus-within:bg-white/50 md:py-8"
          >
            <Link
              to={getProjectPath(project)}
              className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#C2410C]"
              aria-label={`Open case study for ${project.name}`}
            />

            <div className="relative z-20 grid w-full grid-cols-1 items-start gap-6 px-4 pointer-events-none md:grid-cols-12 md:px-0">
              <div className="md:col-span-1 pt-2">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#2C2621]/60">
                  Project 0{i + 1}
                </span>
              </div>

              <div className="md:col-span-5 lg:col-span-4">
                <div className="text-[0.68rem] font-mono uppercase tracking-[0.18em] text-[#C2410C] mb-3">
                  {project.type.split("/")[0]}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-3 text-[#2C2621] group-hover:text-[#0F766E] transition-colors">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[0.68rem] font-mono uppercase tracking-[0.14em] text-[#0F766E] bg-[#0F766E]/10 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 lg:col-span-5 pt-2">
                <p className="text-base md:text-lg text-[#2C2621]/90 leading-relaxed font-light mb-3">
                  {project.summary}
                </p>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#0F766E]/60 flex items-center gap-2">
                  <Map className="w-3 h-3" /> {project.status}
                </div>
              </div>

              <div className="md:col-span-1 lg:col-span-2 pt-2 flex flex-col items-start md:items-end gap-3 pointer-events-auto">
                <Link
                  to={getProjectPath(project)}
                  className="relative z-30 inline-flex min-h-10 items-center gap-2 border border-[#C2410C]/30 px-3 py-2 text-[0.68rem] font-mono uppercase tracking-[0.16em] text-[#C2410C] transition-colors hover:border-[#0F766E]/40 hover:text-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
                >
                  Open case study <ArrowUpRight className="w-3 h-3" />
                </Link>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="relative z-30 inline-flex min-h-10 items-center gap-2 border border-[#2C2621]/14 px-3 py-2 text-[0.68rem] font-mono uppercase tracking-[0.16em] text-[#2C2621]/70 transition-colors hover:border-[#0F766E]/40 hover:text-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <Link to="/projects" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2C2621] hover:text-[#0F766E] transition-colors">
          Explore all projects <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

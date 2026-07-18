import { ArrowUpRight, Github, MoveLeft, Activity } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../../data/projects";
import { PageHeader } from "./PageHeader";
import { SectionLabel } from "./SectionLabel";
import { SerifDisplay } from "./SerifDisplay";

function SystemDiagram({ project }: { project: Project }) {
  return (
    <div className="w-full bg-[#2C2621] relative overflow-hidden border border-[#0F766E]/20 px-6 py-12 md:px-12">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="0" x2="10" y2="100" stroke="#0F766E" strokeWidth="0.2" strokeDasharray="1 2" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#0F766E" strokeWidth="0.2" strokeDasharray="1 2" />
          <line x1="90" y1="0" x2="90" y2="100" stroke="#0F766E" strokeWidth="0.2" strokeDasharray="1 2" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#0F766E" strokeWidth="0.2" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 items-center">
        {project.caseStudy.diagramSteps.map((step, index) => (
          <div key={step} className="relative flex md:block items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative z-10 bg-[#F9F6F0] text-[#2C2621] border border-[#0F766E]/40 p-4 min-h-24 flex flex-col justify-between"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C2410C]">
                0{index + 1}
              </span>
              <span className="font-serif text-lg leading-tight">{step}</span>
            </motion.div>
            {index < project.caseStudy.diagramSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-[#0F766E]/60 -translate-y-1/2 z-0">
                <div className="absolute right-0 top-1/2 w-2 h-2 border-r border-t border-[#0F766E] rotate-45 -translate-y-1/2" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-10 text-[10px] font-mono text-[#0F766E] uppercase tracking-widest">
        Workflow map // Architecture overview
      </div>
    </div>
  );
}

export function ProjectDetailLayout({ project }: { project: Project }) {
  const isPrivate = project.isPrivate;

  return (
    <div className="min-h-screen bg-[#F9F6F0] paper-bg text-[#2C2621] font-sans selection:bg-[#0F766E] selection:text-white">
      <PageHeader
        actionLabel="Back to archive"
        actionTo="/projects"
        icon={<MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />}
      />

      <main className="pt-32 pb-32">
        <header className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
          <div className="mb-12 flex flex-wrap gap-4">
            <div className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-sm ${
              isPrivate
                ? "bg-[#C2410C]/10 text-[#C2410C] border border-[#C2410C]/20"
                : "bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20"
            }`}>
              {project.type}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-sm bg-[#2C2621]/5 text-[#2C2621]/60 flex items-center gap-2">
              <Activity className="w-3 h-3" /> {project.status}
            </div>
          </div>

          <SerifDisplay as="h1" className="text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tighter mb-8 text-[#2C2621]">
            {project.name}
          </SerifDisplay>

          <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed max-w-3xl mb-12 border-l border-[#0F766E]/30 pl-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-[#2C2621]/80 border border-[#2C2621]/20 px-3 py-1.5 bg-white">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2C2621] hover:text-[#0F766E] transition-colors bg-white px-6 py-3 border border-[#2C2621]/10 hover:border-[#0F766E]/30 shadow-sm">
                <Github className="w-4 h-4" /> View repository <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2C2621] hover:text-[#C2410C] transition-colors bg-white px-6 py-3 border border-[#2C2621]/10 hover:border-[#C2410C]/30 shadow-sm">
                Live demo <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-32">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <SectionLabel number="01" title="Why this project exists" />
            </div>
            <div className="md:col-span-8 pt-2">
              <p className="text-lg md:text-xl leading-relaxed font-light text-[#2C2621]">
                {project.caseStudy.why}
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <SectionLabel number="02" title="What I built" lineClass="bg-[#C2410C]" className="text-[#C2410C]" />
            </div>
            <div className="md:col-span-8 pt-2">
              <p className="text-lg md:text-xl leading-relaxed font-light text-[#2C2621]">
                {project.caseStudy.whatIBuilt}
              </p>
            </div>
          </section>

          <section>
            <div className="mb-12">
              <SectionLabel number="03" title="Architecture / workflow" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-light text-[#2C2621] mb-10 max-w-3xl">
              {project.caseStudy.architecture}
            </p>
            <SystemDiagram project={project} />
          </section>

          <section>
            <div className="mb-12">
              <SectionLabel number="04" title="Technical decisions" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.caseStudy.technicalDecisions.map((decision, i) => (
                <div key={decision.title} className="bg-white p-8 border border-[#2C2621]/10 relative group hover:border-[#0F766E]/40 hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0F766E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0F766E] mb-6">
                    Decision // 0{i + 1}
                  </div>
                  <h4 className="text-xl font-serif mb-4 text-[#2C2621]">{decision.title}</h4>
                  <p className="text-sm font-light leading-relaxed text-[#2C2621]/80">
                    {decision.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <SectionLabel number="05" title="Results / impact" lineClass="bg-[#C2410C]" className="text-[#C2410C]" />
            </div>
            <div className="md:col-span-8 pt-2">
              <div className="bg-[#2C2621] text-[#F9F6F0] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-[#0F766E] opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute left-0 bottom-0 w-32 h-32 bg-[#C2410C] opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <p className="text-lg md:text-xl leading-relaxed font-light relative z-10">
                  {project.caseStudy.results}
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-[#2C2621]/20 pt-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C2410C] mb-8 font-bold flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" /> Reflection
              </div>
              <p className="text-2xl md:text-3xl font-serif italic text-[#2C2621] leading-relaxed">
                "{project.caseStudy.reflection}"
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

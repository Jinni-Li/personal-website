import { getProjectsByCategory, projectCategories } from "../../data/projects";
import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { SectionLabel } from "../components/SectionLabel";
import { SerifDisplay } from "../components/SerifDisplay";

const projectSections = [
  { category: projectCategories[0], accent: "#C2410C", compact: false },
  { category: projectCategories[1], accent: "#0F766E", compact: true },
  { category: projectCategories[2], accent: "#C2410C", compact: false },
] as const;

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] paper-bg text-[#2C2621] font-sans selection:bg-[#0F766E] selection:text-white">
      <PageHeader actionLabel="Home" actionTo="/" />

      <main className="pt-32 px-6 lg:px-12 pb-32 max-w-7xl mx-auto">
        <div className="mb-24">
          <SectionLabel number="Index" title="Archive" lineClass="bg-[#0F766E]" className="text-[#0F766E]" />
          <SerifDisplay as="h1" className="text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tighter mb-8 text-[#2C2621]">
            Projects as field notes.
          </SerifDisplay>
          <p className="text-xl font-light opacity-80 leading-relaxed max-w-2xl border-l border-[#0F766E]/30 pl-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Systems, experiments, and useful tools from the place where data, infrastructure, AI, and product ideas meet.
          </p>
        </div>

        <div className="space-y-32">
          {projectSections.map((section) => (
            <section key={section.category}>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: section.accent }} />
                <h2
                  className="text-sm font-mono uppercase tracking-widest font-bold"
                  style={{ color: section.accent }}
                >
                  {section.category}
                </h2>
                <div className="flex-1 h-px bg-[#2C2621]/10 ml-4" />
              </div>
              <div className="flex flex-col w-full">
                {getProjectsByCategory(section.category).map((project) => (
                  <ProjectCard key={project.slug} project={project} compact={section.compact} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

import { ArrowUpRight, Activity } from "lucide-react";
import { Link } from "react-router";
import { getProjectPath, type Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const accentText = project.isPrivate ? "text-[#C2410C]" : "text-[#0F766E]";
  const accentBg = project.isPrivate ? "bg-[#C2410C]" : "bg-[#0F766E]";
  const accentBorder = project.isPrivate ? "hover:border-[#C2410C]/50" : "hover:border-[#0F766E]/50";

  return (
    <article className={`group block border-b border-[#2C2621]/10 ${compact ? "py-8" : "py-10"} hover:bg-white/50 transition-colors relative overflow-hidden`}>
      <Link to={getProjectPath(project)} className="absolute inset-0 z-10" aria-label={`Open case study for ${project.name}`} />
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${accentBg} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-20 px-4 md:px-0 pointer-events-none">
        <div className={compact ? "md:col-span-4" : "md:col-span-5 lg:col-span-4"}>
          <div className={`text-[10px] font-mono uppercase tracking-widest ${accentText} mb-3 flex flex-wrap gap-2`}>
            <span className="border border-current/20 px-2 py-1 bg-white/50">{project.type}</span>
            {project.isPrivate && <span className="border border-current/20 px-2 py-1 bg-white/50">Private system</span>}
          </div>
          <h3 className={`${compact ? "text-2xl" : "text-2xl md:text-3xl"} font-serif mb-4 text-[#2C2621] group-hover:text-[#0F766E] transition-colors`}>
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, compact ? 3 : 5).map((tag) => (
              <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-[#2C2621]/60 bg-[#2C2621]/5 px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={compact ? "md:col-span-5 pt-2" : "md:col-span-5 lg:col-span-6 pt-2"}>
          <p className={`${compact ? "text-sm" : "text-base"} text-[#2C2621]/80 leading-relaxed font-light mb-4`}>
            {project.summary}
          </p>
          <div className={`font-mono text-[10px] uppercase tracking-widest ${accentText} flex items-center gap-2`}>
            <Activity className="w-3 h-3" /> {project.status}
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-2 pt-2 flex flex-col items-start md:items-end gap-3 pointer-events-auto">
          <Link
            to={getProjectPath(project)}
            className={`relative z-30 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest ${accentText} hover:text-[#2C2621] transition-colors border border-transparent ${accentBorder}`}
          >
            Open case study <ArrowUpRight className="w-3 h-3" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="relative z-30 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#2C2621]/60 hover:text-[#0F766E] transition-colors"
            >
              View repo <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

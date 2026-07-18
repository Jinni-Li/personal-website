import { Link, useParams } from "react-router";
import { findProjectBySlug } from "../../data/projects";
import { ProjectDetailLayout } from "../components/ProjectDetailLayout";
import { SerifDisplay } from "../components/SerifDisplay";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] paper-bg text-[#2C2621] px-6 lg:px-12 py-32">
        <main className="max-w-4xl mx-auto">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#C2410C] mb-6">
            Project not found
          </p>
          <SerifDisplay as="h1" className="text-5xl md:text-7xl leading-[0.9] tracking-tight mb-8">
            This case study is not in the archive.
          </SerifDisplay>
          <Link to="/projects" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#0F766E] hover:text-[#C2410C] transition-colors">
            Back to projects
          </Link>
        </main>
      </div>
    );
  }

  return <ProjectDetailLayout project={project} />;
}

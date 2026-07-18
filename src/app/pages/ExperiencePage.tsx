import { ChevronRight, MoveLeft } from "lucide-react";
import { motion } from "motion/react";
import { experienceEntries } from "../../data/experience";
import { links } from "../../data/links";
import { PageHeader } from "../components/PageHeader";
import { SectionLabel } from "../components/SectionLabel";
import { SerifDisplay } from "../components/SerifDisplay";

export function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] paper-bg text-[#2C2621] font-sans selection:bg-[#0F766E] selection:text-white">
      <PageHeader
        actionLabel="Back to chapters"
        actionTo="/#experience"
        icon={<MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />}
      />

      <main className="pt-32 pb-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto mb-28">
          <SectionLabel number="Journey" title="Full path" lineClass="bg-[#C2410C]" className="text-[#C2410C]" />
          <SerifDisplay as="h1" className="text-5xl md:text-7xl mb-8 leading-[0.9]">
            Experience as a path.
          </SerifDisplay>
          <p className="text-xl md:text-2xl font-light opacity-70 leading-relaxed max-w-2xl border-l-2 border-[#0F766E] pl-6">
            From real-world workflows to useful systems across data, AI, and product-minded engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative border-l border-[#2C2621]/10 ml-4 md:ml-auto space-y-24 pb-24">
          {experienceEntries.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-10 md:pl-16 group"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#F9F6F0] border-2 border-[#2C2621] group-hover:border-[#0F766E] group-hover:bg-[#0F766E] transition-colors" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                <h2 className="text-3xl font-serif text-[#2C2621]">{item.organization}</h2>
                <div className="text-sm font-mono opacity-50 tracking-wider">
                  {item.period} // {item.location}
                </div>
              </div>

              <div className="text-sm uppercase tracking-widest font-bold mb-6 text-[#C2410C]">
                {item.role}
              </div>

              <div className="bg-white p-6 md:p-8 border border-[#2C2621]/5 shadow-sm">
                <p className="text-lg leading-relaxed mb-6 font-medium italic opacity-80 border-b border-[#2C2621]/5 pb-6">
                  "{item.summary}"
                </p>

                <ul className="space-y-4 mb-8">
                  {item.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-4 text-base opacity-80 leading-relaxed">
                      <ChevronRight className="w-5 h-5 text-[#0F766E] mt-0.5 shrink-0 opacity-50" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-[#F9F6F0] text-[#2C2621] border border-[#2C2621]/10 rounded-md text-xs font-mono tracking-wider">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center pt-16 border-t border-[#2C2621]/10">
          <a href={links.email} className="inline-flex items-center gap-3 text-lg font-serif italic hover:text-[#0F766E] transition-colors">
            Ready to build? Open a conversation
          </a>
        </div>
      </main>
    </div>
  );
}

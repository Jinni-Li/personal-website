import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { links } from "../../data/links";
import { useRevealMotion } from "../../hooks/useRevealMotion";
import { SerifDisplay } from "./SerifDisplay";

const contactLinks = [
  { label: "GitHub", href: links.github, color: "hover:text-[#0F766E]" },
  { label: "LinkedIn", href: links.linkedin, color: "hover:text-[#C2410C]" },
  { label: "Email", href: links.email, color: "hover:text-[#D4AF37]" },
];

export function Contact() {
  const { prefersReducedMotion, revealInitial, revealTransition } = useRevealMotion();

  return (
    <section id="contact" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#2C2621] px-6 py-12 text-[#F9F6F0] lg:px-32 lg:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,246,240,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(249,246,240,0.24) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "-1px -1px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: "linear-gradient(180deg, rgba(44,38,33,0.1), rgba(44,38,33,0.42))",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={revealInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={revealTransition}
          >
            <SerifDisplay className="mb-10 max-w-6xl text-6xl leading-[0.92] md:text-8xl lg:text-[7.5rem]">
              Let's build useful systems.
            </SerifDisplay>
          </motion.div>

          <motion.p
            initial={revealInitial}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="mb-10 max-w-4xl text-2xl font-light leading-relaxed opacity-80 md:text-3xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Currently looking for graduate/junior software engineering roles around data infrastructure, backend systems, AI-enabled tools, and product-minded engineering.
          </motion.p>
        </div>

        <div className="flex justify-end pb-2">
          <nav className="flex flex-wrap justify-end gap-10 md:gap-24" aria-label="Contact links">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={revealInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  ...revealTransition,
                  delay: prefersReducedMotion ? 0 : 0.16 + index * 0.05,
                }}
                className={`group flex items-center gap-2.5 text-sm font-mono uppercase tracking-[0.22em] text-[#F9F6F0] ${link.color} transition-colors md:text-base`}
              >
                {link.label} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            ))}
          </nav>
        </div>

        <motion.div
          initial={revealInitial}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.34 }}
          className="mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest opacity-40"
        >
          <span>2026 Jinni Li</span>
          <span>Systems / Data / AI-enabled tools</span>
        </motion.div>
      </div>
    </section>
  );
}

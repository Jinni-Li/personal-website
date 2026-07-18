import { motion, useReducedMotion } from "motion/react";
import { SerifDisplay } from "./SerifDisplay";

type FocusArea = {
  title: string;
  description: string;
  accent: "jade" | "terracotta";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
};

const focusAreas: FocusArea[] = [
  {
    title: "Data Infrastructure",
    description: "Reliable paths for moving, shaping, and trusting data.",
    accent: "jade",
    position: "top-left",
  },
  {
    title: "Streaming Algorithms",
    description: "Signals from dynamic data under real constraints.",
    accent: "terracotta",
    position: "bottom-left",
  },
  {
    title: "Distributed Systems",
    description: "State, failure, coordination, and scale.",
    accent: "jade",
    position: "bottom-right",
  },
  {
    title: "AI Infrastructure",
    description: "Practical foundations for AI-powered tools and workflows.",
    accent: "jade",
    position: "top-right",
  },
  {
    title: "Product Engineering",
    description: "Turning messy workflows into usable, reliable tools.",
    accent: "terracotta",
    position: "bottom-center",
  },
];

const accentColor = {
  jade: "#0F766E",
  terracotta: "#C2410C",
};

const positionClass = {
  "top-left": "xl:absolute xl:left-[1.5rem] xl:top-[7rem] xl:max-w-[15rem]",
  "top-right": "xl:absolute xl:right-[5rem] xl:top-[1.5rem] xl:max-w-[15rem] xl:text-right",
  "bottom-left": "xl:absolute xl:left-[5.5rem] xl:bottom-[1.25rem] xl:max-w-[15rem]",
  "bottom-center": "xl:absolute xl:left-1/2 xl:bottom-[0.25rem] xl:max-w-[24rem] xl:-translate-x-1/2 xl:text-center",
  "bottom-right": "xl:absolute xl:right-[1.5rem] xl:bottom-[5rem] xl:max-w-[15rem] xl:text-right",
};

const ruleClass = {
  "top-left": "w-[14rem] md:w-[16rem]",
  "top-right": "w-[12rem] md:w-[15rem]",
  "bottom-left": "w-[11rem] md:w-[13.75rem]",
  "bottom-center": "w-[16rem] md:w-[24rem]",
  "bottom-right": "w-[13rem] md:w-[15.5rem]",
};

const copySpacingClass = {
  "top-left": "mt-5",
  "top-right": "mt-4",
  "bottom-left": "mt-6",
  "bottom-center": "mt-4",
  "bottom-right": "mt-4",
};

function FocusModule({
  area,
  index,
  delay = 0,
  prefersReducedMotion = false,
}: {
  area: FocusArea;
  index: number;
  delay?: number;
  prefersReducedMotion?: boolean;
}) {
  const accent = accentColor[area.accent];
  const isRight = area.position.includes("right");
  const isCenter = area.position === "bottom-center";

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.48,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      className={`group relative max-w-[19rem] ${positionClass[area.position]}`}
    >
      <div
        className={`mb-6 h-px bg-[#2C2621]/16 ${ruleClass[area.position]} ${isRight ? "xl:ml-auto" : ""} ${isCenter ? "xl:mx-auto" : ""}`}
        aria-hidden="true"
      />

      <div className={`mb-8 flex items-center gap-3 ${isRight ? "xl:justify-end" : ""} ${isCenter ? "xl:justify-center" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#2C2621]/46">
          Focus 0{index + 1}
        </span>
      </div>

      <h3
        className="font-mono text-[11px] uppercase leading-6 tracking-[0.28em]"
        style={{ color: accent }}
      >
        {area.title}
      </h3>
      <p className={`${copySpacingClass[area.position]} text-[0.95rem] leading-7 text-[#2C2621]/78`}>
        {area.description}
      </p>
    </motion.article>
  );
}

function SystemsMap() {
  return (
    <div className="relative mx-auto flex min-h-[28rem] w-full max-w-[60rem] items-center justify-center lg:min-h-[31rem] xl:min-h-[37rem]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-[min(88vw,31rem)] lg:w-[min(54vw,36rem)] xl:w-[46rem]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[85%] h-9 w-[62%] -translate-x-1/2 rounded-[50%] bg-[#17130F]/32 blur-xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[87%] h-3 w-[42%] -translate-x-1/2 rounded-[50%] bg-[#17130F]/45 blur-md"
          />
          <div
            className="relative z-10"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, #000 40%, rgba(0,0,0,0.76) 61%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, #000 40%, rgba(0,0,0,0.76) 61%, transparent 80%)",
            }}
          >
            <img
              src="/materials/tree-02.png"
              alt="Floating tree island representing data flows, systems, and useful tools"
              className="relative h-auto w-full object-contain opacity-[1] mix-blend-multiply"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(249,246,240,0.02) 28%, rgba(249,246,240,0.24) 100%, rgba(249,246,240,0.48) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectionHeader({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const revealInitial = prefersReducedMotion ? false : { opacity: 0, y: 18 };
  const revealTransition = { duration: 0.58, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div className="mb-9 grid grid-cols-1 gap-8 border-b border-[#2C2621]/20 pb-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <motion.div
          initial={revealInitial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
        >
          <SerifDisplay className="max-w-5xl text-5xl leading-[0.9] tracking-[-0.035em] text-[#2C2621] md:text-7xl lg:text-[5rem]">
            Where systems become useful.
          </SerifDisplay>
        </motion.div>
      </div>
      <div className="flex items-end lg:col-span-5">
        <motion.p
          initial={revealInitial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
          className="max-w-xl text-base font-light leading-relaxed text-[#2C2621]/78 md:text-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A practical direction: <span className="font-serif italic text-[#0F766E]">data that moves</span>,{" "}
          <span className="font-serif italic text-[#0F766E]">systems that scale</span>,{" "}
          <span className="font-serif italic text-[#C2410C]">AI-enabled workflows</span>, and tools people can actually use.
        </motion.p>
      </div>
    </div>
  );
}

function FocusConnectors() {
  const connectors = [
    {
      path: "M24 123 H272 L414 252",
      accent: "#0F766E",
      node: [414, 252],
    },
    {
      path: "M1170 27 H936 L820 142",
      accent: "#0F766E",
      node: [820, 142],
    },
    {
      path: "M87 538 H300 L420 478",
      accent: "#C2410C",
      node: [420, 478],
    },
    {
      path: "M450 595 H798",
      accent: "#C2410C",
      node: [624, 595],
    },
    {
      path: "M1233 482 H990 L835 396",
      accent: "#0F766E",
      node: [835, 396],
    },
  ];

  return (
    <>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full xl:block"
        viewBox="0 0 1248 752"
        preserveAspectRatio="none"
        shapeRendering="geometricPrecision"
      >
        {connectors.map((connector) => (
          <path
            key={connector.path}
            d={connector.path}
            fill="none"
            stroke="#2C2621"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block" aria-hidden="true">
        {connectors.map((connector) => (
          <span
            key={`${connector.path}-node`}
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              backgroundColor: connector.accent,
              left: `${(connector.node[0] / 1248) * 100}%`,
              top: `${(connector.node[1] / 752) * 100}%`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export function Direction() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const revealInitial = prefersReducedMotion ? false : { opacity: 0, y: 18 };
  const revealTransition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section
      id="signals"
      aria-label="Systems direction and useful tools"
      className="paper-bg relative min-h-[100svh] overflow-hidden bg-[#F9F6F0] px-6 pb-14 pt-20 text-[#2C2621] lg:px-12 lg:py-10"
    >
      <DirectionHeader prefersReducedMotion={prefersReducedMotion} />

      <motion.div
        initial={revealInitial}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.16 }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="relative xl:min-h-[43rem]">
          <SystemsMap />
          <FocusConnectors />
          <div className="relative z-20 mt-10 grid gap-8 md:grid-cols-2 xl:absolute xl:inset-0 xl:mt-0 xl:block">
            {focusAreas.map((area, index) => (
              <FocusModule
                key={area.title}
                area={area}
                index={index}
                delay={0.16 + index * 0.06}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

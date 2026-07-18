type ExperienceEntry = {
  id: string;
  organization: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  bullets: readonly string[];
  tools: readonly string[];
};

export const experienceEntries = [
  {
    id: "bristol",
    organization: "University of Bristol",
    role: "MSc Computer Science",
    location: "Bristol, UK",
    period: "Sep 2025 to Sep 2026",
    summary:
      "Building a deeper technical foundation in software engineering, streaming algorithms, systems thinking, and scalable data systems.",
    bullets: [
      "MSc Computer Science coursework and project work strengthen algorithms, software engineering, and systems thinking.",
      "Thesis project: l0-stream-sampler for sampling dynamic data streams under memory constraints.",
    ],
    tools: ["C++", "Python", "streaming algorithms", "systems"],
  },
  {
    id: "amazon",
    organization: "Amazon",
    role: "Logistics Analyst",
    location: "Barcelona, Spain",
    period: "Jun 2024 to Sep 2025",
    summary:
      "Built automation and reporting support around large-scale logistics workflows, process reliability, and operational follow-through.",
    bullets: [
      "Built automation and reporting support for recurring operational workflows, including AWS Lambda and S3 event-driven patterns where appropriate.",
      "Translated operational questions into clearer data preparation, reporting routines, and tools people could rely on.",
      "Designed outputs around repeatability, handoff clarity, and fewer manual preparation steps.",
      "Kept confidential implementation details out of public materials.",
    ],
    tools: ["Python", "AWS Lambda", "S3", "workflow automation"],
  },
  {
    id: "uoc",
    organization: "UOC",
    role: "MSc Data Science",
    location: "Remote",
    period: "Sep 2023 to Jun 2026",
    summary:
      "Strengthened machine learning, statistics, and data science foundations for practical, interpretable tools.",
    bullets: [
      "Studied data wrangling, modelling, statistics, and machine learning workflows.",
      "Built a bridge from business analytics toward more technical data systems and AI-enabled workflows.",
    ],
    tools: ["Python", "pandas", "machine learning", "statistics"],
  },
  {
    id: "oxml",
    organization: "OxML Summer School",
    role: "Participant",
    location: "Oxford, UK",
    period: "May 2024 to Jul 2024",
    summary:
      "Intensive exposure to modern machine learning methods and the practical systems questions around AI.",
    bullets: [
      "Studied machine learning topics through lectures, workshops, and applied sessions.",
      "Connected model development with the foundations needed to support AI-powered tools and workflows.",
    ],
    tools: ["machine learning", "research", "AI-enabled tools"],
  },
  {
    id: "ipsos",
    organization: "Ipsos",
    role: "Market Research Analyst",
    location: "Barcelona, Spain",
    period: "Jul 2023 to Jun 2024",
    summary:
      "Turned messy research data into clearer insights through analysis, reporting, and AI-supported workflow exploration.",
    bullets: [
      "Translated research questions into structured analysis, clear reporting outputs, and decision-ready insights.",
      "Worked with data quality, interpretation, and AI-supported analysis across research workflows.",
    ],
    tools: ["analytics", "research", "AI workflows", "statistics"],
  },
  {
    id: "upf",
    organization: "UPF",
    role: "BSc Business Administration",
    location: "Barcelona, Spain",
    period: "Sep 2019 to Jul 2023",
    summary:
      "Built the workflow, business, and quantitative context that still shapes how I think about useful systems.",
    bullets: [
      "Developed foundations in operations, business context, and quantitative analysis.",
      "Learned to connect technical work with organizational decision-making and product usefulness.",
    ],
    tools: ["business", "quantitative analysis", "operations", "product thinking"],
  },

] as const satisfies readonly ExperienceEntry[];

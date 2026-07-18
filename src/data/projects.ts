export const projectCategories = [
  "Featured systems and data projects",
  "Additional public GitHub projects",
  "Private workflow systems / redacted notes",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

type TechnicalDecision = {
  title: string;
  text: string;
};

type ProjectCaseStudy = {
  why: string;
  whatIBuilt: string;
  architecture: string;
  technicalDecisions: readonly TechnicalDecision[];
  results: string;
  reflection: string;
  diagramSteps: readonly string[];
};

export type Project = {
  slug: string;
  aliases?: readonly string[];
  name: string;
  summary: string;
  type: string;
  category: ProjectCategory;
  status: string;
  tags: readonly string[];
  githubUrl?: string;
  demoUrl?: string;
  isPrivate: boolean;
  featured: boolean;
  caseStudy: ProjectCaseStudy;
};

export const projects: readonly Project[] = [
  {
    slug: "l0-stream-sampler",
    name: "l0-stream-sampler",
    type: "Public repo / MSc thesis project",
    category: "Featured systems and data projects",
    status: "In progress / Research",
    githubUrl: "https://github.com/Jinni-Li/l0-stream-sampler",
    isPrivate: false,
    featured: true,
    summary:
      "Exploring how dynamic data streams can be sampled efficiently under memory constraints.",
    tags: [
      "C++",
      "Python",
      "streaming algorithms",
      "randomized algorithms",
      "statistical testing",
      "data streams",
    ],
    caseStudy: {
      why:
        "Dynamic streams can include both insertions and deletions, so the set of non-zero items changes over time. The project studies how to sample uniformly from that non-zero support when storing the full frequency vector is impractical.",
      whatIBuilt:
        "I am building l0-sampling ideas into a working implementation with sketch-based recovery, hash-based sampling levels, and experiment scripts that evaluate recovery behavior on dynamic stream inputs.",
      architecture:
        "Stream updates pass through hash levels and compact sketches. A recovery step searches for an isolated non-zero candidate, then validates the recovered item as the sampled output.",
      technicalDecisions: [
        {
          title: "Sketch-based recovery",
          text: "Use compact recovery structures so the stream can be processed under memory constraints instead of materializing the full vector.",
        },
        {
          title: "Hash-based sampling levels",
          text: "Route updates through probabilistic levels to increase the chance that one level isolates a useful candidate.",
        },
        {
          title: "Empirical validation",
          text: "Run experiments for success rate and uniformity, keeping claims tied to observed behavior while the thesis work is still in progress.",
        },
      ],
      results:
        "The current work is focused on implementation quality and experimental analysis. The intended output is a reliable implementation and a careful study of recovery success, sampling uniformity, and scalable streaming analytics.",
      reflection:
        "This project is where algorithms become useful systems work: small sketches, probabilistic guarantees, and careful experiments standing in for impossible full-state storage.",
      diagramSteps: [
        "stream updates",
        "hash levels / sketches",
        "recovered candidate",
        "sampled item",
      ],
    },
  },
  {
    slug: "fraud-detection-machine-learning",
    name: "fraud-detection-machine-learning",
    type: "Public repo / Data science project",
    category: "Featured systems and data projects",
    status: "Completed",
    githubUrl: "https://github.com/Jinni-Li/fraud-detection-machine-learning",
    isPrivate: false,
    featured: true,
    summary:
      "Building a fraud detection pipeline that turns imbalanced transaction data into interpretable model decisions.",
    tags: ["Python", "XGBoost", "SHAP", "Optuna", "PR-AUC", "imbalanced learning"],
    caseStudy: {
      why:
        "Fraud detection is shaped by severe class imbalance: the rare class is the one that matters most, and ordinary accuracy can hide weak recall. The project focuses on evaluation choices that make the model useful for real decision trade-offs.",
      whatIBuilt:
        "I built a machine learning workflow covering preprocessing, feature selection, Logistic Regression, Random Forest, XGBoost, Optuna tuning, threshold analysis, and SHAP-based interpretation.",
      architecture:
        "Raw transaction data moves through preprocessing and feature selection, then into model training. The final layer compares PR-AUC, recall trade-offs, cost-sensitive thresholds, and interpretability outputs so decisions stay inspectable.",
      technicalDecisions: [
        {
          title: "PR-AUC over accuracy",
          text: "Use precision-recall behavior to make minority-class performance visible under severe imbalance.",
        },
        {
          title: "Model comparison",
          text: "Compare Logistic Regression, Random Forest, and XGBoost so the pipeline can show both baseline behavior and stronger boosted models.",
        },
        {
          title: "Cost-sensitive thresholding",
          text: "Treat the decision threshold as part of the model, balancing missed fraud against false positives instead of accepting a default cutoff.",
        },
      ],
      results:
        "The project documents trade-offs across PR-AUC, recall, thresholds, and interpretability. I avoid fixed performance claims here because the public page should stay aligned with the repo's actual experiment outputs.",
      reflection:
        "The useful lesson was not just how to train a model, but how to make model decisions honest when the data distribution is actively working against simple metrics.",
      diagramSteps: [
        "raw transactions",
        "preprocessing / features",
        "model training",
        "evaluation / SHAP",
      ],
    },
  },
  {
    slug: "game-oh-dear-dragon",
    aliases: ["oh-dear-dragon"],
    name: "oh-dear-dragon",
    type: "Public repo / Creative coding project",
    category: "Featured systems and data projects",
    status: "Completed",
    githubUrl: "https://github.com/Jinni-Li/game-oh-dear-dragon",
    isPrivate: false,
    featured: true,
    summary:
      "Creative coding and game logic as a playful way to explore interaction, systems, and visual implementation.",
    tags: ["JavaScript", "game logic", "creative coding", "teamwork"],
    caseStudy: {
      why:
        "The project was a way to practice creative engineering outside a pure data context, with immediate feedback from player input, changing state, and visual output.",
      whatIBuilt:
        "I contributed to a browser game with game logic, player interaction, visual implementation, testing, and collaborative development across the team.",
      architecture:
        "Input updates the game state, game logic resolves collisions and rules, and the render loop turns that state into the visible play experience.",
      technicalDecisions: [
        {
          title: "State-first interaction",
          text: "Keep player input, game state, and visual rendering connected through a clear update loop.",
        },
        {
          title: "Testing the rules",
          text: "Use tests around game logic so interactions remain predictable as the project changes.",
        },
        {
          title: "Creative coding as practice",
          text: "Treat visuals and interaction as engineering problems: timing, state, constraints, and readable implementation.",
        },
      ],
      results:
        "The project shipped as a completed public creative coding repo and strengthened my comfort with interaction logic, testing, and team delivery.",
      reflection:
        "Games make state visible. That made this a useful bridge between creative engineering and the systems thinking I use in data projects.",
      diagramSteps: ["input", "game state", "collision / logic", "render loop"],
    },
  },
  {
    slug: "amazon-automation-workflows",
    name: "Amazon automation workflows",
    type: "Private system / Redacted case study",
    category: "Private workflow systems / redacted notes",
    status: "Architecture summary available",
    isPrivate: true,
    featured: false,
    summary:
      "Internal tools designed around real workflows, reliability, and time saved.",
    tags: [
      "Python",
      "AWS Lambda",
      "S3",
      "reporting automation",
      "operations",
      "workflow design",
    ],
    caseStudy: {
      why:
        "Large-scale logistics work depends on recurring reports, handoffs, and operational preparation. The opportunity was to make those workflows more reliable without exposing internal details.",
      whatIBuilt:
        "I built automation tools and reporting workflows around internal operational processes, keeping the public description limited to the architecture pattern and the type of value delivered.",
      architecture:
        "Source reports or files trigger an automation step, processing logic prepares the relevant outputs, and the resulting reports support operational review and follow-up.",
      technicalDecisions: [
        {
          title: "Event-driven automation",
          text: "Use AWS Lambda and S3-triggered workflows where event timing matters and manual preparation can be reduced.",
        },
        {
          title: "Operational reliability",
          text: "Design outputs around repeatability, handoff clarity, and fewer manual preparation steps.",
        },
        {
          title: "Redacted by design",
          text: "Keep confidential data, internal process names, and implementation specifics out of the public case study.",
        },
      ],
      results:
        "The workflows reduced manual reporting and preparation time while improving reliability for recurring operational work. Details remain intentionally redacted.",
      reflection:
        "This work made product-minded engineering concrete: the best internal tools disappear into a calmer, more dependable workflow.",
      diagramSteps: [
        "source reports / files",
        "automation trigger",
        "processing",
        "reporting output",
      ],
    },
  },
  {
    slug: "latam-obesity-analytics",
    name: "LATAM-Obesity-Analytics",
    type: "Public repo / Data analytics project",
    category: "Additional public GitHub projects",
    status: "Completed",
    githubUrl: "https://github.com/Jinni-Li/LATAM-Obesity-Analytics",
    isPrivate: false,
    featured: false,
    summary:
      "Exploratory analytics project examining obesity-related indicators with data cleaning, analysis, and baseline modelling.",
    tags: ["Python", "Jupyter", "EDA", "data cleaning"],
    caseStudy: {
      why:
        "The project explores how health-related indicators can be cleaned, compared, and translated into an analytical workflow.",
      whatIBuilt:
        "A notebook-based analysis with data preparation, exploratory views, and modelling-oriented structure.",
      architecture:
        "Raw tabular data moves through cleaning, exploratory analysis, modelling preparation, and summary outputs.",
      technicalDecisions: [
        {
          title: "Notebook workflow",
          text: "Use notebooks to keep analysis steps inspectable and easy to revise.",
        },
        {
          title: "Data quality first",
          text: "Prioritize cleaning and feature understanding before modelling choices.",
        },
      ],
      results:
        "A compact public analytics artefact that shows data preparation and exploratory reasoning.",
      reflection:
        "This sits in the archive as an earlier data project: smaller in scope, but useful evidence of turning messy inputs into structured analysis.",
      diagramSteps: ["raw data", "cleaning", "EDA", "summary"],
    },
  },
  {
    slug: "spotify-tracks-data-visualization",
    name: "spotify-tracks-data-visualization",
    type: "Public repo / Data visualization project",
    category: "Additional public GitHub projects",
    status: "Completed",
    githubUrl: "https://github.com/Jinni-Li/spotify-tracks-data-visualization",
    isPrivate: false,
    featured: false,
    summary:
      "Visual analysis of Spotify track features and genre-level patterns.",
    tags: ["Python", "data visualization", "Spotify data", "EDA"],
    caseStudy: {
      why:
        "Audio-feature data is a useful playground for comparing distributions, relationships, and genre-level patterns visually.",
      whatIBuilt:
        "A visualization-focused analysis that turns track attributes into readable charts and exploratory findings.",
      architecture:
        "Track data is cleaned, grouped, visualized, and summarized into patterns that are easier to compare.",
      technicalDecisions: [
        {
          title: "Visual-first analysis",
          text: "Use charts as the main interface for discovering and communicating differences in the data.",
        },
        {
          title: "Feature grouping",
          text: "Compare audio attributes in groups so the findings stay readable instead of becoming a chart dump.",
        },
      ],
      results:
        "A smaller public data visualization project that shows comfort with exploratory analysis and presentation.",
      reflection:
        "It helped me practice the craft of turning raw columns into a useful story a reader can scan quickly.",
      diagramSteps: ["track data", "cleaning", "visual analysis", "findings"],
    },
  },
  {
    slug: "web-scraping-imdb",
    name: "Web-Scraping-IMDb",
    type: "Public repo / Data collection project",
    category: "Additional public GitHub projects",
    status: "Completed",
    githubUrl: "https://github.com/Jinni-Li/Web-Scraping-IMDb",
    isPrivate: false,
    featured: false,
    summary:
      "Web scraping and cleaning workflow for IMDb-style movie data, focused on structured extraction and analysis-ready outputs.",
    tags: ["Python", "web scraping", "data cleaning", "BeautifulSoup"],
    caseStudy: {
      why:
        "Before analysis can happen, useful data often has to be collected and shaped into a consistent structure.",
      whatIBuilt:
        "A scraping workflow that extracts movie-related fields and prepares the resulting data for analysis.",
      architecture:
        "Source pages are fetched, parsed into structured fields, cleaned, and exported for downstream analysis.",
      technicalDecisions: [
        {
          title: "Structured extraction",
          text: "Convert page content into explicit fields so the output is easier to validate and reuse.",
        },
        {
          title: "Cleaning after collection",
          text: "Separate extraction from cleaning so each step can be inspected independently.",
        },
      ],
      results:
        "A compact archive project showing data collection, parsing, and preparation skills.",
      reflection:
        "This is a practical reminder that many data systems begin with the unglamorous work of making data usable.",
      diagramSteps: ["source pages", "parser", "cleaning", "dataset"],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function findProjectBySlug(slug: string | undefined): Project | undefined {
  if (!slug) return undefined;

  return projects.find((project) => project.slug === slug || project.aliases?.includes(slug));
}

export function getProjectPath(project: Project): string {
  return `/projects/${project.aliases?.[0] || project.slug}`;
}

export function getProjectsByCategory(category: ProjectCategory): readonly Project[] {
  return projects.filter((project) => project.category === category);
}

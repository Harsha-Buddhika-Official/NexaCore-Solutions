import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShieldIcon from "@mui/icons-material/Shield";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export const heroContent = {
  badge: "PIONEERING PROGRESS",
  titleLine1: "Engineering the ",
  titleHighlight: "Next Generation",
  titleLine2: " of Software.",
  description:
    "NexaCore Solutions is more than a development agency. We are a technical collective dedicated to architectural purity, performance-first engineering, and human-centric innovation.",
};

export const genesis = {
  title: "Our Genesis",
  paragraphs: [
    "Founded by a group of systems architects and full-stack visionaries, NexaCore emerged from a simple observation: software complexity is rising faster than our tools' ability to manage it. We set out to build a firm that prioritizes structural integrity over rapid patching.",
    'Since our inception in 2018, we have scaled from a niche consultancy to a global partner for Fortune 500 tech firms, always maintaining our "code-is-art" philosophy at the heart of our operations.',
  ],
  image: "/src/assets/about/hero.png",
};

export const missionVision = [
  {
    id: "mission",
    icon: RocketLaunchIcon,
    iconColor: "text-indigo-300",
    title: "Our Mission",
    description:
      "To empower industries by delivering resilient, scalable, and ultra-high-performance digital infrastructure that solves the challenges of tomorrow, today.",
    mono: false,
  },
  {
    id: "vision",
    icon: VisibilityIcon,
    iconColor: "text-emerald-400",
    title: "The Vision",
    description:
      "Creating a world where software is invisible because it is flawless. We aim to be the standard-bearer for engineering precision globally.",
    mono: true,
  },
];

export const coreValues = {
  title: "The NexaCore Code",
  subtitle: "The fundamental values that drive every commit.",
  values: [
    {
      icon: ShieldIcon,
      iconColor: "text-slate-300",
      iconBg: "bg-base-700",
      title: "Integrity",
      description:
        "We prioritize honesty in our architecture and transparency in our process. If a solution isn't sustainable, we don't build it.",
    },
    {
      icon: LightbulbIcon,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10",
      title: "Innovation",
      description:
        "We don't just use modern stacks; we contribute to them. Innovation is the byproduct of our constant technical curiosity.",
    },
    {
      icon: WorkspacePremiumIcon,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      title: "Excellence",
      description:
        "Near-perfect isn't enough. We strive for zero-latency, type-safe, and highly maintainable codebases in every single project.",
    },
  ],
};

export const philosophy = {
  title: "Our Philosophy",
  items: [
    {
      number: "01",
      title: "Pragmatic Minimalism",
      description:
        "Every line of code must justify its existence. We strip away abstraction until only the most performant logic remains.",
    },
    {
      number: "02",
      title: "Observability First",
      description:
        "If you can't measure it, you can't improve it. All our systems ship with deep telemetry and real-time monitoring built-in.",
    },
    {
      number: "03",
      title: "Decentralized Logic",
      description:
        "We advocate for micro-services and modular monolithic designs that scale horizontally without friction.",
    },
  ],
  terminal: {
    filename: "nexus_deployment.yaml",
    lines: [
      [{ text: "apiVersion", className: "text-sky-400" }, { text: ": apps/v1" }],
      [{ text: "kind", className: "text-sky-400" }, { text: ": Deployment" }],
      [
        { text: "  " },
        { text: "name", className: "text-sky-400" },
        { text: ": nexacore-engine" },
      ],
      [{ text: "  " }, { text: "spec", className: "text-sky-400" }, { text: ":" }],
      [
        { text: "    " },
        { text: "replicas", className: "text-sky-400" },
        { text: ": auto_scale" },
      ],
      [
        { text: "    " },
        { text: "strategy", className: "text-sky-400" },
        { text: ": Zero_Downtime" },
      ],
      [
        { text: "      " },
        { text: "maxSurge", className: "text-sky-400" },
        { text: ": 25%" },
      ],
      [
        {
          text: "// Engineering Precision Ensured",
          className: "text-emerald-400",
        },
      ],
    ],
  },
};

export const lookingForward = {
  title: "Looking Forward",
  cards: [
    {
      id: "neural-architecture",
      badge: "ROADMAP 2025",
      badgeColor: "text-slate-400",
      title: "Neural Architecture Framework",
      description:
        "We are developing a proprietary AI-driven code-refinement engine that automatically optimizes database queries and memory allocation in real-time.",
      underlineColor: "bg-indigo-400",
      cardBg: "bg-base-800/50",
    },
    {
      id: "quantum-ready",
      badge: "EXPANSION",
      badgeColor: "text-emerald-400",
      title: "Quantum-Ready Systems",
      description:
        "Researching post-quantum cryptographic standards to ensure our clients' data remains secure in the coming era of advanced computation.",
      underlineColor: "bg-emerald-400",
      cardBg: "bg-emerald-500/5",
    },
  ],
};

export const aboutCta = {
  title: "Ready to build something monumental?",
  description:
    "Join the ranks of engineering teams who refuse to compromise on quality. Let's discuss your architectural needs.",
  primaryCta: { label: "Consult with an Architect", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
};
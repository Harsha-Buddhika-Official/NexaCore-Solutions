import LanguageIcon from "@mui/icons-material/Language";
import BoltIcon from "@mui/icons-material/Bolt";
import ShieldIcon from "@mui/icons-material/Shield";
import DiamondIcon from "@mui/icons-material/Diamond";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import TerminalIcon from "@mui/icons-material/Terminal";
import GridViewIcon from "@mui/icons-material/GridView";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import CloudIcon from "@mui/icons-material/Cloud";

export const heroPills = [
  "Web Development",
  "Mobile Applications",
  "Software Development",
  "Cloud Solutions",
];

export const webDevelopment = {
  index: "01",
  icon: LanguageIcon,
  iconColor: "text-cyan-400",
  title: "Web Development",
  description:
    "We build ultra-fast, responsive web applications designed for the modern internet. Our focus is on technical excellence, utilizing the latest frameworks to deliver modular, maintainable, and high-conversion platforms.",
  checklist: [
    "SEO Optimized Single Page Applications",
    "Progressive Web App (PWA) Integration",
    "High-load E-commerce Systems",
  ],
  technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  highlights: [
    {
      icon: BoltIcon,
      iconColor: "text-cyan-400",
      title: "Performance First",
      description:
        "Lighthouse scores exceeding 95 across all metrics, ensuring your site is found and favored by users.",
      span: "full",
    },
    {
      icon: ShieldIcon,
      iconColor: "text-cyan-400",
      title: "Robust Security",
      description:
        "Advanced encryption and penetration-tested architectures.",
    },
    {
      icon: DiamondIcon,
      iconColor: "text-emerald-400",
      title: "Scalable Tech",
      description: "Cloud-native builds ready for millions of requests.",
    },
  ],
};

export const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "Deep dive into technical requirements and user journey mapping.",
  },
  {
    number: "2",
    title: "Architecture",
    description: "System design documentation and database schema modeling.",
  },
  {
    number: "3",
    title: "Sprint Dev",
    description:
      "Agile cycles with weekly deployments to staging environments.",
  },
  {
    number: "4",
    title: "Launch",
    description: "CI/CD automation and 24/7 monitoring orchestration.",
  },
];

export const faqs = [
  {
    id: "timeline",
    question: "What is the typical development timeline?",
    answer:
      "Most web platforms take 8-14 weeks from discovery to launch, depending on scope. We break work into weekly sprints so you see progress continuously rather than waiting for a single big reveal.",
  },
  {
    id: "maintenance",
    question: "Do you handle maintenance post-launch?",
    answer:
      "Yes. Every engagement includes a support window post-launch, and we offer ongoing retainers for monitoring, security patching, and feature iteration after that.",
  },
];

export const caseStudies = [
  {
    id: "quantx-dashboard",
    title: "QuantX Dashboard",
    category: "Web App / Finance",
    image: "/src/assets/projects/quantx-dashboard.jpg",
  },
  {
    id: "algostream-cms",
    title: "AlgoStream CMS",
    category: "Platform / Media",
    image: "/src/assets/projects/algostream-cms.jpg",
  },
  {
    id: "securepay-gateway",
    title: "SecurePay Gateway",
    category: "Backend / Fintech",
    image: "/src/assets/projects/securepay-gateway.jpg",
  },
];

export const mobileApps = {
  index: "02",
  icon: PhoneIphoneIcon,
  iconColor: "text-emerald-400",
  title: "Mobile Applications",
  description:
    "Native-grade performance for iOS and Android. We specialize in cross-platform development that doesn't compromise on fluidity or access to deep hardware capabilities.",
  technologies: ["Flutter", "Kotlin", "Swift", "Firebase"],
  highlights: [
    {
      icon: BoltIcon,
      iconColor: "text-emerald-400",
      title: "Fast Renders",
      description: "60 FPS animations and instant load times.",
    },
    {
      icon: OfflineBoltIcon,
      iconColor: "text-emerald-400",
      title: "Offline First",
      description: "Robust local caching and background sync.",
    },
  ],
};

export const enterpriseSoftware = {
  index: "03",
  title: "Enterprise Software Engineering",
  features: [
    {
      icon: TerminalIcon,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10",
      title: "Custom Architectures",
      description:
        "Bespoke software systems built from the ground up to solve unique operational bottlenecks.",
      bullets: ["Microservices", "Event-Driven"],
    },
    {
      icon: GridViewIcon,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-500/10",
      title: "Big Data Systems",
      description:
        "Processing and visualizing multi-terabyte data streams with sub-second latency.",
      bullets: ["Apache Kafka", "ElasticStack"],
    },
    {
      icon: PrecisionManufacturingIcon,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      title: "IoT & Automation",
      description:
        "Bridging physical hardware with digital control planes via MQTT and WebSockets.",
      bullets: ["Edge Computing", "Real-time Hubs"],
    },
  ],
};

export const cloudInfrastructure = {
  index: "04",
  icon: CloudIcon,
  title: "Cloud Infrastructure & DevOps",
  description:
    "Modernize your infrastructure with containerized workloads, serverless compute, and automated CI/CD pipelines that guarantee 99.9% uptime.",
  image: "/src/assets/projects/cloud-infrastructure.jpg",
  stat: { value: "99.9%", label: "UPTIME GUARANTEED" },
  points: [
    {
      title: "AWS/Azure/GCP Management",
      description: "Multi-cloud strategies and cost optimization audits.",
      accent: "border-indigo-400",
    },
    {
      title: "Kubernetes Orchestration",
      description: "Auto-scaling clusters for unpredictable traffic spikes.",
      accent: "border-emerald-400",
    },
  ],
};
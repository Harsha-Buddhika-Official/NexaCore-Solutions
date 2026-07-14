import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import GestureIcon from "@mui/icons-material/Gesture";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export const heroContent = {
  badge: "ENGINEERING STACK",
  titleLine1: "Built on ",
  titleHighlight1: "Modern",
  titleLine2: "Foundations",
  description:
    "We leverage a curated selection of industry-leading technologies to build scalable, high-performance solutions. Our stack is engineered for speed, security, and developer productivity.",
};

export const frontendCategory = {
  icon: CodeIcon,
  title: "Frontend Development",
  cards: [
    {
      id: "javascript",
      badgeText: "JS",
      badgeStyle: "custom",
      tag: "CORE",
      tagColor: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
      title: "JavaScript (ES6+)",
      description:
        "The heartbeat of modern web interactivity. We utilize advanced ES6+ features for clean, efficient, and reactive logic.",
      benefit: "Ubiquitous performance & cross-platform compatibility.",
      benefitColor: "text-slate-300",
    },
    {
      id: "react",
      icon: CodeIcon,
      iconColor: "text-cyan-400",
      tag: "UI LIBRARY",
      tagColor: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
      title: "React.js",
      description:
        "Component-based architecture for building highly dynamic user interfaces with virtual DOM efficiency.",
      benefit: "Rapid scaling and highly maintainable UI codebases.",
      benefitColor: "text-slate-300",
    },
    {
      id: "tailwind",
      icon: null,
      badgeText: "🎨",
      badgeStyle: "emoji",
      tag: "STYLING",
      tagColor: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapid UI development without leaving your HTML, ensuring design consistency.",
      benefit: "Zero runtime overhead and highly modular styling.",
      benefitColor: "text-slate-300",
    },
  ],
};

export const infrastructureCategory = {
  icon: StorageIcon,
  title: "Infrastructure & Logic",
  cards: [
    {
      id: "node",
      badgeText: ">_",
      badgeStyle: "custom",
      tag: "RUNTIME",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
      title: "Node.js & Express",
      description:
        "Event-driven, non-blocking I/O runtime for building fast, scalable network applications and RESTful APIs.",
      benefit: "Seamless full-stack JS development environment.",
      benefitColor: "text-emerald-400",
    },
    {
      id: "databases",
      badgeText: "☰",
      badgeStyle: "custom",
      tag: "STORAGE",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
      title: "Postgres & MongoDB",
      description:
        "Support for both relational and document-based data management to fit any project architecture needs.",
      benefit: "Data integrity with horizontal scalability options.",
      benefitColor: "text-emerald-400",
    },
    {
      id: "docker",
      badgeText: "🐳",
      badgeStyle: "emoji",
      tag: "DEVOPS",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
      title: "Docker",
      description:
        'Containerization platform that ensures your applications run consistently across any environment from local to cloud.',
      benefit: 'Eliminates "it works on my machine" bottlenecks.',
      benefitColor: "text-emerald-400",
    },
  ],
};

export const experienceDesign = {
  icon: GestureIcon,
  title: "Experience Design",
  cards: [
    {
      id: "figma",
      iconGlyph: "✎",
      ringColor: "border-cyan-400/40",
      glowColor: "shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]",
      iconColor: "text-cyan-400",
      tag: "DESIGN",
      tagColor: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
      title: "Figma Ecosystem",
      description:
        "We use Figma not just for UI design, but for systemic engineering handoff. Our design tokens map 1:1 with code implementations.",
      pills: ["Prototypes", "Auto-Layout", "Design Tokens"],
    },
    {
      id: "agile",
      iconGlyph: "✓",
      ringColor: "border-indigo-400/40",
      glowColor: "shadow-[0_0_40px_-10px_rgba(129,140,248,0.5)]",
      iconColor: "text-indigo-300",
      tag: "PROCESS",
      tagColor: "text-indigo-300 border-indigo-400/30 bg-indigo-500/10",
      title: "Agile Engineering",
      description:
        "Continuous Integration and Deployment (CI/CD) pipelines ensure every line of code is tested and deployed with zero friction.",
      checklist: ["Automated Testing", "Scalable Architecture"],
    },
  ],
};

export const techStats = [
  { value: "99.9%", label: "UPTIME OPTIMIZATION" },
  { value: "150+", label: "SUCCESSFUL DEPLOYMENTS" },
  { value: "<200ms", label: "AVERAGE API RESPONSE" },
];

export const mobileCategory = {
  icon: PhoneIphoneIcon,
  title: "Mobile Development",
  cards: [
    {
      id: "react-native",
      badgeText: "RN",
      badgeStyle: "custom",
      tag: "CROSS-PLATFORM",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
      title: "React Native",
      description:
        "Write once, deploy to iOS and Android with native-level performance and a shared component architecture.",
      benefit: "Faster time-to-market without splitting engineering teams.",
      benefitColor: "text-emerald-400",
    },
    {
      id: "swift",
      badgeText: "🕊️",
      badgeStyle: "emoji",
      tag: "iOS NATIVE",
      tagColor: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
      title: "Swift & SwiftUI",
      description:
        "For features demanding deep hardware access, we build native iOS modules with Apple's modern declarative UI framework.",
      benefit: "Buttery-smooth animations and full platform API access.",
      benefitColor: "text-slate-300",
    },
    {
      id: "flutter",
      badgeText: "🦋",
      badgeStyle: "emoji",
      tag: "CROSS-PLATFORM",
      tagColor: "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
      title: "Flutter",
      description:
        "Google's UI toolkit for pixel-perfect, high-performance apps compiled to native ARM code from a single Dart codebase.",
      benefit: "Consistent 60fps UI across iOS, Android, and web.",
      benefitColor: "text-slate-300",
    },
  ],
};
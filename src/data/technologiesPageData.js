import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import GestureIcon from "@mui/icons-material/Gesture";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export const heroContent = {
  badge: "TECHNOLOGY FOUNDATION",
  titleLine1: "Built With ",
  titleHighlight1: "Modern",
  titleLine2: "Technology",
  description:
    "We use reliable and industry-proven technologies to create secure, scalable, and user-friendly digital solutions. Our technology choices focus on performance, maintainability, and delivering real business value.",
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
        "A powerful programming foundation used to create interactive, responsive, and dynamic digital experiences for modern users.",
      benefit:
        "Reliable performance across different devices and platforms.",
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
        "A modern framework for building fast, flexible, and easy-to-maintain user interfaces that provide smooth customer experiences.",
      benefit:
        "Scalable interfaces that are easier to improve and maintain.",
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
        "A modern styling approach that helps us create clean, consistent, and responsive designs efficiently.",
      benefit:
        "Faster development with consistent visual experiences.",
      benefitColor: "text-slate-300",
    },
  ],
};

export const infrastructureCategory = {
  icon: StorageIcon,
  title: "Infrastructure & Backend",
  cards: [
    {
      id: "node",
      badgeText: ">_",
      badgeStyle: "custom",
      tag: "BACKEND",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
      title: "Node.js & Express",
      description:
        "Reliable backend technologies used to create powerful APIs, business systems, and applications that handle real-world operations.",
      benefit:
        "Efficient development for complete full-stack solutions.",
      benefitColor: "text-emerald-400",
    },
    {
      id: "databases",
      badgeText: "☰",
      badgeStyle: "custom",
      tag: "DATABASE",
      tagColor: "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
      title: "Postgres & MongoDB",
      description:
        "Flexible database solutions that securely store, organize, and manage important business information.",
      benefit:
        "Reliable data management designed for future growth.",
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
        "A deployment technology that helps applications run consistently across development, testing, and production environments.",
      benefit:
        "Smoother deployments with fewer technical issues.",
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
        "We design user experiences that are visually attractive, easy to use, and aligned with business goals before development begins.",
      pills: ["Prototypes", "User Interface", "Design Systems"],
    },
    {
      id: "agile",
      iconGlyph: "✓",
      ringColor: "border-indigo-400/40",
      glowColor:
        "shadow-[0_0_40px_-10px_rgba(129,140,248,0.5)]",
      iconColor: "text-indigo-300",
      tag: "PROCESS",
      tagColor:
        "text-indigo-300 border-indigo-400/30 bg-indigo-500/10",
      title: "Agile Development",
      description:
        "A flexible development process that allows continuous improvements, regular updates, and better project visibility.",
      checklist: [
        "Continuous Improvements",
        "Reliable Development Process",
      ],
    },
  ],
};

export const techStats = [
  { value: "Modern", label: "TECHNOLOGY STACK" },
  { value: "Full", label: "STACK DEVELOPMENT" },
  { value: "Secure", label: "DEVELOPMENT APPROACH" },
];

export const mobileCategory = {
  icon: PhoneIphoneIcon,
  title: "Mobile Development",
  cards: [
    // {
    //   id: "react-native",
    //   badgeText: "RN",
    //   badgeStyle: "custom",
    //   tag: "CROSS-PLATFORM",
    //   tagColor:
    //     "text-emerald-400 border-emerald-400/30 bg-emerald-500/10",
    //   title: "React Native",
    //   description:
    //     "A flexible mobile development solution that helps create applications for multiple platforms efficiently.",
    //   benefit:
    //     "Faster development while maintaining quality user experiences.",
    //   benefitColor: "text-emerald-400",
    // },
    // {
    //   id: "swift",
    //   badgeText: "🕊️",
    //   badgeStyle: "emoji",
    //   tag: "iOS NATIVE",
    //   tagColor:
    //     "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
    //   title: "Swift & SwiftUI",
    //   description:
    //     "Native iOS technologies used to create smooth and reliable applications optimized for Apple devices.",
    //   benefit:
    //     "High-quality experiences for iPhone and iPad users.",
    //   benefitColor: "text-slate-300",
    // },
    {
      id: "flutter",
      badgeText: "🦋",
      badgeStyle: "emoji",
      tag: "CROSS-PLATFORM",
      tagColor:
        "text-cyan-400 border-cyan-400/30 bg-cyan-500/10",
      title: "Flutter",
      description:
        "A modern framework that allows us to build beautiful and consistent mobile applications efficiently.",
      benefit:
        "Consistent design experiences across multiple platforms.",
      benefitColor: "text-slate-300",
    },
  ],
};
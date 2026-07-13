import LanguageIcon from "@mui/icons-material/Language";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";

export const services = [
  {
    id: "web-development",
    icon: LanguageIcon,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    title: "Web Development",
    description:
      "High-performance React and Next.js applications optimized for speed and SEO.",
  },
  {
    id: "mobile-apps",
    icon: SmartphoneIcon,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences built with React Native for iOS and Android.",
  },
  {
    id: "software-solutions",
    icon: TerminalIcon,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    title: "Software Solutions",
    description:
      "Custom enterprise software designed to automate workflows and scale operations.",
  },
  {
    id: "cloud-saas",
    icon: CloudIcon,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    title: "Cloud & SaaS",
    description:
      "Scalable cloud infrastructure and SaaS architectures using AWS and Docker.",
  },
];
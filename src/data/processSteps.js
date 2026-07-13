import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BuildIcon from "@mui/icons-material/Build";

export const processSteps = [
  {
    number: "01",
    icon: SearchIcon,
    title: "Discovery",
    description: "Deep dive into requirements and business goals.",
    color: "#94a3b8", // slate-400 border
    text: "text-indigo-200",
  },
  {
    number: "02",
    icon: AssignmentIcon,
    title: "Planning",
    description: "Strategic roadmap and architecture design.",
    color: "#34d399", // emerald-400 border
    text: "text-emerald-400",
  },
  {
    number: "03",
    icon: DesignServicesIcon,
    title: "UI/UX Design",
    description: "Interactive prototypes and visual identity.",
    color: "#22d3ee", // cyan-400 border
    text: "text-cyan-400",
  },
  {
    number: "04",
    icon: CodeIcon,
    title: "Development",
    description: "Clean code and rigorous engineering.",
    color: "#94a3b8", // slate-400 border
    text: "text-indigo-200",
  },
];

export const secondaryProcessSteps = [
  {
    icon: CheckCircleIcon,
    iconColor: "text-emerald-400",
    glow: "#34d399",
    title: "Testing",
    description: "Automated and manual QA to ensure zero bugs.",
  },
  {
    icon: RocketLaunchIcon,
    iconColor: "text-indigo-400",
    glow: "#818cf8",
    title: "Deployment",
    description: "Smooth rollout with CI/CD pipelines.",
  },
  {
    icon: BuildIcon,
    iconColor: "text-cyan-400",
    glow: "#22d3ee",
    title: "Maintenance",
    description: "Long-term support and version updates.",
  },
];
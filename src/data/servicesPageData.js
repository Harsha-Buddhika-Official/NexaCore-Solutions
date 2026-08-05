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
    "We create modern, responsive, and high-performing websites that help businesses build their online presence, attract customers, and provide seamless digital experiences across all devices.",
  checklist: [
    "Business Websites & Landing Pages",
    "E-commerce Platforms",
    "Custom Web Applications",
  ],
  technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  highlights: [
    {
      icon: BoltIcon,
      iconColor: "text-cyan-400",
      title: "Performance Focused",
      description:
        "Fast and optimized websites designed to provide better user experiences and improve customer engagement.",
      span: "full",
    },
    {
      icon: ShieldIcon,
      iconColor: "text-cyan-400",
      title: "Secure Development",
      description:
        "Applications built with modern security practices to protect your business and customer information.",
    },
    {
      icon: DiamondIcon,
      iconColor: "text-emerald-400",
      title: "Scalable Solutions",
      description:
        "Flexible architectures that allow your digital platform to grow with your business needs.",
    },
  ],
};

export const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We understand your business goals, requirements, and challenges to create the right technology solution.",
  },
  {
    number: "2",
    title: "Planning",
    description:
      "We design the system structure, user experience, and development roadmap before implementation.",
  },
  {
    number: "3",
    title: "Development",
    description:
      "Our team builds, tests, and improves your solution while keeping you updated throughout the process.",
  },
  {
    number: "4",
    title: "Launch",
    description:
      "We deploy your solution and provide support to ensure everything works smoothly after release.",
  },
];

export const faqs = [
  {
    id: "timeline",
    question: "What is the typical development timeline?",
    answer:
      "Project timelines depend on complexity and requirements. Small websites can take a few weeks, while advanced software solutions may require several months. We provide a clear timeline before starting development.",
  },
  {
    id: "maintenance",
    question: "Do you handle maintenance after launch?",
    answer:
      "Yes. We provide ongoing support, updates, improvements, and technical assistance to keep your systems secure and reliable.",
  },
];

export const caseStudies = [
  {
    id: "quantx-dashboard",
    title: "QuantX Dashboard",
    category: "Web App / Finance",
    image: "/src/assets/ServiceUI/QuantX_Dashboard.png",
  },
  {
    id: "algostream-cms",
    title: "AlgoStream CMS",
    category: "Platform / Media",
    image: "/src/assets/ServiceUI/AlgoStream_CMS.png",
  },
  {
    id: "securepay-gateway",
    title: "SecurePay Gateway",
    category: "Backend / Fintech",
    image: "/src/assets/ServiceUI/SecurePay_Gateway.png",
  },
];

export const mobileApps = {
  index: "02",
  icon: PhoneIphoneIcon,
  iconColor: "text-emerald-400",
  title: "Mobile Applications",
  description:
    "We develop user-friendly mobile applications that help businesses connect with customers, improve services, and deliver better digital experiences on Android and iOS platforms.",
  technologies: ["Flutter", "Kotlin", "Swift", "Firebase"],
  highlights: [
    {
      icon: BoltIcon,
      iconColor: "text-emerald-400",
      title: "Smooth Experience",
      description:
        "Mobile applications designed for responsive performance and simple user interactions.",
    },
    {
      icon: OfflineBoltIcon,
      iconColor: "text-emerald-400",
      title: "Reliable Performance",
      description:
        "Applications built to provide consistent experiences for users in different environments.",
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
      title: "Custom Business Systems",
      description:
        "Tailored software solutions designed to automate processes, reduce manual work, and improve operational efficiency.",
      bullets: ["Business Automation", "Custom Platforms"],
    },
    {
      icon: GridViewIcon,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-500/10",
      title: "Data Management Systems",
      description:
        "Organized systems that help businesses manage information efficiently and make better decisions.",
      bullets: ["Database Solutions", "Reporting Systems"],
    },
    {
      icon: PrecisionManufacturingIcon,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      title: "Automation Solutions",
      description:
        "Technology solutions that connect business processes and improve productivity through smart automation.",
      bullets: ["Process Automation", "System Integration"],
    },
  ],
};

export const cloudInfrastructure = {
  index: "04",
  icon: CloudIcon,
  title: "Cloud Infrastructure & DevOps",
  description:
    "We help businesses deploy secure, reliable, and scalable applications using modern cloud technologies that improve performance and simplify management.",
  image: "/src/assets/ServiceUI/Cloud_DevOps1.png",
  imageHover: "/src/assets/ServiceUI/Cloud_DevOps2.png",
  stat: { value: "24/7", label: "RELIABLE SYSTEM SUPPORT" },
  points: [
    {
      title: "Cloud Deployment",
      description:
        "Deploy applications using modern cloud platforms with better reliability and accessibility.",
      accent: "border-indigo-400",
    },
    {
      title: "Optimization & Security",
      description:
        "Improve system performance, stability, and security with proper monitoring and best practices.",
      accent: "border-emerald-400",
    },
  ],
};
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TerminalIcon from "@mui/icons-material/Terminal";
import ShareIcon from "@mui/icons-material/Share";
import PublicIcon from "@mui/icons-material/Public";

export const heroContent = {
  badge: "CONTACT US",
  titleLine1: "Let's Build the ",
  titleHighlight: "Next Layer",
  titleLine2: " of Your Architecture.",
  description:
    "Whether you're scaling a startup or modernizing enterprise infrastructure, our engineering teams are ready to deploy. Reach out today for a technical consultation.",
};

export const contactInfo = [
  {
    id: "email",
    icon: EmailIcon,
    label: "EMAIL OUR CORE TEAM",
    value: "hello@nexacore.io",
    href: "mailto:hello@nexacore.io",
  },
  {
    id: "phone",
    icon: PhoneIcon,
    label: "DIRECT TECHNICAL LINE",
    value: "+9470 525 6440",
    href: "tel:+94705256440",
  },
];

export const officeLocation = {
  label: "HQ: 450 Tech Plaza, SF",
  latitude: 37.7749,
  longitude: -122.4194,
};

export const socialLinks = [
  { id: "github", icon: TerminalIcon, label: "GitHub", href: "https://github.com" },
  { id: "linkedin", icon: ShareIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { id: "twitter", icon: PublicIcon, label: "Twitter", href: "https://twitter.com" },
];

export const projectTypes = [
  "Custom Software Development",
  "Web Development",
  "Mobile Applications",
  "Cloud & DevOps",
  "AI / Machine Learning",
  "Other",
];

export const contactStats = [
  { value: "99.9%", label: "UPTIME COMMITMENT", color: "text-indigo-300" },
  { value: "250+", label: "PROJECTS DEPLOYED", color: "text-emerald-400" },
  { value: "15min", label: "AVG INITIAL RESPONSE", color: "text-white" },
  { value: "12+", label: "GLOBAL DATACENTERS", color: "text-indigo-300" },
];
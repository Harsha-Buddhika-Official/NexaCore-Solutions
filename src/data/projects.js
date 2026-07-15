import e_commerce from "../assets/projects/e_commerce.png";
import sri_lanka_travel from "../assets/projects/sri_lanka_travel.png";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShieldIcon from "@mui/icons-material/Shield";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ExploreIcon from "@mui/icons-material/Explore";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import DevicesIcon from "@mui/icons-material/Devices";
import SpeedIcon from "@mui/icons-material/Speed";

export const filterOptions = ["All", "Web", "Mobile", "Software", "SaaS"];

export const projects = [
  {
    id: "ozone-computers-ecommerce",
    slug: "ozone-computers-ecommerce",
    featured: true,
    category: "Web",
    country: "Sri Lanka",
    accentColor: "#2563eb", // blue
    image: e_commerce,
    activeCase: true,

    // Card display
    headlineStat: "PERN Stack",
    headlineLabel: "Full-Stack Architecture",
    title: "Ozone Computers E-Commerce Platform",
    description:
      "A complete full-stack e-commerce platform built for a computer retail business with product management, secure authentication, order processing, and a dedicated admin dashboard.",

    stats: [
      { value: "2", label: "FRONTEND + BACKEND" },
      { value: "Admin", label: "MANAGEMENT SYSTEM" },
    ],

    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
    ],

    // Detail-page fields
    caseStudyNumber: "001",
    industry: "Retail & E-Commerce",
    timeline: "2 Months",
    buildLabel: "LATEST BUILD: v2.1.0-STABLE",

    problem:
      "The computer retail business needed a digital platform to showcase products, manage inventory, process customer orders, and reduce manual operations involved in handling product availability and sales.",

    solution:
      "Developed a full-stack PERN e-commerce platform using React.js, Node.js, Express.js, and PostgreSQL. The system includes a customer-facing shopping interface, session-based cart management, secure admin authentication, product and category management, order tracking, image management, email notifications, and a role-based administration system.",

    liveUrl:
      "https://e-commerce-sys-frontend-pern-production.up.railway.app/",

    features: [
      {
        icon: InventoryIcon,
        title: "Product & Inventory Management",
        description:
          "Admin users can manage products, categories, attributes, offers, and stock information through a dedicated dashboard with backend validation.",
      },
      {
        icon: ShieldIcon,
        title: "Secure Authentication System",
        description:
          "Implemented JWT-based admin authentication with bcrypt password hashing, Joi request validation, rate limiting, and protected API routes.",
      },
      {
        icon: AdminPanelSettingsIcon,
        title: "Role-Based Admin Dashboard",
        description:
          "A complete management interface with different permission levels including Super Admin, Admin, and Manager roles for controlling business operations.",
      },
      {
        icon: ShowChartIcon,
        title: "Order Processing Pipeline",
        description:
          "Built a complete order workflow with cart handling, unique tracking code generation, stock verification, and automated customer email notifications.",
      },
    ],

    metrics: [
      {
        value: "PERN",
        label: "FULL-STACK ARCHITECTURE",
        color: "text-white",
      },
      {
        value: "3",
        label: "ADMIN USER ROLES",
        color: "text-cyan-400",
      },
      {
        value: "10+",
        label: "BUSINESS MODULES",
        color: "text-emerald-400",
      },
      {
        value: "REST",
        label: "API ARCHITECTURE",
        color: "text-indigo-300",
      },
    ],
  },
  {
    id: "sri-lanka-travel",
    slug: "sri-lanka-travel",
    featured: true,
    category: "Web",
    country: "Sri Lanka",
    accentColor: "#16a34a", // green
    image: sri_lanka_travel,
    activeCase: true,

    // Card display
    headlineStat: "React",
    headlineLabel: "Frontend Website",
    title: "Sri Lanka Travel",
    description:
      "A modern and fully responsive travel agency website designed to showcase Sri Lanka's top destinations, tour packages, and travel services with an engaging user experience.",
    stats: [
      { value: "100%", label: "RESPONSIVE DESIGN" },
      { value: "Frontend", label: "REACT APPLICATION" },
    ],
    tags: ["React.js", "Tailwind CSS", "MUI Icons"],

    // Detail-page fields
    caseStudyNumber: "002",
    industry: "Travel & Tourism",
    timeline: "2 Months",
    buildLabel: "LATEST BUILD: v1.3.0-STABLE",
    problem:
      "The travel agency needed a visually appealing and responsive website to promote its tour packages, destinations, and services while providing visitors with a seamless browsing experience across desktop and mobile devices.",
    solution:
      "Developed a modern frontend application using React.js, Tailwind CSS, and Material UI Icons. The website includes an interactive landing page, featured destinations, tour package listings, service highlights, customer testimonials, contact section, and a clean, mobile-first interface optimized for performance and user engagement.",
    liveUrl: "https://travel-website-pink-pi.vercel.app/",
    features: [
      {
        icon: ExploreIcon,
        title: "Crossfade Hero Slider",
        description:
          "A Ken Burns-style zooming image slider showcases destinations with smooth crossfade transitions on the landing page.",
      },
      {
        icon: PhotoLibraryIcon,
        title: "Dense Destination Grid",
        description:
          "Uses grid-flow-row-dense for a visually rich, gap-free layout of Sri Lanka-specific destination cards.",
      },
      {
        icon: DevicesIcon,
        title: "Fluid Responsive Layout",
        description:
          "Built with clamp()-based fluid sizing and custom hooks like useScrollPosition and useIntersectionObserver for smooth breakpoint scaling.",
      },
      {
        icon: SpeedIcon,
        title: "Lightweight & Fast",
        description:
          "A minimal, dependency-light architecture with a custom useToast hook keeps the site fast without unnecessary complexity.",
      },
    ],
    metrics: [
      { value: "100%", label: "RESPONSIVE DESIGN", color: "text-white" },
      { value: "3", label: "CUSTOM HOOKS", color: "text-cyan-400" },
      { value: "0", label: "UI LIBRARIES USED", color: "text-emerald-400" },
      { value: "1", label: "PAGE LOAD, ZERO LAG", color: "text-indigo-300" },
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);
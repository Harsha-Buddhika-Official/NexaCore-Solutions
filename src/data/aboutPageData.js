import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShieldIcon from "@mui/icons-material/Shield";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export const heroContent = {
  badge: "CUSTOM SOFTWARE • WEB • CLOUD",
  titleLine1: "Technology Solutions Built For Real ",
  titleHighlight: "Business Growth.",
  // titleLine2: " Real Business Growth.",
  description:
    "NexaCore Solutions helps businesses build custom software, websites, e-commerce platforms, and cloud solutions that automate processes, improve efficiency, and create better digital experiences.",
};

export const genesis = {
  title: "Who We Are",
  paragraphs: [
    "NexaCore Solutions helps businesses turn ideas and challenges into practical technology solutions. We focus on building software that improves daily operations, reduces complexity, and creates measurable value instead of providing generic solutions.",

    "Our expertise includes custom software development, business websites, e-commerce platforms, cloud applications, and digital systems designed around each client's requirements. From initial planning to deployment and support, we build solutions that are secure, scalable, and ready for future growth.",
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
      "To help businesses improve efficiency and achieve their goals through reliable software, modern web applications, and technology solutions designed around real-world needs.",
    mono: false,
  },
  {
    id: "vision",
    icon: VisibilityIcon,
    iconColor: "text-emerald-400",
    title: "Our Vision",
    description:
      "To become a trusted technology partner for businesses by delivering practical, innovative, and high-quality software solutions that create long-term value.",
    mono: true,
  },
];

export const coreValues = {
  title: "Our Core Values",
  subtitle: "The principles that guide how we build and deliver solutions.",
  values: [
    {
      icon: ShieldIcon,
      iconColor: "text-slate-300",
      iconBg: "bg-base-700",
      title: "Client First",
      description:
        "We focus on understanding each client's goals, challenges, and requirements to create solutions that deliver real business value.",
    },
    {
      icon: LightbulbIcon,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10",
      title: "Purposeful Innovation",
      description:
        "We use modern technologies thoughtfully to solve problems, improve processes, and create meaningful digital experiences.",
    },
    {
      icon: WorkspacePremiumIcon,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      title: "Quality & Reliability",
      description:
        "We prioritize clean development practices, security, performance, and maintainable solutions that support long-term success.",
    },
  ],
};

export const philosophy = {
  title: "How We Work",
  items: [
    {
      number: "01",
      title: "Understand Your Needs",
      description:
        "We start by understanding your business goals, workflow, and challenges to identify the right technology approach.",
    },
    {
      number: "02",
      title: "Create The Right Solution",
      description:
        "We design and develop customized websites, applications, and software systems based on your specific business requirements.",
    },
    {
      number: "03",
      title: "Grow Together",
      description:
        "We continue supporting your technology after launch through improvements, maintenance, and future development.",
    },
  ],

  terminal: {
    filename: "nexacore-project.yaml",
    lines: [
      [
        {
          text: "company",
          className: "text-sky-400",
        },
        {
          text: ": NexaCore Solutions",
        },
      ],
      [
        {
          text: "services",
          className: "text-sky-400",
        },
        {
          text: ": Software, Web, Cloud",
        },
      ],
      [
        {
          text: "approach",
          className: "text-sky-400",
        },
        {
          text: ": Client Focused",
        },
      ],
      [
        {
          text: "security",
          className: "text-sky-400",
        },
        {
          text: ": Best Practices",
        },
      ],
      [
        {
          text: "delivery",
          className: "text-sky-400",
        },
        {
          text: ": Quality Driven",
        },
      ],
      [
        {
          text: "support",
          className: "text-sky-400",
        },
        {
          text: ": Continuous",
        },
      ],
      [
        {
          text: "// Building Technology That Matters",
          className: "text-emerald-400",
        },
      ],
    ],
  },
};

export const featuredProject = {
  title: "Featured Project",

  project: "E-Commerce Platform Development",

  description:
    "A complete e-commerce platform developed using the PERN stack. The system includes secure authentication, product management, inventory handling, shopping cart functionality, order processing, and an administrative dashboard designed for real business operations.",

  stack: [
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Docker",
  ],
};

export const lookingForward = {
  title: "Looking Ahead",

  cards: [
    {
      id: "business-automation",
      badge: "FUTURE DEVELOPMENT",
      badgeColor: "text-slate-400",
      title: "Smarter Business Automation",
      description:
        "We continue exploring AI-powered tools, automation, and intelligent systems to help businesses reduce manual work and improve decision-making.",
      underlineColor: "bg-indigo-400",
      cardBg: "bg-base-800/50",
    },
    {
      id: "long-term-growth",
      badge: "OUR COMMITMENT",
      badgeColor: "text-emerald-400",
      title: "Technology Partnership",
      description:
        "We believe successful projects continue beyond launch. Our goal is to support clients with improvements, maintenance, and scalable solutions as they grow.",
      underlineColor: "bg-emerald-400",
      cardBg: "bg-emerald-500/5",
    },
  ],
};

export const aboutCta = {
  title: "Ready To Build Your Digital Solution?",

  description:
    "Whether you need a professional website, custom software, e-commerce platform, or business automation system, NexaCore Solutions helps transform your ideas into practical technology solutions.",

  primaryCta: {
    label: "Start Your Project",
    href: "/contact",
  },

  secondaryCta: {
    label: "View Our Services",
    href: "/services",
  },
};